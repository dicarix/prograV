<%@ Page Title="" Language="C#" MasterPageFile="~/FrontendView.Master" AutoEventWireup="true" CodeBehind="DetalleVuelo.aspx.cs" Inherits="prograV.UI.Frontend.DetalleVuelo" %>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
<div class="cm-sat-p-article">
    <section id="parallax-content">
        <article id="cm-sat-m-parallax" class="parallax-panel" data-start="z-index:2" data-550-start="z-index:-1">
            <div class="cover-wrapper">
                <div class="cm-sat-m-slider cm-sat-is-article">
                    <div class="js-slick-slider">
                        <div class="slider-item">
                            <img class="hidden-xs img-responsive slider-image" src="images/sliders/search.jpg" alt="">
                            <img class="visible-xs img-responsive slider-image" src="images/sliders/search-mobile.jpg" alt="">
                            <div class="sat-shadow"></div>
                            <div class="slider-container">
                                <div class="slider-title">
                                    <h1 id="vuelo" runat="server"></h1>
                                    <h3 id="DescripcionTxt" runat="server"></h3>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
        <article id="parallax-reveal-wrapper" class="parallax-panel">

            <div class="sat-container">
                <p class="heading" > Detalles</p>
                
                <p class="quote" style="display: inline;">Ciudad Origen <p style="display: inline;" id="ciudadOrigentxt" runat="server"> </p></p>
                <p class="quote" style="display: inline;">Ciudad Destino <p style="display: inline;" id="ciudadDestinotxt" runat="server"> </p></p>
                <p class="quote" style="display: inline;">Fecha Salida <p style="display: inline;" id="fechaSalidatxt" runat="server"> </p></p>
                <p class="quote" style="display: inline;">Fecha LLegada <p style="display: inline;" id="fechaLLegadatxt" runat="server"> </p></p>
                <p class="quote" style="display: inline;">Capacidad <p style="display: inline;" id="capacidadtxt" runat="server"> </p></p>
                <p class="quote" style="display: inline;">Aerolinea <p style="display: inline;" id="aerolineatxt" runat="server"> </p></p>

                <p class="quote" style="display: inline;">Precio Base <p style="display: inline;" id="precioBasetxt" runat="server"> </p></p>

                <p class="quote" style="display: inline;">Clase <p style="display: inline;" id="clasetxt" runat="server"> </p></p>

                <p class="quote" style="display: inline;">Tiene Escalas <p style="display: inline;" id="escalasTxt" runat="server"> </p></p>

                <p class="quote" style="display: inline;">Cantidad Escalas<p style="display: inline;" id="cantidadEscalaTxt" runat="server"> </p></p>


                
                
            </div>


        </article>

    </section>
</div>

<article id="parallax-grid" data-start="z-index:-1">
    <div class="cm-sat-m-related">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 text-center">
                    <h2>Otros Vuelos</h2>
                </div>
            </div>
            <div class="row js-slick-related">
                <asp:ListView runat="server" ID="lvVuelos">
                <LayoutTemplate>
                    <asp:PlaceHolder ID="itemPlaceholder" runat="server"></asp:PlaceHolder>
                </LayoutTemplate>
                <ItemTemplate>
                    <div class="col-xs-12 col-md-2">
                        <a href="/Frontend/DetalleVuelo?idVuelo=<%#Eval("idVuelo") %>">
                            <div class="related-item">
                                <div class="related-image" style="background-image: url(images/grids/related.jpg);"></div>
                                <div class="sat-shadow"></div>
                                <div class="related-content">
                                   <h2><%#Eval("Aerolinea") %></h4>
                                   <h2><%#Eval("Ciudad") %></h2>
                               </div>
                           </div>
                       </a>
                   </div>
               </ItemTemplate>
           </asp:ListView>
       </div>

   </div>
</div>
</article>
</asp:Content>
