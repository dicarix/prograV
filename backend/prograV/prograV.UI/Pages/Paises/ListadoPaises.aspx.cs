using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace prograV.UI.Pages.Paises
{
    public partial class ListadoPaises : System.Web.UI.Page
    {
        public static BL.IPais paises = new BL.Pais();

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack)
            {
                List<Datos.Pais> listaPaises = paises.ListaPais();
                gvPaises.DataSource = listaPaises;
                gvPaises.DataBind();

            }

        }
        protected void gvPaises_RowDeleting(object sender, GridViewDeleteEventArgs e)
        {
            string nombrePais = e.Values[0].ToString();
            try
            {
                paises.EliminarPais(paises.BuscarPaisporNombre(nombrePais));
                AlertMensaje.Visible = true;
                textoMensaje.InnerHtml = String.Format("Pais {0} eliminado", nombrePais);

            }
            catch (SqlException)
            {
                mensajeError.Visible = true;
                textoMensajeError.InnerHtml = String.Format("El Pais {0} no pudo ser borrado", nombrePais);
            }

            List<Datos.Pais> listaPaises = paises.ListaPais();
            gvPaises.DataSource = listaPaises;
            gvPaises.DataBind();

        }

        protected void gvPaises_RowCommand(object sender, GridViewCommandEventArgs e)
        {
            if (e.CommandName == "Modificar")
            {
               
                int index = Convert.ToInt32(e.CommandArgument);
                GridViewRow row = gvPaises.Rows[index];
                var pais = row.Cells[0].Text;
                Response.Redirect("~/Pages/Paises/AgregarPais.aspx?pais=" + pais);
            }
        }
    }
}