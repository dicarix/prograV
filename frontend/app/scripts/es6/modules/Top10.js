class Top10 {

  constructor () {

    // Top10 Element
    this.top10Element = $('.cm-sat-p-top10map');
    this.fixedElement = $('.container-fixed');

    // Top10 header fade out
    this.fixedElement.find('.header').delay(500).fadeTo('slow', 1)
    this.fixedElement.find('.description').delay(1000).fadeTo('slow', 1);
    this.fixedElement.delay(2300).fadeOut();
    this.top10Element.find('.cm-sat-m-map').delay(2700).fadeTo('slow', 1);

    // Top10 close slider
    this.top10Element.on('click', '.close-slider', function() {
      $('.cm-sat-m-slider-top10').removeClass('active');
    });

    // Prevent parent slider from moving when the child slider is moving / add active class
    $('.js-slider-chart').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      event.stopPropagation();
      $(this).closest('.s-item-stats').find('.chart-stat').removeClass('active').eq(nextSlide).addClass('active');
    });
    // Prevent parent slider from moving when the child slider is moving / add active class
    $('.js-slider-socialchart').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      event.stopPropagation();
    });

    // Add Click event on left stats
    this.top10Element.on('click', '.chart-stat', function() {
      var $this = $(this),
          index = $this.index();
      $this.closest('.s-item-stats').find('.js-slider-chart').slick('slickGoTo', index);
    });


    // media query event handler
    if (matchMedia) {
      var mq = window.matchMedia('(max-width: 767px)');
      mq.addListener(WidthChange);
      WidthChange(mq);
    }
    // media query change
    function WidthChange(mq) {
      if (mq.matches) {
      }
      else {
        // Set height of chart
        $('.chart-item').height( $('.chart-stat').parent().outerHeight() );
      }
    }

  }
}

module.exports = Top10; //set what can be imported from this file
