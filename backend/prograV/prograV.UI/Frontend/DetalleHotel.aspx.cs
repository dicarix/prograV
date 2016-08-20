using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace prograV.UI.Frontend
{
    public partial class DetalleHotel : System.Web.UI.Page
    {
        private BL.IHotel hotelBl = new BL.Hotel();
        private string update;
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack)
            {
                update = Request.QueryString["idHotel"];
                if (!String.IsNullOrEmpty(update))
                {
                var detalleHotel = hotelBl.BuscarHotelporId(int.Parse(update));

                };
            }
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