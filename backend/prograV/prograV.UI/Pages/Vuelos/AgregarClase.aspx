<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="AgregarClase.aspx.cs" Inherits="prograV.UI.Pages.Vuelos.AgregarClase" %>
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
            <legend>Agregar Clase Vuelo</legend>
            <div class="form-group">
                <label class="col-md-4 control-label" for="txtTipoClase">Clase</label>
                <div class="col-md-4">
                    <asp:TextBox ID="txtTipoClase" runat="server" name="txtTipoClase" class="form-control input-md" required=""></asp:TextBox>
                    
                </div>
            </div>
        </fieldset>
        <asp:Button Text="Agregar" ID="btnAgregarClase" runat="server" OnClick="btnAgregarClase_Click" class="btn btn-primary" />
        <asp:Button Text="Actualizar" ID="btnActualizarClase" Visible="false" runat="server" OnClick="btnActualizarClase_Click" class="btn btn-primary" />
    </div>
</asp:Content>
