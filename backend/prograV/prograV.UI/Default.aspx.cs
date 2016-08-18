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
    }
}