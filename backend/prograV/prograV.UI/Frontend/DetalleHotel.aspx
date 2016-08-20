<%@ Page Title="" Language="C#" MasterPageFile="~/FrontendView.Master" AutoEventWireup="true" CodeBehind="DetalleHotel.aspx.cs" Inherits="prograV.UI.Frontend.DetalleHotel" %>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
<div class="cm-sat-p-article">
      <section id="parallax-content">
        <article id="cm-sat-m-parallax" class="parallax-panel" data-start ="z-index:2" data-550-start="z-index:-1">
          <div class="cover-wrapper">
            <div class="cm-sat-m-slider cm-sat-is-article">
              <div class="js-slick-slider">
                <div class="slider-item">
                  <img class="hidden-xs img-responsive slider-image" src="images/sliders/article.jpg" alt="">
                  <img class="visible-xs img-responsive slider-image" src="images/sliders/article-mobile.jpg" alt="">
                  <div class="sat-shadow"></div>
                  <div class="slider-container">
                    <div class="slider-title">
                      <h1>Whale Watching</h1>
                      <h3>Eye-to-eye with the ocean’s gentle giants</h3>
                    </div>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article id="parallax-reveal-wrapper" class="parallax-panel">
          
          <div class="sat-container">
            <p class="heading">Whether you visit South Africa’s whale-watching capital Hermanus or choose a scenic spot along the Garden Route or Wild Coast, seeing these marine giants in their natural environment is an experience that you won’t want to miss.</p>
            <p class="quote">This is a quote section. It doesn’t have a character limit of some sort but it’s very likely that it breaks above a couple of lines like seen in this example.</p>
          </div>
          
          
        </article>
        <article id="parallax-grid" data-start ="z-index:-1">
          <div class="cm-sat-m-related">
            <div class="container">
              <div class="row">
                <div class="col-xs-12 text-center">
                  <h2>Keep your adventure going</h2>
                </div>
              </div>
              <div class="row js-slick-related">
                <div class="col-xs-12 col-md-2">
                  <a href="#">
                    <div class="related-item">
                      <div class="related-image" style="background-image: url(images/grids/related.jpg);"></div>
                      <div class="sat-shadow"></div>
                      <div class="related-content">
                        <div class="category">
                          <button class="btn btn-category">Article</button>
                        </div>
                        <h4>Nature Reserves Of The Free State</h4>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="col-xs-12 col-md-2">
                  <a href="#">
                    <div class="related-item">
                      <div class="related-image" style="background-image: url(images/grids/related.jpg);"></div>
                      <div class="sat-shadow"></div>
                      <div class="related-content">
                        <div class="category">
                          <button class="btn btn-category">Article</button>
                        </div>
                        <h4>Nature Reserves Of The Free State</h4>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="col-xs-12 col-md-2">
                  <a href="#">
                    <div class="related-item">
                      <div class="related-image" style="background-image: url(images/grids/related.jpg);"></div>
                      <div class="sat-shadow"></div>
                      <div class="related-content">
                        <div class="category">
                          <button class="btn btn-category">Article</button>
                        </div>
                        <h4>Nature Reserves Of The Free State</h4>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="col-xs-12 col-md-2">
                  <a href="#">
                    <div class="related-item">
                      <div class="related-image" style="background-image: url(images/grids/related.jpg);"></div>
                      <div class="sat-shadow"></div>
                      <div class="related-content">
                        <div class="category">
                          <button class="btn btn-category">Article</button>
                        </div>
                        <h4>Nature Reserves Of The Free State</h4>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="col-xs-12 col-md-2">
                  <a href="#">
                    <div class="related-item">
                      <div class="related-image" style="background-image: url(images/grids/related.jpg);"></div>
                      <div class="sat-shadow"></div>
                      <div class="related-content">
                        <h4>Nature Reserves Of The Free State</h4>
                        <span class="price">&euro;1,300</span>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="col-xs-12 col-md-2">
                  <a href="#">
                    <div class="related-item">
                      <div class="related-image" style="background-image: url(images/grids/related.jpg);"></div>
                      <div class="sat-shadow"></div>
                      <div class="related-content">
                        <h4>Nature Reserves Of The Free State</h4>
                        <span class="price">&euro;1,300</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
    
<asp:ListView runat="server" ID="lvDetalleHotel">

</asp:ListView>
</asp:Content>
