<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="ListarClientes.aspx.cs" Inherits="prograV.UI.Pages.Clientes.ListarClientes" %>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
<div class="alert alert-success" visible="false" id="AlertMensaje" runat="server">
        <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
        <strong id="textoMensaje" runat="server"></strong>
    </div>
    <div class="alert alert-danger" visible="false" id="mensajeError" runat="server">
        <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
        <strong id="textoMensajeError" runat="server"></strong>
    </div>
    <h2>Clientes</h2>
    <div class="form-group">
        <asp:GridView runat="server" ID="gvClientes" AutoGenerateColumns="False" CssClass="table table-hover" OnRowDeleting="gvClientes_RowDeleting">
            <Columns>
                <asp:BoundField HeaderText="Nombre" DataField="Nombre" SortExpression="Nombre"></asp:BoundField>
                <asp:BoundField HeaderText="Apellidos" DataField="Apellidos" SortExpression="Apellidos"></asp:BoundField>
                <asp:BoundField HeaderText="Email" DataField="Email" SortExpression="Email"></asp:BoundField>
                <asp:BoundField DataField="idCliente">
                    <ItemStyle CssClass="hide"></ItemStyle>
                </asp:BoundField>
                <asp:TemplateField>
                    <ItemTemplate>
                        <asp:LinkButton ID="lnkdel" runat="server" Text='<%# "<i class=\"fa fa-minus-circle\" ></i> Eliminar"%>' CommandName="Delete"></asp:LinkButton>
                    </ItemTemplate>
                </asp:TemplateField>
            </Columns>
        </asp:GridView>
    </div>
</asp:Content>
