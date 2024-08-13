using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ServiceField.Server.Migrations
{
    /// <inheritdoc />
    public partial class AddUserForeign : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_ServiceOrder_IdInitiator",
                table: "ServiceOrder",
                column: "IdInitiator");

            migrationBuilder.AddForeignKey(
                name: "FK_ServiceOrder_Users_IdInitiator",
                table: "ServiceOrder",
                column: "IdInitiator",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ServiceOrder_Users_IdInitiator",
                table: "ServiceOrder");

            migrationBuilder.DropIndex(
                name: "IX_ServiceOrder_IdInitiator",
                table: "ServiceOrder");
        }
    }
}
