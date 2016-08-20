<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="AgregarHotel.aspx.cs" Inherits="prograV.UI.Pages.Hoteles.AgregarHotel" %>

<%@ Register TagPrefix="AjaxControlToolkit " Namespace="AjaxControlToolkit " Assembly="AjaxControlToolkit" %>
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
            <legend>Agregar Hotel</legend>
            <div class="row form-group">
                <label class="col-md-4 control-label" for="txtNombreHotel">Nombre Hotel</label>
                <div class="col-md-4">
                    <asp:TextBox ID="txtNombreHotel" runat="server" name="txtNombreHotel" class="form-control input-md" required=""></asp:TextBox>
                </div>
            </div>

            <div class="row form-group">
                <label class="col-md-4 control-label" for="txtDescripcion">Descripcion</label>
                <div class="col-md-4">
                    <asp:TextBox ID="txtDescripcion" runat="server" name="txtDescripcion" class="form-control input-md" required=""></asp:TextBox>
                </div>
            </div>

            <div class="row form-group">
                <label class="col-md-4 control-label" for="txtCostoNoche">Costo Noche</label>
                <div class="col-md-4">
                    <asp:TextBox ID="txtCostoNoche" runat="server" name="txtCostoNoche" class="form-control input-md" required=""></asp:TextBox>
                </div>
            </div>

            <div class="row form-group">
                <label class="col-md-4 control-label" for="txtCostoBase">Costo Base</label>
                <div class="col-md-4">
                    <asp:TextBox ID="txtCostoBase" runat="server" name="txtCostoBase" class="form-control input-md" required=""></asp:TextBox>
                </div>
            </div>

            <div class="row form-group">
                <label class="col-md-4 control-label" for="txtCostoBase">Estrellas</label>
                <div class="col-md-4">
                    <ajaxToolkit:Rating ID="hotelRating" runat="server" OnClick="hotelRating_Changed"
                        CurrentRating="1"
                        MaxRating="5"
                        StarCssClass="ratingStar"
                        WaitingStarCssClass="savedRatingStar"
                        FilledStarCssClass="filledRatingStar"
                        EmptyStarCssClass="emptyRatingStar"
                        OnChanged="hotelRating_Changed">
                    </ajaxToolkit:Rating>
                </div>
            </div>

            <div class="row form-group">
                <label class="col-md-4 control-label" for="ddlPais">Pais</label>
                <div class="col-md-4">
                    <asp:DropDownList ID="ddlPais" runat="server" CssClass="form-control"></asp:DropDownList>
                </div>
            </div>
            <div class="row form-group">
                <label class="col-md-4 control-label" for="ddlHabitacion">Habitacion</label>
                <div class="col-md-4">
                    <asp:DropDownList ID="ddlHabitacion" runat="server" CssClass="form-control"></asp:DropDownList>
                </div>
            </div>
        </fieldset>
        <asp:Button Text="Agregar" ID="btnAgregarhotel" runat="server" OnClick="btnAgregarhotel_Click" class="btn btn-primary" />
        <asp:Button Text="Actualizar" ID="btnActualizarHotel" Visible="false" runat="server" OnClick="btnActualizarHotel_Click" class="btn btn-primary" />
    </div>
</asp:Content>
