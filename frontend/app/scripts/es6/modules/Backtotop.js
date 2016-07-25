class Backtotop {

  constructor () {

    // Backtotop Elements
    var backtotopElement = $('.cm-sat-m-backtotop');

    // Back to top functionality.
    if (backtotopElement.length) {
      var scrollTrigger = 200, // px
      backToTop = function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > scrollTrigger) {
          backtotopElement.addClass('show');
        } else {
          backtotopElement.removeClass('show');
        }
      };
      backToTop();
      $(window).on('scroll', function () {
        backToTop();
      });
      backtotopElement.on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
          scrollTop: 0
        }, 700);
      });
    }

  }
}

module.exports = Backtotop; //set what can be imported from this file
