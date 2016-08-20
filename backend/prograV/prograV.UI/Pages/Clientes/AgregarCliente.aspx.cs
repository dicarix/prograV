using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace prograV.UI.Pages.Clientes
{
    public partial class AgregarCliente : System.Web.UI.Page
    {

        private BL.ICliente clienteBL = new BL.Cliente();
        private BL.Utiles util = new BL.Utiles();
        private string update;
        const string key = "cNzFcGspKrwJJtcuTrYPpaojsR1nEOtRQYMzS + 4hQpk=";
        const string iv = "dwjKOWwf4PRdMI / 9PciCKw==";

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack)
            {
               

                update = Request.QueryString["idCliente"];
                if (!String.IsNullOrEmpty(update))
                {
                    var cliente = clienteBL.BuscarClienteporID(int.Parse(update));
                    txtNombre.Text = cliente.Nombre;
                    txtApellidos.Text = cliente.Apellidos;
                    txtEmail.Text = cliente.Email;
                    txtTelefono.Text = cliente.Telefono;
                     txtContrasena.Text = util.desencriptarString(cliente.Contrasena, Convert.FromBase64String(key), Convert.FromBase64String(iv));
                    btnAgregarCliente.Visible = false;
                    btnActualizarCliente.Visible = true;
                };
            }
        }

        protected void btnAgregarCliente_Click(object sender, EventArgs e)
        {
            try
            {
                var cliente = new Datos.Cliente()
                {
                    Nombre = txtNombre.Text,
                    Apellidos = txtApellidos.Text,
                    Email = txtEmail.Text,
                    Telefono = txtTelefono.Text,
                    Contrasena = util.encriptarString(txtContrasena.Text, Convert.FromBase64String(key), Convert.FromBase64String(iv))
                };
                clienteBL.InsertarCliente(cliente);
                AlertMensaje.Visible = true;
                textoMensaje.InnerHtml = String.Format("Cliente {0} agregado", txtNombre.Text);
            }
            catch (Exception ex)
            {
                mensajeError.Visible = true;
                textoMensajeError.InnerHtml = "No se pudo agregar el cliente";
            }


            txtNombre.Text = String.Empty;
            txtApellidos.Text = String.Empty;
            txtEmail.Text = String.Empty;
            txtTelefono.Text = String.Empty;
            txtContrasena.Text = String.Empty;
        }

        protected void btnActualizarCliente_Click(object sender, EventArgs e)
        {
            try
            {
                update = Request.QueryString["idCliente"];
                var cliente = new Datos.Cliente()
                {
                    Nombre = txtNombre.Text,
                    Apellidos = txtApellidos.Text,
                    Email = txtEmail.Text,
                    Telefono = txtTelefono.Text,
                    Contrasena = util.encriptarString(txtContrasena.Text, Convert.FromBase64String(key), Convert.FromBase64String(iv))
                };
                clienteBL.ActualizarCliente(cliente, update);
                AlertMensaje.Visible = true;
                textoMensaje.InnerHtml = String.Format("Cliente {0} actualizado", txtNombre.Text);
            }
            catch (Exception ex)
            {
                mensajeError.Visible = true;
                textoMensajeError.InnerHtml = "No se pudo actualizar el cliente";
            }
        }
    }
}