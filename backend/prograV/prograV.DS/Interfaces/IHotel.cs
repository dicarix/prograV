using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace prograV.DS
{
    interface IHotel
    {
        void InsertarHotel(Datos.Hoteles hotel);
        Datos.Hoteles BuscarHotelporNombre(string nombreHotel);
        Datos.Hoteles BuscarHotelporId(int Id);
        List<Datos.Hoteles> ListaHotel();
        void EliminarHotel(Datos.Hoteles Hotel);
        void ActualizarHotel(Datos.Hoteles hotel, string clave);
    }
}
