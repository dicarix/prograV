using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace prograV.UI.Frontend
{
    public partial class Homepage : System.Web.UI.Page
    {
        BL.IHotel hoteles = new BL.Hotel();
        BL.IVuelos vuelos = new BL.Vuelo();
        BL.ICiudad ciudadBL = new BL.Ciudad();

        protected void Page_Load(object sender, EventArgs e)
        {
            lvhoteles.DataSource = hoteles.ListaHotel();
            lvhoteles.DataBind();
            llenarVuelos();
        }
        public void llenarVuelos()
        {
            List<Datos.vueloDetalle> nuevaLista = new List<Datos.vueloDetalle>();
            List<Datos.Vuelo> listaVuelo = vuelos.ListaVuelos();
            foreach (var item in listaVuelo)
            {
                var ciudad = new Datos.vueloDetalle()
                {
                    Aerolinea = item.Aerolinea,
                    idVuelo = item.idVuelo,
                    Ciudad = ciudadBL.BuscarCiudadporId(item.CiudadOrigen).NombreCiudad
                };
                nuevaLista.Add(ciudad);
            }
            lvVuelos.DataSource = nuevaLista;
            lvVuelos.DataBind();
            
        }
        public int getRandom()
        {
            var x = new Random();
            return x.Next(1, 9);
        }

    }
}