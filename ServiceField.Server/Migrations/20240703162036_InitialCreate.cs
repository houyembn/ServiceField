using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ServiceField.Server.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ServiceCases",
                columns: table => new
                {
                    IdCase = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DateTimeOfCase = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DescriptionOfCase = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    HowItIsSolved = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    IdClient = table.Column<int>(type: "int", nullable: false),
                    ClientName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Address = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PhoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ServiceCases", x => x.IdCase);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ServiceCases");
        }
    }
}
