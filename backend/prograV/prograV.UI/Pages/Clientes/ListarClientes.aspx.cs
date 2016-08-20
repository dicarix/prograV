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
	}
}