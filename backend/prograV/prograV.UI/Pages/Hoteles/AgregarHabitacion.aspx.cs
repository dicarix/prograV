using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace prograV.UI.Pages.Hoteles
{
    public partial class AgregarHabitacion : System.Web.UI.Page
    {
        string update;
        private BL.ITipoHabitacion tipoHabitacionBL = new BL.TipoHabitacion();
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack)
            {
                update = Request.QueryString["tipoHabitacion"];
                if (!String.IsNullOrEmpty(update))
                {
                    txtHabitacion.Text = update;
                    btnAgregarHabitacion.Visible = false;
                    btnActualizarHabitacion.Visible = true;
                };
            }
        }

        protected void btnAgregarHabitacion_Click(object sender, EventArgs e)
        {
            var tipoHabitacion = new Datos.tipoHabitacion()
            {
                Descripcion= txtHabitacion.Text
            };
            try
            {
                var existeHabitacion = tipoHabitacionBL.BuscarTipoHabitacionporNombre(txtHabitacion.Text);
                if (existeHabitacion != null)
                {
                    AlertMensaje.Visible = false;

                    mensajeError.Visible = true;
                    textoMensajeError.InnerHtml = "Habitacion existe ya";
                    txtHabitacion.Text = String.Empty;
                }
                else
                {
                    mensajeError.Visible = false;
                    tipoHabitacionBL.InsertarTipoHabitacion(tipoHabitacion);
                    AlertMensaje.Visible = true;
                    textoMensaje.InnerHtml = String.Format("Habitacion {0} agregada", txtHabitacion.Text);
                    txtHabitacion.Text = String.Empty;
                };

            }
            catch (Exception)
            {
                mensajeError.Visible = true;
                textoMensajeError.InnerHtml = "No se pudo agregar la habitacion";

            }
        }

        protected void btnActualizarHabitacion_Click(object sender, EventArgs e)
        {
            try
            {
                var habitacion = new Datos.tipoHabitacion()
                {
                    Descripcion = txtHabitacion.Text
                };
                update = Request.QueryString["tipoHabitacion"];
                tipoHabitacionBL.ActualizarTipoHabitacion(habitacion, update);
                AlertMensaje.Visible = true;
                textoMensaje.InnerHtml = String.Format("Habitacion {0} actualizada", txtHabitacion.Text);
            }
            catch (Exception ex)
            {
                mensajeError.Visible = true;
                textoMensajeError.InnerHtml = "No se pudo actualizar";
            }
        }
    }
}