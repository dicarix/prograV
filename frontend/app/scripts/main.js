(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

// Import Modules

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _modulesHomepageGrid = require("./modules/HomepageGrid");

var _modulesHomepageGrid2 = _interopRequireDefault(_modulesHomepageGrid);

var _modulesExplore = require("./modules/Explore");

var _modulesExplore2 = _interopRequireDefault(_modulesExplore);

var _modulesWishlist = require("./modules/Wishlist");

var _modulesWishlist2 = _interopRequireDefault(_modulesWishlist);

var _modulesShare = require("./modules/Share");

var _modulesShare2 = _interopRequireDefault(_modulesShare);

var _modulesParallax = require("./modules/Parallax");

var _modulesParallax2 = _interopRequireDefault(_modulesParallax);

var _modulesTop10 = require("./modules/Top10");

var _modulesTop102 = _interopRequireDefault(_modulesTop10);

var _modulesFilter = require("./modules/Filter");

var _modulesFilter2 = _interopRequireDefault(_modulesFilter);

var _modulesBacktotop = require("./modules/Backtotop");

var _modulesBacktotop2 = _interopRequireDefault(_modulesBacktotop);

var _modulesCookiesBar = require("./modules/CookiesBar");

var _modulesCookiesBar2 = _interopRequireDefault(_modulesCookiesBar);

// Import Vendors

var _vendorsBootstrap = require("./vendors/Bootstrap");

var _vendorsBootstrap2 = _interopRequireDefault(_vendorsBootstrap);

var _vendorsMatchHeight = require("./vendors/MatchHeight");

var _vendorsMatchHeight2 = _interopRequireDefault(_vendorsMatchHeight);

var _vendorsSlick = require("./vendors/Slick");

var _vendorsSlick2 = _interopRequireDefault(_vendorsSlick);

var _vendorsExploreMultiselect = require("./vendors/ExploreMultiselect");

var _vendorsExploreMultiselect2 = _interopRequireDefault(_vendorsExploreMultiselect);

var _vendorsFilterMultiselect = require("./vendors/FilterMultiselect");

var _vendorsFilterMultiselect2 = _interopRequireDefault(_vendorsFilterMultiselect);

var _vendorsSkrollr = require("./vendors/Skrollr");

var _vendorsSkrollr2 = _interopRequireDefault(_vendorsSkrollr);

var _vendorsGoogleMaps = require("./vendors/GoogleMaps");

var _vendorsGoogleMaps2 = _interopRequireDefault(_vendorsGoogleMaps);

var _vendorsHighCharts = require("./vendors/HighCharts");

var _vendorsHighCharts2 = _interopRequireDefault(_vendorsHighCharts);

var _vendorsShareAffix = require("./vendors/ShareAffix");

var _vendorsShareAffix2 = _interopRequireDefault(_vendorsShareAffix);

// jQuery DOM Ready
$(function () {
  'use strict';

  // Initialize Modules
  new _modulesHomepageGrid2["default"]();
  new _modulesExplore2["default"]();
  new _modulesWishlist2["default"]();
  new _modulesShare2["default"]();
  new _modulesParallax2["default"]();
  new _modulesTop102["default"]();
  new _modulesFilter2["default"]();
  new _modulesBacktotop2["default"]();
  new _modulesCookiesBar2["default"]();

  // Initialize Vendors
  new _vendorsBootstrap2["default"]();
  new _vendorsSlick2["default"]();
  new _vendorsMatchHeight2["default"]();
  new _vendorsExploreMultiselect2["default"]();
  new _vendorsFilterMultiselect2["default"]();
  new _vendorsSkrollr2["default"]();
  new _vendorsGoogleMaps2["default"]();
  new _vendorsHighCharts2["default"]();
  new _vendorsShareAffix2["default"]();
});

},{"./modules/Backtotop":2,"./modules/CookiesBar":3,"./modules/Explore":4,"./modules/Filter":5,"./modules/HomepageGrid":6,"./modules/Parallax":7,"./modules/Share":8,"./modules/Top10":9,"./modules/Wishlist":10,"./vendors/Bootstrap":11,"./vendors/ExploreMultiselect":12,"./vendors/FilterMultiselect":13,"./vendors/GoogleMaps":14,"./vendors/HighCharts":15,"./vendors/MatchHeight":16,"./vendors/ShareAffix":17,"./vendors/Skrollr":18,"./vendors/Slick":19}],2:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Backtotop = function Backtotop() {
  _classCallCheck(this, Backtotop);

  // Backtotop Elements
  var backtotopElement = $('.cm-sat-m-backtotop');

  // Back to top functionality.
  if (backtotopElement.length) {
    var scrollTrigger = 200,
        // px
    backToTop = function backToTop() {
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
};

module.exports = Backtotop; //set what can be imported from this file

},{}],3:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var CookiesBar = function CookiesBar() {
  _classCallCheck(this, CookiesBar);

  // CookiesBar Elements
  var CookiesBarElement = $('.cm-sat-m-cookies-bar');

  // Cookies Bar functionality.
  if (Cookies.get('cookie-bar-clicked') !== 'true') {
    CookiesBarElement.slideDown();
    Cookies.set('cookie-bar-clicked', 'false');
  }

  CookiesBarElement.on('click', '.js-cookiebar', function (e) {
    e.preventDefault();
    CookiesBarElement.slideUp();
    Cookies.set('cookie-bar-clicked', 'true');
  });
};

module.exports = CookiesBar; //set what can be imported from this file

},{}],4:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Explore = function Explore() {
  var _this = this;

  _classCallCheck(this, Explore);

  // Explore Elements
  this.exploreElement = $('.cm-sat-m-explore');

  // Explore close functionality.
  this.exploreElement.on('click', '.view-map', function () {
    _this.exploreElement.toggleClass('map-open');
  });

  // Explore Caret functionality.
  // this.exploreElement.on('click', '.total-selected', () => {
  //   this.exploreElement.find('.nav-caret').toggleClass('hide');
  // });
};

module.exports = Explore; //set what can be imported from this file

},{}],5:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Filter = function Filter() {
  _classCallCheck(this, Filter);

  var resultsItemTotal = $('.results-item').length;

  // Filter Elements
  this.filterElement = $('.cm-sat-m-filter');
  this.tagsElement = $('.item-tags');
  this.searchElement = $('.search-criteria');
  this.wishlistDeleteElement = $('.wishlist-delete-icon');

  this.tagsElement.popover();

  this.searchElement.popover();

  this.wishlistDeleteElement.popover();

  this.wishlistDeleteElement.on('shown.bs.popover', function () {
    var thisPopover = $(this),
        wishlistItem = thisPopover.closest('.results-item').parent();
    // Hide Popover
    $('.btn-wishlist-no').on('click', function (e) {
      e.preventDefault();
      thisPopover.click();
    });

    // Remove Popover And Remove Cookie
    $('.btn-wishlist-yes').on('click', function (e) {
      e.preventDefault();
      thisPopover.click();
      resultsItemTotal -= 1;
      wishlistItem.hide('slow', function () {
        wishlistItem.remove();
      });
      var cookieValue = Cookies.getJSON('wishlist'),
          cookieIndex = cookieValue.indexOf(thisPopover.closest('.results-item').attr('data-slug'));
      cookieValue.splice(cookieIndex, 1);
      Cookies.set('wishlist', cookieValue);
    });
  });

  this.filterElement.on('click', '.filter-loadmore', function (e) {
    e.preventDefault();
    var $this = $(this),
        getResults = $.ajax({
      type: 'GET',
      url: $this.find('a').attr('href'),
      contentType: 'application/json',
      dataType: 'json'
    });

    getResults.done(function (data) {

      var nextPage = data['data']['nextPage'],
          searchQuery = data['q'];
      if (data['data']['nextPage'] !== '') {
        var nextUrl = '/api/search?q=' + searchQuery + '&p=' + nextPage;
        $this.find('a').attr('href', nextUrl);
      } else {
        $this.remove();
      }
      $('.filter-results').append($(data['data']['html']));
      $('.item-tags').popover();
    });
  });
};

module.exports = Filter; //set what can be imported from this file

},{}],6:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var HomepageGrid = function HomepageGrid() {
  _classCallCheck(this, HomepageGrid);

  // HomepageGrid Elements
  this.homepageGridElement = $('.cm-sat-m-homepage-grid');

  // Manage Height Of Grid Elements
  this.homepageGridElement.find('.is-desktop .full-height img').matchHeight({ byRow: false });
  this.homepageGridElement.find('.is-desktop .half-height img').matchHeight({ byRow: false });

  // Manage Hover Styles
  this.homepageGridElement.on('click', '.item-hover', function (e) {
    $(this).addClass('active');
  });

  this.homepageGridElement.find('.item-hover').hover(function () {
    $(this).addClass('active');
  }, function () {
    $(this).removeClass('active');
  });

  this.homepageGridElement.on('click', '.hover-close', function () {
    $(this).parent('.item-hover').removeClass('active');
    e.stopPropatation();
  });

  this.homepageGridElement.imagesLoaded(function () {
    $('.loading').removeClass('loading');
  });

  var video = this.homepageGridElement.find('.youtube-iframe iframe');
  $(window).resize(function () {
    video.attr("src", video.attr("src"));
  });
};

module.exports = HomepageGrid; //set what can be imported from this file

},{}],7:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Parallax = (function () {
    function Parallax() {
        _classCallCheck(this, Parallax);

        this.resizeTimer;
        this.flag = true;
        this.wrapper_bottom = 0;
    }

    _createClass(Parallax, [{
        key: 'parallaxResize',
        value: function parallaxResize() {
            var slick_height = document.getElementsByClassName('slider-image')[0];
            var parallaxElement = document.getElementById('cm-sat-m-parallax');
            if (slick_height != null) {
                slick_height = slick_height.clientHeight;
            }
            if (parallaxElement != null) {
                parallaxElement.style.height = slick_height + 'px';
            }
        }
    }, {
        key: 'parallaxScroll',
        value: function parallaxScroll() {
            var body = document.getElementsByTagName('body');
            var parallaxPanel = document.getElementById('homepage-panel');
            var homepage = document.getElementsByClassName('cm-sat-p-homepage')[0];
            var ele = $('.slider-fixed');
            if (homepage != null) {
                body[0].classList.add("no-scroll");
                $(parallaxPanel).animate({ top: 0 }, 2800, function () {
                    body[0].classList.remove("no-scroll");
                });
                setTimeout(function () {
                    ele.fadeIn();
                }, 700);
            }
        }
    }, {
        key: 'parallaxReveal',
        value: function parallaxReveal() {
            var parallax_wrapper = document.getElementById('parallax-reveal-wrapper');
            var parallax_grid = document.getElementById('parallax-grid');
            var slick_wrap = $('.cover-wrapper');
            if (parallax_wrapper != null && parallax_grid != null) {
                if (this.flag) this.wrapper_bottom = parallax_grid.getBoundingClientRect().bottom;
                if (parallax_wrapper.getBoundingClientRect().bottom < this.wrapper_bottom) {
                    parallax_wrapper.classList.add('revealed');
                    parallax_grid.classList.add('revealed');
                    this.flag = false;
                    $(slick_wrap).css('position', 'relative');
                }
                if (parallax_grid.getBoundingClientRect().bottom > this.wrapper_bottom) {
                    parallax_wrapper.classList.remove('revealed');
                    parallax_grid.classList.remove('revealed');
                    this.flag = true;
                    $(slick_wrap).css('position', 'fixed');
                }
            }
        }
    }]);

    return Parallax;
})();

var parallax = new Parallax();

if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    var sliderImage = $('.slider-image'),
        sliderImageHeight = sliderImage.outerHeight(),
        sliderImageOffset = sliderImageHeight / 7;

    window.onscroll = function () {
        parallax.parallaxReveal();

        if ($('.cm-sat-p-homepage')[0]) {
            var scrollTop = $(window).scrollTop();

            sliderImage.css({
                top: (sliderImageHeight - scrollTop) / 7 - Math.floor(sliderImageOffset) + 'px'
            });
        }
    };
    window.onload = function () {
        // parallax.parallaxScroll();
        clearTimeout(parallax.resizeTimer);
        parallax.resizeTimer = setTimeout(parallax.parallaxResize(), 1);
    };

    $(window).on('resize', function () {
        sliderImageHeight = sliderImage.outerHeight();
        sliderImageOffset = sliderImageHeight / 7;
        clearTimeout(parallax.resizeTimer);
        parallax.resizeTimer = setTimeout(parallax.parallaxResize(), 1);
    });
}
module.exports = Parallax;

},{}],8:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var env_url = window.location.href;
var url = encodeURIComponent(env_url);

var facebookString = 'http://www.facebook.com/sharer.php?s=100&p[url]=' + url;
var googleString = 'https://plus.google.com/share?url=' + url;
var pinterestString = 'http://pinterest.com/pin/create/link/?url=' + url;

var title = encodeURIComponent($('meta[name="twitter:description"]').attr('content'));
var twitterString = 'https://twitter.com/share?text=' + title + '&url=' + url;

var pageTitle = encodeURIComponent($('title').text());
var emailString = 'mailto:?subject=' + pageTitle + '&body=' + url;

var Share = (function () {
  function Share() {
    var _this = this;

    var debug = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

    _classCallCheck(this, Share);

    this.sharePopoverElements = $('.js-share-popover, .js-share-fixed-popover');

    this.sharePopoverElements.on('shown.bs.popover', function () {
      _this.bindEvents();
    });

    this.sharePopoverElements.on('hide.bs.popover', function () {
      _this.unbindClick();
    });
  }

  _createClass(Share, [{
    key: 'bindEvents',
    value: function bindEvents() {
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
  }, {
    key: 'unbindClick',
    value: function unbindClick() {
      this.facebook.removeEventListener('click');
      this.google.removeEventListener('click');
      this.twitter.removeEventListener('click');
    }
  }, {
    key: 'clickLink',
    value: function clickLink(e) {
      e.preventDefault();
      window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=620,width=500');
      return false;
    }
  }]);

  return Share;
})();

module.exports = Share;

},{}],9:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Top10 = function Top10() {
  _classCallCheck(this, Top10);

  // Top10 Element
  this.top10Element = $('.cm-sat-p-top10map');
  this.fixedElement = $('.container-fixed');

  // Top10 header fade out
  this.fixedElement.find('.header').delay(500).fadeTo('slow', 1);
  this.fixedElement.find('.description').delay(1000).fadeTo('slow', 1);
  this.fixedElement.delay(2300).fadeOut();
  this.top10Element.find('.cm-sat-m-map').delay(2700).fadeTo('slow', 1);

  // Top10 close slider
  this.top10Element.on('click', '.close-slider', function () {
    $('.cm-sat-m-slider-top10').removeClass('active');
  });

  // Prevent parent slider from moving when the child slider is moving / add active class
  $('.js-slider-chart').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    event.stopPropagation();
    $(this).closest('.s-item-stats').find('.chart-stat').removeClass('active').eq(nextSlide).addClass('active');
  });
  // Prevent parent slider from moving when the child slider is moving / add active class
  $('.js-slider-socialchart').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    event.stopPropagation();
  });

  // Add Click event on left stats
  this.top10Element.on('click', '.chart-stat', function () {
    var $this = $(this),
        index = $this.index();
    $this.closest('.s-item-stats').find('.js-slider-chart').slick('slickGoTo', index);
  });

  // media query event handler
  if (matchMedia) {
    var mq = window.matchMedia('(max-width: 767px)');
    mq.addListener(WidthChange);
    WidthChange(mq);
  }
  // media query change
  function WidthChange(mq) {
    if (mq.matches) {} else {
      // Set height of chart
      $('.chart-item').height($('.chart-stat').parent().outerHeight());
    }
  }
};

module.exports = Top10; //set what can be imported from this file

},{}],10:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Wishlist = function Wishlist() {
  _classCallCheck(this, Wishlist);

  // Wishlist Elements
  var wishlistSaveElement = $('.js-wishlist-save'),
      wishlistDeleteElement = $('.js-wishlist-delete'),
      slug = window.location.pathname.split('/'),
      slug = slug.slice(-1)[0];

  // Wishlist Cookie has not been created yet.
  if (Cookies.get('wishlist') === undefined) {
    wishlistDeleteElement.addClass('hide');
    // Wishlist Cookie is already created.
  } else {
      // Wishlist Cookie was created but this page is not part of it.
      if (Cookies.getJSON('wishlist').indexOf(slug) === -1) {
        wishlistDeleteElement.addClass('hide');
        // Wishlist Cookie was created and this page is part of it.
      } else {
          wishlistSaveElement.addClass('hide');
        }
    }

  // Share Fixed Save Functionality
  wishlistSaveElement.on('click', function () {

    // Wishlist Cookie has not been created yet.
    if (Cookies.get('wishlist') === undefined) {
      var cookieValue = [];
      cookieValue.push(slug);
      Cookies.set('wishlist', cookieValue);
      // Wishlist Cookie is already created.
    } else {
        var cookieValue = Cookies.getJSON('wishlist');
        cookieValue.push(slug);
        Cookies.set('wishlist', cookieValue);
      }

    wishlistSaveElement.addClass('hide');
    wishlistDeleteElement.removeClass('hide');
  });

  wishlistDeleteElement.on('shown.bs.popover', function () {
    var thisPopover = $(this);
    // Hide Popover
    $('.btn-wishlist-no').on('click', function (e) {
      e.preventDefault();
      thisPopover.click();
    });

    // Remove Popover And Remove Cookie
    $('.btn-wishlist-yes').on('click', function (e) {
      e.preventDefault();

      var cookieValue = Cookies.getJSON('wishlist'),
          cookieIndex = cookieValue.indexOf(slug);
      cookieValue.splice(cookieIndex, 1);
      Cookies.set('wishlist', cookieValue);

      thisPopover.click();
      wishlistDeleteElement.addClass('hide');
      wishlistSaveElement.removeClass('hide');
    });
  });
};

module.exports = Wishlist; //set what can be imported from this file

},{}],11:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Bootstrap = function Bootstrap() {
  _classCallCheck(this, Bootstrap);

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
    if (thisDropdown.hasClass('open')) {
      thisDropdown.removeClass('open');
    } else {
      closestParent.find('.open').prev().find('.nav-caret').toggleClass('hide');
      closestParent.find('.dropdown-menu').removeClass('open').hide();
      thisDropdown.addClass('open');
    }
  });

  // Show/Hide close SVG when the dropdown change.
  this.navElement.on('shown.bs.dropdown hidden.bs.dropdown', function () {
    var $this = $(this);
    $this.find('.nav-icon').toggleClass('hide');
    $this.find('.nav-text').toggleClass('hide');
    if ($this.data('nav') === 'menu') {
      $('.cm-sat-m-nav').toggleClass('nav-open');
    }
    $('#exploreModal').modal('hide');
    $('.cm-sat-m-mask').toggleClass('in');
  });

  // Show/Hide SVG and text when the modal change.
  this.exploreElement.on('shown.bs.modal hidden.bs.modal', function () {
    var exploreItem = $('.nav-explore'),
        slickSlider = $('.js-slick-slider');
    exploreItem.find('.nav-icon').toggleClass('hide');
    exploreItem.find('.nav-text').toggleClass('hide');
    if ($(this).hasClass('in')) {
      slickSlider.slick('slickPause');
    } else {
      slickSlider.slick('slickPlay');
    }
  });

  this.wishlistElement.on('click', function (e) {
    if (Cookies.get('wishlist') !== undefined && Cookies.getJSON('wishlist').length > 0) {
      e.stopPropagation();
      window.location.href = '/wishlist.html';
    }
  });

  // Hide footer accordions when you click on a different accordion.
  this.footerElement.find('.collapse').on('show.bs.collapse', function () {
    $('.collapse').not(this).collapse('hide');
  });

  // Hide popover on click outside.
  var $body = $('body');
  $body.on('shown.bs.popover', '[data-toggle="popover"]', function () {
    var $this = $(this);
    $body.on('click.popoveropen', function (e) {
      if (!$this.is(e.target) && $this.has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
        $this.click();
        e.stopPropagation();
      }
    });
  }).on('hidden.bs.popover', function () {
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
      $('.js-share-fixed-popover').attr('data-placement', 'bottom');
      $('.js-share-fixed-popover').popover();

      $('.js-wishlist-delete').attr('data-placement', 'bottom');
      $('.js-wishlist-delete').popover();
    } else {
      $('.js-share-fixed-popover').attr('data-placement', 'auto right');
      $('.js-share-fixed-popover').popover();

      $('.js-wishlist-delete').attr('data-placement', 'auto right');
      $('.js-wishlist-delete').popover();
    }
  }
};

