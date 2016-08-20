using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace prograV.UI
{
    public partial class _Default : Page
    {
        private BL.ITipoHabitacion tipoHabitacion = new BL.TipoHabitacion();
        private BL.IPais paisBL = new BL.Pais();
        private BL.IHotel hotelBL = new BL.Hotel();

        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void btnTipoHabitacion_Click(object sender, EventArgs e)
        {
            var habitacion = new Datos.tipoHabitacion()
            {
                Descripcion = "Doble"
            };
            tipoHabitacion.InsertarTipoHabitacion(habitacion);
        }

        protected void Pais_Click(object sender, EventArgs e)
        {

        }

        protected void BtnPais_Click(object sender, EventArgs e)
        {
            var pais = new Datos.Pais()
            {
                NombrePais = "Costa Rica"
            };
            paisBL.InsertarPais(pais);
        }

        protected void btnHotel_Click(object sender, EventArgs e)
        {
            var pais = new Datos.Pais()
            {
                NombrePais = "Costa Rica"
            };
            var habitacion = new Datos.tipoHabitacion()
            {
                Descripcion = "Doble"
            };
            var hotel = new Datos.Hoteles()
            {
                CostoBase = 1500,
                CostoNoche = 150,
                Descripcion = "Excelente",
                Estrellas = 5,
                idPais = 1,
                tipoHabitacion = 1
            };
            hotelBL.InsertarHotel(hotel);
        }
    }
}