using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CustomerService.Domain;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace CustomerService.WebAPI.Models
{
    public class ApiResponse
    {
        public bool Status { get; set; }
        public Customer Customer { get; set; }
        public ModelStateDictionary ModelState { get; set; }
    }
}
