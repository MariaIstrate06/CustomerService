using CustomerService.Domain;
using Microsoft.EntityFrameworkCore;

namespace CustomerService.DataAccess
{
    public class CustomersDbContext : DbContext
    {
        public DbSet<Customer> Customers { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<State> States { get; set; }

        public CustomersDbContext(DbContextOptions<CustomersDbContext> options) : base(options) { }
    }
}