﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using ServiceField.Server.Data;

#nullable disable

namespace ServiceField.Server.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    partial class ApplicationDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.6")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("ServiceField.Server.Models.ServiceField.ServiceCases", b =>
                {
                    b.Property<int>("IdCase")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("IdCase"));

                    b.Property<string>("Address")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ClientName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("DateTimeOfCase")
                        .HasColumnType("datetime2");

                    b.Property<string>("DescriptionOfCase")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("HowItIsSolved")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("IdClient")
                        .HasColumnType("int");

                    b.Property<string>("PhoneNumber")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("IdCase");

                    b.ToTable("ServiceCases");
                });
#pragma warning restore 612, 618
        }
    }
}
