using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ServiceField.Server.Migrations
{
    /// <inheritdoc />
    public partial class integ : Migration
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
                    InstallationName = table.Column<string>(type: "nvarchar(max)", nullable: false),
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

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FirstName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LastName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CIN = table.Column<int>(type: "int", nullable: false),
                    Age = table.Column<int>(type: "int", nullable: false),
                    Address = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PhoneNumber = table.Column<int>(type: "int", nullable: false),
                    Diploma = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Field = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Skills = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Grade = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    role = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
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

            migrationBuilder.CreateTable(
                name: "ServiceOrder",
                columns: table => new
                {
                    IdOrder = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    OrderNumber = table.Column<int>(type: "int", nullable: false),
                    ServiceObjectId = table.Column<int>(type: "int", nullable: false),
                    IdCompany = table.Column<int>(type: "int", nullable: false),
                    CompanyName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    IdInstallation = table.Column<int>(type: "int", nullable: false),
                    InstallationName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    IdInitiator = table.Column<int>(type: "int", nullable: false),
                    InitiatorName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    InitiatorContact = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ServiceTypeId = table.Column<int>(type: "int", nullable: false),
                    InvoicingId = table.Column<int>(type: "int", nullable: false),
                    Message = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Address = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ContactPerson = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Location = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ServiceOrder", x => x.IdOrder);
                    table.ForeignKey(
                        name: "FK_ServiceOrder_Company_IdCompany",
                        column: x => x.IdCompany,
                        principalTable: "Company",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ServiceOrder_Installation_IdInstallation",
                        column: x => x.IdInstallation,
                        principalTable: "Installation",
                        principalColumn: "InstallationNumber",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ServiceOrder_Invoicing_InvoicingId",
                        column: x => x.InvoicingId,
                        principalTable: "Invoicing",
                        principalColumn: "InvoicingId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ServiceOrder_ServiceObject_ServiceObjectId",
                        column: x => x.ServiceObjectId,
                        principalTable: "ServiceObject",
                        principalColumn: "ServiceObjectId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ServiceOrder_ServiceType_ServiceTypeId",
                        column: x => x.ServiceTypeId,
                        principalTable: "ServiceType",
                        principalColumn: "ServiceTypeId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ServiceOrder_Users_IdInitiator",
                        column: x => x.IdInitiator,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Company_MasterDataCompanyId",
                table: "Company",
                column: "MasterDataCompanyId");

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

            migrationBuilder.CreateIndex(
                name: "IX_ServiceOrder_IdCompany",
                table: "ServiceOrder",
                column: "IdCompany");

            migrationBuilder.CreateIndex(
                name: "IX_ServiceOrder_IdInitiator",
                table: "ServiceOrder",
                column: "IdInitiator");

            migrationBuilder.CreateIndex(
                name: "IX_ServiceOrder_IdInstallation",
                table: "ServiceOrder",
                column: "IdInstallation");

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
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ServiceCase");

            migrationBuilder.DropTable(
                name: "ServiceOrder");

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

            migrationBuilder.DropTable(
                name: "Company");

            migrationBuilder.DropTable(
                name: "Installation");

            migrationBuilder.DropTable(
                name: "Invoicing");

            migrationBuilder.DropTable(
                name: "ServiceObject");

            migrationBuilder.DropTable(
                name: "ServiceType");

            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropTable(
                name: "MasterDataCompany");
        }
    }
}
