class Parallax {
    constructor() {
        this.resizeTimer;
        this.flag = true;
        this.wrapper_bottom = 0;
    }

    parallaxResize() {
        let slick_height = document.getElementsByClassName('slider-image')[0];
        let parallaxElement = document.getElementById('cm-sat-m-parallax');
        if(slick_height != null) {
          slick_height = slick_height.clientHeight;
        }
        if(parallaxElement!=null) {
            parallaxElement.style.height = (slick_height + 'px');
        }
    }
    parallaxScroll(){
        let body = document.getElementsByTagName('body');
        let parallaxPanel = document.getElementById('homepage-panel');
        let homepage = document.getElementsByClassName('cm-sat-p-homepage')[0];
        let ele= $('.slider-fixed');
        if (homepage!=null) {
            body[0].classList.add("no-scroll");
            $(parallaxPanel).animate({top: 0}, 2800,function(){
                body[0].classList.remove("no-scroll");
            });
            setTimeout(function(){ ele.fadeIn(); }, 700);
        }
    }

    parallaxReveal() {
        let parallax_wrapper = document.getElementById('parallax-reveal-wrapper');
        let parallax_grid = document.getElementById('parallax-grid');
        let slick_wrap = $('.cover-wrapper');
        if (parallax_wrapper != null && parallax_grid != null) {
            if (this.flag)
                this.wrapper_bottom = parallax_grid.getBoundingClientRect().bottom;
            if (parallax_wrapper.getBoundingClientRect().bottom < this.wrapper_bottom) {
                parallax_wrapper.classList.add('revealed');
                parallax_grid.classList.add('revealed');
                this.flag = false;
                $(slick_wrap).css('position', 'relative');
            }
            if (parallax_grid.getBoundingClientRect().bottom > this.wrapper_bottom) {
                parallax_wrapper.classList.remove('revealed');
                parallax_grid.classList.remove('revealed');
                this.flag = true;
                $(slick_wrap).css('position', 'fixed');
            }
        }
    }
}

var parallax = new Parallax();

if ( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  var sliderImage = $('.slider-image'),
      sliderImageHeight = sliderImage.outerHeight(),
      sliderImageOffset = sliderImageHeight / 7;

  window.onscroll = function () {
    parallax.parallaxReveal();

    if( $('.cm-sat-p-homepage')[0] ) {
      var scrollTop = $(window).scrollTop();

      sliderImage.css({
        top: (((sliderImageHeight - scrollTop) / 7) - Math.floor(sliderImageOffset)) + 'px'
      });
    }
  };
  window.onload= function () {
      // parallax.parallaxScroll();
      clearTimeout(parallax.resizeTimer);
      parallax.resizeTimer = setTimeout(parallax.parallaxResize(), 1);
  }

  $(window).on('resize', function () {
      sliderImageHeight = sliderImage.outerHeight();
      sliderImageOffset = sliderImageHeight / 7;
      clearTimeout(parallax.resizeTimer);
      parallax.resizeTimer = setTimeout(parallax.parallaxResize(), 1);
  });
}
module.exports = Parallax;
