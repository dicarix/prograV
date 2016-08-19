using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace prograV.UI.Pages.Ciudades
{
    public partial class ListarCiudades : System.Web.UI.Page
    {
        public static BL.ICiudad ciudad = new BL.Ciudad();
        public static BL.IPais pais = new BL.Pais();

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack)
            {
                llenarLista();
            }
        }

        protected void gvCiudades_RowCommand(object sender, GridViewCommandEventArgs e)
        {
            if (e.CommandName == "Modificar")
            {

                int index = Convert.ToInt32(e.CommandArgument);
                GridViewRow row = gvCiudades.Rows[index];
                var idciudad = row.Cells[2].Text;
                Response.Redirect("~/Pages/Ciudades/AgregarCiudad?idCiudad=" + idciudad);
            }
        }

        protected void gvCiudades_RowDeleting(object sender, GridViewDeleteEventArgs e)
        {
            try
            {
                ciudad.EliminarCiudad(ciudad.BuscarCiudadporId(int.Parse(e.Values[2].ToString())));
                AlertMensaje.Visible = true;
                textoMensaje.InnerHtml = String.Format("Ciudad {0} eliminada", e.Values[0].ToString());

            }
            catch (SqlException)
            {
                mensajeError.Visible = true;
                textoMensajeError.InnerHtml = String.Format("La ciuddad {0} no pudo ser borrada", e.Values[0].ToString());
            }

            llenarLista();
        }
        public void llenarLista()
        {
            List<ciudadConPais> nuevaLista = new List<ciudadConPais>();
            List<Datos.Ciudad> listaCiudad = ciudad.ListaCiudad();
            foreach (var item in listaCiudad)
            {
                var ciudad = new ciudadConPais()
                {
                    nombreCiudad = item.NombreCiudad,
                    idPais = item.idPais,
                    nombrePais = pais.BuscarPaisporID(item.idPais).NombrePais,
                    idCiudad= item.idCiudad
                };
                nuevaLista.Add(ciudad);
            }
            gvCiudades.DataSource = nuevaLista;
            gvCiudades.DataBind();
        }
    }
    class ciudadConPais
    {
        public string nombrePais { get; set; }
        public string nombreCiudad { get; set; }
        public int idPais { get; set; }
        public int idCiudad { get; set; }
    }
}