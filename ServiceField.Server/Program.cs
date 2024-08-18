using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using ServiceField.Server.Data;
using ServiceField.Server.Interfaces;
using System.Globalization;

var builder = WebApplication.CreateBuilder(args);
var provider = builder.Services.BuildServiceProvider();
var configuration = provider.GetRequiredService<IConfiguration>();



builder.Services.AddCors(options =>
{
    var frontendURL = configuration.GetValue<string>("frontend_url");

    options.AddDefaultPolicy(builder =>
    {
        builder.WithOrigins(frontendURL).AllowAnyMethod().AllowAnyHeader();
    });
});

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<ApplicationDBContext>(options =>
{

    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
});


var provider=builder.Services.BuildServiceProvider();
var configuration=provider.GetService<IConfiguration>();

builder.Services.AddCors(options =>

{
    var frontendURL = configuration.GetValue<string>("frontend_url");
    // Add CORS policy

    options.AddDefaultPolicy(builder=>
    {
        builder.WithOrigins(frontendURL)
        .AllowAnyMethod()
        .AllowAnyHeader();
    
    });


builder.Services.AddDbContext<ApplicationDbContext>(options =>
{

    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
});

builder.Services.AddScoped<IServiceOrderHelper, ServiceOrderHelper>();

var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors();

app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.UseCors();

app.Run();


