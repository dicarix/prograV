class Filter {

  constructor () {

    var resultsItemTotal = $('.results-item').length;

    // Filter Elements
    this.filterElement = $('.cm-sat-m-filter');
    this.tagsElement = $('.item-tags');
    this.searchElement = $('.search-criteria');
    this.wishlistDeleteElement = $('.wishlist-delete-icon');

    this.tagsElement.popover();

    this.searchElement.popover();

    this.wishlistDeleteElement.popover();

    this.wishlistDeleteElement.on('shown.bs.popover', function() {
      var thisPopover = $(this),
          wishlistItem = thisPopover.closest('.results-item').parent();
      // Hide Popover
      $('.btn-wishlist-no').on('click', function(e) {
        e.preventDefault();
        thisPopover.click();
      });

      // Remove Popover And Remove Cookie
      $('.btn-wishlist-yes').on('click', function(e) {
        e.preventDefault();
        thisPopover.click();
        resultsItemTotal -= 1;
        wishlistItem.hide('slow', function() {
          wishlistItem.remove();
        });
        var cookieValue = Cookies.getJSON('wishlist'),
            cookieIndex = cookieValue.indexOf( thisPopover.closest('.results-item').attr('data-slug') );
        cookieValue.splice(cookieIndex, 1);
        Cookies.set('wishlist', cookieValue );
      });
    });

    this.filterElement.on('click', '.filter-loadmore', function(e) {
      e.preventDefault();
      var $this = $(this),
      getResults = $.ajax({
        type: 'GET',
        url: $this.find('a').attr('href'),
        contentType: 'application/json',
        dataType: 'json'
      });

      getResults.done(function( data ) {

        var nextPage = data['data']['nextPage'],
            searchQuery = data['q'];
        if( data['data']['nextPage'] !== '' ) {
          var nextUrl = '/api/search?q='+ searchQuery +'&p=' + nextPage;
          $this.find('a').attr('href', nextUrl);
        } else {
          $this.remove();
        }
        $('.filter-results').append( $(data['data']['html']) );
        $('.item-tags').popover();

      });
    });
  }
}

module.exports = Filter; //set what can be imported from this file
