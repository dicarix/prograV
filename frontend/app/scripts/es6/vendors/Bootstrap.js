class Bootstrap {

  constructor () {

    // Bootstrap Elements
    this.dropdownElement = $('.dropdown-menu > li > a.dropdown-toggle');
    this.navElement = $('.nav-item');
    this.navToggleElement = $('.js-nav-toggle');
    this.footerElement = $('.cm-sat-m-footer');
    this.exploreElement = $('.cm-sat-m-explore');
    this.wishlistElement = $('#nav-dropdown-wishlist');

    // Click bootstrap dropdowns inside other dropdowns.
    this.dropdownElement.on('click', function (e) {
      e.preventDefault();
      var $this = $(this);
      $this.next().toggle();
      e.stopPropagation();
      $this.find('.nav-caret').toggleClass('hide');
    });

    // Close dropdowns when you open other dropdown
    this.navToggleElement.on('click', function () {
      var $this = $(this),
          thisDropdown = $(this).next(),
          closestParent = $this.closest('.js-nav-toggle-parent');
      if( thisDropdown.hasClass('open') ) {
        thisDropdown.removeClass('open');
      } else {
        closestParent.find('.open').prev().find('.nav-caret').toggleClass('hide');
        closestParent.find('.dropdown-menu').removeClass('open').hide();
        thisDropdown.addClass('open');
      }
    });

    // Show/Hide close SVG when the dropdown change.
    this.navElement.on('shown.bs.dropdown hidden.bs.dropdown', function() {
      var $this = $(this);
      $this.find('.nav-icon').toggleClass('hide');
      $this.find('.nav-text').toggleClass('hide');
      if($this.data('nav') === 'menu') {
        $('.cm-sat-m-nav').toggleClass('nav-open');
      }
      $('#exploreModal').modal('hide');
      $('.cm-sat-m-mask').toggleClass('in');
    });

    // Show/Hide SVG and text when the modal change.
    this.exploreElement.on('shown.bs.modal hidden.bs.modal', function() {
      var exploreItem = $('.nav-explore'),
          slickSlider = $('.js-slick-slider');
      exploreItem.find('.nav-icon').toggleClass('hide');
      exploreItem.find('.nav-text').toggleClass('hide');
      if( $(this).hasClass('in') ) {
        slickSlider.slick('slickPause');
      } else {
        slickSlider.slick('slickPlay');
      }
    });

    this.wishlistElement.on('click', function(e) {
      if( Cookies.get('wishlist') !== undefined && Cookies.getJSON('wishlist').length > 0 ) {
        e.stopPropagation();
        window.location.href = '/wishlist.html';
      }
    });

    // Hide footer accordions when you click on a different accordion.
    this.footerElement.find('.collapse').on('show.bs.collapse', function() {
      $('.collapse').not(this).collapse('hide');
    });

    // Hide popover on click outside.
    var $body = $('body');
    $body.on('shown.bs.popover', '[data-toggle="popover"]', function() {
      var $this = $(this);
      $body.on('click.popoveropen', function (e) {
        if (!$this.is(e.target) && $this.has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
          $this.click();
          e.stopPropagation();
        }
      });
    }).on('hidden.bs.popover', function() {
      $body.off('click.popoveropen');
    });

    // media query event handler
    if (matchMedia) {
      var mq = window.matchMedia('(max-width: 768px)');
      mq.addListener(WidthChange);
      WidthChange(mq);
    }
    // media query change
    function WidthChange(mq) {
      if (mq.matches) {
        $('.js-share-fixed-popover').attr('data-placement', 'bottom')
        $('.js-share-fixed-popover').popover();

        $('.js-wishlist-delete').attr('data-placement', 'bottom')
        $('.js-wishlist-delete').popover();
      }
      else {
        $('.js-share-fixed-popover').attr('data-placement', 'auto right')
        $('.js-share-fixed-popover').popover();

        $('.js-wishlist-delete').attr('data-placement', 'auto right')
        $('.js-wishlist-delete').popover();
      }
    }

  }
}

module.exports = Bootstrap; //set what can be imported from this file
