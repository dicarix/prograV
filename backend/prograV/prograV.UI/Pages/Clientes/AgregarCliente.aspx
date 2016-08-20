<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="AgregarCliente.aspx.cs" Inherits="prograV.UI.Pages.Clientes.AgregarCliente" %>
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
            <legend>Agregar Cliente</legend>
            <div class="row form-group">
                <label class="col-md-4 control-label" for="txtNombrePais">Nombre</label>
                <div class="col-md-4">
                    <asp:TextBox ID="txtNombre" runat="server" name="txtNombrePais" class="form-control input-md" required=""></asp:TextBox>

                </div>
            </div>
            
            <div class="row form-group">
                <label class="col-md-4 control-label" for="txtApellidos">Apellidos</label>
                <div class="col-md-4">
                    <asp:TextBox ID="txtApellidos" runat="server" name="txtApellidos" class="form-control input-md" required=""></asp:TextBox>

                </div>
            </div>
            <div class="row form-group">
                <label class="col-md-4 control-label" for="txtContrasena">Contrasena</label>
                <div class="col-md-4">
                    <asp:TextBox ID="txtContrasena" runat="server" name="txtContrasena" class="form-control input-md" required=""></asp:TextBox>

                </div>
            </div>
            <div class="row form-group">
                <label class="col-md-4 control-label" for="txtEmail">Email</label>
                <div class="col-md-4">
                    <asp:TextBox ID="txtEmail" runat="server" name="txtEmail" class="form-control input-md" required=""></asp:TextBox>

                </div>
            </div>
            <div class="row form-group">
                <label class="col-md-4 control-label" for="txtTelefono">Telefono</label>
                <div class="col-md-4">
                    <asp:TextBox ID="txtTelefono" runat="server" name="txtTelefono" class="form-control input-md" required=""></asp:TextBox>

                </div>
            </div>
        </fieldset>
        <asp:Button Text="Agregar" ID="btnAgregarCliente" runat="server" OnClick="" class="btn btn-primary" />
        <asp:Button Text="Actualizar" ID="btnActualizarCliente" Visible="false" runat="server" OnClick="" class="btn btn-primary" />
    </div>
</asp:Content>


