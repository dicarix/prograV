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

        public void ActualizarTipoHabitacion(tipoHabitacion habitacion, string clave)
        {
            tipo.ActualizarTipoHabitacion(habitacion, clave);
        }

        public tipoHabitacion BuscarTipoHabitacionporNombre(string nombreTipoHabitacion)
        {
            return tipo.BuscarTipoHabitacionporNombre(nombreTipoHabitacion);
        }

        public void EliminarTipoHabitacion(tipoHabitacion tipoHabitacion)
        {
            tipo.EliminarTipoHabitacion(tipoHabitacion);
        }

        public void InsertarTipoHabitacion(tipoHabitacion tipoHabitacion)
        {
            tipo.InsertarTipoHabitacion(tipoHabitacion);
        }

        public List<tipoHabitacion> ListaTipoHabitacion()
        {
            return tipo.ListaTipoHabitacion();
        }
    }
}
