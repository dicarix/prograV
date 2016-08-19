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
        public void InsertarHotel(Hoteles hotel)
        {
            HotelObject.InsertarHotel(hotel);
        }
    }
}
