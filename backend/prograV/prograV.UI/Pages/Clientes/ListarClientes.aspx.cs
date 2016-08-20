using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace prograV.UI.Pages.Clientes
{
	public partial class ListarClientes : System.Web.UI.Page
	{
		public static BL.ICliente clienteBl = new BL.Cliente();

		protected void Page_Load(object sender, EventArgs e)
		{
			if (!Page.IsPostBack)
			{
				List<Datos.Cliente> listaClientes= clienteBl.ListaCliente();
				gvClientes.DataSource = listaClientes;
				gvClientes.DataBind();

			}
		}

        protected void gvClientes_RowDeleting(object sender, GridViewDeleteEventArgs e)
        {
            int idCliente = int.Parse(e.Values[3].ToString());
            try
            {
                clienteBl.EliminarCliente(clienteBl.BuscarClienteporID(idCliente));
                AlertMensaje.Visible = true;
                textoMensaje.InnerHtml = "Cliente eliminado";

            }
            catch (Exception)
            {
                mensajeError.Visible = true;
                textoMensajeError.InnerHtml = "Cliente no pudo ser borrado";
            }

            List<Datos.Cliente> listaClientes = clienteBl.ListaCliente();
            gvClientes.DataSource = listaClientes;
            gvClientes.DataBind();
        }

        protected void gvClientes_RowCommand(object sender, GridViewCommandEventArgs e)
        {
            if (e.CommandName == "Modificar")
            {

                int index = Convert.ToInt32(e.CommandArgument);
                GridViewRow row = gvClientes.Rows[index];
                var idciudad = row.Cells[3].Text;
                Response.Redirect("~/Pages/Clientes/AgregarCliente?idCliente=" + idciudad);
            }
        }
    }
}