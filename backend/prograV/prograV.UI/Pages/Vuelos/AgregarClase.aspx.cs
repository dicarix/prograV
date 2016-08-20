using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace prograV.UI.Pages.Vuelos
{
    public partial class AgregarClase : System.Web.UI.Page
    {
        string update;
        private BL.ITipoVuelo vueloBl = new BL.TipoVuelo();

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack)
            {
                update = Request.QueryString["idClase"];
                if (!String.IsNullOrEmpty(update))
                {
                    txtTipoClase.Text = vueloBl.BuscartipoClaseVueloporID(int.Parse(update)).Descripcion;
                    btnAgregarClase.Visible = false;
                    btnActualizarClase.Visible = true;
                };
            }
        }

        protected void btnAgregarClase_Click(object sender, EventArgs e)
        {
            var tipo = new Datos.tipoClaseVuelo()
            {
                Descripcion = txtTipoClase.Text
            };
            try
            {
                mensajeError.Visible = false;
                vueloBl.InsertartipoClaseVuelo(tipo);
                AlertMensaje.Visible = true;
                textoMensaje.InnerHtml = String.Format("Tipo Vuelo {0} agregado", txtTipoClase.Text);
                txtTipoClase.Text = String.Empty;

            }
            catch (Exception ex)
            {
                mensajeError.Visible = true;
                textoMensajeError.InnerHtml = "No se pudo agregar";

            }
        }

        protected void btnActualizarClase_Click(object sender, EventArgs e)
        {
            try
            {
                var tipo = new Datos.tipoClaseVuelo()
                {
                    Descripcion = txtTipoClase.Text
                };
                update = Request.QueryString["idClase"];
                AlertMensaje.Visible = true;
                textoMensaje.InnerHtml = String.Format("Clase Vuelo {0} actualizado", txtTipoClase.Text);
                vueloBl.ActualizartipoClaseVuelo(tipo, update);
            }
            catch (Exception)
            {
                mensajeError.Visible = true;
                textoMensajeError.InnerHtml = "No se pudo actualizar";
            }
        }
    }
}