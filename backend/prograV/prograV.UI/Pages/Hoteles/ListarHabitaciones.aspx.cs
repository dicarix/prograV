using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace prograV.UI.Pages.Hoteles
{
    public partial class ListarHabitaciones : System.Web.UI.Page
    {
        public static BL.ITipoHabitacion tipoHabitacionBL = new BL.TipoHabitacion();

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack)
            {
                List<Datos.tipoHabitacion> listaHabitaciones= tipoHabitacionBL.ListaTipoHabitacion();
                gvHabitacion.DataSource = listaHabitaciones;
                gvHabitacion.DataBind();

            }
        }

        protected void gvHabitacion_RowCommand(object sender, GridViewCommandEventArgs e)
        {
            if (e.CommandName == "Modificar")
            {

                int index = Convert.ToInt32(e.CommandArgument);
                GridViewRow row = gvHabitacion.Rows[index];
                var tipoHabitacion = row.Cells[0].Text;
                Response.Redirect("~/Pages/Hoteles/AgregarHabitacion.aspx?tipoHabitacion=" + tipoHabitacion);
            }
        }

        protected void gvHabitacion_RowDeleting(object sender, GridViewDeleteEventArgs e)
        {
            string nombreHabitacion = e.Values[0].ToString();
            try
            {
                tipoHabitacionBL.EliminarTipoHabitacion(tipoHabitacionBL.BuscarTipoHabitacionporNombre(nombreHabitacion));
                AlertMensaje.Visible = true;
                textoMensaje.InnerHtml = String.Format("Habitacion {0} eliminada", nombreHabitacion);

            }
            catch (Exception)
            {
                mensajeError.Visible = true;
                textoMensajeError.InnerHtml = String.Format("Habitacion {0} no pudo ser borrada", nombreHabitacion);
            }

            List<Datos.tipoHabitacion> listaHabitaciones = tipoHabitacionBL.ListaTipoHabitacion();
            gvHabitacion.DataSource = listaHabitaciones;
            gvHabitacion.DataBind();
        }
    }
}