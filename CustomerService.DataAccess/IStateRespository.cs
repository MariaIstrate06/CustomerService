using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CustomerService.Domain;

namespace CustomerService.DataAccess
{
    public interface IStatesRepository
    {
        Task<List<State>> GetStatesAsync();
    }
}
