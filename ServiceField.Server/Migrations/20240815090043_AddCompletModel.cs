using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ServiceField.Server.Migrations
{
    /// <inheritdoc />
    public partial class AddCompletModel : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Installation",
                columns: table => new
                {
                    InstallationNumber = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    InstallationType = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Owner = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    InstallationLocation = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ManufactureDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    InstallationStatus = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Installation", x => x.InstallationNumber);
                });

            migrationBuilder.CreateTable(
                name: "MasterDataCompany",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    type = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    website = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    position = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ResponsableUser = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Phone = table.Column<int>(type: "int", nullable: false),
                    sourceType = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ParentCopmany = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Subsidiary = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MasterDataCompany", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Company",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    type = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    website = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    position = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ResponsableUser = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Phone = table.Column<int>(type: "int", nullable: false),
                    sourceType = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ParentCopmany = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Subsidiary = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MasterDataCompanyId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Company", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Company_MasterDataCompany_MasterDataCompanyId",
                        column: x => x.MasterDataCompanyId,
                        principalTable: "MasterDataCompany",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_ServiceOrder_IdCompany",
                table: "ServiceOrder",
                column: "IdCompany");

            migrationBuilder.CreateIndex(
                name: "IX_ServiceOrder_IdInstallation",
                table: "ServiceOrder",
                column: "IdInstallation");

            migrationBuilder.CreateIndex(
                name: "IX_Company_MasterDataCompanyId",
                table: "Company",
                column: "MasterDataCompanyId");

            migrationBuilder.AddForeignKey(
                name: "FK_ServiceOrder_Company_IdCompany",
                table: "ServiceOrder",
                column: "IdCompany",
                principalTable: "Company",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ServiceOrder_Installation_IdInstallation",
                table: "ServiceOrder",
                column: "IdInstallation",
                principalTable: "Installation",
                principalColumn: "InstallationNumber",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ServiceOrder_Company_IdCompany",
                table: "ServiceOrder");

            migrationBuilder.DropForeignKey(
                name: "FK_ServiceOrder_Installation_IdInstallation",
                table: "ServiceOrder");

            migrationBuilder.DropTable(
                name: "Company");

            migrationBuilder.DropTable(
                name: "Installation");

            migrationBuilder.DropTable(
                name: "MasterDataCompany");

            migrationBuilder.DropIndex(
                name: "IX_ServiceOrder_IdCompany",
                table: "ServiceOrder");

            migrationBuilder.DropIndex(
                name: "IX_ServiceOrder_IdInstallation",
                table: "ServiceOrder");
        }
    }
}
