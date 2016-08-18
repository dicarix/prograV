using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using prograV.Datos;

namespace prograV.BL
{
    public class TipoHabitacion : ITipoHabitacion
    {
        private DS.TipoHabitacion tipo;
        public TipoHabitacion()
        {
            tipo = new DS.TipoHabitacion();
        }
        public void InsertarTipoHabitacion(tipoHabitacion tipoHabitacion)
        {
            tipo.InsertarTipoHabitacion(tipoHabitacion);
        }
    }
}
