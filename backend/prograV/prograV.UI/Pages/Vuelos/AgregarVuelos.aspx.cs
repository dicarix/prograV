using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace prograV.UI.Pages.Vuelos
{
    public partial class AgregarVuelos : System.Web.UI.Page
    {
        private BL.ICiudad ciudadObj = new BL.Ciudad();
        private BL.ITipoVuelo tipovueloObj= new BL.TipoVuelo();
        private BL.IVuelos vuelosObj = new BL.Vuelo();


        string update;
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack)
            {
                llenarCombos();
                update = Request.QueryString["idVuelo"];
                if (!String.IsNullOrEmpty(update))
                {
                    var vueloTemp = vuelosObj.BuscarVueloPorId(int.Parse(update));
                    txtAerolinea.Text = vueloTemp.Aerolinea;
                    txtCapacidad.Text = vueloTemp.Capacidad.ToString();
                    txtEscala.Checked = vueloTemp.Escala;
                    txtNumeroEscalas.Text = vueloTemp.CantidadEscalas.ToString();
                    txtPrecioBase.Text = vueloTemp.PrecioBase.ToString();
                    FechaLlegada.SelectedDate = vueloTemp.FechaLlegada; ;
                    FechaSalida.SelectedDate = vueloTemp.FechaSalida;
                    btnAgregarVuelo.Visible = false;
                    btnActualizarVuelo.Visible = true;
                };
            }
        }

        protected void btnAgregarVuelo_Click(object sender, EventArgs e)
        {
            var ciudadOrigen = ciudadObj.BuscarCiudadporNombre(ddlCiudadOrigen.SelectedItem.Text);
            var ciudadDestino = ciudadObj.BuscarCiudadporNombre(ddlCiudadDestino.SelectedItem.Text);
            var tipoVuelo = tipovueloObj.BuscartipoClaseVueloporNombre(ddlClase.SelectedItem.Text);
            try
            {
                var vuelo = new Datos.Vuelo()
                {
                    Aerolinea = txtAerolinea.Text,
                    Capacidad = int.Parse(txtCapacidad.Text),
                    CiudadDestino = ciudadDestino.idCiudad,
                    CiudadOrigen = ciudadOrigen.idCiudad,
                    PrecioBase = int.Parse(txtPrecioBase.Text),
                    Clase = tipoVuelo.idTipoClaseVuelo,
                    Escala = txtEscala.Checked,
                    CantidadEscalas = txtEscala.Checked ? int.Parse(txtNumeroEscalas.Text) : 0,
                    FechaLlegada = FechaLlegada.SelectedDate,
                    FechaSalida = FechaSalida.SelectedDate
                };

                vuelosObj.InsertarVuelo(vuelo);
                AlertMensaje.Visible = true;
                textoMensaje.InnerHtml = "Vuelo agregado";

                txtAerolinea.Text = String.Empty;
                txtCapacidad.Text = String.Empty;
                txtPrecioBase.Text = String.Empty;
                txtEscala.Checked = false;
                txtNumeroEscalas.Text = String.Empty;
            }
            catch (Exception ex)
            {
                mensajeError.Visible = true;
                textoMensajeError.InnerHtml = "No se pudo agregar el vuelo";

            }

        }

        protected void btnActualizarVuelo_Click(object sender, EventArgs e)
        {
            var ciudadOrigen = ciudadObj.BuscarCiudadporNombre(ddlCiudadOrigen.SelectedItem.Text);
            var ciudadDestino = ciudadObj.BuscarCiudadporNombre(ddlCiudadDestino.SelectedItem.Text);
            var tipoVuelo = tipovueloObj.BuscartipoClaseVueloporNombre(ddlClase.SelectedItem.Text);
            try
            {
                var vuelo = new Datos.Vuelo()
                {
                    Aerolinea = txtAerolinea.Text,
                    Capacidad = int.Parse(txtCapacidad.Text),
                    CiudadDestino = ciudadDestino.idCiudad,
                    CiudadOrigen = ciudadOrigen.idCiudad,
                    PrecioBase = int.Parse(txtPrecioBase.Text),
                    Clase = tipoVuelo.idTipoClaseVuelo,
                    Escala = txtEscala.Checked,
                    CantidadEscalas = txtEscala.Checked ? int.Parse(txtNumeroEscalas.Text) : 0,
                    FechaLlegada = FechaLlegada.SelectedDate,
                    FechaSalida = FechaSalida.SelectedDate
                };
                update = Request.QueryString["idVuelo"];

                vuelosObj.ActualizarVuelos(vuelo, update);
                AlertMensaje.Visible = true;
                textoMensaje.InnerHtml = "Hotel actualizado";
            }
            catch (Exception ex)
            {
                mensajeError.Visible = true;
                textoMensajeError.InnerHtml = "No se pudo actualizar";
            }
        }
        protected void llenarCombos()
        {
            ddlCiudadDestino.DataSource = ciudadObj.ListaCiudad().Select(x => x.NombreCiudad);
            ddlCiudadOrigen.DataSource = ciudadObj.ListaCiudad().Select(x => x.NombreCiudad);
            ddlClase.DataSource = tipovueloObj.ListatipoClaseVuelo().Select(x => x.Descripcion);
            ddlClase.DataBind();
            ddlCiudadOrigen.DataBind();
            ddlCiudadDestino.DataBind();
        }
    }
}