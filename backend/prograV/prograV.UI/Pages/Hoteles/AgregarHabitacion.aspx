<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="AgregarHabitacion.aspx.cs" Inherits="prograV.UI.Pages.Hoteles.AgregarHabitacion" %>
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
            <legend>Agregar Habitacion</legend>
            <div class="form-group">
                <label class="col-md-4 control-label" for="txtHabitacion">Tipo Habitacion</label>
                <div class="col-md-4">
                    <asp:TextBox ID="txtHabitacion" runat="server" name="txtHabitacion" class="form-control input-md" required=""></asp:TextBox>

                </div>
            </div>
        </fieldset>
        <asp:Button Text="Agregar" ID="btnAgregarHabitacion" runat="server" OnClick="btnAgregarHabitacion_Click" class="btn btn-primary" />
        <asp:Button Text="Actualizar" ID="btnActualizarHabitacion" Visible="false" runat="server" OnClick="btnActualizarHabitacion_Click" class="btn btn-primary" />
    </div>
</asp:Content>
