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

        public void ActualizarTipoHabitacion(tipoHabitacion pais, string clave)
        {
            throw new NotImplementedException();
        }

        public tipoHabitacion BuscarTipoHabitacionporNombre(string nombreTipoHabitacion)
        {
            throw new NotImplementedException();
        }

        public void EliminarTipoHabitacion(tipoHabitacion TipoHabitacion)
        {
            throw new NotImplementedException();
        }

        public void InsertarTipoHabitacion(tipoHabitacion tipoHabitacion)
        {
            tipo.InsertarTipoHabitacion(tipoHabitacion);
        }

        public List<tipoHabitacion> ListaTipoHabitacion()
        {
            throw new NotImplementedException();
        }
    }
}
