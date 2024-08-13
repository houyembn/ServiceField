using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ServiceField.Server.Migrations
{
    /// <inheritdoc />
    public partial class MigrationName : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "phone",
                table: "Company",
                newName: "Phone");

            migrationBuilder.RenameColumn(
                name: "webstite",
                table: "Company",
                newName: "website");

            migrationBuilder.RenameColumn(
                name: "ManagementTteam",
                table: "Company",
                newName: "sourceType");

            migrationBuilder.AlterColumn<int>(
                name: "Phone",
                table: "Company",
                type: "int",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(15)");

            migrationBuilder.AddColumn<string>(
                name: "ParentCopmany",
                table: "Company",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "ResponsableUser",
                table: "Company",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Subsidiary",
                table: "Company",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ParentCopmany",
                table: "Company");

            migrationBuilder.DropColumn(
                name: "ResponsableUser",
                table: "Company");

            migrationBuilder.DropColumn(
                name: "Subsidiary",
                table: "Company");

            migrationBuilder.RenameColumn(
                name: "Phone",
                table: "Company",
                newName: "phone");

            migrationBuilder.RenameColumn(
                name: "website",
                table: "Company",
                newName: "webstite");

            migrationBuilder.RenameColumn(
                name: "sourceType",
                table: "Company",
                newName: "ManagementTteam");

            migrationBuilder.AlterColumn<string>(
                name: "phone",
                table: "Company",
                type: "nvarchar(15)",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");
        }
    }
}
