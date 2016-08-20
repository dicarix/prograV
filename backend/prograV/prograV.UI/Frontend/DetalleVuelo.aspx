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
                    <p class="heading" >Conoce nuestro hotel y sus caracteristicas</p>
                    <p class="quote" style="display: inline;">Estrellas <p style="display: inline;" id="estrellasTxt" runat="server"> </p></p>

                    <p class="quote" style="display: inline;">Costo Noche <p style="display: inline;" id="costoNocheTxt" runat="server"> </p></p>
                    <p class="quote" style="display: inline;">Costo Base <p style="display: inline;" id="costoBaseTxt" runat="server"> </p></p>
                
                </div>


            </article>

        </section>
    </div>

    <article id="parallax-grid" data-start="z-index:-1">
        <div class="cm-sat-m-related">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 text-center">
                        <h2>Visita Nuestros hoteles</h2>
                    </div>
                </div>
                <div class="row js-slick-related">
                    <asp:ListView runat="server" ID="lvHoteles">
                        <LayoutTemplate>
                            <asp:PlaceHolder ID="itemPlaceholder" runat="server"></asp:PlaceHolder>
                        </LayoutTemplate>
                        <ItemTemplate>
                            <div class="col-xs-12 col-md-2">
                                <a href="/Frontend/DetalleHotel?idHotel=<%#Eval("idHotel") %>">
                                    <div class="related-item">
                                        <div class="related-image" style="background-image: url(images/grids/related.jpg);"></div>
                                        <div class="sat-shadow"></div>
                                        <div class="related-content">
                                         
                                           <span class="price"><%#Eval("NombreHotel") %></p>

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
