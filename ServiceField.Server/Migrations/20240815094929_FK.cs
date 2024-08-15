using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ServiceField.Server.Migrations
{
    /// <inheritdoc />
    public partial class FK : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CompanyId",
                table: "ServiceCases",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_ServiceCases_CompanyId",
                table: "ServiceCases",
                column: "CompanyId");

            migrationBuilder.AddForeignKey(
                name: "FK_ServiceCases_Company_CompanyId",
                table: "ServiceCases",
                column: "CompanyId",
                principalTable: "Company",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ServiceCases_Company_CompanyId",
                table: "ServiceCases");

            migrationBuilder.DropIndex(
                name: "IX_ServiceCases_CompanyId",
                table: "ServiceCases");

            migrationBuilder.DropColumn(
                name: "CompanyId",
                table: "ServiceCases");
        }
    }
}
