<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="ListarCiudades.aspx.cs" Inherits="prograV.UI.Pages.Ciudades.ListarCiudades" %>

<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
    <div class="alert alert-success" visible="false" id="AlertMensaje" runat="server">
        <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
        <strong id="textoMensaje" runat="server"></strong>
    </div>
    <div class="alert alert-danger" visible="false" id="mensajeError" runat="server">
        <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
        <strong id="textoMensajeError" runat="server"></strong>
    </div>
    <h2>Paises</h2>
    <div class="form-group">
        <asp:GridView runat="server" ID="gvCiudades" AutoGenerateColumns="False" CssClass="table table-hover" OnRowCommand="gvCiudades_RowCommand" OnRowDeleting="gvCiudades_RowDeleting">
            <Columns>
                
                <asp:BoundField HeaderText="Ciudad" DataField="nombreCiudad" SortExpression="nombreCiudad"></asp:BoundField>
                <asp:BoundField HeaderText="Pais" DataField="nombrePais" SortExpression="nombrePais"></asp:BoundField>
                <asp:BoundField DataField="idCiudad">
                        <ItemStyle CssClass="hide"></ItemStyle>
                </asp:BoundField>
                <asp:TemplateField>
                    <ItemTemplate>
                        <asp:LinkButton ID="btnModificar" runat="server"
                            CommandName="Modificar"
                            CommandArgument="<%# ((GridViewRow) Container).RowIndex %>"
                            Text='<%# "<i class=\"fa fa-pencil-square\" ></i> Modificar"%>' />
                    </ItemTemplate>
                </asp:TemplateField>
                <asp:TemplateField>
                    <ItemTemplate>
                        <asp:LinkButton ID="lnkdel" runat="server" Text='<%# "<i class=\"fa fa-minus-circle\" ></i> Eliminar"%>' CommandName="Delete"></asp:LinkButton>
                    </ItemTemplate>
                </asp:TemplateField>
            </Columns>
        </asp:GridView>
    </div>
</asp:Content>
