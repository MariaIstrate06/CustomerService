using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CustomerService.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace CustomerService.DataAccess
{
    public class OrderRepository :IOrderRepository
    {
        private readonly CustomersDbContext _Context;
        private readonly ILogger _Logger;

        public OrderRepository(CustomersDbContext context, ILoggerFactory loggerFactory)
        {
            _Context = context;
            _Logger = loggerFactory.CreateLogger("OrderRepository");
        }

        public async Task<List<Order>> GetOrderAsync()
        {
            return await _Context.Orders.OrderBy(o => o.Product)
                                 .Include(o =>o.Id ).ToListAsync();
        }
        
        public async Task<PagingResult<Order>> GetOrderPageAsync(int skip, int take)
        {
            var totalRecords = await _Context.Orders.CountAsync();
            var orders = await _Context.Orders
                                 .OrderBy(o => o.Product)
                                 .Skip(skip)
                                 .Take(take)
                                 .ToListAsync();
            return new PagingResult<Order>(orders, totalRecords);
        }

        public async Task<Order> GetOrderAsync(int id)
        {
            return await _Context.Orders
                .SingleOrDefaultAsync(o => o.Id == id);
        }

        public async Task<Order> InsertOrderAsync(Order order)
        {
            _Context.Add(order);
            try
            {
                await _Context.SaveChangesAsync();
            }
            catch (System.Exception exp)
            {
                _Logger.LogError($"Error in {nameof(InsertOrderAsync)}: " + exp.Message);
            }

            return order;
        }

        public async Task<bool> UpdateOrderAsync(Order order)
        {
            _Context.Orders.Attach(order);
            try
            {
                return (await _Context.SaveChangesAsync() > 0 ? true : false);
            }
            catch (Exception exp)
            {
                _Logger.LogError($"Error in {nameof(UpdateOrderAsync)}: " + exp.Message);
            }
            return false;
        }

        public async Task<bool> DeleteOrderAsync(int id)
        {
            //Extra hop to the database but keeps it nice and simple for this demo
            //Including orders since there's a foreign-key constraint and we need
            var order = await _Context.Orders
                .SingleOrDefaultAsync(o => o.Id == id);
            _Context.Remove(order);
            try
            {
                return (await _Context.SaveChangesAsync() > 0 ? true : false);
            }
            catch (System.Exception exp)
            {
                _Logger.LogError($"Error in {nameof(DeleteOrderAsync)}: " + exp.Message);
            }
            return false;
        }

        
    }
}
