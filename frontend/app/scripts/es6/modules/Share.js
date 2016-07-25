var env_url = window.location.href;
var url = encodeURIComponent(env_url);

var facebookString = `http://www.facebook.com/sharer.php?s=100&p[url]=${url}`;
var googleString = `https://plus.google.com/share?url=${url}`;
var pinterestString = `http://pinterest.com/pin/create/link/?url=${url}`;

var title =  encodeURIComponent( $('meta[name="twitter:description"]').attr('content') );
var twitterString = `https://twitter.com/share?text=${title}&url=${url}`;

var pageTitle = encodeURIComponent( $('title').text() );
var emailString = `mailto:?subject=${pageTitle}&body=${url}`;

class Share {

      constructor(debug = false) {
        this.sharePopoverElements = $('.js-share-popover, .js-share-fixed-popover');

        this.sharePopoverElements.on('shown.bs.popover', () => {
          this.bindEvents();
        });

        this.sharePopoverElements.on('hide.bs.popover', () => {
          this.unbindClick();
        });

      }

      bindEvents () {
        this.facebook = document.querySelector('.js-facebook');
        this.twitter = document.querySelector('.js-twitter');
        this.google = document.querySelector('.js-google');
        this.pinterest = document.querySelector('.js-pinterest');
        this.email = document.querySelector('.js-email');

        this.facebook.href = facebookString;
        this.facebook.addEventListener('click', this.clickLink, false);

        this.google.href = googleString;
        this.google.addEventListener('click', this.clickLink, false);

        this.twitter.href = twitterString;
        this.twitter.addEventListener('click', this.clickLink, false);

        this.pinterest.href = pinterestString;
        this.pinterest.addEventListener('click', this.clickLink, false);

        this.email.href = emailString;
      }

      unbindClick() {
        this.facebook.removeEventListener('click');
        this.google.removeEventListener('click');
        this.twitter.removeEventListener('click');
      }

      clickLink (e) {
        e.preventDefault();
        window.open(this.href,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=620,width=500');
        return false;
      }
}

module.exports = Share;
