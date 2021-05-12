using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using CustomerService.DataAccess;
using CustomerService.Domain;

namespace CustomerService.Business
{
    public class CustomerHandler : ICustomerHandler

    {
        public readonly ICustomerRepository _customerRepo;
        public CustomerHandler(ICustomerRepository customerRepo)
        {
            _customerRepo = customerRepo;
        }
        public async Task<PagingResult<Customer>> GetCustomers(int skip, int take)
        {

            var customers = await _customerRepo.GetCustomersPageAsync(skip, take);
            return customers;
        }
    }

    public interface ICustomerHandler
    {
        Task<PagingResult<Customer>> GetCustomers(int skip, int take); 
    }
}
