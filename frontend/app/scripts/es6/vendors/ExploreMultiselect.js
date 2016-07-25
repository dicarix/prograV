// Bootstrap Multisect Dropdown
class ExploreMultiselect {

  constructor () {

    // Explore Multiselect Elements
    this.selectElement = $('.explore-multiselect');
    this.exploreElement = $('.cm-sat-m-explore');

    this.selectElement.each(function(key, value) {
      var name = $(value).data('name');
      $(value).multiselect({
        includeSelectAllOption: true,
        numberDisplayed: 1,
        nonSelectedText: name,
        onDropdownShown: function(event) {
          $('.total-selected').popover('destroy');
          $('.slick-dots').addClass('dots-hidden');
        },
        onDropdownHidden: function(event) {
          $('.slick-dots').removeClass('dots-hidden');
          var selected = $('.explore-multiselect').find(':selected'),
              selectedOptions = [];
          if(selected.length > 0) {
            $('.explore-total').slideDown();
            $('.total-selected').find('span').text(selected.length);
            selected.each(function(selectedKey, selectedValue) {
              selectedOptions.push($(selectedValue));
            });
            $('.total-selected').popover({
              container: '.cm-sat-m-explore',
              html: true,
              placement: 'auto top',
              content: function() {
                var options = [];
                for (var option in selectedOptions){
                  options.push('<a href="#" class="js-ep-item" data-value="' + $(selectedOptions[option]).attr('value') + '">' + $(selectedOptions[option]).text() + '<svg><use xlink:href="#close"></use></svg></a>');
                }
                options.push('<div class="popover-clearall"><a href="#" class="js-ep-clearall">Clear all<svg><use xlink:href="#close"></use></svg></a><a href="#" class="js-closetooltip pull-right">Close</a></div>');
                return options;
              }
            });
          } else {
            $('.explore-total').slideUp();
          }
        }
      });
    });

    // Remove Single Popover Tag On Click.
    this.exploreElement.on('click', '.js-ep-item', function(e) {
      e.preventDefault();
      var $this = $(this),
          exploreMulti = $('.explore-multiselect');
      exploreMulti.multiselect( 'deselect', $this.data('value') );
      $('.total-selected').find('span').text(exploreMulti.find(':selected').length);
      $this.remove();
      if(exploreMulti.find(':selected').length === 0) {
        $('.total-selected').popover('destroy');
        $('.explore-total').slideUp();
      }
    });

    // Remove All Popover Tags On Click.
    this.exploreElement.on('click', '.js-ep-clearall', function(e) {
      e.preventDefault();
      var exploreMulti = $('.explore-multiselect');
      exploreMulti.multiselect('deselectAll', false);
      exploreMulti.multiselect('updateButtonText');
      $('.total-selected').popover('destroy');
      $('.explore-total').slideUp();
    });

    // Hide tooltip on mobile
    this.exploreElement.on('click', '.js-closetooltip', function(e) {
      e.preventDefault();
      $('.total-selected').popover('hide');
    });

    // media query event handler
    if (matchMedia) {
      var mq = window.matchMedia('(max-width: 767px)');
      var mql = window.matchMedia("(orientation: portrait)");
      mq.addListener(WidthChange);
      mql.addListener(OrientationChange);
      WidthChange(mq);
    }
    // media query change
    function WidthChange(mq) {
      if ( mq.matches ) {
        $('.cm-sat-m-explore').find('.btn-group').addClass('dropup');
        OrientationChange(mql);
      }
      else {
        $('.cm-sat-m-explore').find('.btn-group').removeClass('dropup');
      }
    }

    // orientation change
    function OrientationChange(mql) {
      if ( mql.matches ) {
        $('.cm-sat-m-explore').find('.btn-group').addClass('dropup');
        $('.explore-multiple').each(function(key, value) {
          $(value).find('.btn-group').eq(1).off('click.btn-landscape');
        });
      }
      else {
        $('.cm-sat-m-explore').find('.btn-group').removeClass('dropup');
        $('.explore-multiple').each(function(key, value) {
          $(value).find('.btn-group').eq(1).on('click.btn-landscape', function() {
            var $this = $(this),
                selectedOptions = $('.explore-multiselect').find(':selected').length;
            if( !$this.hasClass('open') && selectedOptions > 0 ) {
              $('.explore-total').hide();
            } else if( $this.hasClass('open') && selectedOptions > 0 ) {
              $('.explore-total').show();
            }
          });
        });
      }
    }

  }
}

module.exports = ExploreMultiselect; //set what can be imported from this file
