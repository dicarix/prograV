// Slick slider - main images.
// Homepage Related Slick slider.
// Homepage Social Slick slider.
class Slick {

  constructor () {

    // Slick Elements
    this.sliderElement = $('.js-slick-slider');
    this.exploreElement = $('.cm-sat-m-explore');
    this.exploreSlider = $('.explore-slider');
    this.exploreNav = $('.explore-nav');
    this.relatedElement = $('.js-slick-related');
    this.socialElement = $('.js-slick-social');
    this.sliderTop10Element = $('.js-slider-top10');
    this.sliderChartElement = $('.js-slider-chart');
    let homepageMapElement=$('.js-slick-homepage-map');

    this.sliderOptions = {
      arrows: false,
      dots: true,
      autoplay: true,
      speed: 1000,
      pauseOnHover: false
    }

    this.exploreOptions = {
      arrows: false,
      dots: false,
      infinite: false,
      accessibility: false,
      draggable: false,
      swipe: true,
      vertical: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            dots: true,
            vertical: false
          }
        }
      ]
    }

    this.relatedOptions = {
      arrows: false,
      dots: true,
      slidesToShow: 6,
      slidesToScroll: 6,
      responsive: [
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true
        }
      }
      ]
    }

    this.socialOptions = {
      arrows: false,
      dots: true,
      slidesToShow: 6,
      slidesToScroll: 6,
      responsive: [
        {
          breakpoint: 1180,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    }

    this.homepageMapOptions={
      autoPlay:false,
      arrows:true,
      dots:true,
      slidesToShow: 1,
      infinite:false,
      adaptiveHeight: true
    }

    this.sliderTop10Options = {
      adaptiveHeight: true,
      arrows: true,
      dots: true,
      infinite: false,
      accessibility: false,
      draggable: false,
      swipe: false
    }

    this.sliderChartOptions = {
      arrows: false,
      dots: true,
      infinite: false,
      accessibility: false,
      draggable: false
    }

    //Init of the sliders
    this.relatedElement.slick(this.relatedOptions);
    this.socialElement.slick(this.socialOptions);
    this.sliderElement.slick(this.sliderOptions);
    this.sliderTop10Element.slick(this.sliderTop10Options);
    this.sliderChartElement.slick(this.sliderChartOptions);
    homepageMapElement.slick(this.homepageMapOptions);

      //Slider Events
      this.exploreNav.on('click', 'li', function() {
      var $this = $(this),
          slideIndex = $this.index();
      $('.explore-slider').slick( 'slickGoTo', slideIndex );
      $('.explore-nav').find('li').removeClass('active');
      $this.addClass('active');
    });

      this.exploreElement.on('shown.bs.modal', () => {
          this.exploreSlider.slick(this.exploreOptions);
      $('.explore-nav').find('li').removeClass('active');
      $('.explore-nav').find('li').first().addClass('active');
  });
        this.exploreElement.on('hidden.bs.modal', () => {
        this.exploreSlider.slick('unslick');
});

    // We were checking for user agent before.
    $(window).on('load',()=>{
        animateStats(0);
    });
    this.sliderElement.on('afterChange', (event, slick, currentSlide) => {
        animateStats(currentSlide);
    });

    this.sliderElement.on('beforeChange', (event, slick, currentSlide, nextSlide) => {
        hideStats(currentSlide,slick.slideCount);
    });


$('.cm-sat-m-homepage-map-slider').on('click', '.js-provinces-item', function() {
  var index = $(this).index() + 1;
  homepageMapElement.slick( 'slickGoTo', index );
});

//End Homepage Map Slider events

    // media query event handler
    if (matchMedia) {
      var mq = window.matchMedia('(max-width: 767px)');
      mq.addListener(WidthChange);
      WidthChange(mq);
    }
    // media query change
    function WidthChange(mq) {
      var alternativeSlick = $('.js-slick-alternative'),
          socialchartSlick = $('.js-slider-socialchart');
      if (mq.matches) {
        alternativeSlick.slick({
          arrows: false,
          dots: true,
          centerMode: true,
          centerPadding: '30px',
          adaptiveHeight: true
        });

        socialchartSlick.slick({
          arrows: false,
          dots: true,
          centerMode: true,
          centerPadding: '30px'
        });
      }
      else {
        if( alternativeSlick.hasClass('slick-initialized') ) {
          alternativeSlick.slick('unslick');
        }
        if( socialchartSlick.hasClass('slick-initialized') ) {
          socialchartSlick.slick('unslick');
        }
      }
    }
    // Hide Homepage Slider Stats
    function hideStats(slide, numberOfSlides){
    if(slide === numberOfSlides-1){
        hideStats(-1,numberOfSlides);
    }
    slide=slide+1;
    let prevslide = $('div[data-slick-index=' + slide + ']');
    let container = prevslide.find(".slider-info");
    container = container.find(".slider-stats");
    $(container).toArray().map(function(stat) {
        return function(){
            return $(stat).hide().promise();
        };
    }).reduce(function(cur, next) {
        return cur.then(next);
    }, $().promise());
    }
    // Animate Homepage Slider Stats
    function animateStats(currentSlide) {
    let slide = $('div[data-slick-index='+currentSlide+']');
    let container=slide.find(".slider-info");
    container=container.find(".slider-stats");
    $(container).toArray().map(function(stat) {
        return function () {
            return $(stat).fadeIn().promise();
        };
    }).reduce(function( cur, next ) {
        return cur.then(next);
    }, $().promise());
    }
  }
}
module.exports = Slick; //set what can be imported from this file
