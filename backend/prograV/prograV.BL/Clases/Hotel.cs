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
            HotelObject.ActualizarHotel(hotel, clave);
        }

        public Hoteles BuscarHotelporId(int Id)
        {
            return HotelObject.BuscarHotelporId(Id);
        }

        public Hoteles BuscarHotelporNombre(string nombreHotel)
        {
            return HotelObject.BuscarHotelporNombre(nombreHotel);
        }

        public void EliminarHotel(Hoteles Hotel)
        {
            HotelObject.EliminarHotel(Hotel);
        }

        public void InsertarHotel(Hoteles hotel)
        {
            HotelObject.InsertarHotel(hotel);
        }

        public List<Hoteles> ListaHotel()
        {
            return HotelObject.ListaHotel();
        }
    }
}
