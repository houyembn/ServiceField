﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using ServiceField.Server.Data;

#nullable disable

namespace ServiceField.Server.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    partial class ApplicationDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.6")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("ServiceField.Server.Models.Company", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int?>("MasterDataCompanyId")
                        .HasColumnType("int");

                    b.Property<string>("ParentCopmany")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Phone")
                        .HasColumnType("int");

                    b.Property<string>("ResponsableUser")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Subsidiary")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("position")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("sourceType")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("type")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("website")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("MasterDataCompanyId");

                    b.ToTable("Company");
                });

            modelBuilder.Entity("ServiceField.Server.Models.Installation", b =>
                {
                    b.Property<int>("InstallationNumber")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("InstallationNumber"));

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("InstallationLocation")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("InstallationName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("InstallationStatus")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("InstallationType")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("ManufactureDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("Owner")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("InstallationNumber");

                    b.ToTable("Installation");
                });

            modelBuilder.Entity("ServiceField.Server.Models.MasterDataCompany", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("ParentCopmany")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Phone")
                        .HasColumnType("int");

                    b.Property<string>("ResponsableUser")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Subsidiary")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("position")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("sourceType")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("type")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("website")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("MasterDataCompany");
                });

            modelBuilder.Entity("ServiceField.Server.Models.ServiceField.Invoicing", b =>
                {
                    b.Property<int>("InvoicingId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("InvoicingId"));

                    b.Property<string>("InvoicingType")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PaymentMethod")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("RecurringPeriod")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("TermsAndConditions")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("InvoicingId");

                    b.ToTable("Invoicing");
                });

            modelBuilder.Entity("ServiceField.Server.Models.ServiceField.LuServiceCaseCategory", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Type")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("LuServiceCaseCategories");
                });

            modelBuilder.Entity("ServiceField.Server.Models.ServiceField.LuServiceObject", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Type")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("LuServiceObjects");
                });

            modelBuilder.Entity("ServiceField.Server.Models.ServiceField.MDCheckList", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Type")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("MDCheckLists");
                });

            modelBuilder.Entity("ServiceField.Server.Models.ServiceField.MDElement", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Type")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("MDElements");
                });

            modelBuilder.Entity("ServiceField.Server.Models.ServiceField.MDSkills", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Type")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("MDSkills");
                });

            modelBuilder.Entity("ServiceField.Server.Models.ServiceField.Server.Models.Users", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Address")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Age")
                        .HasColumnType("int");

                    b.Property<int>("CIN")
                        .HasColumnType("int");

                    b.Property<string>("Diploma")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Field")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Grade")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("PhoneNumber")
                        .HasColumnType("int");

                    b.Property<string>("Skills")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("role")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("ServiceField.Server.Models.ServiceField.ServiceCase", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("AffectedCompany")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("AffectedInstallation")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("CategoryFK")
                        .HasColumnType("int");

                    b.Property<int>("CheckListFK")
                        .HasColumnType("int");

                    b.Property<string>("ContactPerson")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("CreationDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("Creator")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("ElementFK")
                        .HasColumnType("int");

                    b.Property<string>("Message")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("ObjectFK")
                        .HasColumnType("int");

                    b.Property<string>("OriginatingSOrder")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Priority")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("ProductSerialNumber")
                        .HasColumnType("int");

                    b.Property<string>("ResponsableUser")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ServiceCaseStatus")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("SkillsFK")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("CategoryFK");

                    b.HasIndex("CheckListFK");

                    b.HasIndex("ElementFK");

                    b.HasIndex("ObjectFK");

                    b.HasIndex("SkillsFK");

                    b.ToTable("ServiceCase");
                });

            modelBuilder.Entity("ServiceField.Server.Models.ServiceField.ServiceObject", b =>
                {
                    b.Property<int>("ServiceObjectId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ServiceObjectId"));

                    b.Property<string>("ServiceObjectDescription")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ServiceObjectName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ServiceObjectId");

                    b.ToTable("ServiceObject");
                });

            modelBuilder.Entity("ServiceField.Server.Models.ServiceField.ServiceOrder", b =>
                {
                    b.Property<int>("IdOrder")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("IdOrder"));

                    b.Property<string>("Address")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("CompanyName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ContactPerson")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("IdCompany")
                        .HasColumnType("int");

                    b.Property<int>("IdInitiator")
                        .HasColumnType("int");

                    b.Property<int>("IdInstallation")
                        .HasColumnType("int");

                    b.Property<string>("InitiatorContact")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("InitiatorName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("InstallationName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("InvoicingId")
                        .HasColumnType("int");

                    b.Property<string>("Location")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Message")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("OrderNumber")
                        .HasColumnType("int");

                    b.Property<int>("ServiceObjectId")
                        .HasColumnType("int");

                    b.Property<int>("ServiceTypeId")
                        .HasColumnType("int");

                    b.HasKey("IdOrder");

                    b.HasIndex("IdCompany");

                    b.HasIndex("IdInitiator");

                    b.HasIndex("IdInstallation");

                    b.HasIndex("InvoicingId");

                    b.HasIndex("ServiceObjectId");

                    b.HasIndex("ServiceTypeId");

                    b.ToTable("ServiceOrder");
                });

            modelBuilder.Entity("ServiceField.Server.Models.ServiceField.ServiceType", b =>
                {
                    b.Property<int>("ServiceTypeId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ServiceTypeId"));

                    b.Property<string>("Category")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("IsActive")
                        .HasColumnType("bit");

                    b.Property<string>("ServiceTypeName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ServiceTypeId");

                    b.ToTable("ServiceType");
                });

            modelBuilder.Entity("ServiceField.Server.Models.Company", b =>
                {
                    b.HasOne("ServiceField.Server.Models.MasterDataCompany", null)
                        .WithMany("Company")
                        .HasForeignKey("MasterDataCompanyId");
                });

            modelBuilder.Entity("ServiceField.Server.Models.ServiceField.ServiceCase", b =>
                {
                    b.HasOne("ServiceField.Server.Models.ServiceField.LuServiceCaseCategory", "LuServiceCaseCategory")
                        .WithMany("ServiceCase")
                        .HasForeignKey("CategoryFK")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("ServiceField.Server.Models.ServiceField.MDCheckList", "MDCheckList")
                        .WithMany("ServiceCase")
                        .HasForeignKey("CheckListFK")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("ServiceField.Server.Models.ServiceField.MDElement", "MDElement")
                        .WithMany("ServiceCase")
                        .HasForeignKey("ElementFK")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("ServiceField.Server.Models.ServiceField.LuServiceObject", "LuServiceObject")
                        .WithMany("ServiceCase")
                        .HasForeignKey("ObjectFK")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("ServiceField.Server.Models.ServiceField.MDSkills", "MDSkills")
                        .WithMany("ServiceCase")
                        .HasForeignKey("SkillsFK")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("LuServiceCaseCategory");

                    b.Navigation("LuServiceObject");

                    b.Navigation("MDCheckList");

                    b.Navigation("MDElement");

                    b.Navigation("MDSkills");
                });

            modelBuilder.Entity("ServiceField.Server.Models.ServiceField.ServiceOrder", b =>
                {
                    b.HasOne("ServiceField.Server.Models.Company", "Company")
                        .WithMany()
                        .HasForeignKey("IdCompany")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("ServiceField.Server.Models.ServiceField.Server.Models.Users", "Initiator")
                        .WithMany()
                        .HasForeignKey("IdInitiator")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("ServiceField.Server.Models.Installation", "Installation")
                        .WithMany()
                        .HasForeignKey("IdInstallation")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("ServiceField.Server.Models.ServiceField.Invoicing", "Invoicing")
                        .WithMany()
                        .HasForeignKey("InvoicingId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("ServiceField.Server.Models.ServiceField.ServiceObject", "ServiceObject")
                        .WithMany()
                        .HasForeignKey("ServiceObjectId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("ServiceField.Server.Models.ServiceField.ServiceType", "ServiceType")
                        .WithMany()
                        .HasForeignKey("ServiceTypeId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Company");

                    b.Navigation("Initiator");

                    b.Navigation("Installation");

                    b.Navigation("Invoicing");

                    b.Navigation("ServiceObject");

                    b.Navigation("ServiceType");
                });

            modelBuilder.Entity("ServiceField.Server.Models.MasterDataCompany", b =>
                {
                    b.Navigation("Company");
                });

            modelBuilder.Entity("ServiceField.Server.Models.ServiceField.LuServiceCaseCategory", b =>
                {
                    b.Navigation("ServiceCase");
                });

            modelBuilder.Entity("ServiceField.Server.Models.ServiceField.LuServiceObject", b =>
                {
                    b.Navigation("ServiceCase");
                });

            modelBuilder.Entity("ServiceField.Server.Models.ServiceField.MDCheckList", b =>
                {
                    b.Navigation("ServiceCase");
                });

            modelBuilder.Entity("ServiceField.Server.Models.ServiceField.MDElement", b =>
                {
                    b.Navigation("ServiceCase");
                });

            modelBuilder.Entity("ServiceField.Server.Models.ServiceField.MDSkills", b =>
                {
                    b.Navigation("ServiceCase");
                });
#pragma warning restore 612, 618
        }
    }
}
