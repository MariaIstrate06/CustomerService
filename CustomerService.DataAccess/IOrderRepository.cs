using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using CustomerService.Domain;

namespace CustomerService.DataAccess
{
    public interface IOrderRepository
    {

        Task<List<Order>> GetOrderAsync();
        Task<PagingResult<Order>> GetOrderPageAsync(int skip, int take);
        Task<Order> GetOrderAsync(int id);

        Task<Order> InsertOrderAsync(Order order);
        Task<bool> UpdateOrderAsync(Order order);
        Task<bool> DeleteOrderAsync(int id);
    }
}
