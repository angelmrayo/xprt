using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class ProductosController : ApiController
    {
        List<Producto> productos = new List<Producto>
        {
            new Producto { ID=1, Nombre="PR1", Precio=123.4F},
            new Producto {ID=2, Nombre="PR2", Precio=456.7F},
            new Producto {ID=3, Nombre="PR3", Precio=100.0F}
        };

        [Route("api/productos")]
        [HttpGet]
        public IEnumerable<Producto> ObtenerProductos()
        {
            return productos;
        }
    }
}