module.exports = Bootstrap; //set what can be imported from this file

},{}],12:[function(require,module,exports){
// Bootstrap Multisect Dropdown
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var ExploreMultiselect = function ExploreMultiselect() {
  _classCallCheck(this, ExploreMultiselect);

  // Explore Multiselect Elements
  this.selectElement = $('.explore-multiselect');
  this.exploreElement = $('.cm-sat-m-explore');

  this.selectElement.each(function (key, value) {
    var name = $(value).data('name');
    $(value).multiselect({
      includeSelectAllOption: true,
      numberDisplayed: 1,
      nonSelectedText: name,
      onDropdownShown: function onDropdownShown(event) {
        $('.total-selected').popover('destroy');
        $('.slick-dots').addClass('dots-hidden');
      },
      onDropdownHidden: function onDropdownHidden(event) {
        $('.slick-dots').removeClass('dots-hidden');
        var selected = $('.explore-multiselect').find(':selected'),
            selectedOptions = [];
        if (selected.length > 0) {
          $('.explore-total').slideDown();
          $('.total-selected').find('span').text(selected.length);
          selected.each(function (selectedKey, selectedValue) {
            selectedOptions.push($(selectedValue));
          });
          $('.total-selected').popover({
            container: '.cm-sat-m-explore',
            html: true,
            placement: 'auto top',
            content: function content() {
              var options = [];
              for (var option in selectedOptions) {
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
  this.exploreElement.on('click', '.js-ep-item', function (e) {
    e.preventDefault();
    var $this = $(this),
        exploreMulti = $('.explore-multiselect');
    exploreMulti.multiselect('deselect', $this.data('value'));
    $('.total-selected').find('span').text(exploreMulti.find(':selected').length);
    $this.remove();
    if (exploreMulti.find(':selected').length === 0) {
      $('.total-selected').popover('destroy');
      $('.explore-total').slideUp();
    }
  });

  // Remove All Popover Tags On Click.
  this.exploreElement.on('click', '.js-ep-clearall', function (e) {
    e.preventDefault();
    var exploreMulti = $('.explore-multiselect');
    exploreMulti.multiselect('deselectAll', false);
    exploreMulti.multiselect('updateButtonText');
    $('.total-selected').popover('destroy');
    $('.explore-total').slideUp();
  });

  // Hide tooltip on mobile
  this.exploreElement.on('click', '.js-closetooltip', function (e) {
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
    if (mq.matches) {
      $('.cm-sat-m-explore').find('.btn-group').addClass('dropup');
      OrientationChange(mql);
    } else {
      $('.cm-sat-m-explore').find('.btn-group').removeClass('dropup');
    }
  }

  // orientation change
  function OrientationChange(mql) {
    if (mql.matches) {
      $('.cm-sat-m-explore').find('.btn-group').addClass('dropup');
      $('.explore-multiple').each(function (key, value) {
        $(value).find('.btn-group').eq(1).off('click.btn-landscape');
      });
    } else {
      $('.cm-sat-m-explore').find('.btn-group').removeClass('dropup');
      $('.explore-multiple').each(function (key, value) {
        $(value).find('.btn-group').eq(1).on('click.btn-landscape', function () {
          var $this = $(this),
              selectedOptions = $('.explore-multiselect').find(':selected').length;
          if (!$this.hasClass('open') && selectedOptions > 0) {
            $('.explore-total').hide();
          } else if ($this.hasClass('open') && selectedOptions > 0) {
            $('.explore-total').show();
          }
        });
      });
    }
  }
};

module.exports = ExploreMultiselect; //set what can be imported from this file

},{}],13:[function(require,module,exports){
// Bootstrap Multisect Dropdown
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var FilterMultiselect = function FilterMultiselect() {
  _classCallCheck(this, FilterMultiselect);

  // Filter Multiselect Elements
  this.filterElement = $('.cm-sat-m-filter');
  this.selectElement = $('.filter-multiselect');
  this.wishlistElement = $('.cm-sat-p-wishlist');

  this.selectElement.each(function (key, value) {
    var name = $(value).data('name');
    $(value).multiselect({
      includeSelectAllOption: true,
      buttonText: function buttonText(options, select) {
        if (options.length === 0) {
          return name;
        } else {
          return name + ' (' + options.length + ')';
        }
      }
    });
  });

  this.filterElement.on('click', '.filter-cta', function (e) {
    e.preventDefault();
  });

  this.wishlistElement.on('click', '.filter-cta', function (e) {
    var selectedOptions = $('.sat-multiselect').find(':selected'),
        totalItems = $('.total-items'),
        resultItem = $('.results-item');

    resultItem.attr('data-found', 'false');

    if (selectedOptions.length > 0) {
      selectedOptions.each(function (optionKey, optionValue) {
        resultItem.each(function (resultKey, resultValue) {
          var itemTags = $(resultValue).find('.item-tags').data('content').toLowerCase();
          if (itemTags.indexOf($(optionValue).text().toLowerCase()) !== -1 && $(resultValue).attr('data-found') === 'false') {
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
};

module.exports = FilterMultiselect; //set what can be imported from this file

},{}],14:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GoogleMaps = function GoogleMaps() {
    _classCallCheck(this, GoogleMaps);

    var contactMap = document.getElementById("contactMap");
    var homepageMap = document.getElementById("homepage-map");
    var articleMap = document.getElementById("articleMap");
    var top10Map = document.getElementById("top10Map");
    var exploreMap = document.getElementById("exploreMap");
    var homepageMapElement = $('.js-slick-homepage-map');
    var top10MapElement = $('.js-slider-top10');
    var customMarker = 'images/maps/marker.png';
    var customMarkerExplore = 'images/maps/markerExplore.png';
    var customMarkerExploreTransparent = 'images/maps/markerExploreTransparent.png';
    var customMarker_hover = 'images/maps/marker_hover.png';
    var markers = [];
    //Article Map
    if (articleMap != null) {
        var init = function init() {
            this.articleLatLng = { lat: -32.9104725, lng: 23.5204332 };
            var mapOptions = {
                center: this.articleLatLng,
                zoom: 7,
                scrollwheel: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            var map = new google.maps.Map(articleMap, mapOptions);

            var getArticleMap = $.ajax({
                type: 'GET',
                url: '../api/articleMap.json',
                contentType: 'application/json',
                dataType: 'json'
            });

            getArticleMap.done(function (data) {

                $(data).each(function (index) {
                    createMarker(map, 0, data[index]['latitude'], data[index]['longitude'], true, new infoWindow(data[index]['markerImage'], data[index]['markerTitle'], data[index]['markerSubtitle']));
                });
            });
        };

        google.maps.event.addDomListener(window, 'load', init);
    }
    //Explore Map
    if (exploreMap != null) {
        var init = function init() {
            this.exploreLatLng = { lat: -25.266046, lng: 15.926620 };
            var mapOptions = {
                center: this.exploreLatLng,
                zoom: 6,
                scrollwheel: false,
                mapTypeControlOptions: {
                    mapTypeIds: ['map_style']
                },
                zoomControlOptions: {
                    position: google.maps.ControlPosition.RIGHT_BOTTOM
                }
            };
            var customstyles = [{
                featureType: "all",
                elementType: "labels",
                stylers: [{ visibility: "off" }]
            }];

            var styledMap = new google.maps.StyledMapType(customstyles, { name: "Styled Map" });
            var map = new google.maps.Map(exploreMap, mapOptions);
            map.mapTypes.set('map_style', styledMap);
            map.setMapTypeId('map_style');

            var getExploreMap = $.ajax({
                type: 'GET',
                url: '../api/exploreMap.json',
                contentType: 'application/json',
                dataType: 'json'
            });

            getExploreMap.done(function (data) {

                $(data).each(function (index) {
                    createMarkerWithLabelExplore(map, data[index]['latitude'], data[index]['longitude'], data[index]['label'], 150, data[index]['labelAnchorY'], data[index]['type']);
                });
            });

            $('.cm-sat-m-explore').on('shown.bs.modal', function () {
                google.maps.event.trigger(map, 'resize');
                map.setZoom(map.getZoom());
            });
        };

        google.maps.event.addDomListener(window, 'load', init);
    }
    //Contact Map
    //Checking if contact map element exist, if does, then create the map
    if (contactMap != null) {
        var init = function init() {
            this.officeLatLng = { lng: -0.2098071, lat: 51.4195422 };
            var mapOptions = {
                center: this.officeLatLng,
                zoom: 10,
                scrollwheel: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            var map = new google.maps.Map(contactMap, mapOptions);
            var marker = new google.maps.Marker({
                position: this.officeLatLng,
                map: map,
                icon: customMarker
            });
            var contentString = "<div class='markerInfo'>" + "<img src='../images/maps/popup-contact.jpg'>" + "<div class='markerTextContainer'>" + "<p class='markerText'>South African Tourism</p>" + "<p class='markerText'>6 Alternate Grove</p> " + "<p class='markerText'>London, England</p>" + "</div>" + "</div>";
            var infowindow = new google.maps.InfoWindow({
                content: contentString,
                maxWidth: 180
            });
            marker.addListener('click', function () {
                infowindow.open(map, marker);

                $('.gm-style-iw').prev().remove();
                $('.gm-style-iw').parent().addClass('infowindow-parent');
            });
        };

        google.maps.event.addDomListener(window, 'load', init);
    }

    //Homepage Map
    //Checking if map element exist, if does, then create the map
    if (homepageMap != null) {
        var init = function init() {
            this.saLatLng = { lat: -28.6054169, lng: 25.1786157 };
            this.homepageMap = homepageMap;
            var mapOptions = {
                center: this.saLatLng,
                zoom: 6,
                scrollwheel: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                zoomControl: true,
                zoomControlOptions: {
                    position: google.maps.ControlPosition.RIGHT_BOTTOM
                }
            };
            var map = new google.maps.Map(this.homepageMap, mapOptions);

            var getHomepageMap = $.ajax({
                type: 'GET',
                url: '../api/homepageMap.json',
                contentType: 'application/json',
                dataType: 'json'
            });

            getHomepageMap.done(function (data) {

                $(data).each(function (index) {
                    createMarkerWithLabel(map, data[index]['sliderIndex'], data[index]['latitude'], data[index]['longitude'], data[index]['label'], 150);
                });

                for (var i = 0; i < markers.length; i++) {
                    google.maps.event.addListener(markers[i], 'click', function () {
                        var index = this.sliderIndex + 1;
                        homepageMapElement.slick('slickGoTo', index);
                    });
                }
            });
        };

        google.maps.event.addDomListener(window, 'load', init);
    }

    //Top10MapLP
    if (top10Map != null) {
        var init = function init() {
            this.saLatLng = { lat: -28.6054169, lng: 25.1786157 };
            this.top10Map = top10Map;
            var mapOptions = {
                center: this.saLatLng,
                zoom: 6,
                scrollwheel: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                zoomControl: true,
                zoomControlOptions: {
                    position: google.maps.ControlPosition.LEFT_BOTTOM
                }
            };
            var map = new google.maps.Map(this.top10Map, mapOptions);
            window.setTimeout(function () {

                var getTop10Map = $.ajax({
                    type: 'GET',
                    url: '../api/top10Map.json',
                    contentType: 'application/json',
                    dataType: 'json'
                });

                getTop10Map.done(function (data) {

                    $(data).each(function (index) {
                        window.setTimeout(function () {
                            createMarkerWithLabel(map, data[index]['sliderIndex'], data[index]['latitude'], data[index]['longitude'], data[index]['label'], 150, true);

                            if (index === data.length - 1) {
                                clickMarkersTop10();
                            }
                        }, index * 200);
                    });

                    function clickMarkersTop10() {
                        for (var i = 0; i < markers.length; i++) {
                            google.maps.event.addListener(markers[i], 'click', function () {
                                $('.cm-sat-m-slider-top10').addClass('active');
                                map.panTo(this.getPosition());
                                map.panBy(100, 0);
                                var index = this.sliderIndex;
                                top10MapElement.slick('slickGoTo', index);
                            });
                        }
                    }
                });
            }, 2700);
        };

        google.maps.event.addDomListener(window, 'load', init);
    }

    //Object declaration for markers with infoWindow
    function infoWindow(imgURL, header, text) {
        this.imgURL = imgURL;
        this.header = header;
        this.text = text;
    }
    /*
     Function to declare any new marker with a label
     @param {map} map the map which the marker will use
     @param {sliderIndex} slider index
     @param {lat} lat latitude of the marker
     @param {lng} lng longitude of the marker
     @param {labelContent} labelContent the text of the label
     @param {labelAnchor} labelAnchor the X axis of the marker
     */
    function createMarkerWithLabel(map, sliderIndex, lat, lng) {
        if (sliderIndex === undefined) sliderIndex = 0;
        var labelContent = arguments.length <= 4 || arguments[4] === undefined ? "" : arguments[4];
        var labelAnchor = arguments.length <= 5 || arguments[5] === undefined ? 150 : arguments[5];
        var has_animation = arguments.length <= 6 || arguments[6] === undefined ? false : arguments[6];

        var animation = null;
        if (has_animation) animation = google.maps.Animation.DROP;
        var marker = new MarkerWithLabel({
            position: new google.maps.LatLng(lat, lng),
            map: map,
            labelContent: labelContent,
            labelAnchor: new google.maps.Point(labelAnchor, 73),
            labelClass: "map-labels",
            icon: customMarker,
            sliderIndex: sliderIndex,
            animation: animation
        });
        markers.push(marker);
    };
    /*
    Function to create markers without a label, also it can
    have a info window
     @param {map} map the map which the marker will use
     @param {lat} lat latitude of the marker
     @param {lng} lng longitude of the marker
     @param {has_info} boolean to determine if marker has tooltip
     @param {infowindow} gets an object infoWindow to set the properties of the message
     */
    function createMarker(map, sliderIndex, lat, lng, has_info, infowindow) {
        if (sliderIndex === undefined) sliderIndex = 0;
        if (has_info === undefined) has_info = false;

        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(lat, lng),
            map: map,
            icon: customMarker,
            sliderIndex: sliderIndex
        });
        if (has_info) createInfoWindow(infowindow, marker, map);
        markers.push(marker);
    }
    /*
     Function to create infoWindows for markers, and creates the event to open it
     @param {infowindow} gets an object infoWindow to set the properties of the message
     @param {marker} gets the marker which will use the infoWindow
     @param {map} map the map which the marker will use
     prev_infowindow check if other infowindow was opened and close it before opening a new one.
     */
    var prev_infowindow = false;
    function createInfoWindow(infoWindow, marker, map) {
        var contentString = "<div class='markerInfo'>" + "<img src='" + infoWindow.imgURL + "'>" + "<div class='markerTextContainer'>" + "<p class='markerText'>" + infoWindow.header + "</p>" + "<p class='markerText'>" + infoWindow.text + "</p>" + "</div>" + "</div>";
        var infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 180
        });
        marker.addListener('click', function () {
            if (prev_infowindow) {
                prev_infowindow.close();
            }
            prev_infowindow = infowindow;
            infowindow.open(map, marker);
            //Styles for the arrow
            $('.gm-style-iw').prev().remove();
            $('.gm-style-iw').parent().addClass('infowindow-parent');
        });
    }
    /*
     Function to declare any new marker with a label and infowindow
     @param {map} map the map which the marker will use
     @param {lat} lat latitude of the marker
     @param {lng} lng longitude of the marker
     @param {labelContent} labelContent the text of the label
     @param {labelAnchor} labelAnchor the X axis of the marker
     @param {has_info} boolean to determine if marker has tooltip
     @param {infowindow} gets an object infoWindow to set the properties of the message
     */
    function createMarkerLabelInfoWindow(map, lat, lng, labelContent, labelAnchor, has_info, infowindow) {
        if (labelContent === undefined) labelContent = "";
        if (labelAnchor === undefined) labelAnchor = 150;
        if (has_info === undefined) has_info = false;

        var marker = new MarkerWithLabel({
            position: new google.maps.LatLng(lat, lng),
            map: map,
            labelContent: labelContent,
            labelAnchor: new google.maps.Point(labelAnchor, 73),
            labelClass: "map-labels",
            icon: customMarker
        });
        if (has_info) createInfoWindow(infowindow, marker, map);
    };
    /*
     Function to declare any new marker with a label to the Explore Map
     @param {map} map the map which the marker will use
     @param {lat} lat latitude of the marker
     @param {lng} lng longitude of the marker
     @param {labelContent} labelContent the text of the label
     @param {labelAnchor} labelAnchor the X axis of the marker
     @param {type} Type of label, it can be city or province
     */
    function createMarkerWithLabelExplore(map, lat, lng, labelContent, labelAnchorX, labelAnchorY, type) {
        if (labelContent === undefined) labelContent = "";
        if (labelAnchorX === undefined) labelAnchorX = 150;
        if (labelAnchorY === undefined) labelAnchorY = 42;

        if (type === 'city') {
            var marker = new MarkerWithLabel({
                position: new google.maps.LatLng(lat, lng),
                map: map,
                labelContent: labelContent,
                labelAnchor: new google.maps.Point(labelAnchorX, labelAnchorY),
                labelClass: "map-labels city",
                icon: customMarkerExplore
            });
            markers.push(marker);
        } else if (type === 'province') {
            var marker = new MarkerWithLabel({
                position: new google.maps.LatLng(lat, lng),
                map: map,
                labelContent: labelContent,
                labelAnchor: new google.maps.Point(labelAnchorX, labelAnchorY),
                labelClass: "map-labels province",
                icon: customMarkerExploreTransparent
            });
            markers.push(marker);
        }
    };

    // Homepage map: Click on the menu icon to go to the first slide.
    $('.menu-map-list').on('click', function (e) {
        e.preventDefault();
        homepageMapElement.slick('slickGoTo', 0);
    });

    // Homepage map: Change the active state of the marker when the slider change.
    homepageMapElement.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        for (var i = 0; i < markers.length; i++) {
            var markerIndex = markers[i].sliderIndex + 1;
            if (nextSlide === markerIndex) {
                markers[i].setIcon(customMarker_hover);
            } else {
                markers[i].setIcon(customMarker);
            }
        }
    });

    // Top10 map: Change the active state of the marker when the slider change.
    top10MapElement.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        for (var i = 0; i < markers.length; i++) {
            var markerIndex = markers[i].sliderIndex;
            if (nextSlide === markerIndex) {
                markers[i].setIcon(customMarker_hover);
            } else {
                markers[i].setIcon(customMarker);
            }
        }
    });
};

module.exports = GoogleMaps;

},{}],15:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Top10 = function Top10() {
  _classCallCheck(this, Top10);

  // Base config for all the charts
  var baseConfig = {
    chart: {
      type: 'column'
    },
    xAxis: {
      type: 'category',
      labels: {
        style: {
          fontSize: '13px'
        }
      },
      tickInterval: 4
    },
    exporting: {
      enabled: false
    },
    credits: false,
    yAxis: {
      min: 0,
      title: {
        text: null
      }
    },
    legend: {
      enabled: false
    }
  };

  var getWeather = $.ajax({
    type: 'GET',
    url: '../api/weather.json',
    contentType: 'application/json',
    dataType: 'json'
  });

  getWeather.done(function (data) {
    $(data).each(function (index) {
      $('#chart-' + data[index]['hs-type'] + '-' + data[index]['hs-position']).highcharts($.extend(baseConfig, data[index]));
    });
  });
};

module.exports = Top10; //set what can be imported from this file

},{}],16:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var MatchHeight = function MatchHeight() {
  _classCallCheck(this, MatchHeight);

  // MatchHeight Elements
  this.alternativeElement = $('.alternative-content');

  // MatchHeight Calls
  this.alternativeElement.matchHeight();
};

module.exports = MatchHeight; //set what can be imported from this file

},{}],17:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var ShareAffix = function ShareAffix() {
  var _this = this;

  _classCallCheck(this, ShareAffix);

  // ShareAffix Elements
  this.shareFixedElement = $('.cm-sat-m-share-fixed');

  setTimeout(function () {
    _this.shareFixedElement.affix({
      offset: {
        top: function top() {
          var sliderHeight = $('.cm-sat-m-slider').outerHeight(),
              navHeight = $('.cm-sat-m-nav').outerHeight(),
              bodyMargin = parseInt($('body').css('margin-top'));

          return this.top = sliderHeight - navHeight + bodyMargin;
        },
        bottom: function bottom() {
          var footerHeight = $('.cm-sat-m-footer').outerHeight(),
              relatedHeight = $('.cm-sat-m-related').outerHeight(),
              contactMap = $('.cm-sat-m-map.cm-sat-is-contact').outerHeight(),
              share = $('.cm-sat-m-share').outerHeight();

          if ($('.cm-sat-p-contact')[0]) {
            return this.bottom = footerHeight + relatedHeight + share + contactMap;
          } else {
            return this.bottom = footerHeight + relatedHeight + 700;
          }
        }
      }
    });
  }, 1500);
};

module.exports = ShareAffix; //set what can be imported from this file

},{}],18:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Skrollr = function Skrollr() {
    _classCallCheck(this, Skrollr);

    var social_container = $('.cm-sat-m-social'),
        container_visible = false;
    this.skrollr = skrollr;
    this.skrollr.init({
        forceHeight: false,
        render: function render() {
            if (social_container.hasClass('skrollable-after')) {
                if (!container_visible) {
                    container_visible = true;
                    var social_items = social_container.find(".social-item");
                    $(social_items).toArray().map(function (e) {
                        return function () {
                            return $(e).fadeIn(300).promise();
                        };
                    }).reduce(function (cur, next) {
                        return cur.then(next);
                    }, $().promise());
                }
            } else if (container_visible) {
                container_visible = false;
            }
        }
    });
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        this.skrollr.init().destroy();
    }
};

module.exports = Skrollr;

},{}],19:[function(require,module,exports){
// Slick slider - main images.
// Homepage Related Slick slider.
// Homepage Social Slick slider.
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Slick = function Slick() {
  var _this = this;

  _classCallCheck(this, Slick);

  // Slick Elements
  this.sliderElement = $('.js-slick-slider');
  this.exploreElement = $('.cm-sat-m-explore');
  this.exploreSlider = $('.explore-slider');
  this.exploreNav = $('.explore-nav');
  this.relatedElement = $('.js-slick-related');
  this.socialElement = $('.js-slick-social');
  this.sliderTop10Element = $('.js-slider-top10');
  this.sliderChartElement = $('.js-slider-chart');
  var homepageMapElement = $('.js-slick-homepage-map');

  this.sliderOptions = {
    arrows: false,
    dots: true,
    autoplay: true,
    speed: 1000,
    pauseOnHover: false
  };

  this.exploreOptions = {
    arrows: false,
    dots: false,
    infinite: false,
    accessibility: false,
    draggable: false,
    swipe: true,
    vertical: true,
    responsive: [{
      breakpoint: 768,
      settings: {
        dots: true,
        vertical: false
      }
    }]
  };

  this.relatedOptions = {
    arrows: false,
    dots: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [{
      breakpoint: 1180,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true
      }
    }]
  };

  this.socialOptions = {
    arrows: false,
    dots: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [{
      breakpoint: 1180,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }]
  };

  this.homepageMapOptions = {
    autoPlay: false,
    arrows: true,
    dots: true,
    slidesToShow: 1,
    infinite: false,
    adaptiveHeight: true
  };

  this.sliderTop10Options = {
    adaptiveHeight: true,
    arrows: true,
    dots: true,
    infinite: false,
    accessibility: false,
    draggable: false,
    swipe: false
  };

  this.sliderChartOptions = {
    arrows: false,
    dots: true,
    infinite: false,
    accessibility: false,
    draggable: false
  };

  //Init of the sliders
  this.relatedElement.slick(this.relatedOptions);
  this.socialElement.slick(this.socialOptions);
  this.sliderElement.slick(this.sliderOptions);
  this.sliderTop10Element.slick(this.sliderTop10Options);
  this.sliderChartElement.slick(this.sliderChartOptions);
  homepageMapElement.slick(this.homepageMapOptions);

  //Slider Events
  this.exploreNav.on('click', 'li', function () {
    var $this = $(this),
        slideIndex = $this.index();
    $('.explore-slider').slick('slickGoTo', slideIndex);
    $('.explore-nav').find('li').removeClass('active');
    $this.addClass('active');
  });

  this.exploreElement.on('shown.bs.modal', function () {
    _this.exploreSlider.slick(_this.exploreOptions);
    $('.explore-nav').find('li').removeClass('active');
    $('.explore-nav').find('li').first().addClass('active');
  });
  this.exploreElement.on('hidden.bs.modal', function () {
    _this.exploreSlider.slick('unslick');
  });

  // We were checking for user agent before.
  $(window).on('load', function () {
    animateStats(0);
  });
  this.sliderElement.on('afterChange', function (event, slick, currentSlide) {
    animateStats(currentSlide);
  });

  this.sliderElement.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    hideStats(currentSlide, slick.slideCount);
  });

  $('.cm-sat-m-homepage-map-slider').on('click', '.js-provinces-item', function () {
    var index = $(this).index() + 1;
    homepageMapElement.slick('slickGoTo', index);
  });

  //End Homepage Map Slider events

  // media query event handler
  if (matchMedia) {
    var mq = window.matchMedia('(max-width: 767px)');
    mq.addListener(WidthChange);
    WidthChange(mq);
  }
  // media query change
  function WidthChange(mq) {
    var alternativeSlick = $('.js-slick-alternative'),
        socialchartSlick = $('.js-slider-socialchart');
    if (mq.matches) {
      alternativeSlick.slick({
        arrows: false,
        dots: true,
        centerMode: true,
        centerPadding: '30px',
        adaptiveHeight: true
      });

      socialchartSlick.slick({
        arrows: false,
        dots: true,
        centerMode: true,
        centerPadding: '30px'
      });
    } else {
      if (alternativeSlick.hasClass('slick-initialized')) {
        alternativeSlick.slick('unslick');
      }
      if (socialchartSlick.hasClass('slick-initialized')) {
        socialchartSlick.slick('unslick');
      }
    }
  }
  // Hide Homepage Slider Stats
  function hideStats(slide, numberOfSlides) {
    if (slide === numberOfSlides - 1) {
      hideStats(-1, numberOfSlides);
    }
    slide = slide + 1;
    var prevslide = $('div[data-slick-index=' + slide + ']');
    var container = prevslide.find(".slider-info");
    container = container.find(".slider-stats");
    $(container).toArray().map(function (stat) {
      return function () {
        return $(stat).hide().promise();
      };
    }).reduce(function (cur, next) {
      return cur.then(next);
    }, $().promise());
  }
  // Animate Homepage Slider Stats
  function animateStats(currentSlide) {
    var slide = $('div[data-slick-index=' + currentSlide + ']');
    var container = slide.find(".slider-info");
    container = container.find(".slider-stats");
    $(container).toArray().map(function (stat) {
      return function () {
        return $(stat).fadeIn().promise();
      };
    }).reduce(function (cur, next) {
      return cur.then(next);
    }, $().promise());
  }
};

module.exports = Slick; //set what can be imported from this file

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZGllZ29jYXN0cm8vRGVza3RvcC9wcm9ncmFWL2Zyb250ZW5kL2FwcC9zY3JpcHRzL2VzNi9tYWluLmpzIiwiL1VzZXJzL2RpZWdvY2FzdHJvL0Rlc2t0b3AvcHJvZ3JhVi9mcm9udGVuZC9hcHAvc2NyaXB0cy9lczYvbW9kdWxlcy9CYWNrdG90b3AuanMiLCIvVXNlcnMvZGllZ29jYXN0cm8vRGVza3RvcC9wcm9ncmFWL2Zyb250ZW5kL2FwcC9zY3JpcHRzL2VzNi9tb2R1bGVzL0Nvb2tpZXNCYXIuanMiLCIvVXNlcnMvZGllZ29jYXN0cm8vRGVza3RvcC9wcm9ncmFWL2Zyb250ZW5kL2FwcC9zY3JpcHRzL2VzNi9tb2R1bGVzL0V4cGxvcmUuanMiLCIvVXNlcnMvZGllZ29jYXN0cm8vRGVza3RvcC9wcm9ncmFWL2Zyb250ZW5kL2FwcC9zY3JpcHRzL2VzNi9tb2R1bGVzL0ZpbHRlci5qcyIsIi9Vc2Vycy9kaWVnb2Nhc3Ryby9EZXNrdG9wL3Byb2dyYVYvZnJvbnRlbmQvYXBwL3NjcmlwdHMvZXM2L21vZHVsZXMvSG9tZXBhZ2VHcmlkLmpzIiwiL1VzZXJzL2RpZWdvY2FzdHJvL0Rlc2t0b3AvcHJvZ3JhVi9mcm9udGVuZC9hcHAvc2NyaXB0cy9lczYvbW9kdWxlcy9QYXJhbGxheC5qcyIsIi9Vc2Vycy9kaWVnb2Nhc3Ryby9EZXNrdG9wL3Byb2dyYVYvZnJvbnRlbmQvYXBwL3NjcmlwdHMvZXM2L21vZHVsZXMvU2hhcmUuanMiLCIvVXNlcnMvZGllZ29jYXN0cm8vRGVza3RvcC9wcm9ncmFWL2Zyb250ZW5kL2FwcC9zY3JpcHRzL2VzNi9tb2R1bGVzL1RvcDEwLmpzIiwiL1VzZXJzL2RpZWdvY2FzdHJvL0Rlc2t0b3AvcHJvZ3JhVi9mcm9udGVuZC9hcHAvc2NyaXB0cy9lczYvbW9kdWxlcy9XaXNobGlzdC5qcyIsIi9Vc2Vycy9kaWVnb2Nhc3Ryby9EZXNrdG9wL3Byb2dyYVYvZnJvbnRlbmQvYXBwL3NjcmlwdHMvZXM2L3ZlbmRvcnMvQm9vdHN0cmFwLmpzIiwiL1VzZXJzL2RpZWdvY2FzdHJvL0Rlc2t0b3AvcHJvZ3JhVi9mcm9udGVuZC9hcHAvc2NyaXB0cy9lczYvdmVuZG9ycy9FeHBsb3JlTXVsdGlzZWxlY3QuanMiLCIvVXNlcnMvZGllZ29jYXN0cm8vRGVza3RvcC9wcm9ncmFWL2Zyb250ZW5kL2FwcC9zY3JpcHRzL2VzNi92ZW5kb3JzL0ZpbHRlck11bHRpc2VsZWN0LmpzIiwiL1VzZXJzL2RpZWdvY2FzdHJvL0Rlc2t0b3AvcHJvZ3JhVi9mcm9udGVuZC9hcHAvc2NyaXB0cy9lczYvdmVuZG9ycy9Hb29nbGVNYXBzLmpzIiwiL1VzZXJzL2RpZWdvY2FzdHJvL0Rlc2t0b3AvcHJvZ3JhVi9mcm9udGVuZC9hcHAvc2NyaXB0cy9lczYvdmVuZG9ycy9IaWdoQ2hhcnRzLmpzIiwiL1VzZXJzL2RpZWdvY2FzdHJvL0Rlc2t0b3AvcHJvZ3JhVi9mcm9udGVuZC9hcHAvc2NyaXB0cy9lczYvdmVuZG9ycy9NYXRjaEhlaWdodC5qcyIsIi9Vc2Vycy9kaWVnb2Nhc3Ryby9EZXNrdG9wL3Byb2dyYVYvZnJvbnRlbmQvYXBwL3NjcmlwdHMvZXM2L3ZlbmRvcnMvU2hhcmVBZmZpeC5qcyIsIi9Vc2Vycy9kaWVnb2Nhc3Ryby9EZXNrdG9wL3Byb2dyYVYvZnJvbnRlbmQvYXBwL3NjcmlwdHMvZXM2L3ZlbmRvcnMvU2tyb2xsci5qcyIsIi9Vc2Vycy9kaWVnb2Nhc3Ryby9EZXNrdG9wL3Byb2dyYVYvZnJvbnRlbmQvYXBwL3NjcmlwdHMvZXM2L3ZlbmRvcnMvU2xpY2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxZQUFZLENBQUM7Ozs7OzttQ0FHWSx3QkFBd0I7Ozs7OEJBQzdCLG1CQUFtQjs7OzsrQkFDbEIsb0JBQW9COzs7OzRCQUN2QixpQkFBaUI7Ozs7K0JBQ2Qsb0JBQW9COzs7OzRCQUN2QixpQkFB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QUMsT0FBTyxFQUFFLENBQUMsQ0FBQztHQUNqQjs7QUFFRCxXQUFTLFlBQVksQ0FBQyxZQUFZLEVBQUU7QUFDcEMsUUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLHVCQUF1QixHQUFDLFlBQVksR0FBQyxHQUFHLENBQUMsQ0FBQztBQUN4RCxRQUFJLFNBQVMsR0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3pDLGFBQVMsR0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQzFDLEtBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBUyxJQUFJLEVBQUU7QUFDdEMsYUFBTyxZQUFZO0FBQ2YsZUFBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7T0FDckMsQ0FBQztLQUNMLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLEVBQUUsSUFBSSxFQUFHO0FBQzVCLGFBQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN6QixFQUFFLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7R0FDakI7Q0FDRjs7QUFFSCxNQUFNLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbi8vIEltcG9ydCBNb2R1bGVzXG5pbXBvcnQgSG9tZXBhZ2VHcmlkIGZyb20gXCIuL21vZHVsZXMvSG9tZXBhZ2VHcmlkXCI7XG5pbXBvcnQgRXhwbG9yZSBmcm9tIFwiLi9tb2R1bGVzL0V4cGxvcmVcIjtcbmltcG9ydCBXaXNobGlzdCBmcm9tIFwiLi9tb2R1bGVzL1dpc2hsaXN0XCI7XG5pbXBvcnQgU2hhcmUgZnJvbSBcIi4vbW9kdWxlcy9TaGFyZVwiO1xuaW1wb3J0IFBhcmFsbGF4IGZyb20gXCIuL21vZHVsZXMvUGFyYWxsYXhcIjtcbmltcG9ydCBUb3AxMCBmcm9tIFwiLi9tb2R1bGVzL1RvcDEwXCI7XG5pbXBvcnQgRmlsdGVyIGZyb20gXCIuL21vZHVsZXMvRmlsdGVyXCI7XG5pbXBvcnQgQmFja3RvdG9wIGZyb20gXCIuL21vZHVsZXMvQmFja3RvdG9wXCI7XG5pbXBvcnQgQ29va2llc0JhciBmcm9tIFwiLi9tb2R1bGVzL0Nvb2tpZXNCYXJcIjtcblxuLy8gSW1wb3J0IFZlbmRvcnNcbmltcG9ydCBCb290c3RyYXAgZnJvbSBcIi4vdmVuZG9ycy9Cb290c3RyYXBcIjtcbmltcG9ydCBNYXRjaEhlaWdodCBmcm9tIFwiLi92ZW5kb3JzL01hdGNoSGVpZ2h0XCI7XG5pbXBvcnQgU2xpY2sgZnJvbSBcIi4vdmVuZG9ycy9TbGlja1wiO1xuaW1wb3J0IEV4cGxvcmVNdWx0aXNlbGVjdCBmcm9tIFwiLi92ZW5kb3JzL0V4cGxvcmVNdWx0aXNlbGVjdFwiO1xuaW1wb3J0IEZpbHRlck11bHRpc2VsZWN0IGZyb20gXCIuL3ZlbmRvcnMvRmlsdGVyTXVsdGlzZWxlY3RcIjtcbmltcG9ydCBTa3JvbGxyIGZyb20gXCIuL3ZlbmRvcnMvU2tyb2xsclwiO1xuaW1wb3J0IEdvb2dsZU1hcHMgZnJvbSBcIi4vdmVuZG9ycy9Hb29nbGVNYXBzXCI7XG5pbXBvcnQgSGlnaENoYXJ0cyBmcm9tIFwiLi92ZW5kb3JzL0hpZ2hDaGFydHNcIjtcbmltcG9ydCBTaGFyZUFmZml4IGZyb20gXCIuL3ZlbmRvcnMvU2hhcmVBZmZpeFwiO1xuXG4vLyBqUXVlcnkgRE9NIFJlYWR5XG4kKCgpID0+IHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8vIEluaXRpYWxpemUgTW9kdWxlc1xuICBuZXcgSG9tZXBhZ2VHcmlkKCk7XG4gIG5ldyBFeHBsb3JlKCk7XG4gIG5ldyBXaXNobGlzdCgpO1xuICBuZXcgU2hhcmUoKTtcbiAgbmV3IFBhcmFsbGF4KCk7XG4gIG5ldyBUb3AxMCgpO1xuICBuZXcgRmlsdGVyKCk7XG4gIG5ldyBCYWNrdG90b3AoKTtcbiAgbmV3IENvb2tpZXNCYXIoKTtcblxuICAvLyBJbml0aWFsaXplIFZlbmRvcnNcbiAgbmV3IEJvb3RzdHJhcCgpO1xuICBuZXcgU2xpY2soKTtcbiAgbmV3IE1hdGNoSGVpZ2h0KCk7XG4gIG5ldyBFeHBsb3JlTXVsdGlzZWxlY3QoKTtcbiAgbmV3IEZpbHRlck11bHRpc2VsZWN0KCk7XG4gIG5ldyBTa3JvbGxyKCk7XG4gIG5ldyBHb29nbGVNYXBzKCk7XG4gIG5ldyBIaWdoQ2hhcnRzKCk7XG4gIG5ldyBTaGFyZUFmZml4KCk7XG59KTtcbiIsImNsYXNzIEJhY2t0b3RvcCB7XG5cbiAgY29uc3RydWN0b3IgKCkge1xuXG4gICAgLy8gQmFja3RvdG9wIEVsZW1lbnRzXG4gICAgdmFyIGJhY2t0b3RvcEVsZW1lbnQgPSAkKCcuY20tc2F0LW0tYmFja3RvdG9wJyk7XG5cbiAgICAvLyBCYWNrIHRvIHRvcCBmdW5jdGlvbmFsaXR5LlxuICAgIGlmIChiYWNrdG90b3BFbGVtZW50Lmxlbmd0aCkge1xuICAgICAgdmFyIHNjcm9sbFRyaWdnZXIgPSAyMDAsIC8vIHB4XG4gICAgICBiYWNrVG9Ub3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzY3JvbGxUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gICAgICAgIGlmIChzY3JvbGxUb3AgPiBzY3JvbGxUcmlnZ2VyKSB7XG4gICAgICAgICAgYmFja3RvdG9wRWxlbWVudC5hZGRDbGFzcygnc2hvdycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJhY2t0b3RvcEVsZW1lbnQucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGJhY2tUb1RvcCgpO1xuICAgICAgJCh3aW5kb3cpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGJhY2tUb1RvcCgpO1xuICAgICAgfSk7XG4gICAgICBiYWNrdG90b3BFbGVtZW50Lm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJCgnaHRtbCxib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgc2Nyb2xsVG9wOiAwXG4gICAgICAgIH0sIDcwMCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJhY2t0b3RvcDsgLy9zZXQgd2hhdCBjYW4gYmUgaW1wb3J0ZWQgZnJvbSB0aGlzIGZpbGVcbiIsImNsYXNzIENvb2tpZXNCYXIge1xuXG4gIGNvbnN0cnVjdG9yICgpIHtcblxuICAgIC8vIENvb2tpZXNCYXIgRWxlbWVudHNcbiAgICB2YXIgQ29va2llc0JhckVsZW1lbnQgPSAkKCcuY20tc2F0LW0tY29va2llcy1iYXInKTtcblxuICAgIC8vIENvb2tpZXMgQmFyIGZ1bmN0aW9uYWxpdHkuXG4gICAgaWYoIENvb2tpZXMuZ2V0KCdjb29raWUtYmFyLWNsaWNrZWQnKSAhPT0gJ3RydWUnICkge1xuICAgICAgQ29va2llc0JhckVsZW1lbnQuc2xpZGVEb3duKCk7XG4gICAgICBDb29raWVzLnNldCgnY29va2llLWJhci1jbGlja2VkJywgJ2ZhbHNlJyk7XG4gICAgfVxuXG4gICAgQ29va2llc0JhckVsZW1lbnQub24oJ2NsaWNrJywgJy5qcy1jb29raWViYXInLCBmdW5jdGlvbihlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBDb29raWVzQmFyRWxlbWVudC5zbGlkZVVwKCk7XG4gICAgICBDb29raWVzLnNldCgnY29va2llLWJhci1jbGlja2VkJywgJ3RydWUnKTtcbiAgICB9KTtcblxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29va2llc0JhcjsgLy9zZXQgd2hhdCBjYW4gYmUgaW1wb3J0ZWQgZnJvbSB0aGlzIGZpbGVcbiIsImNsYXNzIEV4cGxvcmUge1xuXG4gIGNvbnN0cnVjdG9yICgpIHtcblxuICAgIC8vIEV4cGxvcmUgRWxlbWVudHNcbiAgICB0aGlzLmV4cGxvcmVFbGVtZW50ID0gJCgnLmNtLXNhdC1tLWV4cGxvcmUnKTtcblxuICAgIC8vIEV4cGxvcmUgY2xvc2UgZnVuY3Rpb25hbGl0eS5cbiAgICB0aGlzLmV4cGxvcmVFbGVtZW50Lm9uKCdjbGljaycsICcudmlldy1tYXAnLCAoKSA9PiB7XG4gICAgICB0aGlzLmV4cGxvcmVFbGVtZW50LnRvZ2dsZUNsYXNzKCdtYXAtb3BlbicpO1xuICAgIH0pO1xuXG4gICAgLy8gRXhwbG9yZSBDYXJldCBmdW5jdGlvbmFsaXR5LlxuICAgIC8vIHRoaXMuZXhwbG9yZUVsZW1lbnQub24oJ2NsaWNrJywgJy50b3RhbC1zZWxlY3RlZCcsICgpID0+IHtcbiAgICAvLyAgIHRoaXMuZXhwbG9yZUVsZW1lbnQuZmluZCgnLm5hdi1jYXJldCcpLnRvZ2dsZUNsYXNzKCdoaWRlJyk7XG4gICAgLy8gfSk7XG5cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEV4cGxvcmU7IC8vc2V0IHdoYXQgY2FuIGJlIGltcG9ydGVkIGZyb20gdGhpcyBmaWxlXG4iLCJjbGFzcyBGaWx0ZXIge1xuXG4gIGNvbnN0cnVjdG9yICgpIHtcblxuICAgIHZhciByZXN1bHRzSXRlbVRvdGFsID0gJCgnLnJlc3VsdHMtaXRlbScpLmxlbmd0aDtcblxuICAgIC8vIEZpbHRlciBFbGVtZW50c1xuICAgIHRoaXMuZmlsdGVyRWxlbWVudCA9ICQoJy5jbS1zYXQtbS1maWx0ZXInKTtcbiAgICB0aGlzLnRhZ3NFbGVtZW50ID0gJCgnLml0ZW0tdGFncycpO1xuICAgIHRoaXMuc2VhcmNoRWxlbWVudCA9ICQoJy5zZWFyY2gtY3JpdGVyaWEnKTtcbiAgICB0aGlzLndpc2hsaXN0RGVsZXRlRWxlbWVudCA9ICQoJy53aXNobGlzdC1kZWxldGUtaWNvbicpO1xuXG4gICAgdGhpcy50YWdzRWxlbWVudC5wb3BvdmVyKCk7XG5cbiAgICB0aGlzLnNlYXJjaEVsZW1lbnQucG9wb3ZlcigpO1xuXG4gICAgdGhpcy53aXNobGlzdERlbGV0ZUVsZW1lbnQucG9wb3ZlcigpO1xuXG4gICAgdGhpcy53aXNobGlzdERlbGV0ZUVsZW1lbnQub24oJ3Nob3duLmJzLnBvcG92ZXInLCBmdW5jdGlvbigpIHtcbiAgICAgIHZhciB0aGlzUG9wb3ZlciA9ICQodGhpcyksXG4gICAgICAgICAgd2lzaGxpc3RJdGVtID0gdGhpc1BvcG92ZXIuY2xvc2VzdCgnLnJlc3VsdHMtaXRlbScpLnBhcmVudCgpO1xuICAgICAgLy8gSGlkZSBQb3BvdmVyXG4gICAgICAkKCcuYnRuLXdpc2hsaXN0LW5vJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXNQb3BvdmVyLmNsaWNrKCk7XG4gICAgICB9KTtcblxuICAgICAgLy8gUmVtb3ZlIFBvcG92ZXIgQW5kIFJlbW92ZSBDb29raWVcbiAgICAgICQoJy5idG4td2lzaGxpc3QteWVzJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXNQb3BvdmVyLmNsaWNrKCk7XG4gICAgICAgIHJlc3VsdHNJdGVtVG90YWwgLT0gMTtcbiAgICAgICAgd2lzaGxpc3RJdGVtLmhpZGUoJ3Nsb3cnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICB3aXNobGlzdEl0ZW0ucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgY29va2llVmFsdWUgPSBDb29raWVzLmdldEpTT04oJ3dpc2hsaXN0JyksXG4gICAgICAgICAgICBjb29raWVJbmRleCA9IGNvb2tpZVZhbHVlLmluZGV4T2YoIHRoaXNQb3BvdmVyLmNsb3Nlc3QoJy5yZXN1bHRzLWl0ZW0nKS5hdHRyKCdkYXRhLXNsdWcnKSApO1xuICAgICAgICBjb29raWVWYWx1ZS5zcGxpY2UoY29va2llSW5kZXgsIDEpO1xuICAgICAgICBDb29raWVzLnNldCgnd2lzaGxpc3QnLCBjb29raWVWYWx1ZSApO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmZpbHRlckVsZW1lbnQub24oJ2NsaWNrJywgJy5maWx0ZXItbG9hZG1vcmUnLCBmdW5jdGlvbihlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLFxuICAgICAgZ2V0UmVzdWx0cyA9ICQuYWpheCh7XG4gICAgICAgIHR5cGU6ICdHRVQnLFxuICAgICAgICB1cmw6ICR0aGlzLmZpbmQoJ2EnKS5hdHRyKCdocmVmJyksXG4gICAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbidcbiAgICAgIH0pO1xuXG4gICAgICBnZXRSZXN1bHRzLmRvbmUoZnVuY3Rpb24oIGRhdGEgKSB7XG5cbiAgICAgICAgdmFyIG5leHRQYWdlID0gZGF0YVsnZGF0YSddWyduZXh0UGFnZSddLFxuICAgICAgICAgICAgc2VhcmNoUXVlcnkgPSBkYXRhWydxJ107XG4gICAgICAgIGlmKCBkYXRhWydkYXRhJ11bJ25leHRQYWdlJ10gIT09ICcnICkge1xuICAgICAgICAgIHZhciBuZXh0VXJsID0gJy9hcGkvc2VhcmNoP3E9Jysgc2VhcmNoUXVlcnkgKycmcD0nICsgbmV4dFBhZ2U7XG4gICAgICAgICAgJHRoaXMuZmluZCgnYScpLmF0dHIoJ2hyZWYnLCBuZXh0VXJsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkdGhpcy5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICAkKCcuZmlsdGVyLXJlc3VsdHMnKS5hcHBlbmQoICQoZGF0YVsnZGF0YSddWydodG1sJ10pICk7XG4gICAgICAgICQoJy5pdGVtLXRhZ3MnKS5wb3BvdmVyKCk7XG5cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRmlsdGVyOyAvL3NldCB3aGF0IGNhbiBiZSBpbXBvcnRlZCBmcm9tIHRoaXMgZmlsZVxuIiwiY2xhc3MgSG9tZXBhZ2VHcmlkIHtcblxuICBjb25zdHJ1Y3RvciAoKSB7XG5cbiAgICAvLyBIb21lcGFnZUdyaWQgRWxlbWVudHNcbiAgICB0aGlzLmhvbWVwYWdlR3JpZEVsZW1lbnQgPSAkKCcuY20tc2F0LW0taG9tZXBhZ2UtZ3JpZCcpO1xuXG4gICAgLy8gTWFuYWdlIEhlaWdodCBPZiBHcmlkIEVsZW1lbnRzXG4gICAgdGhpcy5ob21lcGFnZUdyaWRFbGVtZW50LmZpbmQoJy5pcy1kZXNrdG9wIC5mdWxsLWhlaWdodCBpbWcnKS5tYXRjaEhlaWdodCh7IGJ5Um93OiBmYWxzZSB9KTtcbiAgICB0aGlzLmhvbWVwYWdlR3JpZEVsZW1lbnQuZmluZCgnLmlzLWRlc2t0b3AgLmhhbGYtaGVpZ2h0IGltZycpLm1hdGNoSGVpZ2h0KHsgYnlSb3c6IGZhbHNlIH0pO1xuXG5cbiAgICAvLyBNYW5hZ2UgSG92ZXIgU3R5bGVzXG4gICAgdGhpcy5ob21lcGFnZUdyaWRFbGVtZW50Lm9uKCdjbGljaycsICcuaXRlbS1ob3ZlcicsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5ob21lcGFnZUdyaWRFbGVtZW50LmZpbmQoJy5pdGVtLWhvdmVyJykuaG92ZXIoXG4gICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICB9LCBmdW5jdGlvbigpIHtcbiAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICB9XG4gICAgKTtcblxuICAgIHRoaXMuaG9tZXBhZ2VHcmlkRWxlbWVudC5vbignY2xpY2snLCAnLmhvdmVyLWNsb3NlJywgZnVuY3Rpb24oKSB7XG4gICAgICAkKHRoaXMpLnBhcmVudCgnLml0ZW0taG92ZXInKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICBlLnN0b3BQcm9wYXRhdGlvbigpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5ob21lcGFnZUdyaWRFbGVtZW50LmltYWdlc0xvYWRlZCggKCkgPT4ge1xuICAgICAgJCgnLmxvYWRpbmcnKS5yZW1vdmVDbGFzcygnbG9hZGluZycpO1xuICAgIH0pO1xuXG4gICAgdmFyIHZpZGVvID0gdGhpcy5ob21lcGFnZUdyaWRFbGVtZW50LmZpbmQoJy55b3V0dWJlLWlmcmFtZSBpZnJhbWUnKTtcbiAgICAkKHdpbmRvdykucmVzaXplKCgpID0+IHtcbiAgICAgIHZpZGVvLmF0dHIoXCJzcmNcIiwgdmlkZW8uYXR0cihcInNyY1wiKSk7XG4gICAgfSk7XG5cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEhvbWVwYWdlR3JpZDsgLy9zZXQgd2hhdCBjYW4gYmUgaW1wb3J0ZWQgZnJvbSB0aGlzIGZpbGVcbiIsImNsYXNzIFBhcmFsbGF4IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5yZXNpemVUaW1lcjtcbiAgICAgICAgdGhpcy5mbGFnID0gdHJ1ZTtcbiAgICAgICAgdGhpcy53cmFwcGVyX2JvdHRvbSA9IDA7XG4gICAgfVxuXG4gICAgcGFyYWxsYXhSZXNpemUoKSB7XG4gICAgICAgIGxldCBzbGlja19oZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzbGlkZXItaW1hZ2UnKVswXTtcbiAgICAgICAgbGV0IHBhcmFsbGF4RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbS1zYXQtbS1wYXJhbGxheCcpO1xuICAgICAgICBpZihzbGlja19oZWlnaHQgIT0gbnVsbCkge1xuICAgICAgICAgIHNsaWNrX2hlaWdodCA9IHNsaWNrX2hlaWdodC5jbGllbnRIZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYocGFyYWxsYXhFbGVtZW50IT1udWxsKSB7XG4gICAgICAgICAgICBwYXJhbGxheEVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gKHNsaWNrX2hlaWdodCArICdweCcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHBhcmFsbGF4U2Nyb2xsKCl7XG4gICAgICAgIGxldCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKTtcbiAgICAgICAgbGV0IHBhcmFsbGF4UGFuZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZXBhZ2UtcGFuZWwnKTtcbiAgICAgICAgbGV0IGhvbWVwYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY20tc2F0LXAtaG9tZXBhZ2UnKVswXTtcbiAgICAgICAgbGV0IGVsZT0gJCgnLnNsaWRlci1maXhlZCcpO1xuICAgICAgICBpZiAoaG9tZXBhZ2UhPW51bGwpIHtcbiAgICAgICAgICAgIGJvZHlbMF0uY2xhc3NMaXN0LmFkZChcIm5vLXNjcm9sbFwiKTtcbiAgICAgICAgICAgICQocGFyYWxsYXhQYW5lbCkuYW5pbWF0ZSh7dG9wOiAwfSwgMjgwMCxmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGJvZHlbMF0uY2xhc3NMaXN0LnJlbW92ZShcIm5vLXNjcm9sbFwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpeyBlbGUuZmFkZUluKCk7IH0sIDcwMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwYXJhbGxheFJldmVhbCgpIHtcbiAgICAgICAgbGV0IHBhcmFsbGF4X3dyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFyYWxsYXgtcmV2ZWFsLXdyYXBwZXInKTtcbiAgICAgICAgbGV0IHBhcmFsbGF4X2dyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFyYWxsYXgtZ3JpZCcpO1xuICAgICAgICBsZXQgc2xpY2tfd3JhcCA9ICQoJy5jb3Zlci13cmFwcGVyJyk7XG4gICAgICAgIGlmIChwYXJhbGxheF93cmFwcGVyICE9IG51bGwgJiYgcGFyYWxsYXhfZ3JpZCAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5mbGFnKVxuICAgICAgICAgICAgICAgIHRoaXMud3JhcHBlcl9ib3R0b20gPSBwYXJhbGxheF9ncmlkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbTtcbiAgICAgICAgICAgIGlmIChwYXJhbGxheF93cmFwcGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSA8IHRoaXMud3JhcHBlcl9ib3R0b20pIHtcbiAgICAgICAgICAgICAgICBwYXJhbGxheF93cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3JldmVhbGVkJyk7XG4gICAgICAgICAgICAgICAgcGFyYWxsYXhfZ3JpZC5jbGFzc0xpc3QuYWRkKCdyZXZlYWxlZCcpO1xuICAgICAgICAgICAgICAgIHRoaXMuZmxhZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICQoc2xpY2tfd3JhcCkuY3NzKCdwb3NpdGlvbicsICdyZWxhdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhcmFsbGF4X2dyaWQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tID4gdGhpcy53cmFwcGVyX2JvdHRvbSkge1xuICAgICAgICAgICAgICAgIHBhcmFsbGF4X3dyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgncmV2ZWFsZWQnKTtcbiAgICAgICAgICAgICAgICBwYXJhbGxheF9ncmlkLmNsYXNzTGlzdC5yZW1vdmUoJ3JldmVhbGVkJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5mbGFnID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAkKHNsaWNrX3dyYXApLmNzcygncG9zaXRpb24nLCAnZml4ZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxudmFyIHBhcmFsbGF4ID0gbmV3IFBhcmFsbGF4KCk7XG5cbmlmICggIS9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSApIHtcbiAgdmFyIHNsaWRlckltYWdlID0gJCgnLnNsaWRlci1pbWFnZScpLFxuICAgICAgc2xpZGVySW1hZ2VIZWlnaHQgPSBzbGlkZXJJbWFnZS5vdXRlckhlaWdodCgpLFxuICAgICAgc2xpZGVySW1hZ2VPZmZzZXQgPSBzbGlkZXJJbWFnZUhlaWdodCAvIDc7XG5cbiAgd2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24gKCkge1xuICAgIHBhcmFsbGF4LnBhcmFsbGF4UmV2ZWFsKCk7XG5cbiAgICBpZiggJCgnLmNtLXNhdC1wLWhvbWVwYWdlJylbMF0gKSB7XG4gICAgICB2YXIgc2Nyb2xsVG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuXG4gICAgICBzbGlkZXJJbWFnZS5jc3Moe1xuICAgICAgICB0b3A6ICgoKHNsaWRlckltYWdlSGVpZ2h0IC0gc2Nyb2xsVG9wKSAvIDcpIC0gTWF0aC5mbG9vcihzbGlkZXJJbWFnZU9mZnNldCkpICsgJ3B4J1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICB3aW5kb3cub25sb2FkPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBwYXJhbGxheC5wYXJhbGxheFNjcm9sbCgpO1xuICAgICAgY2xlYXJUaW1lb3V0KHBhcmFsbGF4LnJlc2l6ZVRpbWVyKTtcbiAgICAgIHBhcmFsbGF4LnJlc2l6ZVRpbWVyID0gc2V0VGltZW91dChwYXJhbGxheC5wYXJhbGxheFJlc2l6ZSgpLCAxKTtcbiAgfVxuXG4gICQod2luZG93KS5vbigncmVzaXplJywgZnVuY3Rpb24gKCkge1xuICAgICAgc2xpZGVySW1hZ2VIZWlnaHQgPSBzbGlkZXJJbWFnZS5vdXRlckhlaWdodCgpO1xuICAgICAgc2xpZGVySW1hZ2VPZmZzZXQgPSBzbGlkZXJJbWFnZUhlaWdodCAvIDc7XG4gICAgICBjbGVhclRpbWVvdXQocGFyYWxsYXgucmVzaXplVGltZXIpO1xuICAgICAgcGFyYWxsYXgucmVzaXplVGltZXIgPSBzZXRUaW1lb3V0KHBhcmFsbGF4LnBhcmFsbGF4UmVzaXplKCksIDEpO1xuICB9KTtcbn1cbm1vZHVsZS5leHBvcnRzID0gUGFyYWxsYXg7XG4iLCJ2YXIgZW52X3VybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xudmFyIHVybCA9IGVuY29kZVVSSUNvbXBvbmVudChlbnZfdXJsKTtcblxudmFyIGZhY2Vib29rU3RyaW5nID0gYGh0dHA6Ly93d3cuZmFjZWJvb2suY29tL3NoYXJlci5waHA/cz0xMDAmcFt1cmxdPSR7dXJsfWA7XG52YXIgZ29vZ2xlU3RyaW5nID0gYGh0dHBzOi8vcGx1cy5nb29nbGUuY29tL3NoYXJlP3VybD0ke3VybH1gO1xudmFyIHBpbnRlcmVzdFN0cmluZyA9IGBodHRwOi8vcGludGVyZXN0LmNvbS9waW4vY3JlYXRlL2xpbmsvP3VybD0ke3VybH1gO1xuXG52YXIgdGl0bGUgPSAgZW5jb2RlVVJJQ29tcG9uZW50KCAkKCdtZXRhW25hbWU9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCJdJykuYXR0cignY29udGVudCcpICk7XG52YXIgdHdpdHRlclN0cmluZyA9IGBodHRwczovL3R3aXR0ZXIuY29tL3NoYXJlP3RleHQ9JHt0aXRsZX0mdXJsPSR7dXJsfWA7XG5cbnZhciBwYWdlVGl0bGUgPSBlbmNvZGVVUklDb21wb25lbnQoICQoJ3RpdGxlJykudGV4dCgpICk7XG52YXIgZW1haWxTdHJpbmcgPSBgbWFpbHRvOj9zdWJqZWN0PSR7cGFnZVRpdGxlfSZib2R5PSR7dXJsfWA7XG5cbmNsYXNzIFNoYXJlIHtcblxuICAgICAgY29uc3RydWN0b3IoZGVidWcgPSBmYWxzZSkge1xuICAgICAgICB0aGlzLnNoYXJlUG9wb3ZlckVsZW1lbnRzID0gJCgnLmpzLXNoYXJlLXBvcG92ZXIsIC5qcy1zaGFyZS1maXhlZC1wb3BvdmVyJyk7XG5cbiAgICAgICAgdGhpcy5zaGFyZVBvcG92ZXJFbGVtZW50cy5vbignc2hvd24uYnMucG9wb3ZlcicsICgpID0+IHtcbiAgICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zaGFyZVBvcG92ZXJFbGVtZW50cy5vbignaGlkZS5icy5wb3BvdmVyJywgKCkgPT4ge1xuICAgICAgICAgIHRoaXMudW5iaW5kQ2xpY2soKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIH1cblxuICAgICAgYmluZEV2ZW50cyAoKSB7XG4gICAgICAgIHRoaXMuZmFjZWJvb2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtZmFjZWJvb2snKTtcbiAgICAgICAgdGhpcy50d2l0dGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXR3aXR0ZXInKTtcbiAgICAgICAgdGhpcy5nb29nbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtZ29vZ2xlJyk7XG4gICAgICAgIHRoaXMucGludGVyZXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXBpbnRlcmVzdCcpO1xuICAgICAgICB0aGlzLmVtYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWVtYWlsJyk7XG5cbiAgICAgICAgdGhpcy5mYWNlYm9vay5ocmVmID0gZmFjZWJvb2tTdHJpbmc7XG4gICAgICAgIHRoaXMuZmFjZWJvb2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsaWNrTGluaywgZmFsc2UpO1xuXG4gICAgICAgIHRoaXMuZ29vZ2xlLmhyZWYgPSBnb29nbGVTdHJpbmc7XG4gICAgICAgIHRoaXMuZ29vZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbGlja0xpbmssIGZhbHNlKTtcblxuICAgICAgICB0aGlzLnR3aXR0ZXIuaHJlZiA9IHR3aXR0ZXJTdHJpbmc7XG4gICAgICAgIHRoaXMudHdpdHRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xpY2tMaW5rLCBmYWxzZSk7XG5cbiAgICAgICAgdGhpcy5waW50ZXJlc3QuaHJlZiA9IHBpbnRlcmVzdFN0cmluZztcbiAgICAgICAgdGhpcy5waW50ZXJlc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsaWNrTGluaywgZmFsc2UpO1xuXG4gICAgICAgIHRoaXMuZW1haWwuaHJlZiA9IGVtYWlsU3RyaW5nO1xuICAgICAgfVxuXG4gICAgICB1bmJpbmRDbGljaygpIHtcbiAgICAgICAgdGhpcy5mYWNlYm9vay5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycpO1xuICAgICAgICB0aGlzLmdvb2dsZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycpO1xuICAgICAgICB0aGlzLnR3aXR0ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snKTtcbiAgICAgIH1cblxuICAgICAgY2xpY2tMaW5rIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgd2luZG93Lm9wZW4odGhpcy5ocmVmLCcnLCAnbWVudWJhcj1ubyx0b29sYmFyPW5vLHJlc2l6YWJsZT15ZXMsc2Nyb2xsYmFycz15ZXMsaGVpZ2h0PTYyMCx3aWR0aD01MDAnKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNoYXJlO1xuIiwiY2xhc3MgVG9wMTAge1xuXG4gIGNvbnN0cnVjdG9yICgpIHtcblxuICAgIC8vIFRvcDEwIEVsZW1lbnRcbiAgICB0aGlzLnRvcDEwRWxlbWVudCA9ICQoJy5jbS1zYXQtcC10b3AxMG1hcCcpO1xuICAgIHRoaXMuZml4ZWRFbGVtZW50ID0gJCgnLmNvbnRhaW5lci1maXhlZCcpO1xuXG4gICAgLy8gVG9wMTAgaGVhZGVyIGZhZGUgb3V0XG4gICAgdGhpcy5maXhlZEVsZW1lbnQuZmluZCgnLmhlYWRlcicpLmRlbGF5KDUwMCkuZmFkZVRvKCdzbG93JywgMSlcbiAgICB0aGlzLmZpeGVkRWxlbWVudC5maW5kKCcuZGVzY3JpcHRpb24nKS5kZWxheSgxMDAwKS5mYWRlVG8oJ3Nsb3cnLCAxKTtcbiAgICB0aGlzLmZpeGVkRWxlbWVudC5kZWxheSgyMzAwKS5mYWRlT3V0KCk7XG4gICAgdGhpcy50b3AxMEVsZW1lbnQuZmluZCgnLmNtLXNhdC1tLW1hcCcpLmRlbGF5KDI3MDApLmZhZGVUbygnc2xvdycsIDEpO1xuXG4gICAgLy8gVG9wMTAgY2xvc2Ugc2xpZGVyXG4gICAgdGhpcy50b3AxMEVsZW1lbnQub24oJ2NsaWNrJywgJy5jbG9zZS1zbGlkZXInLCBmdW5jdGlvbigpIHtcbiAgICAgICQoJy5jbS1zYXQtbS1zbGlkZXItdG9wMTAnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgfSk7XG5cbiAgICAvLyBQcmV2ZW50IHBhcmVudCBzbGlkZXIgZnJvbSBtb3Zpbmcgd2hlbiB0aGUgY2hpbGQgc2xpZGVyIGlzIG1vdmluZyAvIGFkZCBhY3RpdmUgY2xhc3NcbiAgICAkKCcuanMtc2xpZGVyLWNoYXJ0Jykub24oJ2JlZm9yZUNoYW5nZScsIGZ1bmN0aW9uIChldmVudCwgc2xpY2ssIGN1cnJlbnRTbGlkZSwgbmV4dFNsaWRlKSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICQodGhpcykuY2xvc2VzdCgnLnMtaXRlbS1zdGF0cycpLmZpbmQoJy5jaGFydC1zdGF0JykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpLmVxKG5leHRTbGlkZSkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH0pO1xuICAgIC8vIFByZXZlbnQgcGFyZW50IHNsaWRlciBmcm9tIG1vdmluZyB3aGVuIHRoZSBjaGlsZCBzbGlkZXIgaXMgbW92aW5nIC8gYWRkIGFjdGl2ZSBjbGFzc1xuICAgICQoJy5qcy1zbGlkZXItc29jaWFsY2hhcnQnKS5vbignYmVmb3JlQ2hhbmdlJywgZnVuY3Rpb24gKGV2ZW50LCBzbGljaywgY3VycmVudFNsaWRlLCBuZXh0U2xpZGUpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0pO1xuXG4gICAgLy8gQWRkIENsaWNrIGV2ZW50IG9uIGxlZnQgc3RhdHNcbiAgICB0aGlzLnRvcDEwRWxlbWVudC5vbignY2xpY2snLCAnLmNoYXJ0LXN0YXQnLCBmdW5jdGlvbigpIHtcbiAgICAgIHZhciAkdGhpcyA9ICQodGhpcyksXG4gICAgICAgICAgaW5kZXggPSAkdGhpcy5pbmRleCgpO1xuICAgICAgJHRoaXMuY2xvc2VzdCgnLnMtaXRlbS1zdGF0cycpLmZpbmQoJy5qcy1zbGlkZXItY2hhcnQnKS5zbGljaygnc2xpY2tHb1RvJywgaW5kZXgpO1xuICAgIH0pO1xuXG5cbiAgICAvLyBtZWRpYSBxdWVyeSBldmVudCBoYW5kbGVyXG4gICAgaWYgKG1hdGNoTWVkaWEpIHtcbiAgICAgIHZhciBtcSA9IHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA3NjdweCknKTtcbiAgICAgIG1xLmFkZExpc3RlbmVyKFdpZHRoQ2hhbmdlKTtcbiAgICAgIFdpZHRoQ2hhbmdlKG1xKTtcbiAgICB9XG4gICAgLy8gbWVkaWEgcXVlcnkgY2hhbmdlXG4gICAgZnVuY3Rpb24gV2lkdGhDaGFuZ2UobXEpIHtcbiAgICAgIGlmIChtcS5tYXRjaGVzKSB7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgLy8gU2V0IGhlaWdodCBvZiBjaGFydFxuICAgICAgICAkKCcuY2hhcnQtaXRlbScpLmhlaWdodCggJCgnLmNoYXJ0LXN0YXQnKS5wYXJlbnQoKS5vdXRlckhlaWdodCgpICk7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUb3AxMDsgLy9zZXQgd2hhdCBjYW4gYmUgaW1wb3J0ZWQgZnJvbSB0aGlzIGZpbGVcbiIsImNsYXNzIFdpc2hsaXN0IHtcblxuICBjb25zdHJ1Y3RvciAoKSB7XG5cbiAgICAvLyBXaXNobGlzdCBFbGVtZW50c1xuICAgIHZhciB3aXNobGlzdFNhdmVFbGVtZW50ID0gJCgnLmpzLXdpc2hsaXN0LXNhdmUnKSxcbiAgICAgICAgd2lzaGxpc3REZWxldGVFbGVtZW50ID0gJCgnLmpzLXdpc2hsaXN0LWRlbGV0ZScpLFxuICAgICAgICBzbHVnID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KCAnLycgKSxcbiAgICAgICAgc2x1ZyA9IHNsdWcuc2xpY2UoLTEpWzBdO1xuXG4gICAgLy8gV2lzaGxpc3QgQ29va2llIGhhcyBub3QgYmVlbiBjcmVhdGVkIHlldC5cbiAgICBpZiggQ29va2llcy5nZXQoJ3dpc2hsaXN0JykgPT09IHVuZGVmaW5lZCApIHtcbiAgICAgIHdpc2hsaXN0RGVsZXRlRWxlbWVudC5hZGRDbGFzcygnaGlkZScpO1xuICAgIC8vIFdpc2hsaXN0IENvb2tpZSBpcyBhbHJlYWR5IGNyZWF0ZWQuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFdpc2hsaXN0IENvb2tpZSB3YXMgY3JlYXRlZCBidXQgdGhpcyBwYWdlIGlzIG5vdCBwYXJ0IG9mIGl0LlxuICAgICAgaWYoIENvb2tpZXMuZ2V0SlNPTignd2lzaGxpc3QnKS5pbmRleE9mKHNsdWcpID09PSAtMSApIHtcbiAgICAgICAgd2lzaGxpc3REZWxldGVFbGVtZW50LmFkZENsYXNzKCdoaWRlJyk7XG4gICAgICAvLyBXaXNobGlzdCBDb29raWUgd2FzIGNyZWF0ZWQgYW5kIHRoaXMgcGFnZSBpcyBwYXJ0IG9mIGl0LlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2lzaGxpc3RTYXZlRWxlbWVudC5hZGRDbGFzcygnaGlkZScpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFNoYXJlIEZpeGVkIFNhdmUgRnVuY3Rpb25hbGl0eVxuICAgIHdpc2hsaXN0U2F2ZUVsZW1lbnQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cbiAgICAgIC8vIFdpc2hsaXN0IENvb2tpZSBoYXMgbm90IGJlZW4gY3JlYXRlZCB5ZXQuXG4gICAgICBpZiggQ29va2llcy5nZXQoJ3dpc2hsaXN0JykgPT09IHVuZGVmaW5lZCApIHtcbiAgICAgICAgdmFyIGNvb2tpZVZhbHVlID0gW107XG4gICAgICAgIGNvb2tpZVZhbHVlLnB1c2goc2x1Zyk7XG4gICAgICAgIENvb2tpZXMuc2V0KCd3aXNobGlzdCcsIGNvb2tpZVZhbHVlICk7XG4gICAgICAvLyBXaXNobGlzdCBDb29raWUgaXMgYWxyZWFkeSBjcmVhdGVkLlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGNvb2tpZVZhbHVlID0gQ29va2llcy5nZXRKU09OKCd3aXNobGlzdCcpO1xuICAgICAgICBjb29raWVWYWx1ZS5wdXNoKHNsdWcpO1xuICAgICAgICBDb29raWVzLnNldCgnd2lzaGxpc3QnLCBjb29raWVWYWx1ZSApO1xuICAgICAgfVxuXG4gICAgICB3aXNobGlzdFNhdmVFbGVtZW50LmFkZENsYXNzKCdoaWRlJyk7XG4gICAgICB3aXNobGlzdERlbGV0ZUVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcblxuICAgIH0pO1xuXG4gICAgd2lzaGxpc3REZWxldGVFbGVtZW50Lm9uKCdzaG93bi5icy5wb3BvdmVyJywgZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgdGhpc1BvcG92ZXIgPSAkKHRoaXMpO1xuICAgICAgLy8gSGlkZSBQb3BvdmVyXG4gICAgICAkKCcuYnRuLXdpc2hsaXN0LW5vJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXNQb3BvdmVyLmNsaWNrKCk7XG4gICAgICB9KTtcblxuICAgICAgLy8gUmVtb3ZlIFBvcG92ZXIgQW5kIFJlbW92ZSBDb29raWVcbiAgICAgICQoJy5idG4td2lzaGxpc3QteWVzJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgdmFyIGNvb2tpZVZhbHVlID0gQ29va2llcy5nZXRKU09OKCd3aXNobGlzdCcpLFxuICAgICAgICAgICAgY29va2llSW5kZXggPSBjb29raWVWYWx1ZS5pbmRleE9mKHNsdWcpO1xuICAgICAgICBjb29raWVWYWx1ZS5zcGxpY2UoY29va2llSW5kZXgsIDEpO1xuICAgICAgICBDb29raWVzLnNldCgnd2lzaGxpc3QnLCBjb29raWVWYWx1ZSApO1xuXG4gICAgICAgIHRoaXNQb3BvdmVyLmNsaWNrKCk7XG4gICAgICAgIHdpc2hsaXN0RGVsZXRlRWxlbWVudC5hZGRDbGFzcygnaGlkZScpO1xuICAgICAgICB3aXNobGlzdFNhdmVFbGVtZW50LnJlbW92ZUNsYXNzKCdoaWRlJyk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gV2lzaGxpc3Q7IC8vc2V0IHdoYXQgY2FuIGJlIGltcG9ydGVkIGZyb20gdGhpcyBmaWxlXG4iLCJjbGFzcyBCb290c3RyYXAge1xuXG4gIGNvbnN0cnVjdG9yICgpIHtcblxuICAgIC8vIEJvb3RzdHJhcCBFbGVtZW50c1xuICAgIHRoaXMuZHJvcGRvd25FbGVtZW50ID0gJCgnLmRyb3Bkb3duLW1lbnUgPiBsaSA+IGEuZHJvcGRvd24tdG9nZ2xlJyk7XG4gICAgdGhpcy5uYXZFbGVtZW50ID0gJCgnLm5hdi1pdGVtJyk7XG4gICAgdGhpcy5uYXZUb2dnbGVFbGVtZW50ID0gJCgnLmpzLW5hdi10b2dnbGUnKTtcbiAgICB0aGlzLmZvb3RlckVsZW1lbnQgPSAkKCcuY20tc2F0LW0tZm9vdGVyJyk7XG4gICAgdGhpcy5leHBsb3JlRWxlbWVudCA9ICQoJy5jbS1zYXQtbS1leHBsb3JlJyk7XG4gICAgdGhpcy53aXNobGlzdEVsZW1lbnQgPSAkKCcjbmF2LWRyb3Bkb3duLXdpc2hsaXN0Jyk7XG5cbiAgICAvLyBDbGljayBib290c3RyYXAgZHJvcGRvd25zIGluc2lkZSBvdGhlciBkcm9wZG93bnMuXG4gICAgdGhpcy5kcm9wZG93bkVsZW1lbnQub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAkdGhpcy5uZXh0KCkudG9nZ2xlKCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgJHRoaXMuZmluZCgnLm5hdi1jYXJldCcpLnRvZ2dsZUNsYXNzKCdoaWRlJyk7XG4gICAgfSk7XG5cbiAgICAvLyBDbG9zZSBkcm9wZG93bnMgd2hlbiB5b3Ugb3BlbiBvdGhlciBkcm9wZG93blxuICAgIHRoaXMubmF2VG9nZ2xlRWxlbWVudC5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLFxuICAgICAgICAgIHRoaXNEcm9wZG93biA9ICQodGhpcykubmV4dCgpLFxuICAgICAgICAgIGNsb3Nlc3RQYXJlbnQgPSAkdGhpcy5jbG9zZXN0KCcuanMtbmF2LXRvZ2dsZS1wYXJlbnQnKTtcbiAgICAgIGlmKCB0aGlzRHJvcGRvd24uaGFzQ2xhc3MoJ29wZW4nKSApIHtcbiAgICAgICAgdGhpc0Ryb3Bkb3duLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjbG9zZXN0UGFyZW50LmZpbmQoJy5vcGVuJykucHJldigpLmZpbmQoJy5uYXYtY2FyZXQnKS50b2dnbGVDbGFzcygnaGlkZScpO1xuICAgICAgICBjbG9zZXN0UGFyZW50LmZpbmQoJy5kcm9wZG93bi1tZW51JykucmVtb3ZlQ2xhc3MoJ29wZW4nKS5oaWRlKCk7XG4gICAgICAgIHRoaXNEcm9wZG93bi5hZGRDbGFzcygnb3BlbicpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gU2hvdy9IaWRlIGNsb3NlIFNWRyB3aGVuIHRoZSBkcm9wZG93biBjaGFuZ2UuXG4gICAgdGhpcy5uYXZFbGVtZW50Lm9uKCdzaG93bi5icy5kcm9wZG93biBoaWRkZW4uYnMuZHJvcGRvd24nLCBmdW5jdGlvbigpIHtcbiAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAkdGhpcy5maW5kKCcubmF2LWljb24nKS50b2dnbGVDbGFzcygnaGlkZScpO1xuICAgICAgJHRoaXMuZmluZCgnLm5hdi10ZXh0JykudG9nZ2xlQ2xhc3MoJ2hpZGUnKTtcbiAgICAgIGlmKCR0aGlzLmRhdGEoJ25hdicpID09PSAnbWVudScpIHtcbiAgICAgICAgJCgnLmNtLXNhdC1tLW5hdicpLnRvZ2dsZUNsYXNzKCduYXYtb3BlbicpO1xuICAgICAgfVxuICAgICAgJCgnI2V4cGxvcmVNb2RhbCcpLm1vZGFsKCdoaWRlJyk7XG4gICAgICAkKCcuY20tc2F0LW0tbWFzaycpLnRvZ2dsZUNsYXNzKCdpbicpO1xuICAgIH0pO1xuXG4gICAgLy8gU2hvdy9IaWRlIFNWRyBhbmQgdGV4dCB3aGVuIHRoZSBtb2RhbCBjaGFuZ2UuXG4gICAgdGhpcy5leHBsb3JlRWxlbWVudC5vbignc2hvd24uYnMubW9kYWwgaGlkZGVuLmJzLm1vZGFsJywgZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgZXhwbG9yZUl0ZW0gPSAkKCcubmF2LWV4cGxvcmUnKSxcbiAgICAgICAgICBzbGlja1NsaWRlciA9ICQoJy5qcy1zbGljay1zbGlkZXInKTtcbiAgICAgIGV4cGxvcmVJdGVtLmZpbmQoJy5uYXYtaWNvbicpLnRvZ2dsZUNsYXNzKCdoaWRlJyk7XG4gICAgICBleHBsb3JlSXRlbS5maW5kKCcubmF2LXRleHQnKS50b2dnbGVDbGFzcygnaGlkZScpO1xuICAgICAgaWYoICQodGhpcykuaGFzQ2xhc3MoJ2luJykgKSB7XG4gICAgICAgIHNsaWNrU2xpZGVyLnNsaWNrKCdzbGlja1BhdXNlJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzbGlja1NsaWRlci5zbGljaygnc2xpY2tQbGF5Jyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLndpc2hsaXN0RWxlbWVudC5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICBpZiggQ29va2llcy5nZXQoJ3dpc2hsaXN0JykgIT09IHVuZGVmaW5lZCAmJiBDb29raWVzLmdldEpTT04oJ3dpc2hsaXN0JykubGVuZ3RoID4gMCApIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3dpc2hsaXN0Lmh0bWwnO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gSGlkZSBmb290ZXIgYWNjb3JkaW9ucyB3aGVuIHlvdSBjbGljayBvbiBhIGRpZmZlcmVudCBhY2NvcmRpb24uXG4gICAgdGhpcy5mb290ZXJFbGVtZW50LmZpbmQoJy5jb2xsYXBzZScpLm9uKCdzaG93LmJzLmNvbGxhcHNlJywgZnVuY3Rpb24oKSB7XG4gICAgICAkKCcuY29sbGFwc2UnKS5ub3QodGhpcykuY29sbGFwc2UoJ2hpZGUnKTtcbiAgICB9KTtcblxuICAgIC8vIEhpZGUgcG9wb3ZlciBvbiBjbGljayBvdXRzaWRlLlxuICAgIHZhciAkYm9keSA9ICQoJ2JvZHknKTtcbiAgICAkYm9keS5vbignc2hvd24uYnMucG9wb3ZlcicsICdbZGF0YS10b2dnbGU9XCJwb3BvdmVyXCJdJywgZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgJGJvZHkub24oJ2NsaWNrLnBvcG92ZXJvcGVuJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKCEkdGhpcy5pcyhlLnRhcmdldCkgJiYgJHRoaXMuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDAgJiYgJCgnLnBvcG92ZXInKS5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICR0aGlzLmNsaWNrKCk7XG4gICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSkub24oJ2hpZGRlbi5icy5wb3BvdmVyJywgZnVuY3Rpb24oKSB7XG4gICAgICAkYm9keS5vZmYoJ2NsaWNrLnBvcG92ZXJvcGVuJyk7XG4gICAgfSk7XG5cbiAgICAvLyBtZWRpYSBxdWVyeSBldmVudCBoYW5kbGVyXG4gICAgaWYgKG1hdGNoTWVkaWEpIHtcbiAgICAgIHZhciBtcSA9IHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA3NjhweCknKTtcbiAgICAgIG1xLmFkZExpc3RlbmVyKFdpZHRoQ2hhbmdlKTtcbiAgICAgIFdpZHRoQ2hhbmdlKG1xKTtcbiAgICB9XG4gICAgLy8gbWVkaWEgcXVlcnkgY2hhbmdlXG4gICAgZnVuY3Rpb24gV2lkdGhDaGFuZ2UobXEpIHtcbiAgICAgIGlmIChtcS5tYXRjaGVzKSB7XG4gICAgICAgICQoJy5qcy1zaGFyZS1maXhlZC1wb3BvdmVyJykuYXR0cignZGF0YS1wbGFjZW1lbnQnLCAnYm90dG9tJylcbiAgICAgICAgJCgnLmpzLXNoYXJlLWZpeGVkLXBvcG92ZXInKS5wb3BvdmVyKCk7XG5cbiAgICAgICAgJCgnLmpzLXdpc2hsaXN0LWRlbGV0ZScpLmF0dHIoJ2RhdGEtcGxhY2VtZW50JywgJ2JvdHRvbScpXG4gICAgICAgICQoJy5qcy13aXNobGlzdC1kZWxldGUnKS5wb3BvdmVyKCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgJCgnLmpzLXNoYXJlLWZpeGVkLXBvcG92ZXInKS5hdHRyKCdkYXRhLXBsYWNlbWVudCcsICdhdXRvIHJpZ2h0JylcbiAgICAgICAgJCgnLmpzLXNoYXJlLWZpeGVkLXBvcG92ZXInKS5wb3BvdmVyKCk7XG5cbiAgICAgICAgJCgnLmpzLXdpc2hsaXN0LWRlbGV0ZScpLmF0dHIoJ2RhdGEtcGxhY2VtZW50JywgJ2F1dG8gcmlnaHQnKVxuICAgICAgICAkKCcuanMtd2lzaGxpc3QtZGVsZXRlJykucG9wb3ZlcigpO1xuICAgICAgfVxuICAgIH1cblxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQm9vdHN0cmFwOyAvL3NldCB3aGF0IGNhbiBiZSBpbXBvcnRlZCBmcm9tIHRoaXMgZmlsZVxuIiwiLy8gQm9vdHN0cmFwIE11bHRpc2VjdCBEcm9wZG93blxuY2xhc3MgRXhwbG9yZU11bHRpc2VsZWN0IHtcblxuICBjb25zdHJ1Y3RvciAoKSB7XG5cbiAgICAvLyBFeHBsb3JlIE11bHRpc2VsZWN0IEVsZW1lbnRzXG4gICAgdGhpcy5zZWxlY3RFbGVtZW50ID0gJCgnLmV4cGxvcmUtbXVsdGlzZWxlY3QnKTtcbiAgICB0aGlzLmV4cGxvcmVFbGVtZW50ID0gJCgnLmNtLXNhdC1tLWV4cGxvcmUnKTtcblxuICAgIHRoaXMuc2VsZWN0RWxlbWVudC5lYWNoKGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICAgIHZhciBuYW1lID0gJCh2YWx1ZSkuZGF0YSgnbmFtZScpO1xuICAgICAgJCh2YWx1ZSkubXVsdGlzZWxlY3Qoe1xuICAgICAgICBpbmNsdWRlU2VsZWN0QWxsT3B0aW9uOiB0cnVlLFxuICAgICAgICBudW1iZXJEaXNwbGF5ZWQ6IDEsXG4gICAgICAgIG5vblNlbGVjdGVkVGV4dDogbmFtZSxcbiAgICAgICAgb25Ecm9wZG93blNob3duOiBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICQoJy50b3RhbC1zZWxlY3RlZCcpLnBvcG92ZXIoJ2Rlc3Ryb3knKTtcbiAgICAgICAgICAkKCcuc2xpY2stZG90cycpLmFkZENsYXNzKCdkb3RzLWhpZGRlbicpO1xuICAgICAgICB9LFxuICAgICAgICBvbkRyb3Bkb3duSGlkZGVuOiBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICQoJy5zbGljay1kb3RzJykucmVtb3ZlQ2xhc3MoJ2RvdHMtaGlkZGVuJyk7XG4gICAgICAgICAgdmFyIHNlbGVjdGVkID0gJCgnLmV4cGxvcmUtbXVsdGlzZWxlY3QnKS5maW5kKCc6c2VsZWN0ZWQnKSxcbiAgICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb25zID0gW107XG4gICAgICAgICAgaWYoc2VsZWN0ZWQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgJCgnLmV4cGxvcmUtdG90YWwnKS5zbGlkZURvd24oKTtcbiAgICAgICAgICAgICQoJy50b3RhbC1zZWxlY3RlZCcpLmZpbmQoJ3NwYW4nKS50ZXh0KHNlbGVjdGVkLmxlbmd0aCk7XG4gICAgICAgICAgICBzZWxlY3RlZC5lYWNoKGZ1bmN0aW9uKHNlbGVjdGVkS2V5LCBzZWxlY3RlZFZhbHVlKSB7XG4gICAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9ucy5wdXNoKCQoc2VsZWN0ZWRWYWx1ZSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAkKCcudG90YWwtc2VsZWN0ZWQnKS5wb3BvdmVyKHtcbiAgICAgICAgICAgICAgY29udGFpbmVyOiAnLmNtLXNhdC1tLWV4cGxvcmUnLFxuICAgICAgICAgICAgICBodG1sOiB0cnVlLFxuICAgICAgICAgICAgICBwbGFjZW1lbnQ6ICdhdXRvIHRvcCcsXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBvcHRpb25zID0gW107XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgb3B0aW9uIGluIHNlbGVjdGVkT3B0aW9ucyl7XG4gICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goJzxhIGhyZWY9XCIjXCIgY2xhc3M9XCJqcy1lcC1pdGVtXCIgZGF0YS12YWx1ZT1cIicgKyAkKHNlbGVjdGVkT3B0aW9uc1tvcHRpb25dKS5hdHRyKCd2YWx1ZScpICsgJ1wiPicgKyAkKHNlbGVjdGVkT3B0aW9uc1tvcHRpb25dKS50ZXh0KCkgKyAnPHN2Zz48dXNlIHhsaW5rOmhyZWY9XCIjY2xvc2VcIj48L3VzZT48L3N2Zz48L2E+Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaCgnPGRpdiBjbGFzcz1cInBvcG92ZXItY2xlYXJhbGxcIj48YSBocmVmPVwiI1wiIGNsYXNzPVwianMtZXAtY2xlYXJhbGxcIj5DbGVhciBhbGw8c3ZnPjx1c2UgeGxpbms6aHJlZj1cIiNjbG9zZVwiPjwvdXNlPjwvc3ZnPjwvYT48YSBocmVmPVwiI1wiIGNsYXNzPVwianMtY2xvc2V0b29sdGlwIHB1bGwtcmlnaHRcIj5DbG9zZTwvYT48L2Rpdj4nKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoJy5leHBsb3JlLXRvdGFsJykuc2xpZGVVcCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBSZW1vdmUgU2luZ2xlIFBvcG92ZXIgVGFnIE9uIENsaWNrLlxuICAgIHRoaXMuZXhwbG9yZUVsZW1lbnQub24oJ2NsaWNrJywgJy5qcy1lcC1pdGVtJywgZnVuY3Rpb24oZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdmFyICR0aGlzID0gJCh0aGlzKSxcbiAgICAgICAgICBleHBsb3JlTXVsdGkgPSAkKCcuZXhwbG9yZS1tdWx0aXNlbGVjdCcpO1xuICAgICAgZXhwbG9yZU11bHRpLm11bHRpc2VsZWN0KCAnZGVzZWxlY3QnLCAkdGhpcy5kYXRhKCd2YWx1ZScpICk7XG4gICAgICAkKCcudG90YWwtc2VsZWN0ZWQnKS5maW5kKCdzcGFuJykudGV4dChleHBsb3JlTXVsdGkuZmluZCgnOnNlbGVjdGVkJykubGVuZ3RoKTtcbiAgICAgICR0aGlzLnJlbW92ZSgpO1xuICAgICAgaWYoZXhwbG9yZU11bHRpLmZpbmQoJzpzZWxlY3RlZCcpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAkKCcudG90YWwtc2VsZWN0ZWQnKS5wb3BvdmVyKCdkZXN0cm95Jyk7XG4gICAgICAgICQoJy5leHBsb3JlLXRvdGFsJykuc2xpZGVVcCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gUmVtb3ZlIEFsbCBQb3BvdmVyIFRhZ3MgT24gQ2xpY2suXG4gICAgdGhpcy5leHBsb3JlRWxlbWVudC5vbignY2xpY2snLCAnLmpzLWVwLWNsZWFyYWxsJywgZnVuY3Rpb24oZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdmFyIGV4cGxvcmVNdWx0aSA9ICQoJy5leHBsb3JlLW11bHRpc2VsZWN0Jyk7XG4gICAgICBleHBsb3JlTXVsdGkubXVsdGlzZWxlY3QoJ2Rlc2VsZWN0QWxsJywgZmFsc2UpO1xuICAgICAgZXhwbG9yZU11bHRpLm11bHRpc2VsZWN0KCd1cGRhdGVCdXR0b25UZXh0Jyk7XG4gICAgICAkKCcudG90YWwtc2VsZWN0ZWQnKS5wb3BvdmVyKCdkZXN0cm95Jyk7XG4gICAgICAkKCcuZXhwbG9yZS10b3RhbCcpLnNsaWRlVXAoKTtcbiAgICB9KTtcblxuICAgIC8vIEhpZGUgdG9vbHRpcCBvbiBtb2JpbGVcbiAgICB0aGlzLmV4cGxvcmVFbGVtZW50Lm9uKCdjbGljaycsICcuanMtY2xvc2V0b29sdGlwJywgZnVuY3Rpb24oZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgJCgnLnRvdGFsLXNlbGVjdGVkJykucG9wb3ZlcignaGlkZScpO1xuICAgIH0pO1xuXG4gICAgLy8gbWVkaWEgcXVlcnkgZXZlbnQgaGFuZGxlclxuICAgIGlmIChtYXRjaE1lZGlhKSB7XG4gICAgICB2YXIgbXEgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogNzY3cHgpJyk7XG4gICAgICB2YXIgbXFsID0gd2luZG93Lm1hdGNoTWVkaWEoXCIob3JpZW50YXRpb246IHBvcnRyYWl0KVwiKTtcbiAgICAgIG1xLmFkZExpc3RlbmVyKFdpZHRoQ2hhbmdlKTtcbiAgICAgIG1xbC5hZGRMaXN0ZW5lcihPcmllbnRhdGlvbkNoYW5nZSk7XG4gICAgICBXaWR0aENoYW5nZShtcSk7XG4gICAgfVxuICAgIC8vIG1lZGlhIHF1ZXJ5IGNoYW5nZVxuICAgIGZ1bmN0aW9uIFdpZHRoQ2hhbmdlKG1xKSB7XG4gICAgICBpZiAoIG1xLm1hdGNoZXMgKSB7XG4gICAgICAgICQoJy5jbS1zYXQtbS1leHBsb3JlJykuZmluZCgnLmJ0bi1ncm91cCcpLmFkZENsYXNzKCdkcm9wdXAnKTtcbiAgICAgICAgT3JpZW50YXRpb25DaGFuZ2UobXFsKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAkKCcuY20tc2F0LW0tZXhwbG9yZScpLmZpbmQoJy5idG4tZ3JvdXAnKS5yZW1vdmVDbGFzcygnZHJvcHVwJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gb3JpZW50YXRpb24gY2hhbmdlXG4gICAgZnVuY3Rpb24gT3JpZW50YXRpb25DaGFuZ2UobXFsKSB7XG4gICAgICBpZiAoIG1xbC5tYXRjaGVzICkge1xuICAgICAgICAkKCcuY20tc2F0LW0tZXhwbG9yZScpLmZpbmQoJy5idG4tZ3JvdXAnKS5hZGRDbGFzcygnZHJvcHVwJyk7XG4gICAgICAgICQoJy5leHBsb3JlLW11bHRpcGxlJykuZWFjaChmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICAgICAgJCh2YWx1ZSkuZmluZCgnLmJ0bi1ncm91cCcpLmVxKDEpLm9mZignY2xpY2suYnRuLWxhbmRzY2FwZScpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAkKCcuY20tc2F0LW0tZXhwbG9yZScpLmZpbmQoJy5idG4tZ3JvdXAnKS5yZW1vdmVDbGFzcygnZHJvcHVwJyk7XG4gICAgICAgICQoJy5leHBsb3JlLW11bHRpcGxlJykuZWFjaChmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICAgICAgJCh2YWx1ZSkuZmluZCgnLmJ0bi1ncm91cCcpLmVxKDEpLm9uKCdjbGljay5idG4tbGFuZHNjYXBlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9ucyA9ICQoJy5leHBsb3JlLW11bHRpc2VsZWN0JykuZmluZCgnOnNlbGVjdGVkJykubGVuZ3RoO1xuICAgICAgICAgICAgaWYoICEkdGhpcy5oYXNDbGFzcygnb3BlbicpICYmIHNlbGVjdGVkT3B0aW9ucyA+IDAgKSB7XG4gICAgICAgICAgICAgICQoJy5leHBsb3JlLXRvdGFsJykuaGlkZSgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmKCAkdGhpcy5oYXNDbGFzcygnb3BlbicpICYmIHNlbGVjdGVkT3B0aW9ucyA+IDAgKSB7XG4gICAgICAgICAgICAgICQoJy5leHBsb3JlLXRvdGFsJykuc2hvdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEV4cGxvcmVNdWx0aXNlbGVjdDsgLy9zZXQgd2hhdCBjYW4gYmUgaW1wb3J0ZWQgZnJvbSB0aGlzIGZpbGVcbiIsIi8vIEJvb3RzdHJhcCBNdWx0aXNlY3QgRHJvcGRvd25cbmNsYXNzIEZpbHRlck11bHRpc2VsZWN0IHtcblxuICBjb25zdHJ1Y3RvciAoKSB7XG5cbiAgICAvLyBGaWx0ZXIgTXVsdGlzZWxlY3QgRWxlbWVudHNcbiAgICB0aGlzLmZpbHRlckVsZW1lbnQgPSAkKCcuY20tc2F0LW0tZmlsdGVyJyk7XG4gICAgdGhpcy5zZWxlY3RFbGVtZW50ID0gJCgnLmZpbHRlci1tdWx0aXNlbGVjdCcpO1xuICAgIHRoaXMud2lzaGxpc3RFbGVtZW50ID0gJCgnLmNtLXNhdC1wLXdpc2hsaXN0Jyk7XG5cbiAgICB0aGlzLnNlbGVjdEVsZW1lbnQuZWFjaChmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICB2YXIgbmFtZSA9ICQodmFsdWUpLmRhdGEoJ25hbWUnKTtcbiAgICAgICQodmFsdWUpLm11bHRpc2VsZWN0KHtcbiAgICAgICAgaW5jbHVkZVNlbGVjdEFsbE9wdGlvbjogdHJ1ZSxcbiAgICAgICAgYnV0dG9uVGV4dDogZnVuY3Rpb24ob3B0aW9ucywgc2VsZWN0KSB7XG4gICAgICAgICAgaWYgKG9wdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbmFtZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5hbWUgKyAnICgnICsgb3B0aW9ucy5sZW5ndGggKyAnKSdcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5maWx0ZXJFbGVtZW50Lm9uKCdjbGljaycsICcuZmlsdGVyLWN0YScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcblxuICAgIHRoaXMud2lzaGxpc3RFbGVtZW50Lm9uKCdjbGljaycsICcuZmlsdGVyLWN0YScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIHZhciBzZWxlY3RlZE9wdGlvbnMgPSAkKCcuc2F0LW11bHRpc2VsZWN0JykuZmluZCgnOnNlbGVjdGVkJyksXG4gICAgICAgICAgdG90YWxJdGVtcyA9ICQoJy50b3RhbC1pdGVtcycpLFxuICAgICAgICAgIHJlc3VsdEl0ZW0gPSAkKCcucmVzdWx0cy1pdGVtJyk7XG5cbiAgICAgIHJlc3VsdEl0ZW0uYXR0cignZGF0YS1mb3VuZCcsICdmYWxzZScpO1xuXG4gICAgICBpZihzZWxlY3RlZE9wdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICBzZWxlY3RlZE9wdGlvbnMuZWFjaChmdW5jdGlvbihvcHRpb25LZXksIG9wdGlvblZhbHVlKSB7XG4gICAgICAgICAgcmVzdWx0SXRlbS5lYWNoKGZ1bmN0aW9uKHJlc3VsdEtleSwgcmVzdWx0VmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBpdGVtVGFncyA9ICQocmVzdWx0VmFsdWUpLmZpbmQoJy5pdGVtLXRhZ3MnKS5kYXRhKCdjb250ZW50JykudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIGlmKCBpdGVtVGFncy5pbmRleE9mKCQob3B0aW9uVmFsdWUpLnRleHQoKS50b0xvd2VyQ2FzZSgpKSAhPT0gLTEgJiYgJChyZXN1bHRWYWx1ZSkuYXR0cignZGF0YS1mb3VuZCcpID09PSAnZmFsc2UnICkge1xuICAgICAgICAgICAgICAkKHJlc3VsdFZhbHVlKS5wYXJlbnQoKS5zaG93KCdzbG93Jyk7XG4gICAgICAgICAgICAgICQocmVzdWx0VmFsdWUpLmF0dHIoJ2RhdGEtZm91bmQnLCAndHJ1ZScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgkKHJlc3VsdFZhbHVlKS5hdHRyKCdkYXRhLWZvdW5kJykgPT09ICdmYWxzZScpIHtcbiAgICAgICAgICAgICAgJChyZXN1bHRWYWx1ZSkucGFyZW50KCkuaGlkZSgnc2xvdycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdEl0ZW0ucGFyZW50KCkuc2hvdygnc2xvdycpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGaWx0ZXJNdWx0aXNlbGVjdDsgLy9zZXQgd2hhdCBjYW4gYmUgaW1wb3J0ZWQgZnJvbSB0aGlzIGZpbGVcbiIsImNsYXNzIEdvb2dsZU1hcHMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBsZXQgY29udGFjdE1hcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFjdE1hcFwiKTtcbiAgICAgICAgbGV0IGhvbWVwYWdlTWFwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lcGFnZS1tYXBcIik7XG4gICAgICAgIGxldCBhcnRpY2xlTWFwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcnRpY2xlTWFwXCIpO1xuICAgICAgICBsZXQgdG9wMTBNYXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvcDEwTWFwXCIpO1xuICAgICAgICBsZXQgZXhwbG9yZU1hcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXhwbG9yZU1hcFwiKTtcbiAgICAgICAgbGV0IGhvbWVwYWdlTWFwRWxlbWVudCA9ICQoJy5qcy1zbGljay1ob21lcGFnZS1tYXAnKTtcbiAgICAgICAgbGV0IHRvcDEwTWFwRWxlbWVudCA9ICQoJy5qcy1zbGlkZXItdG9wMTAnKTtcbiAgICAgICAgbGV0IGN1c3RvbU1hcmtlciA9ICdpbWFnZXMvbWFwcy9tYXJrZXIucG5nJztcbiAgICAgICAgbGV0IGN1c3RvbU1hcmtlckV4cGxvcmUgPSAnaW1hZ2VzL21hcHMvbWFya2VyRXhwbG9yZS5wbmcnO1xuICAgICAgICBsZXQgY3VzdG9tTWFya2VyRXhwbG9yZVRyYW5zcGFyZW50ID0gJ2ltYWdlcy9tYXBzL21hcmtlckV4cGxvcmVUcmFuc3BhcmVudC5wbmcnO1xuICAgICAgICBsZXQgY3VzdG9tTWFya2VyX2hvdmVyID0gJ2ltYWdlcy9tYXBzL21hcmtlcl9ob3Zlci5wbmcnO1xuICAgICAgICB2YXIgbWFya2VycyA9IFtdO1xuICAgICAgICAvL0FydGljbGUgTWFwXG4gICAgICAgIGlmIChhcnRpY2xlTWFwICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hcnRpY2xlTGF0TG5nID0ge2xhdDogLTMyLjkxMDQ3MjUsIGxuZzogMjMuNTIwNDMzMn07XG4gICAgICAgICAgICAgICAgbGV0IG1hcE9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGNlbnRlcjogdGhpcy5hcnRpY2xlTGF0TG5nLFxuICAgICAgICAgICAgICAgICAgICB6b29tOiA3LFxuICAgICAgICAgICAgICAgICAgICBzY3JvbGx3aGVlbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIG1hcFR5cGVJZDogZ29vZ2xlLm1hcHMuTWFwVHlwZUlkLlJPQURNQVBcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGxldCBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGFydGljbGVNYXAsIG1hcE9wdGlvbnMpO1xuXG4gICAgICAgICAgICAgICAgdmFyIGdldEFydGljbGVNYXAgPSAkLmFqYXgoe1xuICAgICAgICAgICAgICAgICAgdHlwZTogJ0dFVCcsXG4gICAgICAgICAgICAgICAgICB1cmw6ICcuLi9hcGkvYXJ0aWNsZU1hcC5qc29uJyxcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBnZXRBcnRpY2xlTWFwLmRvbmUoZnVuY3Rpb24oIGRhdGEgKSB7XG5cbiAgICAgICAgICAgICAgICAgICQoZGF0YSkuZWFjaChmdW5jdGlvbihpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBjcmVhdGVNYXJrZXIoXG4gICAgICAgICAgICAgICAgICAgICAgbWFwLFxuICAgICAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YVtpbmRleF1bJ2xhdGl0dWRlJ10sXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YVtpbmRleF1bJ2xvbmdpdHVkZSddLFxuICAgICAgICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgbmV3IGluZm9XaW5kb3coXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhW2luZGV4XVsnbWFya2VySW1hZ2UnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbaW5kZXhdWydtYXJrZXJUaXRsZSddLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVtpbmRleF1bJ21hcmtlclN1YnRpdGxlJ11cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZERvbUxpc3RlbmVyKHdpbmRvdywgJ2xvYWQnLCBpbml0KTtcbiAgICAgICAgfVxuICAgICAgICAvL0V4cGxvcmUgTWFwXG4gICAgICAgIGlmIChleHBsb3JlTWFwICE9IG51bGwpIHtcbiAgICAgICAgICBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICAgICAgdGhpcy5leHBsb3JlTGF0TG5nID0ge2xhdDogLTI1LjI2NjA0NiwgbG5nOiAxNS45MjY2MjB9O1xuICAgICAgICAgICAgbGV0IG1hcE9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgIGNlbnRlcjogdGhpcy5leHBsb3JlTGF0TG5nLFxuICAgICAgICAgICAgICB6b29tOiA2LFxuICAgICAgICAgICAgICBzY3JvbGx3aGVlbDogZmFsc2UsXG4gICAgICAgICAgICAgIG1hcFR5cGVDb250cm9sT3B0aW9uczoge1xuICAgICAgICAgICAgICAgIG1hcFR5cGVJZHM6IFsnbWFwX3N0eWxlJ11cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgem9vbUNvbnRyb2xPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGdvb2dsZS5tYXBzLkNvbnRyb2xQb3NpdGlvbi5SSUdIVF9CT1RUT01cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGxldCBjdXN0b21zdHlsZXMgPSBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogXCJhbGxcIixcbiAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogXCJsYWJlbHNcIixcbiAgICAgICAgICAgICAgICBzdHlsZXJzOiBbXG4gICAgICAgICAgICAgICAgICB7dmlzaWJpbGl0eTogXCJvZmZcIn1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgIGxldCBzdHlsZWRNYXAgPSBuZXcgZ29vZ2xlLm1hcHMuU3R5bGVkTWFwVHlwZShjdXN0b21zdHlsZXMsIHtuYW1lOiBcIlN0eWxlZCBNYXBcIn0pO1xuICAgICAgICAgICAgbGV0IG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZXhwbG9yZU1hcCwgbWFwT3B0aW9ucyk7XG4gICAgICAgICAgICBtYXAubWFwVHlwZXMuc2V0KCdtYXBfc3R5bGUnLCBzdHlsZWRNYXApO1xuICAgICAgICAgICAgbWFwLnNldE1hcFR5cGVJZCgnbWFwX3N0eWxlJyk7XG5cbiAgICAgICAgICAgIHZhciBnZXRFeHBsb3JlTWFwID0gJC5hamF4KHtcbiAgICAgICAgICAgICAgdHlwZTogJ0dFVCcsXG4gICAgICAgICAgICAgIHVybDogJy4uL2FwaS9leHBsb3JlTWFwLmpzb24nLFxuICAgICAgICAgICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZ2V0RXhwbG9yZU1hcC5kb25lKGZ1bmN0aW9uKCBkYXRhICkge1xuXG4gICAgICAgICAgICAgICQoZGF0YSkuZWFjaChmdW5jdGlvbihpbmRleCkge1xuICAgICAgICAgICAgICAgIGNyZWF0ZU1hcmtlcldpdGhMYWJlbEV4cGxvcmUoXG4gICAgICAgICAgICAgICAgICBtYXAsXG4gICAgICAgICAgICAgICAgICBkYXRhW2luZGV4XVsnbGF0aXR1ZGUnXSxcbiAgICAgICAgICAgICAgICAgIGRhdGFbaW5kZXhdWydsb25naXR1ZGUnXSxcbiAgICAgICAgICAgICAgICAgIGRhdGFbaW5kZXhdWydsYWJlbCddLFxuICAgICAgICAgICAgICAgICAgMTUwLFxuICAgICAgICAgICAgICAgICAgZGF0YVtpbmRleF1bJ2xhYmVsQW5jaG9yWSddLFxuICAgICAgICAgICAgICAgICAgZGF0YVtpbmRleF1bJ3R5cGUnXVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJCgnLmNtLXNhdC1tLWV4cGxvcmUnKS5vbignc2hvd24uYnMubW9kYWwnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQudHJpZ2dlcihtYXAsICdyZXNpemUnKTtcbiAgICAgICAgICAgICAgbWFwLnNldFpvb20oIG1hcC5nZXRab29tKCkgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZERvbUxpc3RlbmVyKHdpbmRvdywgJ2xvYWQnLCBpbml0KTtcbiAgICAgICAgfVxuICAgICAgICAvL0NvbnRhY3QgTWFwXG4gICAgICAgIC8vQ2hlY2tpbmcgaWYgY29udGFjdCBtYXAgZWxlbWVudCBleGlzdCwgaWYgZG9lcywgdGhlbiBjcmVhdGUgdGhlIG1hcFxuICAgICAgICBpZiAoY29udGFjdE1hcCAhPSBudWxsKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICAgICAgICAgIHRoaXMub2ZmaWNlTGF0TG5nID0ge2xuZzogLTAuMjA5ODA3MSwgbGF0OiA1MS40MTk1NDIyfTtcbiAgICAgICAgICAgICAgICBsZXQgbWFwT3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgY2VudGVyOiB0aGlzLm9mZmljZUxhdExuZyxcbiAgICAgICAgICAgICAgICAgICAgem9vbTogMTAsXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbHdoZWVsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbWFwVHlwZUlkOiBnb29nbGUubWFwcy5NYXBUeXBlSWQuUk9BRE1BUFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgbGV0IG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoY29udGFjdE1hcCwgbWFwT3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgbGV0IG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogdGhpcy5vZmZpY2VMYXRMbmcsXG4gICAgICAgICAgICAgICAgICAgIG1hcDogbWFwLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiBjdXN0b21NYXJrZXJcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB2YXIgY29udGVudFN0cmluZyA9IFwiPGRpdiBjbGFzcz0nbWFya2VySW5mbyc+XCIgK1xuICAgICAgICAgICAgICAgICAgICBcIjxpbWcgc3JjPScuLi9pbWFnZXMvbWFwcy9wb3B1cC1jb250YWN0LmpwZyc+XCIgK1xuICAgICAgICAgICAgICAgICAgICBcIjxkaXYgY2xhc3M9J21hcmtlclRleHRDb250YWluZXInPlwiICtcbiAgICAgICAgICAgICAgICAgICAgXCI8cCBjbGFzcz0nbWFya2VyVGV4dCc+U291dGggQWZyaWNhbiBUb3VyaXNtPC9wPlwiICtcbiAgICAgICAgICAgICAgICAgICAgXCI8cCBjbGFzcz0nbWFya2VyVGV4dCc+NiBBbHRlcm5hdGUgR3JvdmU8L3A+IFwiICtcbiAgICAgICAgICAgICAgICAgICAgXCI8cCBjbGFzcz0nbWFya2VyVGV4dCc+TG9uZG9uLCBFbmdsYW5kPC9wPlwiICtcbiAgICAgICAgICAgICAgICAgICAgXCI8L2Rpdj5cIiArXG4gICAgICAgICAgICAgICAgICAgIFwiPC9kaXY+XCI7XG4gICAgICAgICAgICAgICAgdmFyIGluZm93aW5kb3cgPSBuZXcgZ29vZ2xlLm1hcHMuSW5mb1dpbmRvdyh7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGNvbnRlbnRTdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiAxODBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBtYXJrZXIuYWRkTGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpbmZvd2luZG93Lm9wZW4obWFwLCBtYXJrZXIpO1xuXG4gICAgICAgICAgICAgICAgICAgICQoJy5nbS1zdHlsZS1pdycpLnByZXYoKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnLmdtLXN0eWxlLWl3JykucGFyZW50KCkuYWRkQ2xhc3MoJ2luZm93aW5kb3ctcGFyZW50Jyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZERvbUxpc3RlbmVyKHdpbmRvdywgJ2xvYWQnLCBpbml0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vSG9tZXBhZ2UgTWFwXG4gICAgICAgIC8vQ2hlY2tpbmcgaWYgbWFwIGVsZW1lbnQgZXhpc3QsIGlmIGRvZXMsIHRoZW4gY3JlYXRlIHRoZSBtYXBcbiAgICAgICAgaWYgKGhvbWVwYWdlTWFwICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zYUxhdExuZyA9IHtsYXQ6IC0yOC42MDU0MTY5LCBsbmc6IDI1LjE3ODYxNTd9O1xuICAgICAgICAgICAgICAgIHRoaXMuaG9tZXBhZ2VNYXAgPSBob21lcGFnZU1hcDtcbiAgICAgICAgICAgICAgICBsZXQgbWFwT3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgY2VudGVyOiB0aGlzLnNhTGF0TG5nLFxuICAgICAgICAgICAgICAgICAgICB6b29tOiA2LFxuICAgICAgICAgICAgICAgICAgICBzY3JvbGx3aGVlbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIG1hcFR5cGVJZDogZ29vZ2xlLm1hcHMuTWFwVHlwZUlkLlJPQURNQVAsXG4gICAgICAgICAgICAgICAgICAgIHpvb21Db250cm9sOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB6b29tQ29udHJvbE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBnb29nbGUubWFwcy5Db250cm9sUG9zaXRpb24uUklHSFRfQk9UVE9NXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBsZXQgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcCh0aGlzLmhvbWVwYWdlTWFwLCBtYXBPcHRpb25zKTtcblxuICAgICAgICAgICAgICAgIHZhciBnZXRIb21lcGFnZU1hcCA9ICQuYWpheCh7XG4gICAgICAgICAgICAgICAgICB0eXBlOiAnR0VUJyxcbiAgICAgICAgICAgICAgICAgIHVybDogJy4uL2FwaS9ob21lcGFnZU1hcC5qc29uJyxcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBnZXRIb21lcGFnZU1hcC5kb25lKGZ1bmN0aW9uKCBkYXRhICkge1xuXG4gICAgICAgICAgICAgICAgICAkKGRhdGEpLmVhY2goZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlTWFya2VyV2l0aExhYmVsKFxuICAgICAgICAgICAgICAgICAgICAgIG1hcCxcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhW2luZGV4XVsnc2xpZGVySW5kZXgnXSxcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhW2luZGV4XVsnbGF0aXR1ZGUnXSxcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhW2luZGV4XVsnbG9uZ2l0dWRlJ10sXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YVtpbmRleF1bJ2xhYmVsJ10sXG4gICAgICAgICAgICAgICAgICAgICAgMTUwXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXJrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcmtlcnNbaV0sICdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSB0aGlzLnNsaWRlckluZGV4ICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICBob21lcGFnZU1hcEVsZW1lbnQuc2xpY2soJ3NsaWNrR29UbycsIGluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZERvbUxpc3RlbmVyKHdpbmRvdywgJ2xvYWQnLCBpbml0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vVG9wMTBNYXBMUFxuICAgICAgICBpZih0b3AxME1hcCE9bnVsbCkge1xuICAgICAgICAgICAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNhTGF0TG5nID0ge2xhdDogLTI4LjYwNTQxNjksIGxuZzogMjUuMTc4NjE1N307XG4gICAgICAgICAgICAgICAgdGhpcy50b3AxME1hcCA9IHRvcDEwTWFwO1xuICAgICAgICAgICAgICAgIGxldCBtYXBPcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICBjZW50ZXI6IHRoaXMuc2FMYXRMbmcsXG4gICAgICAgICAgICAgICAgICAgIHpvb206IDYsXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbHdoZWVsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbWFwVHlwZUlkOiBnb29nbGUubWFwcy5NYXBUeXBlSWQuUk9BRE1BUCxcbiAgICAgICAgICAgICAgICAgICAgem9vbUNvbnRyb2w6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHpvb21Db250cm9sT3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGdvb2dsZS5tYXBzLkNvbnRyb2xQb3NpdGlvbi5MRUZUX0JPVFRPTVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBsZXQgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcCh0aGlzLnRvcDEwTWFwLCBtYXBPcHRpb25zKTtcbiAgICAgICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgZ2V0VG9wMTBNYXAgPSAkLmFqYXgoe1xuICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdHRVQnLFxuICAgICAgICAgICAgICAgICAgICAgIHVybDogJy4uL2FwaS90b3AxME1hcC5qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbidcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgZ2V0VG9wMTBNYXAuZG9uZShmdW5jdGlvbiggZGF0YSApIHtcblxuICAgICAgICAgICAgICAgICAgICAgICQoZGF0YSkuZWFjaChmdW5jdGlvbihpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZU1hcmtlcldpdGhMYWJlbChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVtpbmRleF1bJ3NsaWRlckluZGV4J10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVtpbmRleF1bJ2xhdGl0dWRlJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVtpbmRleF1bJ2xvbmdpdHVkZSddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbaW5kZXhdWydsYWJlbCddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDE1MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIGluZGV4ID09PSBkYXRhLmxlbmd0aCAtIDEgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tNYXJrZXJzVG9wMTAoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgaW5kZXgqMjAwKTtcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGNsaWNrTWFya2Vyc1RvcDEwKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXJrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcmtlcnNbaV0sICdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcuY20tc2F0LW0tc2xpZGVyLXRvcDEwJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcC5wYW5Ubyh0aGlzLmdldFBvc2l0aW9uKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcC5wYW5CeSgxMDAsMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5zbGlkZXJJbmRleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3AxME1hcEVsZW1lbnQuc2xpY2soJ3NsaWNrR29UbycsIGluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sIDI3MDApO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBnb29nbGUubWFwcy5ldmVudC5hZGREb21MaXN0ZW5lcih3aW5kb3csICdsb2FkJywgaW5pdCk7XG4gICAgICAgIH1cblxuICAgICAgICAvL09iamVjdCBkZWNsYXJhdGlvbiBmb3IgbWFya2VycyB3aXRoIGluZm9XaW5kb3dcbiAgICAgICAgZnVuY3Rpb24gaW5mb1dpbmRvdyhpbWdVUkwsIGhlYWRlciwgdGV4dCkge1xuICAgICAgICAgICAgdGhpcy5pbWdVUkwgPSBpbWdVUkw7XG4gICAgICAgICAgICB0aGlzLmhlYWRlciA9IGhlYWRlcjtcbiAgICAgICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgICAgIH1cbiAgICAgICAgLypcbiAgICAgICAgIEZ1bmN0aW9uIHRvIGRlY2xhcmUgYW55IG5ldyBtYXJrZXIgd2l0aCBhIGxhYmVsXG4gICAgICAgICBAcGFyYW0ge21hcH0gbWFwIHRoZSBtYXAgd2hpY2ggdGhlIG1hcmtlciB3aWxsIHVzZVxuICAgICAgICAgQHBhcmFtIHtzbGlkZXJJbmRleH0gc2xpZGVyIGluZGV4XG4gICAgICAgICBAcGFyYW0ge2xhdH0gbGF0IGxhdGl0dWRlIG9mIHRoZSBtYXJrZXJcbiAgICAgICAgIEBwYXJhbSB7bG5nfSBsbmcgbG9uZ2l0dWRlIG9mIHRoZSBtYXJrZXJcbiAgICAgICAgIEBwYXJhbSB7bGFiZWxDb250ZW50fSBsYWJlbENvbnRlbnQgdGhlIHRleHQgb2YgdGhlIGxhYmVsXG4gICAgICAgICBAcGFyYW0ge2xhYmVsQW5jaG9yfSBsYWJlbEFuY2hvciB0aGUgWCBheGlzIG9mIHRoZSBtYXJrZXJcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZU1hcmtlcldpdGhMYWJlbChtYXAsIHNsaWRlckluZGV4PTAsIGxhdCwgbG5nLCBsYWJlbENvbnRlbnQ9XCJcIiwgbGFiZWxBbmNob3I9MTUwLCBoYXNfYW5pbWF0aW9uPWZhbHNlKSB7XG4gICAgICAgICAgICB2YXIgYW5pbWF0aW9uPW51bGw7XG4gICAgICAgICAgICBpZihoYXNfYW5pbWF0aW9uKSBhbmltYXRpb249Z29vZ2xlLm1hcHMuQW5pbWF0aW9uLkRST1A7XG4gICAgICAgICAgICBsZXQgbWFya2VyID0gbmV3IE1hcmtlcldpdGhMYWJlbCh7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IG5ldyBnb29nbGUubWFwcy5MYXRMbmcobGF0LCBsbmcpLFxuICAgICAgICAgICAgICAgIG1hcDogbWFwLFxuICAgICAgICAgICAgICAgIGxhYmVsQ29udGVudDogbGFiZWxDb250ZW50LFxuICAgICAgICAgICAgICAgIGxhYmVsQW5jaG9yOiBuZXcgZ29vZ2xlLm1hcHMuUG9pbnQobGFiZWxBbmNob3IsIDczKSxcbiAgICAgICAgICAgICAgICBsYWJlbENsYXNzOiBcIm1hcC1sYWJlbHNcIixcbiAgICAgICAgICAgICAgICBpY29uOiBjdXN0b21NYXJrZXIsXG4gICAgICAgICAgICAgICAgc2xpZGVySW5kZXg6IHNsaWRlckluZGV4LFxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogYW5pbWF0aW9uXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG1hcmtlcnMucHVzaChtYXJrZXIpO1xuICAgICAgICB9O1xuICAgICAgICAvKlxuICAgICAgICBGdW5jdGlvbiB0byBjcmVhdGUgbWFya2VycyB3aXRob3V0IGEgbGFiZWwsIGFsc28gaXQgY2FuXG4gICAgICAgIGhhdmUgYSBpbmZvIHdpbmRvd1xuICAgICAgICAgQHBhcmFtIHttYXB9IG1hcCB0aGUgbWFwIHdoaWNoIHRoZSBtYXJrZXIgd2lsbCB1c2VcbiAgICAgICAgIEBwYXJhbSB7bGF0fSBsYXQgbGF0aXR1ZGUgb2YgdGhlIG1hcmtlclxuICAgICAgICAgQHBhcmFtIHtsbmd9IGxuZyBsb25naXR1ZGUgb2YgdGhlIG1hcmtlclxuICAgICAgICAgQHBhcmFtIHtoYXNfaW5mb30gYm9vbGVhbiB0byBkZXRlcm1pbmUgaWYgbWFya2VyIGhhcyB0b29sdGlwXG4gICAgICAgICBAcGFyYW0ge2luZm93aW5kb3d9IGdldHMgYW4gb2JqZWN0IGluZm9XaW5kb3cgdG8gc2V0IHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBtZXNzYWdlXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBjcmVhdGVNYXJrZXIobWFwLCBzbGlkZXJJbmRleD0wLCBsYXQsIGxuZywgaGFzX2luZm89ZmFsc2UsIGluZm93aW5kb3cpIHtcbiAgICAgICAgICAgIGxldCBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhsYXQsIGxuZyksXG4gICAgICAgICAgICAgICAgbWFwOiBtYXAsXG4gICAgICAgICAgICAgICAgaWNvbjogY3VzdG9tTWFya2VyLFxuICAgICAgICAgICAgICAgIHNsaWRlckluZGV4OiBzbGlkZXJJbmRleFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoaGFzX2luZm8pIGNyZWF0ZUluZm9XaW5kb3coaW5mb3dpbmRvdywgbWFya2VyLCBtYXApO1xuICAgICAgICAgICAgbWFya2Vycy5wdXNoKG1hcmtlcik7XG4gICAgICAgIH1cbiAgICAgICAgLypcbiAgICAgICAgIEZ1bmN0aW9uIHRvIGNyZWF0ZSBpbmZvV2luZG93cyBmb3IgbWFya2VycywgYW5kIGNyZWF0ZXMgdGhlIGV2ZW50IHRvIG9wZW4gaXRcbiAgICAgICAgIEBwYXJhbSB7aW5mb3dpbmRvd30gZ2V0cyBhbiBvYmplY3QgaW5mb1dpbmRvdyB0byBzZXQgdGhlIHByb3BlcnRpZXMgb2YgdGhlIG1lc3NhZ2VcbiAgICAgICAgIEBwYXJhbSB7bWFya2VyfSBnZXRzIHRoZSBtYXJrZXIgd2hpY2ggd2lsbCB1c2UgdGhlIGluZm9XaW5kb3dcbiAgICAgICAgIEBwYXJhbSB7bWFwfSBtYXAgdGhlIG1hcCB3aGljaCB0aGUgbWFya2VyIHdpbGwgdXNlXG4gICAgICAgICBwcmV2X2luZm93aW5kb3cgY2hlY2sgaWYgb3RoZXIgaW5mb3dpbmRvdyB3YXMgb3BlbmVkIGFuZCBjbG9zZSBpdCBiZWZvcmUgb3BlbmluZyBhIG5ldyBvbmUuXG4gICAgICAgICAqL1xuICAgICAgICB2YXIgcHJldl9pbmZvd2luZG93ID0gZmFsc2U7XG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZUluZm9XaW5kb3coaW5mb1dpbmRvdywgbWFya2VyLCBtYXApIHtcbiAgICAgICAgICAgIHZhciBjb250ZW50U3RyaW5nID0gXCI8ZGl2IGNsYXNzPSdtYXJrZXJJbmZvJz5cIiArXG4gICAgICAgICAgICAgICAgXCI8aW1nIHNyYz0nXCIgKyBpbmZvV2luZG93LmltZ1VSTCArIFwiJz5cIiArXG4gICAgICAgICAgICAgICAgXCI8ZGl2IGNsYXNzPSdtYXJrZXJUZXh0Q29udGFpbmVyJz5cIiArXG4gICAgICAgICAgICAgICAgXCI8cCBjbGFzcz0nbWFya2VyVGV4dCc+XCIgKyBpbmZvV2luZG93LmhlYWRlciArIFwiPC9wPlwiICtcbiAgICAgICAgICAgICAgICBcIjxwIGNsYXNzPSdtYXJrZXJUZXh0Jz5cIiArIGluZm9XaW5kb3cudGV4dCArIFwiPC9wPlwiICtcbiAgICAgICAgICAgICAgICBcIjwvZGl2PlwiICtcbiAgICAgICAgICAgICAgICBcIjwvZGl2PlwiO1xuICAgICAgICAgICAgdmFyIGluZm93aW5kb3cgPSBuZXcgZ29vZ2xlLm1hcHMuSW5mb1dpbmRvdyh7XG4gICAgICAgICAgICAgICAgY29udGVudDogY29udGVudFN0cmluZyxcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogMTgwXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG1hcmtlci5hZGRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYoIHByZXZfaW5mb3dpbmRvdyApIHtcbiAgICAgICAgICAgICAgICAgIHByZXZfaW5mb3dpbmRvdy5jbG9zZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwcmV2X2luZm93aW5kb3cgPSBpbmZvd2luZG93O1xuICAgICAgICAgICAgICAgIGluZm93aW5kb3cub3BlbihtYXAsIG1hcmtlcik7XG4gICAgICAgICAgICAgICAgLy9TdHlsZXMgZm9yIHRoZSBhcnJvd1xuICAgICAgICAgICAgICAgICQoJy5nbS1zdHlsZS1pdycpLnByZXYoKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAkKCcuZ20tc3R5bGUtaXcnKS5wYXJlbnQoKS5hZGRDbGFzcygnaW5mb3dpbmRvdy1wYXJlbnQnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8qXG4gICAgICAgICBGdW5jdGlvbiB0byBkZWNsYXJlIGFueSBuZXcgbWFya2VyIHdpdGggYSBsYWJlbCBhbmQgaW5mb3dpbmRvd1xuICAgICAgICAgQHBhcmFtIHttYXB9IG1hcCB0aGUgbWFwIHdoaWNoIHRoZSBtYXJrZXIgd2lsbCB1c2VcbiAgICAgICAgIEBwYXJhbSB7bGF0fSBsYXQgbGF0aXR1ZGUgb2YgdGhlIG1hcmtlclxuICAgICAgICAgQHBhcmFtIHtsbmd9IGxuZyBsb25naXR1ZGUgb2YgdGhlIG1hcmtlclxuICAgICAgICAgQHBhcmFtIHtsYWJlbENvbnRlbnR9IGxhYmVsQ29udGVudCB0aGUgdGV4dCBvZiB0aGUgbGFiZWxcbiAgICAgICAgIEBwYXJhbSB7bGFiZWxBbmNob3J9IGxhYmVsQW5jaG9yIHRoZSBYIGF4aXMgb2YgdGhlIG1hcmtlclxuICAgICAgICAgQHBhcmFtIHtoYXNfaW5mb30gYm9vbGVhbiB0byBkZXRlcm1pbmUgaWYgbWFya2VyIGhhcyB0b29sdGlwXG4gICAgICAgICBAcGFyYW0ge2luZm93aW5kb3d9IGdldHMgYW4gb2JqZWN0IGluZm9XaW5kb3cgdG8gc2V0IHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBtZXNzYWdlXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBjcmVhdGVNYXJrZXJMYWJlbEluZm9XaW5kb3cobWFwLCBsYXQsIGxuZywgbGFiZWxDb250ZW50PVwiXCIsIGxhYmVsQW5jaG9yPTE1MCwgaGFzX2luZm89ZmFsc2UsIGluZm93aW5kb3cpIHtcbiAgICAgICAgICAgIGxldCBtYXJrZXIgPSBuZXcgTWFya2VyV2l0aExhYmVsKHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhsYXQsIGxuZyksXG4gICAgICAgICAgICAgICAgbWFwOiBtYXAsXG4gICAgICAgICAgICAgICAgbGFiZWxDb250ZW50OiBsYWJlbENvbnRlbnQsXG4gICAgICAgICAgICAgICAgbGFiZWxBbmNob3I6IG5ldyBnb29nbGUubWFwcy5Qb2ludChsYWJlbEFuY2hvciwgNzMpLFxuICAgICAgICAgICAgICAgIGxhYmVsQ2xhc3M6IFwibWFwLWxhYmVsc1wiLFxuICAgICAgICAgICAgICAgIGljb246IGN1c3RvbU1hcmtlcixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGhhc19pbmZvKSBjcmVhdGVJbmZvV2luZG93KGluZm93aW5kb3csIG1hcmtlciwgbWFwKTtcbiAgICAgICAgfTtcbiAgICAgICAgLypcbiAgICAgICAgIEZ1bmN0aW9uIHRvIGRlY2xhcmUgYW55IG5ldyBtYXJrZXIgd2l0aCBhIGxhYmVsIHRvIHRoZSBFeHBsb3JlIE1hcFxuICAgICAgICAgQHBhcmFtIHttYXB9IG1hcCB0aGUgbWFwIHdoaWNoIHRoZSBtYXJrZXIgd2lsbCB1c2VcbiAgICAgICAgIEBwYXJhbSB7bGF0fSBsYXQgbGF0aXR1ZGUgb2YgdGhlIG1hcmtlclxuICAgICAgICAgQHBhcmFtIHtsbmd9IGxuZyBsb25naXR1ZGUgb2YgdGhlIG1hcmtlclxuICAgICAgICAgQHBhcmFtIHtsYWJlbENvbnRlbnR9IGxhYmVsQ29udGVudCB0aGUgdGV4dCBvZiB0aGUgbGFiZWxcbiAgICAgICAgIEBwYXJhbSB7bGFiZWxBbmNob3J9IGxhYmVsQW5jaG9yIHRoZSBYIGF4aXMgb2YgdGhlIG1hcmtlclxuICAgICAgICAgQHBhcmFtIHt0eXBlfSBUeXBlIG9mIGxhYmVsLCBpdCBjYW4gYmUgY2l0eSBvciBwcm92aW5jZVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlTWFya2VyV2l0aExhYmVsRXhwbG9yZShtYXAsIGxhdCwgbG5nLCBsYWJlbENvbnRlbnQ9XCJcIiwgbGFiZWxBbmNob3JYPTE1MCwgbGFiZWxBbmNob3JZPTQyLCB0eXBlKSB7XG4gICAgICAgICAgICBpZiggdHlwZSA9PT0gJ2NpdHknICkge1xuICAgICAgICAgICAgICBsZXQgbWFya2VyID0gbmV3IE1hcmtlcldpdGhMYWJlbCh7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IG5ldyBnb29nbGUubWFwcy5MYXRMbmcobGF0LCBsbmcpLFxuICAgICAgICAgICAgICAgIG1hcDogbWFwLFxuICAgICAgICAgICAgICAgIGxhYmVsQ29udGVudDogbGFiZWxDb250ZW50LFxuICAgICAgICAgICAgICAgIGxhYmVsQW5jaG9yOiBuZXcgZ29vZ2xlLm1hcHMuUG9pbnQobGFiZWxBbmNob3JYLCBsYWJlbEFuY2hvclkpLFxuICAgICAgICAgICAgICAgIGxhYmVsQ2xhc3M6IFwibWFwLWxhYmVscyBjaXR5XCIsXG4gICAgICAgICAgICAgICAgaWNvbjogY3VzdG9tTWFya2VyRXhwbG9yZVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgbWFya2Vycy5wdXNoKG1hcmtlcik7XG4gICAgICAgICAgICB9IGVsc2UgaWYoIHR5cGUgPT09ICdwcm92aW5jZScgKSB7XG4gICAgICAgICAgICAgIGxldCBtYXJrZXIgPSBuZXcgTWFya2VyV2l0aExhYmVsKHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhsYXQsIGxuZyksXG4gICAgICAgICAgICAgICAgbWFwOiBtYXAsXG4gICAgICAgICAgICAgICAgbGFiZWxDb250ZW50OiBsYWJlbENvbnRlbnQsXG4gICAgICAgICAgICAgICAgbGFiZWxBbmNob3I6IG5ldyBnb29nbGUubWFwcy5Qb2ludChsYWJlbEFuY2hvclgsIGxhYmVsQW5jaG9yWSksXG4gICAgICAgICAgICAgICAgbGFiZWxDbGFzczogXCJtYXAtbGFiZWxzIHByb3ZpbmNlXCIsXG4gICAgICAgICAgICAgICAgaWNvbjogY3VzdG9tTWFya2VyRXhwbG9yZVRyYW5zcGFyZW50XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBtYXJrZXJzLnB1c2gobWFya2VyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBIb21lcGFnZSBtYXA6IENsaWNrIG9uIHRoZSBtZW51IGljb24gdG8gZ28gdG8gdGhlIGZpcnN0IHNsaWRlLlxuICAgICAgICAkKCcubWVudS1tYXAtbGlzdCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBob21lcGFnZU1hcEVsZW1lbnQuc2xpY2soJ3NsaWNrR29UbycsIDApO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBIb21lcGFnZSBtYXA6IENoYW5nZSB0aGUgYWN0aXZlIHN0YXRlIG9mIHRoZSBtYXJrZXIgd2hlbiB0aGUgc2xpZGVyIGNoYW5nZS5cbiAgICAgICAgaG9tZXBhZ2VNYXBFbGVtZW50Lm9uKCdiZWZvcmVDaGFuZ2UnLCBmdW5jdGlvbiAoZXZlbnQsIHNsaWNrLCBjdXJyZW50U2xpZGUsIG5leHRTbGlkZSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXJrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1hcmtlckluZGV4ID0gbWFya2Vyc1tpXS5zbGlkZXJJbmRleCArIDE7XG4gICAgICAgICAgICAgICAgaWYgKG5leHRTbGlkZSA9PT0gbWFya2VySW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgbWFya2Vyc1tpXS5zZXRJY29uKGN1c3RvbU1hcmtlcl9ob3Zlcik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbWFya2Vyc1tpXS5zZXRJY29uKGN1c3RvbU1hcmtlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBUb3AxMCBtYXA6IENoYW5nZSB0aGUgYWN0aXZlIHN0YXRlIG9mIHRoZSBtYXJrZXIgd2hlbiB0aGUgc2xpZGVyIGNoYW5nZS5cbiAgICAgICAgdG9wMTBNYXBFbGVtZW50Lm9uKCdiZWZvcmVDaGFuZ2UnLCBmdW5jdGlvbiAoZXZlbnQsIHNsaWNrLCBjdXJyZW50U2xpZGUsIG5leHRTbGlkZSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXJrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1hcmtlckluZGV4ID0gbWFya2Vyc1tpXS5zbGlkZXJJbmRleDtcbiAgICAgICAgICAgICAgICBpZiAobmV4dFNsaWRlID09PSBtYXJrZXJJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBtYXJrZXJzW2ldLnNldEljb24oY3VzdG9tTWFya2VyX2hvdmVyKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgbWFya2Vyc1tpXS5zZXRJY29uKGN1c3RvbU1hcmtlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IEdvb2dsZU1hcHM7XG4iLCJjbGFzcyBUb3AxMCB7XG5cbiAgY29uc3RydWN0b3IgKCkge1xuXG4gICAgLy8gQmFzZSBjb25maWcgZm9yIGFsbCB0aGUgY2hhcnRzXG4gICAgdmFyIGJhc2VDb25maWcgPSB7XG4gICAgICBjaGFydDoge1xuICAgICAgICB0eXBlOiAnY29sdW1uJ1xuICAgICAgfSxcbiAgICAgIHhBeGlzOiB7XG4gICAgICAgIHR5cGU6ICdjYXRlZ29yeScsXG4gICAgICAgIGxhYmVsczoge1xuICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBmb250U2l6ZTogJzEzcHgnXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB0aWNrSW50ZXJ2YWw6IDRcbiAgICAgIH0sXG4gICAgICBleHBvcnRpbmc6IHtcbiAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgIH0sXG4gICAgICBjcmVkaXRzOiBmYWxzZSxcbiAgICAgIHlBeGlzOiB7XG4gICAgICAgIG1pbjogMCxcbiAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICB0ZXh0OiBudWxsXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBsZWdlbmQ6IHtcbiAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgZ2V0V2VhdGhlciA9ICQuYWpheCh7XG4gICAgICB0eXBlOiAnR0VUJyxcbiAgICAgIHVybDogJy4uL2FwaS93ZWF0aGVyLmpzb24nLFxuICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIGRhdGFUeXBlOiAnanNvbidcbiAgICB9KTtcblxuICAgIGdldFdlYXRoZXIuZG9uZShmdW5jdGlvbiggZGF0YSApIHtcbiAgICAgICQoZGF0YSkuZWFjaChmdW5jdGlvbihpbmRleCkge1xuICAgICAgICAkKCcjY2hhcnQtJyArIGRhdGFbaW5kZXhdWydocy10eXBlJ10gKyAnLScgKyBkYXRhW2luZGV4XVsnaHMtcG9zaXRpb24nXSkuaGlnaGNoYXJ0cyhcbiAgICAgICAgICAkLmV4dGVuZChiYXNlQ29uZmlnLCBkYXRhW2luZGV4XSlcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVG9wMTA7IC8vc2V0IHdoYXQgY2FuIGJlIGltcG9ydGVkIGZyb20gdGhpcyBmaWxlXG4iLCJjbGFzcyBNYXRjaEhlaWdodCB7XG5cbiAgY29uc3RydWN0b3IgKCkge1xuXG4gICAgLy8gTWF0Y2hIZWlnaHQgRWxlbWVudHNcbiAgICB0aGlzLmFsdGVybmF0aXZlRWxlbWVudCA9ICQoJy5hbHRlcm5hdGl2ZS1jb250ZW50Jyk7XG5cbiAgICAvLyBNYXRjaEhlaWdodCBDYWxsc1xuICAgIHRoaXMuYWx0ZXJuYXRpdmVFbGVtZW50Lm1hdGNoSGVpZ2h0KCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNYXRjaEhlaWdodDsgLy9zZXQgd2hhdCBjYW4gYmUgaW1wb3J0ZWQgZnJvbSB0aGlzIGZpbGVcbiIsImNsYXNzIFNoYXJlQWZmaXgge1xuXG4gIGNvbnN0cnVjdG9yICgpIHtcblxuICAgIC8vIFNoYXJlQWZmaXggRWxlbWVudHNcbiAgICB0aGlzLnNoYXJlRml4ZWRFbGVtZW50ID0gJCgnLmNtLXNhdC1tLXNoYXJlLWZpeGVkJyk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc2hhcmVGaXhlZEVsZW1lbnQuYWZmaXgoe1xuICAgICAgICBvZmZzZXQ6IHtcbiAgICAgICAgICB0b3A6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzbGlkZXJIZWlnaHQgPSAkKCcuY20tc2F0LW0tc2xpZGVyJykub3V0ZXJIZWlnaHQoKSxcbiAgICAgICAgICAgICAgICBuYXZIZWlnaHQgPSAkKCcuY20tc2F0LW0tbmF2Jykub3V0ZXJIZWlnaHQoKSxcbiAgICAgICAgICAgICAgICBib2R5TWFyZ2luID0gcGFyc2VJbnQoJCgnYm9keScpLmNzcygnbWFyZ2luLXRvcCcpKTtcblxuICAgICAgICAgICAgcmV0dXJuICggdGhpcy50b3AgPSBzbGlkZXJIZWlnaHQgLSBuYXZIZWlnaHQgKyBib2R5TWFyZ2luICk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBib3R0b206IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBmb290ZXJIZWlnaHQgPSAkKCcuY20tc2F0LW0tZm9vdGVyJykub3V0ZXJIZWlnaHQoKSxcbiAgICAgICAgICAgICAgICByZWxhdGVkSGVpZ2h0ID0gJCgnLmNtLXNhdC1tLXJlbGF0ZWQnKS5vdXRlckhlaWdodCgpLFxuICAgICAgICAgICAgICAgIGNvbnRhY3RNYXAgPSAkKCcuY20tc2F0LW0tbWFwLmNtLXNhdC1pcy1jb250YWN0Jykub3V0ZXJIZWlnaHQoKSxcbiAgICAgICAgICAgICAgICBzaGFyZSA9ICQoJy5jbS1zYXQtbS1zaGFyZScpLm91dGVySGVpZ2h0KCk7XG5cbiAgICAgICAgICAgIGlmKCAkKCcuY20tc2F0LXAtY29udGFjdCcpWzBdICkge1xuICAgICAgICAgICAgICByZXR1cm4gKCB0aGlzLmJvdHRvbSA9IGZvb3RlckhlaWdodCArIHJlbGF0ZWRIZWlnaHQgKyBzaGFyZSArIGNvbnRhY3RNYXAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gKCB0aGlzLmJvdHRvbSA9IGZvb3RlckhlaWdodCArIHJlbGF0ZWRIZWlnaHQgKyA3MDAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sIDE1MDApO1xuXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTaGFyZUFmZml4OyAvL3NldCB3aGF0IGNhbiBiZSBpbXBvcnRlZCBmcm9tIHRoaXMgZmlsZVxuIiwiY2xhc3MgU2tyb2xsciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGxldCBzb2NpYWxfY29udGFpbmVyID0gJCgnLmNtLXNhdC1tLXNvY2lhbCcpLFxuICAgICAgICAgICAgY29udGFpbmVyX3Zpc2libGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5za3JvbGxyID0gc2tyb2xscjtcbiAgICAgICAgdGhpcy5za3JvbGxyLmluaXQoe1xuICAgICAgICAgICAgZm9yY2VIZWlnaHQ6IGZhbHNlLFxuICAgICAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNvY2lhbF9jb250YWluZXIuaGFzQ2xhc3MoJ3Nrcm9sbGFibGUtYWZ0ZXInKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbnRhaW5lcl92aXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXJfdmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc29jaWFsX2l0ZW1zID0gc29jaWFsX2NvbnRhaW5lci5maW5kKFwiLnNvY2lhbC1pdGVtXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJChzb2NpYWxfaXRlbXMpLnRvQXJyYXkoKS5tYXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJChlKS5mYWRlSW4oMzAwKS5wcm9taXNlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkucmVkdWNlKGZ1bmN0aW9uIChjdXIsIG5leHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3VyLnRoZW4obmV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAkKCkucHJvbWlzZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29udGFpbmVyX3Zpc2libGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyX3Zpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmICgvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcbiAgICAgICAgICAgIHRoaXMuc2tyb2xsci5pbml0KCkuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBTa3JvbGxyO1xuIiwiLy8gU2xpY2sgc2xpZGVyIC0gbWFpbiBpbWFnZXMuXG4vLyBIb21lcGFnZSBSZWxhdGVkIFNsaWNrIHNsaWRlci5cbi8vIEhvbWVwYWdlIFNvY2lhbCBTbGljayBzbGlkZXIuXG5jbGFzcyBTbGljayB7XG5cbiAgY29uc3RydWN0b3IgKCkge1xuXG4gICAgLy8gU2xpY2sgRWxlbWVudHNcbiAgICB0aGlzLnNsaWRlckVsZW1lbnQgPSAkKCcuanMtc2xpY2stc2xpZGVyJyk7XG4gICAgdGhpcy5leHBsb3JlRWxlbWVudCA9ICQoJy5jbS1zYXQtbS1leHBsb3JlJyk7XG4gICAgdGhpcy5leHBsb3JlU2xpZGVyID0gJCgnLmV4cGxvcmUtc2xpZGVyJyk7XG4gICAgdGhpcy5leHBsb3JlTmF2ID0gJCgnLmV4cGxvcmUtbmF2Jyk7XG4gICAgdGhpcy5yZWxhdGVkRWxlbWVudCA9ICQoJy5qcy1zbGljay1yZWxhdGVkJyk7XG4gICAgdGhpcy5zb2NpYWxFbGVtZW50ID0gJCgnLmpzLXNsaWNrLXNvY2lhbCcpO1xuICAgIHRoaXMuc2xpZGVyVG9wMTBFbGVtZW50ID0gJCgnLmpzLXNsaWRlci10b3AxMCcpO1xuICAgIHRoaXMuc2xpZGVyQ2hhcnRFbGVtZW50ID0gJCgnLmpzLXNsaWRlci1jaGFydCcpO1xuICAgIGxldCBob21lcGFnZU1hcEVsZW1lbnQ9JCgnLmpzLXNsaWNrLWhvbWVwYWdlLW1hcCcpO1xuXG4gICAgdGhpcy5zbGlkZXJPcHRpb25zID0ge1xuICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgIGRvdHM6IHRydWUsXG4gICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgIHNwZWVkOiAxMDAwLFxuICAgICAgcGF1c2VPbkhvdmVyOiBmYWxzZVxuICAgIH1cblxuICAgIHRoaXMuZXhwbG9yZU9wdGlvbnMgPSB7XG4gICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgZG90czogZmFsc2UsXG4gICAgICBpbmZpbml0ZTogZmFsc2UsXG4gICAgICBhY2Nlc3NpYmlsaXR5OiBmYWxzZSxcbiAgICAgIGRyYWdnYWJsZTogZmFsc2UsXG4gICAgICBzd2lwZTogdHJ1ZSxcbiAgICAgIHZlcnRpY2FsOiB0cnVlLFxuICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICAgICAgdmVydGljYWw6IGZhbHNlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuXG4gICAgdGhpcy5yZWxhdGVkT3B0aW9ucyA9IHtcbiAgICAgIGFycm93czogZmFsc2UsXG4gICAgICBkb3RzOiB0cnVlLFxuICAgICAgc2xpZGVzVG9TaG93OiA2LFxuICAgICAgc2xpZGVzVG9TY3JvbGw6IDYsXG4gICAgICByZXNwb25zaXZlOiBbXG4gICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IDExODAsXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgY2VudGVyTW9kZTogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBdXG4gICAgfVxuXG4gICAgdGhpcy5zb2NpYWxPcHRpb25zID0ge1xuICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgIGRvdHM6IHRydWUsXG4gICAgICBzbGlkZXNUb1Nob3c6IDYsXG4gICAgICBzbGlkZXNUb1Njcm9sbDogNixcbiAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAge1xuICAgICAgICAgIGJyZWFrcG9pbnQ6IDExODAsXG4gICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cblxuICAgIHRoaXMuaG9tZXBhZ2VNYXBPcHRpb25zPXtcbiAgICAgIGF1dG9QbGF5OmZhbHNlLFxuICAgICAgYXJyb3dzOnRydWUsXG4gICAgICBkb3RzOnRydWUsXG4gICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICBpbmZpbml0ZTpmYWxzZSxcbiAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlXG4gICAgfVxuXG4gICAgdGhpcy5zbGlkZXJUb3AxME9wdGlvbnMgPSB7XG4gICAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZSxcbiAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgIGRvdHM6IHRydWUsXG4gICAgICBpbmZpbml0ZTogZmFsc2UsXG4gICAgICBhY2Nlc3NpYmlsaXR5OiBmYWxzZSxcbiAgICAgIGRyYWdnYWJsZTogZmFsc2UsXG4gICAgICBzd2lwZTogZmFsc2VcbiAgICB9XG5cbiAgICB0aGlzLnNsaWRlckNoYXJ0T3B0aW9ucyA9IHtcbiAgICAgIGFycm93czogZmFsc2UsXG4gICAgICBkb3RzOiB0cnVlLFxuICAgICAgaW5maW5pdGU6IGZhbHNlLFxuICAgICAgYWNjZXNzaWJpbGl0eTogZmFsc2UsXG4gICAgICBkcmFnZ2FibGU6IGZhbHNlXG4gICAgfVxuXG4gICAgLy9Jbml0IG9mIHRoZSBzbGlkZXJzXG4gICAgdGhpcy5yZWxhdGVkRWxlbWVudC5zbGljayh0aGlzLnJlbGF0ZWRPcHRpb25zKTtcbiAgICB0aGlzLnNvY2lhbEVsZW1lbnQuc2xpY2sodGhpcy5zb2NpYWxPcHRpb25zKTtcbiAgICB0aGlzLnNsaWRlckVsZW1lbnQuc2xpY2sodGhpcy5zbGlkZXJPcHRpb25zKTtcbiAgICB0aGlzLnNsaWRlclRvcDEwRWxlbWVudC5zbGljayh0aGlzLnNsaWRlclRvcDEwT3B0aW9ucyk7XG4gICAgdGhpcy5zbGlkZXJDaGFydEVsZW1lbnQuc2xpY2sodGhpcy5zbGlkZXJDaGFydE9wdGlvbnMpO1xuICAgIGhvbWVwYWdlTWFwRWxlbWVudC5zbGljayh0aGlzLmhvbWVwYWdlTWFwT3B0aW9ucyk7XG5cbiAgICAgIC8vU2xpZGVyIEV2ZW50c1xuICAgICAgdGhpcy5leHBsb3JlTmF2Lm9uKCdjbGljaycsICdsaScsIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyICR0aGlzID0gJCh0aGlzKSxcbiAgICAgICAgICBzbGlkZUluZGV4ID0gJHRoaXMuaW5kZXgoKTtcbiAgICAgICQoJy5leHBsb3JlLXNsaWRlcicpLnNsaWNrKCAnc2xpY2tHb1RvJywgc2xpZGVJbmRleCApO1xuICAgICAgJCgnLmV4cGxvcmUtbmF2JykuZmluZCgnbGknKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAkdGhpcy5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgfSk7XG5cbiAgICAgIHRoaXMuZXhwbG9yZUVsZW1lbnQub24oJ3Nob3duLmJzLm1vZGFsJywgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZXhwbG9yZVNsaWRlci5zbGljayh0aGlzLmV4cGxvcmVPcHRpb25zKTtcbiAgICAgICQoJy5leHBsb3JlLW5hdicpLmZpbmQoJ2xpJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgJCgnLmV4cGxvcmUtbmF2JykuZmluZCgnbGknKS5maXJzdCgpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgfSk7XG4gICAgICAgIHRoaXMuZXhwbG9yZUVsZW1lbnQub24oJ2hpZGRlbi5icy5tb2RhbCcsICgpID0+IHtcbiAgICAgICAgdGhpcy5leHBsb3JlU2xpZGVyLnNsaWNrKCd1bnNsaWNrJyk7XG59KTtcblxuICAgIC8vIFdlIHdlcmUgY2hlY2tpbmcgZm9yIHVzZXIgYWdlbnQgYmVmb3JlLlxuICAgICQod2luZG93KS5vbignbG9hZCcsKCk9PntcbiAgICAgICAgYW5pbWF0ZVN0YXRzKDApO1xuICAgIH0pO1xuICAgIHRoaXMuc2xpZGVyRWxlbWVudC5vbignYWZ0ZXJDaGFuZ2UnLCAoZXZlbnQsIHNsaWNrLCBjdXJyZW50U2xpZGUpID0+IHtcbiAgICAgICAgYW5pbWF0ZVN0YXRzKGN1cnJlbnRTbGlkZSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNsaWRlckVsZW1lbnQub24oJ2JlZm9yZUNoYW5nZScsIChldmVudCwgc2xpY2ssIGN1cnJlbnRTbGlkZSwgbmV4dFNsaWRlKSA9PiB7XG4gICAgICAgIGhpZGVTdGF0cyhjdXJyZW50U2xpZGUsc2xpY2suc2xpZGVDb3VudCk7XG4gICAgfSk7XG5cblxuJCgnLmNtLXNhdC1tLWhvbWVwYWdlLW1hcC1zbGlkZXInKS5vbignY2xpY2snLCAnLmpzLXByb3ZpbmNlcy1pdGVtJywgZnVuY3Rpb24oKSB7XG4gIHZhciBpbmRleCA9ICQodGhpcykuaW5kZXgoKSArIDE7XG4gIGhvbWVwYWdlTWFwRWxlbWVudC5zbGljayggJ3NsaWNrR29UbycsIGluZGV4ICk7XG59KTtcblxuLy9FbmQgSG9tZXBhZ2UgTWFwIFNsaWRlciBldmVudHNcblxuICAgIC8vIG1lZGlhIHF1ZXJ5IGV2ZW50IGhhbmRsZXJcbiAgICBpZiAobWF0Y2hNZWRpYSkge1xuICAgICAgdmFyIG1xID0gd2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDc2N3B4KScpO1xuICAgICAgbXEuYWRkTGlzdGVuZXIoV2lkdGhDaGFuZ2UpO1xuICAgICAgV2lkdGhDaGFuZ2UobXEpO1xuICAgIH1cbiAgICAvLyBtZWRpYSBxdWVyeSBjaGFuZ2VcbiAgICBmdW5jdGlvbiBXaWR0aENoYW5nZShtcSkge1xuICAgICAgdmFyIGFsdGVybmF0aXZlU2xpY2sgPSAkKCcuanMtc2xpY2stYWx0ZXJuYXRpdmUnKSxcbiAgICAgICAgICBzb2NpYWxjaGFydFNsaWNrID0gJCgnLmpzLXNsaWRlci1zb2NpYWxjaGFydCcpO1xuICAgICAgaWYgKG1xLm1hdGNoZXMpIHtcbiAgICAgICAgYWx0ZXJuYXRpdmVTbGljay5zbGljayh7XG4gICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICAgIGNlbnRlck1vZGU6IHRydWUsXG4gICAgICAgICAgY2VudGVyUGFkZGluZzogJzMwcHgnLFxuICAgICAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNvY2lhbGNoYXJ0U2xpY2suc2xpY2soe1xuICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxuICAgICAgICAgIGNlbnRlclBhZGRpbmc6ICczMHB4J1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBpZiggYWx0ZXJuYXRpdmVTbGljay5oYXNDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKSApIHtcbiAgICAgICAgICBhbHRlcm5hdGl2ZVNsaWNrLnNsaWNrKCd1bnNsaWNrJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoIHNvY2lhbGNoYXJ0U2xpY2suaGFzQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJykgKSB7XG4gICAgICAgICAgc29jaWFsY2hhcnRTbGljay5zbGljaygndW5zbGljaycpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vIEhpZGUgSG9tZXBhZ2UgU2xpZGVyIFN0YXRzXG4gICAgZnVuY3Rpb24gaGlkZVN0YXRzKHNsaWRlLCBudW1iZXJPZlNsaWRlcyl7XG4gICAgaWYoc2xpZGUgPT09IG51bWJlck9mU2xpZGVzLTEpe1xuICAgICAgICBoaWRlU3RhdHMoLTEsbnVtYmVyT2ZTbGlkZXMpO1xuICAgIH1cbiAgICBzbGlkZT1zbGlkZSsxO1xuICAgIGxldCBwcmV2c2xpZGUgPSAkKCdkaXZbZGF0YS1zbGljay1pbmRleD0nICsgc2xpZGUgKyAnXScpO1xuICAgIGxldCBjb250YWluZXIgPSBwcmV2c2xpZGUuZmluZChcIi5zbGlkZXItaW5mb1wiKTtcbiAgICBjb250YWluZXIgPSBjb250YWluZXIuZmluZChcIi5zbGlkZXItc3RhdHNcIik7XG4gICAgJChjb250YWluZXIpLnRvQXJyYXkoKS5tYXAoZnVuY3Rpb24oc3RhdCkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHJldHVybiAkKHN0YXQpLmhpZGUoKS5wcm9taXNlKCk7XG4gICAgICAgIH07XG4gICAgfSkucmVkdWNlKGZ1bmN0aW9uKGN1ciwgbmV4dCkge1xuICAgICAgICByZXR1cm4gY3VyLnRoZW4obmV4dCk7XG4gICAgfSwgJCgpLnByb21pc2UoKSk7XG4gICAgfVxuICAgIC8vIEFuaW1hdGUgSG9tZXBhZ2UgU2xpZGVyIFN0YXRzXG4gICAgZnVuY3Rpb24gYW5pbWF0ZVN0YXRzKGN1cnJlbnRTbGlkZSkge1xuICAgIGxldCBzbGlkZSA9ICQoJ2RpdltkYXRhLXNsaWNrLWluZGV4PScrY3VycmVudFNsaWRlKyddJyk7XG4gICAgbGV0IGNvbnRhaW5lcj1zbGlkZS5maW5kKFwiLnNsaWRlci1pbmZvXCIpO1xuICAgIGNvbnRhaW5lcj1jb250YWluZXIuZmluZChcIi5zbGlkZXItc3RhdHNcIik7XG4gICAgJChjb250YWluZXIpLnRvQXJyYXkoKS5tYXAoZnVuY3Rpb24oc3RhdCkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICQoc3RhdCkuZmFkZUluKCkucHJvbWlzZSgpO1xuICAgICAgICB9O1xuICAgIH0pLnJlZHVjZShmdW5jdGlvbiggY3VyLCBuZXh0ICkge1xuICAgICAgICByZXR1cm4gY3VyLnRoZW4obmV4dCk7XG4gICAgfSwgJCgpLnByb21pc2UoKSk7XG4gICAgfVxuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IFNsaWNrOyAvL3NldCB3aGF0IGNhbiBiZSBpbXBvcnRlZCBmcm9tIHRoaXMgZmlsZVxuIl19
