class Wishlist {

  constructor () {

    // Wishlist Elements
    var wishlistSaveElement = $('.js-wishlist-save'),
        wishlistDeleteElement = $('.js-wishlist-delete'),
        slug = window.location.pathname.split( '/' ),
        slug = slug.slice(-1)[0];

    // Wishlist Cookie has not been created yet.
    if( Cookies.get('wishlist') === undefined ) {
      wishlistDeleteElement.addClass('hide');
    // Wishlist Cookie is already created.
    } else {
      // Wishlist Cookie was created but this page is not part of it.
      if( Cookies.getJSON('wishlist').indexOf(slug) === -1 ) {
        wishlistDeleteElement.addClass('hide');
      // Wishlist Cookie was created and this page is part of it.
      } else {
        wishlistSaveElement.addClass('hide');
      }
    }

    // Share Fixed Save Functionality
    wishlistSaveElement.on('click', function() {

      // Wishlist Cookie has not been created yet.
      if( Cookies.get('wishlist') === undefined ) {
        var cookieValue = [];
        cookieValue.push(slug);
        Cookies.set('wishlist', cookieValue );
      // Wishlist Cookie is already created.
      } else {
        var cookieValue = Cookies.getJSON('wishlist');
        cookieValue.push(slug);
        Cookies.set('wishlist', cookieValue );
      }

      wishlistSaveElement.addClass('hide');
      wishlistDeleteElement.removeClass('hide');

    });

    wishlistDeleteElement.on('shown.bs.popover', function() {
      var thisPopover = $(this);
      // Hide Popover
      $('.btn-wishlist-no').on('click', function(e) {
        e.preventDefault();
        thisPopover.click();
      });

      // Remove Popover And Remove Cookie
      $('.btn-wishlist-yes').on('click', function(e) {
        e.preventDefault();

        var cookieValue = Cookies.getJSON('wishlist'),
            cookieIndex = cookieValue.indexOf(slug);
        cookieValue.splice(cookieIndex, 1);
        Cookies.set('wishlist', cookieValue );

        thisPopover.click();
        wishlistDeleteElement.addClass('hide');
        wishlistSaveElement.removeClass('hide');
      });
    });

  }
}

module.exports = Wishlist; //set what can be imported from this file
