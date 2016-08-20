using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace prograV.UI
{
    public partial class _Default : Page
    {
      
        private BL.ICliente clienteBL = new BL.Cliente();
        private BL.Utiles util = new BL.Utiles();
        protected void Page_Load(object sender, EventArgs e)
        {
            var cliente = new Datos.Cliente()
            {
                Nombre = "Diego",
                Apellidos = "Castro",
                Email = "diegocd0506@gmail.com",
                Telefono = "22754358",
                Contrasena = util.encriptarString("admin")
        };
           // clienteBL.InsertarCliente(cliente);
        }
    }
}