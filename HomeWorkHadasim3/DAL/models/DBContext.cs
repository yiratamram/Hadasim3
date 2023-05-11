using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace DAL.models
{
    public partial class DBContext : DbContext
    {
        public DBContext()
        {
        }

        public DBContext(DbContextOptions<DBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<Vaccination> Vaccinations { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=D:\\Programing\\HadasimProject\\HomeWorkHadasim3DB.mdf;Integrated Security=True;Connect Timeout=30");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<User>(entity =>
            {
                entity.HasKey(e => e.IdUser)
                    .HasName("PK__Users__B7C9263834E038FF");

                entity.Property(e => e.IdUser).ValueGeneratedNever();

                entity.Property(e => e.ImageProfile)
                   .HasMaxLength(1000)
                   .IsFixedLength(true);

                entity.Property(e => e.CityAdress)
                    .HasMaxLength(100)
                    .IsFixedLength(true);

                entity.Property(e => e.DateOfBirth).HasColumnType("date");

                entity.Property(e => e.FamilyName)
                    .HasMaxLength(100)
                    .IsFixedLength(true);

                entity.Property(e => e.MobilePhone)
                    .HasMaxLength(100)
                    .IsFixedLength(true);

                entity.Property(e => e.NumberAdress)
                    .HasMaxLength(30)
                    .IsFixedLength(true);

                entity.Property(e => e.Phone)
                    .HasMaxLength(100)
                    .IsFixedLength(true);

                entity.Property(e => e.PrivateName)
                    .HasMaxLength(100)
                    .IsFixedLength(true);

                entity.Property(e => e.StreetAdress)
                    .HasMaxLength(100)
                    .IsFixedLength(true);

                entity.Property(e => e.DateOfPositiveResult).HasColumnType("date");

                entity.Property(e => e.DateOfRecovery).HasColumnType("date");


            });

            modelBuilder.Entity<Vaccination>(entity =>
            {
                entity.HasKey(e => e.IdVaccination)
                    .HasName("PK__Vaccinat__2DFA2FC11B734A00");

                entity.Property(e => e.IdVaccination).ValueGeneratedNever();

                
                entity.Property(e => e.DateOfVaccination).HasColumnType("date");

                entity.Property(e => e.Manufacturer)
                    .HasMaxLength(30)
                    .IsFixedLength(true);

                entity.Property(e => e.NumVaccination)
                    .HasMaxLength(30)
                    .IsFixedLength(true);

                entity.HasOne(d => d.IdUserNavigation)
                    .WithMany(p => p.Vaccinations)
                    .HasForeignKey(d => d.IdUser)
                    .HasConstraintName("FK_Vaccinations");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
