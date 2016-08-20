using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace prograV.UI.Pages.Vuelos
{
    public partial class ListarVuelos : System.Web.UI.Page
    {
        public static BL.ICiudad ciudadobj = new BL.Ciudad();
        public static BL.IVuelos vuelosObj= new BL.Vuelo();

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack)
            {
                llenarLista();
            }
        }

        protected void gvVuelo_RowCommand(object sender, GridViewCommandEventArgs e)
        {
            if (e.CommandName == "Modificar")
            {

                int index = Convert.ToInt32(e.CommandArgument);
                GridViewRow row = gvVuelo.Rows[index];
                var idVuelo = row.Cells[3].Text;
                Response.Redirect("~/Pages/Vuelos/AgregarVuelos?idVuelo=" + idVuelo);
            }
        }

        protected void gvVuelo_RowDeleting(object sender, GridViewDeleteEventArgs e)
        {
            int idVuelo = int.Parse(e.Values[3].ToString());
            try
            {
                vuelosObj.EliminarVuelos(vuelosObj.BuscarVueloPorId(idVuelo));
                AlertMensaje.Visible = true;
                textoMensaje.InnerHtml = "Vuelo eliminado";

            }
            catch (Exception)
            {
                mensajeError.Visible = true;
                textoMensajeError.InnerHtml = "Vuelo no pudo ser borrado";
            }
            llenarLista();
        }
        public void llenarLista()
        {
            List<vueloDetalle> nuevaLista = new List<vueloDetalle>();
            List<Datos.Vuelo> listaVuelo = vuelosObj.ListaVuelos();
            foreach (var item in listaVuelo)
            {
                var ciudad = new vueloDetalle()
                {
                    Aerolinea = item.Aerolinea,
                    FechaLlegada = item.FechaLlegada.ToString(),
                    FechaSalida= item.FechaSalida.ToString(),
                    idVuelo = item.idVuelo
                };
                nuevaLista.Add(ciudad);
            }
            gvVuelo.DataSource = nuevaLista;
            gvVuelo.DataBind();
        }
    }
    class vueloDetalle
    {
        public string FechaSalida { get; set; }
        public string FechaLlegada { get; set; }
        public int idVuelo { get; set; }
        public string Aerolinea { get; set; }
    }
}