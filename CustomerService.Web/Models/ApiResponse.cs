using CustomerService.Domain;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace CustomerService.Web.Models
{
    public class ApiResponse
    {
        public bool Status { get; set; }
        public Customer Customer { get; set; }
        public ModelStateDictionary ModelState { get; set; }
    }
}
