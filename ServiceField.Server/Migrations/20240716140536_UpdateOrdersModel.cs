using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ServiceField.Server.Migrations
{
    /// <inheritdoc />
    public partial class UpdateOrdersModel : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ServiceOrder",
                columns: table => new
                {
                    IdOrder = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    OrderNumber = table.Column<int>(type: "int", nullable: false),
                    ServiceObject = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    IdCompany = table.Column<int>(type: "int", nullable: false),
                    CompanyName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    IdInstallation = table.Column<int>(type: "int", nullable: false),
                    InstallationName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    IdInitiator = table.Column<int>(type: "int", nullable: false),
                    InitiatorName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    InitiatorContact = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ServiceType = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Invoicing = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Message = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Address = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ContactPerson = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Location = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ServiceOrder", x => x.IdOrder);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ServiceOrder");
        }
    }
}
