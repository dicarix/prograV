using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace prograV.UI.Pages.Vuelos
{
    public partial class ListarClases : System.Web.UI.Page
    {
        public static BL.ITipoVuelo tipoVueloBl = new BL.TipoVuelo();

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack)
            {
                List<Datos.tipoClaseVuelo> listaHabitaciones = tipoVueloBl.ListatipoClaseVuelo();
                gvTiposVuelo.DataSource = listaHabitaciones;
                gvTiposVuelo.DataBind();

            }
        }

        protected void gvTiposVuelo_RowDeleting(object sender, GridViewDeleteEventArgs e)
        {
            int idClaseVuelo= int.Parse(e.Values[1].ToString());
            try
            {
                tipoVueloBl.EliminartipoClaseVuelo(tipoVueloBl.BuscartipoClaseVueloporID(idClaseVuelo));
                AlertMensaje.Visible = true;
                textoMensaje.InnerHtml = String.Format("Clase Vuelo {0} eliminada", e.Values[0].ToString());

            }
            catch (Exception)
            {
                mensajeError.Visible = true;
                textoMensajeError.InnerHtml = String.Format("Clase Vuelo {0} no pudo ser borrada", e.Values[0].ToString());
            }

            List<Datos.tipoClaseVuelo> listaHabitaciones = tipoVueloBl.ListatipoClaseVuelo();
            gvTiposVuelo.DataSource = listaHabitaciones;
            gvTiposVuelo.DataBind();
        }

        protected void gvTiposVuelo_RowCommand(object sender, GridViewCommandEventArgs e)
        {
            if (e.CommandName == "Modificar")
            {

                int index = Convert.ToInt32(e.CommandArgument);
                GridViewRow row = gvTiposVuelo.Rows[index];
                var idClase = row.Cells[1].Text;
                Response.Redirect("~/Pages/Vuelos/AgregarClase.aspx?idClase=" + idClase);
            }
        }
    }
}