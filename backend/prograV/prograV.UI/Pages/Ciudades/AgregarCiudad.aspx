<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="AgregarCiudad.aspx.cs" Inherits="prograV.UI.Pages.Ciudades.AgregarCiudad" EnableViewState="true" %>

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
            <legend>Agregar Ciudad</legend>
            <div class="row form-group">
                    <label class="col-md-4 control-label" for="txtNombreCiudad">Nombre Ciudad</label>
                    <div class="col-md-4">
                        <asp:TextBox ID="txtNombreCiudad" runat="server" name="txtNombreCiudad" class="form-control input-md" required=""></asp:TextBox>
                    </div>
                </div>
                <div class="row form-group">
                    <label class="col-md-4 control-label" for="txtNombrePais">Pais</label>
                    <div class="col-md-4">
                        <asp:DropDownList ID="ddlPais" runat="server" CssClass="form-control"></asp:DropDownList>
                    </div>
                </div>
        </fieldset>
        <asp:Button Text="Agregar" ID="btnAgregarCiudad" runat="server" OnClick="btnAgregarCiudad_Click" class="btn btn-primary" />
        <asp:Button Text="Actualizar" ID="btnActualizarCiudad" Visible="false" runat="server" OnClick="btnActualizarCiudad_Click" class="btn btn-primary" />
    </div>
</asp:Content>
