using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace prograV.UI.Frontend
{
	public partial class DetalleVuelo : System.Web.UI.Page
	{
		public static BL.ICiudad ciudadobj = new BL.Ciudad();
		public static BL.IVuelos vuelosObj= new BL.Vuelo();
		public static BL.ITipoVuelo tipoVueloObj= new BL.TipoVuelo();

		protected void Page_Load(object sender, EventArgs e)
		{
			if (!Page.IsPostBack)
			{
				update = Request.QueryString["idHotel"];
				if (!String.IsNullOrEmpty(update))
				{
                

					var detalleVuelo = vueloBl.InsertartipoClaseVuelo(tipo); hotelBl.BuscarHotelporId(int.Parse(update));
					ciudadOrigentxt.InnerText = 
					ciudadDestinotxt.InnerText = 
					fechaSalidatxt.InnerText = 
					fechaLLegadatxt.InnerText = 
					capacidadtxt.InnerText = 
					aerolineatxt.InnerText = 
					precioBasetxt.InnerText = 
					clasetxt.InnerText = 
					escalasTxt.InnerText = 
					cantidadEscalaTxt.InnerText = 
				}
			}

		}

	}