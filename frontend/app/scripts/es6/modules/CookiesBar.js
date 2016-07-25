class CookiesBar {

  constructor () {

    // CookiesBar Elements
    var CookiesBarElement = $('.cm-sat-m-cookies-bar');

    // Cookies Bar functionality.
    if( Cookies.get('cookie-bar-clicked') !== 'true' ) {
      CookiesBarElement.slideDown();
      Cookies.set('cookie-bar-clicked', 'false');
    }

    CookiesBarElement.on('click', '.js-cookiebar', function(e) {
      e.preventDefault();
      CookiesBarElement.slideUp();
      Cookies.set('cookie-bar-clicked', 'true');
    });

  }
}

module.exports = CookiesBar; //set what can be imported from this file
