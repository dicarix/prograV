using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using AjaxControlToolkit;

namespace prograV.UI.Pages.Hoteles
{
    public partial class AgregarHotel : System.Web.UI.Page
    {
        private BL.IPais paisObj = new BL.Pais();
        private BL.ITipoHabitacion habitacionObj = new BL.TipoHabitacion();
        private BL.IHotel hotelesObj = new BL.Hotel();
        string update;

        public int estrellasRating{ get; set; }
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack)
            {
                ddlPais.DataSource = paisObj.ListaPais().Select(x => x.NombrePais);
                ddlPais.DataBind();
                ddlHabitacion.DataSource = habitacionObj.ListaTipoHabitacion().Select(x => x.Descripcion);
                ddlHabitacion.DataBind();
                update = Request.QueryString["idHotel"];
                if (!String.IsNullOrEmpty(update))
                {
                    var hotelTemp= hotelesObj.BuscarHotelporId(int.Parse(update));
                    txtNombreHotel.Text = hotelTemp.NombreHotel;
                    txtDescripcion.Text = hotelTemp.Descripcion;
                    txtCostoNoche.Text = hotelTemp.CostoNoche.ToString();
                    txtCostoBase.Text = hotelTemp.CostoBase.ToString();
                    hotelRating.CurrentRating = hotelTemp.Estrellas;
                    btnAgregarhotel.Visible = false;
                    btnActualizarHotel.Visible = true;
                };
            }
        }

        protected void hotelRating_Changed(object sender, AjaxControlToolkit.RatingEventArgs e)
        {
           
        }

        protected void btnActualizarHotel_Click(object sender, EventArgs e)
        {

        }

        protected void btnAgregarhotel_Click(object sender, EventArgs e)
        {
            try
            {
                var hotel = new Datos.Hoteles()
                {
                    CostoBase = float.Parse(txtCostoBase.Text),
                    CostoNoche = float.Parse(txtCostoNoche.Text),
                    Descripcion = txtDescripcion.Text,
                    Estrellas = hotelRating.CurrentRating,
                    idPais = paisObj.BuscarPaisporNombre(ddlPais.SelectedItem.Text).idPais,
                    NombreHotel= txtNombreHotel.Text,
                    tipoHabitacion = habitacionObj.BuscarTipoHabitacionporNombre(ddlHabitacion.SelectedItem.Text).idTipoHabitacion
                }; 
                mensajeError.Visible = false;
                hotelesObj.InsertarHotel(hotel);
                AlertMensaje.Visible = true;
                textoMensaje.InnerHtml = String.Format("Hotel {0} agregado", txtNombreHotel.Text);
            }
            catch (Exception ex)
            {
                mensajeError.Visible = true;
                textoMensajeError.InnerHtml = "No se pudo agregar el hotel";
            }
        }
    }
}