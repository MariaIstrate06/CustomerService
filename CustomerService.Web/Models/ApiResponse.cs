using CustomerService.Domain;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace CustomerService.Web.Models
{
    public class ApiResponse
    {
        public bool Status { get; set; }
        public Customer Customer { get; set; }
        public State State { get; set; }
        public Order Order { get; set; }
        public ModelStateDictionary ModelState { get; set; }
    }
}
