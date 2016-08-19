using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
namespace prograV.UI.Pages.Paises
{
    public partial class AgregarPais : System.Web.UI.Page
    {
        string update;
        private BL.IPais paisBL = new BL.Pais();

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack)
            {
                update = Request.QueryString["pais"];
                if (!String.IsNullOrEmpty(update))
                {
                    txtNombrePais.Text = update;
                    btnAgregarPais.Visible = false;
                    btnActualizarPais.Visible = true;
                };
            }
        }

        protected void btnAgregarPais_Click(object sender, EventArgs e)
        {
            var pais = new Datos.Pais()
            {
                NombrePais = txtNombrePais.Text
            };
            try
            {
                var existePais = paisBL.BuscarPaisporNombre(txtNombrePais.Text);
                if (existePais != null)
                {
                    AlertMensaje.Visible = false;

                    mensajeError.Visible = true;
                    textoMensajeError.InnerHtml = "Pais existe ya";
                    txtNombrePais.Text = String.Empty;

                }
                else
                {
                    mensajeError.Visible = false;

                    paisBL.InsertarPais(pais);
                    AlertMensaje.Visible = true;
                    textoMensaje.InnerHtml = String.Format("Pais {0} agregado", txtNombrePais.Text);
                    txtNombrePais.Text = String.Empty;
                };

            }
            catch (Exception)
            {
                mensajeError.Visible = true;
                textoMensajeError.InnerHtml = "No se pudo agregar la ciudad";
                
            }

        }

        protected void btnActualizarPais_Click(object sender, EventArgs e)
        {
            try
            {
                var pais = new Datos.Pais()
                {
                    NombrePais = txtNombrePais.Text
                };
                update = Request.QueryString["pais"];
                AlertMensaje.Visible = true;
                textoMensaje.InnerHtml = String.Format("Pais {0} actualizado", txtNombrePais.Text);
                paisBL.ActualizarPais(pais, update);
            }
            catch (Exception)
            {
                mensajeError.Visible = true;
                textoMensajeError.InnerHtml = "No se pudo actualizar el pais";
            }
        }
    }
}