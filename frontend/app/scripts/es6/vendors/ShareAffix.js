class ShareAffix {

  constructor () {

    // ShareAffix Elements
    this.shareFixedElement = $('.cm-sat-m-share-fixed');

    setTimeout(() => {
      this.shareFixedElement.affix({
        offset: {
          top: function () {
            var sliderHeight = $('.cm-sat-m-slider').outerHeight(),
                navHeight = $('.cm-sat-m-nav').outerHeight(),
                bodyMargin = parseInt($('body').css('margin-top'));

            return ( this.top = sliderHeight - navHeight + bodyMargin );
          },
          bottom: function () {
            var footerHeight = $('.cm-sat-m-footer').outerHeight(),
                relatedHeight = $('.cm-sat-m-related').outerHeight(),
                contactMap = $('.cm-sat-m-map.cm-sat-is-contact').outerHeight(),
                share = $('.cm-sat-m-share').outerHeight();

            if( $('.cm-sat-p-contact')[0] ) {
              return ( this.bottom = footerHeight + relatedHeight + share + contactMap );
            }
            else {
              return ( this.bottom = footerHeight + relatedHeight + 700 );
            }
          }
        }
      });
    }, 1500);

  }
}

module.exports = ShareAffix; //set what can be imported from this file
