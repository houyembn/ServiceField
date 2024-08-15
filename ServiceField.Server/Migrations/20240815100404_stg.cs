using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ServiceField.Server.Migrations
{
    /// <inheritdoc />
    public partial class stg : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
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
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
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
    }
}
