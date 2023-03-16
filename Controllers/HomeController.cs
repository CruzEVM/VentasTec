using MV_P1.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MV_P1.Controllers
{
    public class HomeController : Controller
    {
        FoodTecEntities db = new FoodTecEntities();

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult Usuario()
        {
            var Usuer = db.Usuarios.ToList();
            return View(Usuer);
        }

        public ActionResult Productos()
        {
            var Producto = db.Usuarios.ToList();
            return View(Producto);
        }

        public ActionResult AgregarProducto() 
        {
            var idProducto = Request.Params["idProducto"];
            if (idProducto != null)
            {
                int id = int.Parse(idProducto);
                var Producto = db.Producto.Where(x => x.IdProducto == id).FirstOrDefault();
                ViewBag.Producto = Producto;
            }
            
            return View();
        }
    }
}