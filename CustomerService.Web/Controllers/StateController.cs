using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CustomerService.DataAccess;
using CustomerService.Domain;

namespace CustomerService.Web.Controllers
{
    [Route("api/states")]
    public class StateController : Controller
    {
        private readonly IStatesRepository _stateRepo;

        public StateController(IStatesRepository stateRepo)
        {
            _stateRepo = stateRepo;
        }
        [HttpGet]
        public async Task<ActionResult> GetStates()
        {
            var states = await _stateRepo.GetStatesAsync();

            return Ok(states);
            
        }
    }
}
