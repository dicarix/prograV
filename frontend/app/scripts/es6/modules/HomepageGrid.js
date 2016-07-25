class HomepageGrid {

  constructor () {

    // HomepageGrid Elements
    this.homepageGridElement = $('.cm-sat-m-homepage-grid');

    // Manage Height Of Grid Elements
    this.homepageGridElement.find('.is-desktop .full-height img').matchHeight({ byRow: false });
    this.homepageGridElement.find('.is-desktop .half-height img').matchHeight({ byRow: false });


    // Manage Hover Styles
    this.homepageGridElement.on('click', '.item-hover', function(e) {
      $(this).addClass('active');
    });

    this.homepageGridElement.find('.item-hover').hover(
      function() {
        $(this).addClass('active');
      }, function() {
        $(this).removeClass('active');
      }
    );

    this.homepageGridElement.on('click', '.hover-close', function() {
      $(this).parent('.item-hover').removeClass('active');
      e.stopPropatation();
    });

    this.homepageGridElement.imagesLoaded( () => {
      $('.loading').removeClass('loading');
    });

    var video = this.homepageGridElement.find('.youtube-iframe iframe');
    $(window).resize(() => {
      video.attr("src", video.attr("src"));
    });

  }
}

module.exports = HomepageGrid; //set what can be imported from this file
