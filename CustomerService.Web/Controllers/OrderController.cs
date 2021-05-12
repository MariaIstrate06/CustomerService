using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using CustomerService.DataAccess;
using CustomerService.Domain;
using CustomerService.Web.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace CustomerService.Web.Controllers
{
    [Route("api/orders")]
    public class OrderController : Controller
    {
        IOrderRepository _OrderRepository;
        ILogger _Logger;

        public OrderController(IOrderRepository orderRepo, ILoggerFactory loggerFactory)
        {
            _OrderRepository = orderRepo;
            _Logger = loggerFactory.CreateLogger(nameof(OrderController));
        }

        // GET api/customers
        [HttpGet]
        [ProducesResponseType(typeof(List<Order>), 200)]
        [ProducesResponseType(typeof(ApiResponse), 400)]
        public async Task<ActionResult> Orders()
        {
            try
            {
                var orders = await _OrderRepository.GetOrderAsync();
                return Ok(orders);
            }
            catch (Exception exp)
            {
                _Logger.LogError(exp.Message);
                return BadRequest(new ApiResponse { Status = false });
            }
        }

        // GET api/customers/page/10/10
        [HttpGet("page/{skip}/{take}")]
        [ProducesResponseType(typeof(List<Order>), 200)]
        [ProducesResponseType(typeof(ApiResponse), 400)]
        public async Task<ActionResult> OrdersPage(int skip, int take)
        {
            try
            {
                var pagingResult = await _OrderRepository.GetOrderPageAsync(skip, take);
                Response.Headers.Add("X-InlineCount", pagingResult.TotalRecords.ToString());
                return Ok(pagingResult.Records);
            }
            catch (Exception exp)
            {
                _Logger.LogError(exp.Message);
                return BadRequest(new ApiResponse { Status = false });
            }
        }

        // GET api/customers/5
        [HttpGet("{id}", Name = "GetOrderRoute")]

        [ProducesResponseType(typeof(Customer), 200)]
        [ProducesResponseType(typeof(ApiResponse), 400)]
        public async Task<ActionResult> Order(int id)
        {
            try
            {
                var order = await _OrderRepository.GetOrderAsync(id);
                return Ok(order);
            }
            catch (Exception exp)
            {
                _Logger.LogError(exp.Message);
                return BadRequest(new ApiResponse { Status = false });
            }
        }

        // POST api/customers
        [HttpPost]
        // [ValidateAntiForgeryToken]
        [ProducesResponseType(typeof(ApiResponse), 201)]
        [ProducesResponseType(typeof(ApiResponse), 400)]
        public async Task<ActionResult> CreateOrder([FromBody] Order order)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new ApiResponse { Status = false, ModelState = ModelState });
            }

            try
            {
                var newOrder = await _OrderRepository.InsertOrderAsync(order);
                if (newOrder == null)
                {
                    return BadRequest(new ApiResponse { Status = false });
                }
                return CreatedAtRoute("GetOrderRoute", new { id = newOrder.Id },
                        new ApiResponse { Status = true, Order = newOrder });
            }
            catch (Exception exp)
            {
                _Logger.LogError(exp.Message);
                return BadRequest(new ApiResponse { Status = false });
            }
        }

        // PUT api/customers/5
        [HttpPut("{id}")]
        // [ValidateAntiForgeryToken]
        [ProducesResponseType(typeof(ApiResponse), 200)]
        [ProducesResponseType(typeof(ApiResponse), 400)]
        public async Task<ActionResult> UpdateOrder(int id, [FromBody] Order order)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new ApiResponse { Status = false, ModelState = ModelState });
            }

            try
            {
                var status = await _OrderRepository.UpdateOrderAsync(order);
                if (!status)
                {
                    return BadRequest(new ApiResponse { Status = false });
                }
                return Ok(new ApiResponse { Status = true, Order = order });
            }
            catch (Exception exp)
            {
                _Logger.LogError(exp.Message);
                return BadRequest(new ApiResponse { Status = false });
            }
        }

        // DELETE api/customers/5
        [HttpDelete("{id}")]
        // [ValidateAntiForgeryToken]
        [ProducesResponseType(typeof(ApiResponse), 200)]
        [ProducesResponseType(typeof(ApiResponse), 400)]
        public async Task<ActionResult> DeleteOrder(int id)
        {
            try
            {
                var status = await _OrderRepository.DeleteOrderAsync(id);
                if (!status)
                {
                    return BadRequest(new ApiResponse { Status = false });
                }
                return Ok(new ApiResponse { Status = true });
            }
            catch (Exception exp)
            {
                _Logger.LogError(exp.Message);
                return BadRequest(new ApiResponse { Status = false });
            }
        }
    }
}
