using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace prograV.UI.Pages.Hoteles
{
    public partial class ListarHoteles : System.Web.UI.Page
    {
        public static BL.IHotel hotelBl= new BL.Hotel();
        public static BL.IPais paisBl= new BL.Pais();

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack)
            {
                llenarLista();
            }
        }

        protected void gvHoteles_RowCommand(object sender, GridViewCommandEventArgs e)
        {
            if (e.CommandName == "Modificar")
            {
                int index = Convert.ToInt32(e.CommandArgument);
                GridViewRow row = gvHoteles.Rows[index];
                var idHotel = row.Cells[3].Text;
                Response.Redirect("~/Pages/Hoteles/AgregarHotel.aspx?idHotel=" + idHotel);
            }
        }

        protected void gvHoteles_RowDeleting(object sender, GridViewDeleteEventArgs e)
        {
            
            try
            {
                hotelBl.EliminarHotel(hotelBl.BuscarHotelporId(int.Parse(e.Values[3].ToString())));
                AlertMensaje.Visible = true;
                textoMensaje.InnerHtml = String.Format("Hotel Eliminado {0} eliminada", e.Values[0].ToString());

            }
            catch (Exception)
            {
                mensajeError.Visible = true;
                textoMensajeError.InnerHtml = String.Format("Hotel {0} no pudo ser borrado", e.Values[0].ToString());
            }
            llenarLista();
        }
        private void llenarLista()
        {
            List<Datos.Hoteles> listahoteles = hotelBl.ListaHotel();
            List<hotelDetalle> nuevaLista = new List<hotelDetalle>();
            foreach (var item in listahoteles)
            {
                var ciudad = new hotelDetalle()
                {
                    DescripcionHotel = item.Descripcion,
                    NombreHotel = item.NombreHotel,
                    Pais = paisBl.BuscarPaisporID(item.idPais).NombrePais,
                    idHotel = item.idHotel
                };
                nuevaLista.Add(ciudad);
            }
            gvHoteles.DataSource = nuevaLista;
            gvHoteles.DataBind();
        }
    }
    class hotelDetalle
    {
        public string NombreHotel { get; set; }
        public string Pais { get; set; }
        public string DescripcionHotel { get; set; }
        public int idHotel { get; set; }
    }
}