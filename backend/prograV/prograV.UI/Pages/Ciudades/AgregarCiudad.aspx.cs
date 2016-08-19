using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace prograV.UI.Pages.Ciudades
{
    public partial class AgregarCiudad : System.Web.UI.Page
    {
        private BL.IPais paisObj = new BL.Pais();
        private BL.ICiudad ciudadObj = new BL.Ciudad();
        string update;

        protected void Page_Load(object sender, EventArgs e)
        {
           
            if (!Page.IsPostBack)
            {
                ddlPais.DataSource = paisObj.ListaPais().Select(x => x.NombrePais);
                ddlPais.DataBind();
                update = Request.QueryString["idCiudad"];
                if (!String.IsNullOrEmpty(update))
                {
                    var ciudad = ciudadObj.BuscarCiudadporId(int.Parse(update));
                    txtNombreCiudad.Text = ciudad.NombreCiudad;
                    btnAgregarCiudad.Visible = false;
                    btnActualizarCiudad.Visible = true;
                };
            }
            
        }

        protected void btnAgregarCiudad_Click(object sender, EventArgs e)
        {
            var pais = paisObj.BuscarPaisporNombre(ddlPais.SelectedItem.Text);
            var ciudad = new Datos.Ciudad()
            {
                NombreCiudad = txtNombreCiudad.Text,
                idPais = pais.idPais
            };
            try
            {
                var existeCiudad = ciudadObj.BuscarCiudadporNombre(txtNombreCiudad.Text);
                if (existeCiudad != null)
                {
                    AlertMensaje.Visible = false;
                    mensajeError.Visible = true;
                    textoMensajeError.InnerHtml = "Ciudad existe ya";
                    txtNombreCiudad.Text = String.Empty;

                }
                else
                {
                    mensajeError.Visible = false;
                    ciudadObj.InsertarCiudad(ciudad);
                    AlertMensaje.Visible = true;
                    textoMensaje.InnerHtml = String.Format("Ciudad {0} agregada", txtNombreCiudad.Text);
                    txtNombreCiudad.Text = String.Empty;
                };
            }
            catch
            {
                mensajeError.Visible = true;
                textoMensajeError.InnerHtml = "No se pudo agregar la ciudad";
            }
        }

        protected void btnActualizarCiudad_Click(object sender, EventArgs e)
        {
            try
            {
                update = Request.QueryString["idCiudad"];
                var ciudad = new Datos.Ciudad()
                {
                    NombreCiudad =txtNombreCiudad.Text,
                    idPais = paisObj.BuscarPaisporNombre(ddlPais.SelectedItem.Text).idPais
                };
                
                ciudadObj.ActualizarCiudad(ciudad, update);
                AlertMensaje.Visible = true;
                textoMensaje.InnerHtml = String.Format("Ciudad {0} actualizada", txtNombreCiudad.Text);
            }
            catch (Exception ex)
            {
                mensajeError.Visible = true;
                textoMensajeError.InnerHtml = "No se pudo actualizar el pais";
            }

        }
    }
}