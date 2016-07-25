// Bootstrap Multisect Dropdown
class FilterMultiselect {

  constructor () {

    // Filter Multiselect Elements
    this.filterElement = $('.cm-sat-m-filter');
    this.selectElement = $('.filter-multiselect');
    this.wishlistElement = $('.cm-sat-p-wishlist');

    this.selectElement.each(function(key, value) {
      var name = $(value).data('name');
      $(value).multiselect({
        includeSelectAllOption: true,
        buttonText: function(options, select) {
          if (options.length === 0) {
            return name;
          } else {
            return name + ' (' + options.length + ')'
          }
        }
      });
    });

    this.filterElement.on('click', '.filter-cta', function(e) {
      e.preventDefault();
    });

    this.wishlistElement.on('click', '.filter-cta', function(e) {
      var selectedOptions = $('.sat-multiselect').find(':selected'),
          totalItems = $('.total-items'),
          resultItem = $('.results-item');

      resultItem.attr('data-found', 'false');

      if(selectedOptions.length > 0) {
        selectedOptions.each(function(optionKey, optionValue) {
          resultItem.each(function(resultKey, resultValue) {
            var itemTags = $(resultValue).find('.item-tags').data('content').toLowerCase();
            if( itemTags.indexOf($(optionValue).text().toLowerCase()) !== -1 && $(resultValue).attr('data-found') === 'false' ) {
              $(resultValue).parent().show('slow');
              $(resultValue).attr('data-found', 'true');
            } else if ($(resultValue).attr('data-found') === 'false') {
              $(resultValue).parent().hide('slow');
            }
          });
        });
      } else {
        resultItem.parent().show('slow');
      }
    });

  }
}

module.exports = FilterMultiselect; //set what can be imported from this file
