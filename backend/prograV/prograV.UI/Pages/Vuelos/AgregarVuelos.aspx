<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="AgregarVuelos.aspx.cs" Inherits="prograV.UI.Pages.Vuelos.AgregarVuelos" %>


<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">

    <div class="alert alert-success" visible="false" id="AlertMensaje" runat="server">
        <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
        <strong id="textoMensaje" runat="server"></strong>
    </div>
    <div class="alert alert-danger" visible="false" id="mensajeError" runat="server">
        <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
        <strong id="textoMensajeError" runat="server"></strong>
    </div>

            <div class="form-horizontal">
            <fieldset>
                <legend>Agregar Vuelo</legend>
                <div class="row form-group">
                    <label class="col-md-4 control-label" for="txtAerolinea">Aerolinea</label>
                    <div class="col-md-4">
                        <asp:TextBox ID="txtAerolinea" runat="server" name="txtAerolinea" class="form-control input-md" required=""></asp:TextBox>
                    </div>
                </div>

                <div class="row form-group">
                    <label class="col-md-4 control-label" for="ddlCiudadOrigen">Ciudad Origen</label>
                    <div class="col-md-4">
                        <asp:DropDownList ID="ddlCiudadOrigen" runat="server" CssClass="form-control"></asp:DropDownList>
                    </div>
                </div>

                <div class="row form-group">
                    <label class="col-md-4 control-label" for="ddlCiudadDestino">Ciudad Destino</label>
                    <div class="col-md-4">
                        <asp:DropDownList ID="ddlCiudadDestino" runat="server" CssClass="form-control"></asp:DropDownList>
                    </div>
                </div>

                <div class="row form-group">
                    <label class="col-md-4 control-label" for="ddlClase">Clase</label>
                    <div class="col-md-4">
                        <asp:DropDownList ID="ddlClase" runat="server" CssClass="form-control"></asp:DropDownList>
                    </div>
                </div>

                <div class="row form-group">
                <label class="col-md-4 control-label" for="FechaSalida">Fecha Salida</label>
                    <div class="col-md-4">
                        <asp:Calendar runat="server" ID="FechaSalida"></asp:Calendar>

                    </div>
                </div>

                <div class="row form-group">
                    <label class="col-md-4 control-label" for="FechaLlegada">Fecha Llegada</label>
                    <div class="col-md-4">
                        <asp:Calendar runat="server" ID="FechaLlegada"></asp:Calendar>

                    </div>
                </div>

                <div class="row form-group">
                    <label class="col-md-4 control-label" for="txtCapacidad">Capacidad</label>
                    <div class="col-md-4">
                        <asp:TextBox ID="txtCapacidad" runat="server" name="txtCapacidad" class="form-control input-md" required=""></asp:TextBox>
                    <ajaxToolkit:FilteredTextBoxExtender ID="FilteredTextBoxExtender2" runat="server"
                    Enabled="True" TargetControlID="txtCapacidad" FilterType="Numbers"></ajaxToolkit:FilteredTextBoxExtender>
                    </div>
                </div>

                <div class="row form-group">
                    <label class="col-md-4 control-label" for="txtPrecioBase">Precio Base</label>
                    <div class="col-md-4">
                        <asp:TextBox ID="txtPrecioBase" runat="server" name="txtPrecioBase" class="form-control input-md" required=""></asp:TextBox>
                    </div>
                </div>

                <div class="row form-group">
                    <label class="col-md-4 control-label" for="txtAerolinea">Tiene Escala</label>
                    <div class="col-md-4">
                       <asp:CheckBox Text="" ID="txtEscala" runat="server" />
                   </div>
               </div>

               <div class="row form-group">
                <label class="col-md-4 control-label" for="txtNumeroEscalas">Escalas</label>
                <div class="col-md-4">
                    <asp:TextBox ID="txtNumeroEscalas" runat="server" name="txtNumeroEscalas" class="form-control input-md" required=""></asp:TextBox>
                    <ajaxToolkit:FilteredTextBoxExtender ID="TextBox1_FilteredTextBoxExtender" runat="server"
                    Enabled="True" TargetControlID="txtNumeroEscalas" FilterType="Numbers"></ajaxToolkit:FilteredTextBoxExtender>
                </div>
            </div>
        </fieldset>
        <asp:Button Text="Agregar" ID="btnAgregarVuelo" runat="server" OnClick="btnAgregarVuelo_Click" class="btn btn-primary" />
        <asp:Button Text="Actualizar" ID="btnActualizarVuelo" Visible="false" runat="server" OnClick="btnActualizarVuelo_Click" class="btn btn-primary" />
    </div>
</asp:Content>
