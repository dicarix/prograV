using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace prograV.DS
{
    public interface ITipoHabitacion
    {
        void InsertarTipoHabitacion(Datos.tipoHabitacion tipoHabitacion);
        Datos.tipoHabitacion BuscarTipoHabitacionporNombre(string nombreTipoHabitacion);
        List<Datos.tipoHabitacion> ListaTipoHabitacion();
        void EliminarTipoHabitacion(Datos.tipoHabitacion TipoHabitacion);
        void ActualizarTipoHabitacion(Datos.tipoHabitacion pais, string clave);
    }
}
