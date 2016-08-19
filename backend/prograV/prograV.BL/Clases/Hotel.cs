using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using prograV.Datos;

namespace prograV.BL
{
    public class Hotel : IHotel
    {
        private DS.Hotel HotelObject;
        public Hotel()
        {
            HotelObject = new DS.Hotel();
        }

        public void ActualizarHotel(Hoteles hotel, string clave)
        {
            throw new NotImplementedException();
        }

        public Hoteles BuscarHotelporNombre(string nombreHotel)
        {
            throw new NotImplementedException();
        }

        public void EliminarHotel(Hoteles Hotel)
        {
            throw new NotImplementedException();
        }

        public void InsertarHotel(Hoteles hotel)
        {
            HotelObject.InsertarHotel(hotel);
        }

        public List<Hoteles> ListaHotel()
        {
            throw new NotImplementedException();
        }
    }
}
