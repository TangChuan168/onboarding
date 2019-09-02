using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Talent_Onboarding.Models;

namespace Talent_Onboarding.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class SalesController : ControllerBase
    {
        private readonly salesContext _context;

        public SalesController(salesContext context)
        {
            _context = context;
        }

        // GET: api/Sales
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SalesInfo>>> GetSales()
        {
            var data = await _context.Sales
                .Include(x => x.SalesId)
                .Include(x => x.DateSold)
                .Include(x => x.Customer.Name)
                .Include(x => x.Product.Name)
                .Include(x => x.Store.Name)
                .Select(x => new SalesInfo() {
                    Customer = x.Customer.Name,
                    Product = x.Product.Name,
                    Store = x.Store.Name,
                    SalesId = x.SalesId,
                    DateSold = x.DateSold })
                .ToListAsync();
            return data;
        }

        /*
        [HttpGet("{id}")]
        public IActionResult GetSales(int id)
        {
            //var sales = await _context.Sales.FindAsync(id);
            Sales SalesInfo =   _context.Sales.FirstOrDefault(a => a.SalesId == id);

            var result = new
            {
                SalesId = SalesInfo?.SalesId,
                ProductName = SalesInfo?.Product?.Name,
                ProductId = SalesInfo?.Product?.ProductId,
                CutomaerName = SalesInfo?.Customer?.Name,
                CutomaerId = SalesInfo?.Customer?.CustomerId,
                StoreName = SalesInfo?.Store?.Name,
                StoreId = SalesInfo?.Store?.StoreId
            };

            return new JsonResult(result);
        }
        */

        //GET: api/Sales/5
        [HttpGet("{id}")]
        public async Task<ActionResult<SalesInfo>> GetSales(int id)
        {

            var data = await _context.Sales
                .Include(x => x.SalesId)
                .Include(x => x.DateSold)
                .Include(x=>x.CustomerId)
                .Include(x=>x.ProductId)
                .Include(x=>x.StoreId)
                .Include(x => x.Customer.Name)
                .Include(x => x.Product.Name)
                .Include(x => x.Store.Name)
                .Select(x => new SalesInfo() {
                    Customer = x.Customer.Name,
                    Product = x.Product.Name,
                    Store = x.Store.Name,
                    SalesId = x.SalesId,
                    DateSold = x.DateSold,
                    CustomerId = x.CustomerId,
                    ProductId = x.ProductId,
                    StoreId = x.StoreId
                })
                .ToListAsync();

             return data.Find(x => x.SalesId == id);

        }

        // PUT: api/Sales/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSales(int id, Sales sales)
        {
            if (id != sales.SalesId)
            {
                return BadRequest();
            }

            _context.Entry(sales).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SalesExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Sales
        [HttpPost]
        public async Task<ActionResult<Sales>> PostSales([FromBody] Sales sales)
        {
            _context.Sales.Add(sales);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSales", new { id = sales.SalesId }, sales);
        }

        // DELETE: api/Sales/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Sales>> DeleteSales(int id)
        {
            var sales = await _context.Sales.FindAsync(id);
            if (sales == null)
            {
                return NotFound();
            }

            _context.Sales.Remove(sales);
            await _context.SaveChangesAsync();

            return sales;
        }

        private bool SalesExists(int id)
        {
            return _context.Sales.Any(e => e.SalesId == id);
        }
    }
}
