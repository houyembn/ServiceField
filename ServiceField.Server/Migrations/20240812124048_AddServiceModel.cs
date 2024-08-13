using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ServiceField.Server.Migrations
{
    /// <inheritdoc />
    public partial class AddServiceModel : Migration
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
                name: "ServiceCase",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ProductSerialNumber = table.Column<int>(type: "int", nullable: false),
                    AffectedCompany = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ContactPerson = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    AffectedInstallation = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    OriginatingSOrder = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ServiceCaseStatus = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ResponsableUser = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Priority = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Message = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Creator = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CreationDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    ObjectFK = table.Column<int>(type: "int", nullable: false),
                    SkillsFK = table.Column<int>(type: "int", nullable: false),
                    CheckListFK = table.Column<int>(type: "int", nullable: false),
                    ElementFK = table.Column<int>(type: "int", nullable: false),
                    CategoryFK = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ServiceCase", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ServiceCase_LuServiceCaseCategories_CategoryFK",
                        column: x => x.CategoryFK,
                        principalTable: "LuServiceCaseCategories",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ServiceCase_LuServiceObjects_ObjectFK",
                        column: x => x.ObjectFK,
                        principalTable: "LuServiceObjects",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ServiceCase_MDCheckLists_CheckListFK",
                        column: x => x.CheckListFK,
                        principalTable: "MDCheckLists",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ServiceCase_MDElements_ElementFK",
                        column: x => x.ElementFK,
                        principalTable: "MDElements",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ServiceCase_MDSkills_SkillsFK",
                        column: x => x.SkillsFK,
                        principalTable: "MDSkills",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ServiceCase_CategoryFK",
                table: "ServiceCase",
                column: "CategoryFK");

            migrationBuilder.CreateIndex(
                name: "IX_ServiceCase_CheckListFK",
                table: "ServiceCase",
                column: "CheckListFK");

            migrationBuilder.CreateIndex(
                name: "IX_ServiceCase_ElementFK",
                table: "ServiceCase",
                column: "ElementFK");

            migrationBuilder.CreateIndex(
                name: "IX_ServiceCase_ObjectFK",
                table: "ServiceCase",
                column: "ObjectFK");

            migrationBuilder.CreateIndex(
                name: "IX_ServiceCase_SkillsFK",
                table: "ServiceCase",
                column: "SkillsFK");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ServiceCase");

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
