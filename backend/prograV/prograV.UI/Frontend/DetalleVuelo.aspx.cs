using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace prograV.UI.Frontend
{
    public partial class DetalleVuelo : System.Web.UI.Page
    {
        public static BL.ICiudad ciudadobj = new BL.Ciudad();
        public static BL.IVuelos vuelosObj = new BL.Vuelo();
        public static BL.ITipoVuelo tipoVueloObj = new BL.TipoVuelo();
        private string update;
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack)
            {
                llenarVuelos();
                update = Request.QueryString["idVuelo"];
                if (!String.IsNullOrEmpty(update))
                {
                    var detalleVuelo = vuelosObj.BuscarVueloPorId(int.Parse(update));
                    ciudadOrigentxt.InnerText = ciudadobj.BuscarCiudadporId(detalleVuelo.CiudadOrigen).NombreCiudad;
                    ciudadDestinotxt.InnerText = ciudadobj.BuscarCiudadporId(detalleVuelo.CiudadDestino).NombreCiudad;
                    fechaSalidatxt.InnerText = detalleVuelo.FechaSalida.ToShortDateString();
                    fechaLLegadatxt.InnerText = detalleVuelo.FechaLlegada.ToShortDateString();
                    capacidadtxt.InnerText = detalleVuelo.Capacidad.ToString();
                    aerolineatxt.InnerText = detalleVuelo.Aerolinea;
                    precioBasetxt.InnerText = detalleVuelo.PrecioBase.ToString();
                    clasetxt.InnerText = tipoVueloObj.BuscartipoClaseVueloporID(detalleVuelo.Clase).Descripcion;
                    escalasTxt.InnerText = detalleVuelo.Escala ? "Si" : "No";
                    cantidadEscalaTxt.InnerText = detalleVuelo.Escala ? "N/A" : detalleVuelo.CantidadEscalas.ToString();
                }
            }

        }
        public void llenarVuelos()
        {
            List<vueloDetalle> nuevaLista = new List<vueloDetalle>();
            List<Datos.Vuelo> listaVuelo = vuelosObj.ListaVuelos();
            foreach (var item in listaVuelo)
            {
                var ciudad = new vueloDetalle()
                {
                    Aerolinea = item.Aerolinea,
                    idVuelo = item.idVuelo,
                    Ciudad = ciudadobj.BuscarCiudadporId(item.CiudadOrigen).NombreCiudad
                };
                nuevaLista.Add(ciudad);
            }
            lvVuelos.DataSource = nuevaLista;
            lvVuelos.DataBind();

        }
        class vueloDetalle
        {
            public int idVuelo { get; set; }
            public string Aerolinea { get; set; }
            public string Ciudad { get; set; }
        }
    }
}