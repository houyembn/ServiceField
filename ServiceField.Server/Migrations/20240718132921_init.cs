using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ServiceField.Server.Migrations
{
    /// <inheritdoc />
    public partial class init : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "LuServiceCaseCategories",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Type = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LuServiceCaseCategories", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "LuServiceObjects",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Type = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LuServiceObjects", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "MDCheckLists",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Type = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MDCheckLists", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "MDElements",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Type = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MDElements", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "MDSkills",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Type = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MDSkills", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ServiceCases",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ProductSerialNumber = table.Column<int>(type: "int", nullable: false),
                    ServiceObjectId = table.Column<int>(type: "int", nullable: false),
                    AffectedCompany = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ContactPerson = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    AffectedInstallation = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    SkillsId = table.Column<int>(type: "int", nullable: false),
                    OriginatingSOrder = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CheckListId = table.Column<int>(type: "int", nullable: false),
                    ElementId = table.Column<int>(type: "int", nullable: false),
                    ServiceCaseStatus = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ServiceCaseCategoryId = table.Column<int>(type: "int", nullable: false),
                    ResponsableUser = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Priority = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Message = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Creator = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CreationDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ServiceCases", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ServiceCases_LuServiceCaseCategories_ServiceCaseCategoryId",
                        column: x => x.ServiceCaseCategoryId,
                        principalTable: "LuServiceCaseCategories",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ServiceCases_LuServiceObjects_ServiceObjectId",
                        column: x => x.ServiceObjectId,
                        principalTable: "LuServiceObjects",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ServiceCases_MDCheckLists_CheckListId",
                        column: x => x.CheckListId,
                        principalTable: "MDCheckLists",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ServiceCases_MDElements_ElementId",
                        column: x => x.ElementId,
                        principalTable: "MDElements",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ServiceCases_MDSkills_SkillsId",
                        column: x => x.SkillsId,
                        principalTable: "MDSkills",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ServiceCases_CheckListId",
                table: "ServiceCases",
                column: "CheckListId");

            migrationBuilder.CreateIndex(
                name: "IX_ServiceCases_ElementId",
                table: "ServiceCases",
                column: "ElementId");

            migrationBuilder.CreateIndex(
                name: "IX_ServiceCases_ServiceCaseCategoryId",
                table: "ServiceCases",
                column: "ServiceCaseCategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_ServiceCases_ServiceObjectId",
                table: "ServiceCases",
                column: "ServiceObjectId");

            migrationBuilder.CreateIndex(
                name: "IX_ServiceCases_SkillsId",
                table: "ServiceCases",
                column: "SkillsId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ServiceCases");

            migrationBuilder.DropTable(
                name: "LuServiceCaseCategories");

            migrationBuilder.DropTable(
                name: "LuServiceObjects");

            migrationBuilder.DropTable(
                name: "MDCheckLists");

            migrationBuilder.DropTable(
                name: "MDElements");

            migrationBuilder.DropTable(
                name: "MDSkills");
        }
    }
}
