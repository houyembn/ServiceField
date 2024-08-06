using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ServiceField.Server.Migrations
{
    /// <inheritdoc />
    public partial class AddForeignModel : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ServiceOrders");

            migrationBuilder.DropColumn(
                name: "Invoicing",
                table: "ServiceOrder");

            migrationBuilder.DropColumn(
                name: "ServiceObject",
                table: "ServiceOrder");

            migrationBuilder.DropColumn(
                name: "ServiceType",
                table: "ServiceOrder");

            migrationBuilder.AddColumn<int>(
                name: "InvoicingId",
                table: "ServiceOrder",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "ServiceObjectId",
                table: "ServiceOrder",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "ServiceTypeId",
                table: "ServiceOrder",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "Invoicing",
                columns: table => new
                {
                    InvoicingId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    InvoicingType = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TermsAndConditions = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PaymentMethod = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    RecurringPeriod = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Invoicing", x => x.InvoicingId);
                });

            migrationBuilder.CreateTable(
                name: "ServiceObject",
                columns: table => new
                {
                    ServiceObjectId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ServiceObjectName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ServiceObjectDescription = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ServiceObject", x => x.ServiceObjectId);
                });

            migrationBuilder.CreateTable(
                name: "ServiceType",
                columns: table => new
                {
                    ServiceTypeId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ServiceTypeName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Category = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    IsActive = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ServiceType", x => x.ServiceTypeId);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ServiceOrder_InvoicingId",
                table: "ServiceOrder",
                column: "InvoicingId");

            migrationBuilder.CreateIndex(
                name: "IX_ServiceOrder_ServiceObjectId",
                table: "ServiceOrder",
                column: "ServiceObjectId");

            migrationBuilder.CreateIndex(
                name: "IX_ServiceOrder_ServiceTypeId",
                table: "ServiceOrder",
                column: "ServiceTypeId");

            migrationBuilder.AddForeignKey(
                name: "FK_ServiceOrder_Invoicing_InvoicingId",
                table: "ServiceOrder",
                column: "InvoicingId",
                principalTable: "Invoicing",
                principalColumn: "InvoicingId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ServiceOrder_ServiceObject_ServiceObjectId",
                table: "ServiceOrder",
                column: "ServiceObjectId",
                principalTable: "ServiceObject",
                principalColumn: "ServiceObjectId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ServiceOrder_ServiceType_ServiceTypeId",
                table: "ServiceOrder",
                column: "ServiceTypeId",
                principalTable: "ServiceType",
                principalColumn: "ServiceTypeId",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ServiceOrder_Invoicing_InvoicingId",
                table: "ServiceOrder");

            migrationBuilder.DropForeignKey(
                name: "FK_ServiceOrder_ServiceObject_ServiceObjectId",
                table: "ServiceOrder");

            migrationBuilder.DropForeignKey(
                name: "FK_ServiceOrder_ServiceType_ServiceTypeId",
                table: "ServiceOrder");

            migrationBuilder.DropTable(
                name: "Invoicing");

            migrationBuilder.DropTable(
                name: "ServiceObject");

            migrationBuilder.DropTable(
                name: "ServiceType");

            migrationBuilder.DropIndex(
                name: "IX_ServiceOrder_InvoicingId",
                table: "ServiceOrder");

            migrationBuilder.DropIndex(
                name: "IX_ServiceOrder_ServiceObjectId",
                table: "ServiceOrder");

            migrationBuilder.DropIndex(
                name: "IX_ServiceOrder_ServiceTypeId",
                table: "ServiceOrder");

            migrationBuilder.DropColumn(
                name: "InvoicingId",
                table: "ServiceOrder");

            migrationBuilder.DropColumn(
                name: "ServiceObjectId",
                table: "ServiceOrder");

            migrationBuilder.DropColumn(
                name: "ServiceTypeId",
                table: "ServiceOrder");

            migrationBuilder.AddColumn<string>(
                name: "Invoicing",
                table: "ServiceOrder",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "ServiceObject",
                table: "ServiceOrder",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "ServiceType",
                table: "ServiceOrder",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.CreateTable(
                name: "ServiceOrders",
                columns: table => new
                {
                    IdCaseOrder = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ClosedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CompanyName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CompanySatisfaction = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    IdCompany = table.Column<int>(type: "int", nullable: false),
                    IdTechnician = table.Column<int>(type: "int", nullable: false),
                    OpenedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    ServiceType = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Status = table.Column<int>(type: "int", nullable: false),
                    Summary = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TechnicianName = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ServiceOrders", x => x.IdCaseOrder);
                });
        }
    }
}
