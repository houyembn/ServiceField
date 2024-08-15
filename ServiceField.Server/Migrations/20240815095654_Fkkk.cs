using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ServiceField.Server.Migrations
{
    /// <inheritdoc />
    public partial class Fkkk : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
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

            migrationBuilder.AlterColumn<int>(
                name: "AffectedCompany",
                table: "ServiceCases",
                type: "int",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.CreateIndex(
                name: "IX_ServiceCases_AffectedCompany",
                table: "ServiceCases",
                column: "AffectedCompany");

            migrationBuilder.AddForeignKey(
                name: "FK_ServiceCases_Company_AffectedCompany",
                table: "ServiceCases",
                column: "AffectedCompany",
                principalTable: "Company",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ServiceCases_Company_AffectedCompany",
                table: "ServiceCases");

            migrationBuilder.DropIndex(
                name: "IX_ServiceCases_AffectedCompany",
                table: "ServiceCases");

            migrationBuilder.AlterColumn<string>(
                name: "AffectedCompany",
                table: "ServiceCases",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");

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
    }
}
