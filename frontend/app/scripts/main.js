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
        parallax.parallaxScroll();
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYW5kcmVzZ2cvU2l0ZXMvY20tc2F0LXdlYmFwcC9mcm9udGVuZC9hcHAvc2NyaXB0cy9lczYvbWFpbi5qcyIsIi9Vc2Vycy9hbmRyZXNnZy9TaXRlcy9jbS1zYXQtd2ViYXBwL2Zyb250ZW5kL2FwcC9zY3JpcHRzL2VzNi9tb2R1bGVzL0JhY2t0b3RvcC5qcyIsIi9Vc2Vycy9hbmRyZXNnZy9TaXRlcy9jbS1zYXQtd2ViYXBwL2Zyb250ZW5kL2FwcC9zY3JpcHRzL2VzNi9tb2R1bGVzL0Nvb2tpZXNCYXIuanMiLCIvVXNlcnMvYW5kcmVzZ2cvU2l0ZXMvY20tc2F0LXdlYmFwcC9mcm9udGVuZC9hcHAvc2NyaXB0cy9lczYvbW9kdWxlcy9FeHBsb3JlLmpzIiwiL1VzZXJzL2FuZHJlc2dnL1NpdGVzL2NtLXNhdC13ZWJhcHAvZnJvbnRlbmQvYXBwL3NjcmlwdHMvZXM2L21vZHVsZXMvRmlsdGVyLmpzIiwiL1VzZXJzL2FuZHJlc2dnL1NpdGVzL2NtLXNhdC13ZWJhcHAvZnJvbnRlbmQvYXBwL3NjcmlwdHMvZXM2L21vZHVsZXMvSG9tZXBhZ2VHcmlkLmpzIiwiL1VzZXJzL2FuZHJlc2dnL1NpdGVzL2NtLXNhdC13ZWJhcHAvZnJvbnRlbmQvYXBwL3NjcmlwdHMvZXM2L21vZHVsZXMvUGFyYWxsYXguanMiLCIvVXNlcnMvYW5kcmVzZ2cvU2l0ZXMvY20tc2F0LXdlYmFwcC9mcm9udGVuZC9hcHAvc2NyaXB0cy9lczYvbW9kdWxlcy9TaGFyZS5qcyIsIi9Vc2Vycy9hbmRyZXNnZy9TaXRlcy9jbS1zYXQtd2ViYXBwL2Zyb250ZW5kL2FwcC9zY3JpcHRzL2VzNi9tb2R1bGVzL1RvcDEwLmpzIiwiL1VzZXJzL2FuZHJlc2dnL1NpdGVzL2NtLXNhdC13ZWJhcHAvZnJvbnRlbmQvYXBwL3NjcmlwdHMvZXM2L21vZHVsZXMvV2lzaGxpc3QuanMiLCIvVXNlcnMvYW5kcmVzZ2cvU2l0ZXMvY20tc2F0LXdlYmFwcC9mcm9udGVuZC9hcHAvc2NyaXB0cy9lczYvdmVuZG9ycy9Cb290c3RyYXAuanMiLCIvVXNlcnMvYW5kcmVzZ2cvU2l0ZXMvY20tc2F0LXdlYmFwcC9mcm9udGVuZC9hcHAvc2NyaXB0cy9lczYvdmVuZG9ycy9FeHBsb3JlTXVsdGlzZWxlY3QuanMiLCIvVXNlcnMvYW5kcmVzZ2cvU2l0ZXMvY20tc2F0LXdlYmFwcC9mcm9udGVuZC9hcHAvc2NyaXB0cy9lczYvdmVuZG9ycy9GaWx0ZXJNdWx0aXNlbGVjdC5qcyIsIi9Vc2Vycy9hbmRyZXNnZy9TaXRlcy9jbS1zYXQtd2ViYXBwL2Zyb250ZW5kL2FwcC9zY3JpcHRzL2VzNi92ZW5kb3JzL0dvb2dsZU1hcHMuanMiLCIvVXNlcnMvYW5kcmVzZ2cvU2l0ZXMvY20tc2F0LXdlYmFwcC9mcm9udGVuZC9hcHAvc2NyaXB0cy9lczYvdmVuZG9ycy9IaWdoQ2hhcnRzLmpzIiwiL1VzZXJzL2FuZHJlc2dnL1NpdGVzL2NtLXNhdC13ZWJhcHAvZnJvbnRlbmQvYXBwL3NjcmlwdHMvZXM2L3ZlbmRvcnMvTWF0Y2hIZWlnaHQuanMiLCIvVXNlcnMvYW5kcmVzZ2cvU2l0ZXMvY20tc2F0LXdlYmFwcC9mcm9udGVuZC9hcHAvc2NyaXB0cy9lczYvdmVuZG9ycy9TaGFyZUFmZml4LmpzIiwiL1VzZXJzL2FuZHJlc2dnL1NpdGVzL2NtLXNhdC13ZWJhcHAvZnJvbnRlbmQvYXBwL3NjcmlwdHMvZXM2L3ZlbmRvcnMvU2tyb2xsci5qcyIsIi9Vc2Vycy9hbmRyZXNnZy9TaXRlcy9jbS1zYXQtd2ViYXBwL2Zyb250ZW5kL2FwcC9zY3JpcHRzL2VzNi92ZW5kb3JzL1NsaWNrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsWUFBWSxDQUFDOzs7Ozs7bUNBR1ksd0JBQXdCOzs7OzhCQUM3QixtQkFBbUI7Ozs7K0JBQ2xCLG9CQUFvQjs7Ozs0QkFDdkIsaUJBQWlCOzs7OytCQUNkLG9C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QyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDekIsRUFBRSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0dBQ2pCOztBQUVELFdBQVMsWUFBWSxDQUFDLFlBQVksRUFBRTtBQUNwQyxRQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsdUJBQXVCLEdBQUMsWUFBWSxHQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3hELFFBQUksU0FBUyxHQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDekMsYUFBUyxHQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDMUMsS0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFTLElBQUksRUFBRTtBQUN0QyxhQUFPLFlBQVk7QUFDZixlQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztPQUNyQyxDQUFDO0tBQ0wsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsRUFBRSxJQUFJLEVBQUc7QUFDNUIsYUFBTyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3pCLEVBQUUsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztHQUNqQjtDQUNGOztBQUVILE1BQU0sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxuLy8gSW1wb3J0IE1vZHVsZXNcbmltcG9ydCBIb21lcGFnZUdyaWQgZnJvbSBcIi4vbW9kdWxlcy9Ib21lcGFnZUdyaWRcIjtcbmltcG9ydCBFeHBsb3JlIGZyb20gXCIuL21vZHVsZXMvRXhwbG9yZVwiO1xuaW1wb3J0IFdpc2hsaXN0IGZyb20gXCIuL21vZHVsZXMvV2lzaGxpc3RcIjtcbmltcG9ydCBTaGFyZSBmcm9tIFwiLi9tb2R1bGVzL1NoYXJlXCI7XG5pbXBvcnQgUGFyYWxsYXggZnJvbSBcIi4vbW9kdWxlcy9QYXJhbGxheFwiO1xuaW1wb3J0IFRvcDEwIGZyb20gXCIuL21vZHVsZXMvVG9wMTBcIjtcbmltcG9ydCBGaWx0ZXIgZnJvbSBcIi4vbW9kdWxlcy9GaWx0ZXJcIjtcbmltcG9ydCBCYWNrdG90b3AgZnJvbSBcIi4vbW9kdWxlcy9CYWNrdG90b3BcIjtcbmltcG9ydCBDb29raWVzQmFyIGZyb20gXCIuL21vZHVsZXMvQ29va2llc0JhclwiO1xuXG4vLyBJbXBvcnQgVmVuZG9yc1xuaW1wb3J0IEJvb3RzdHJhcCBmcm9tIFwiLi92ZW5kb3JzL0Jvb3RzdHJhcFwiO1xuaW1wb3J0IE1hdGNoSGVpZ2h0IGZyb20gXCIuL3ZlbmRvcnMvTWF0Y2hIZWlnaHRcIjtcbmltcG9ydCBTbGljayBmcm9tIFwiLi92ZW5kb3JzL1NsaWNrXCI7XG5pbXBvcnQgRXhwbG9yZU11bHRpc2VsZWN0IGZyb20gXCIuL3ZlbmRvcnMvRXhwbG9yZU11bHRpc2VsZWN0XCI7XG5pbXBvcnQgRmlsdGVyTXVsdGlzZWxlY3QgZnJvbSBcIi4vdmVuZG9ycy9GaWx0ZXJNdWx0aXNlbGVjdFwiO1xuaW1wb3J0IFNrcm9sbHIgZnJvbSBcIi4vdmVuZG9ycy9Ta3JvbGxyXCI7XG5pbXBvcnQgR29vZ2xlTWFwcyBmcm9tIFwiLi92ZW5kb3JzL0dvb2dsZU1hcHNcIjtcbmltcG9ydCBIaWdoQ2hhcnRzIGZyb20gXCIuL3ZlbmRvcnMvSGlnaENoYXJ0c1wiO1xuaW1wb3J0IFNoYXJlQWZmaXggZnJvbSBcIi4vdmVuZG9ycy9TaGFyZUFmZml4XCI7XG5cbi8vIGpRdWVyeSBET00gUmVhZHlcbiQoKCkgPT4ge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLy8gSW5pdGlhbGl6ZSBNb2R1bGVzXG4gIG5ldyBIb21lcGFnZUdyaWQoKTtcbiAgbmV3IEV4cGxvcmUoKTtcbiAgbmV3IFdpc2hsaXN0KCk7XG4gIG5ldyBTaGFyZSgpO1xuICBuZXcgUGFyYWxsYXgoKTtcbiAgbmV3IFRvcDEwKCk7XG4gIG5ldyBGaWx0ZXIoKTtcbiAgbmV3IEJhY2t0b3RvcCgpO1xuICBuZXcgQ29va2llc0JhcigpO1xuXG4gIC8vIEluaXRpYWxpemUgVmVuZG9yc1xuICBuZXcgQm9vdHN0cmFwKCk7XG4gIG5ldyBTbGljaygpO1xuICBuZXcgTWF0Y2hIZWlnaHQoKTtcbiAgbmV3IEV4cGxvcmVNdWx0aXNlbGVjdCgpO1xuICBuZXcgRmlsdGVyTXVsdGlzZWxlY3QoKTtcbiAgbmV3IFNrcm9sbHIoKTtcbiAgbmV3IEdvb2dsZU1hcHMoKTtcbiAgbmV3IEhpZ2hDaGFydHMoKTtcbiAgbmV3IFNoYXJlQWZmaXgoKTtcbn0pO1xuIiwiY2xhc3MgQmFja3RvdG9wIHtcblxuICBjb25zdHJ1Y3RvciAoKSB7XG5cbiAgICAvLyBCYWNrdG90b3AgRWxlbWVudHNcbiAgICB2YXIgYmFja3RvdG9wRWxlbWVudCA9ICQoJy5jbS1zYXQtbS1iYWNrdG90b3AnKTtcblxuICAgIC8vIEJhY2sgdG8gdG9wIGZ1bmN0aW9uYWxpdHkuXG4gICAgaWYgKGJhY2t0b3RvcEVsZW1lbnQubGVuZ3RoKSB7XG4gICAgICB2YXIgc2Nyb2xsVHJpZ2dlciA9IDIwMCwgLy8gcHhcbiAgICAgIGJhY2tUb1RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNjcm9sbFRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICAgICAgaWYgKHNjcm9sbFRvcCA+IHNjcm9sbFRyaWdnZXIpIHtcbiAgICAgICAgICBiYWNrdG90b3BFbGVtZW50LmFkZENsYXNzKCdzaG93Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYmFja3RvdG9wRWxlbWVudC5yZW1vdmVDbGFzcygnc2hvdycpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgYmFja1RvVG9wKCk7XG4gICAgICAkKHdpbmRvdykub24oJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYmFja1RvVG9wKCk7XG4gICAgICB9KTtcbiAgICAgIGJhY2t0b3RvcEVsZW1lbnQub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAkKCdodG1sLGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICBzY3JvbGxUb3A6IDBcbiAgICAgICAgfSwgNzAwKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQmFja3RvdG9wOyAvL3NldCB3aGF0IGNhbiBiZSBpbXBvcnRlZCBmcm9tIHRoaXMgZmlsZVxuIiwiY2xhc3MgQ29va2llc0JhciB7XG5cbiAgY29uc3RydWN0b3IgKCkge1xuXG4gICAgLy8gQ29va2llc0JhciBFbGVtZW50c1xuICAgIHZhciBDb29raWVzQmFyRWxlbWVudCA9ICQoJy5jbS1zYXQtbS1jb29raWVzLWJhcicpO1xuXG4gICAgLy8gQ29va2llcyBCYXIgZnVuY3Rpb25hbGl0eS5cbiAgICBpZiggQ29va2llcy5nZXQoJ2Nvb2tpZS1iYXItY2xpY2tlZCcpICE9PSAndHJ1ZScgKSB7XG4gICAgICBDb29raWVzQmFyRWxlbWVudC5zbGlkZURvd24oKTtcbiAgICAgIENvb2tpZXMuc2V0KCdjb29raWUtYmFyLWNsaWNrZWQnLCAnZmFsc2UnKTtcbiAgICB9XG5cbiAgICBDb29raWVzQmFyRWxlbWVudC5vbignY2xpY2snLCAnLmpzLWNvb2tpZWJhcicsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIENvb2tpZXNCYXJFbGVtZW50LnNsaWRlVXAoKTtcbiAgICAgIENvb2tpZXMuc2V0KCdjb29raWUtYmFyLWNsaWNrZWQnLCAndHJ1ZScpO1xuICAgIH0pO1xuXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb29raWVzQmFyOyAvL3NldCB3aGF0IGNhbiBiZSBpbXBvcnRlZCBmcm9tIHRoaXMgZmlsZVxuIiwiY2xhc3MgRXhwbG9yZSB7XG5cbiAgY29uc3RydWN0b3IgKCkge1xuXG4gICAgLy8gRXhwbG9yZSBFbGVtZW50c1xuICAgIHRoaXMuZXhwbG9yZUVsZW1lbnQgPSAkKCcuY20tc2F0LW0tZXhwbG9yZScpO1xuXG4gICAgLy8gRXhwbG9yZSBjbG9zZSBmdW5jdGlvbmFsaXR5LlxuICAgIHRoaXMuZXhwbG9yZUVsZW1lbnQub24oJ2NsaWNrJywgJy52aWV3LW1hcCcsICgpID0+IHtcbiAgICAgIHRoaXMuZXhwbG9yZUVsZW1lbnQudG9nZ2xlQ2xhc3MoJ21hcC1vcGVuJyk7XG4gICAgfSk7XG5cbiAgICAvLyBFeHBsb3JlIENhcmV0IGZ1bmN0aW9uYWxpdHkuXG4gICAgLy8gdGhpcy5leHBsb3JlRWxlbWVudC5vbignY2xpY2snLCAnLnRvdGFsLXNlbGVjdGVkJywgKCkgPT4ge1xuICAgIC8vICAgdGhpcy5leHBsb3JlRWxlbWVudC5maW5kKCcubmF2LWNhcmV0JykudG9nZ2xlQ2xhc3MoJ2hpZGUnKTtcbiAgICAvLyB9KTtcblxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRXhwbG9yZTsgLy9zZXQgd2hhdCBjYW4gYmUgaW1wb3J0ZWQgZnJvbSB0aGlzIGZpbGVcbiIsImNsYXNzIEZpbHRlciB7XG5cbiAgY29uc3RydWN0b3IgKCkge1xuXG4gICAgdmFyIHJlc3VsdHNJdGVtVG90YWwgPSAkKCcucmVzdWx0cy1pdGVtJykubGVuZ3RoO1xuXG4gICAgLy8gRmlsdGVyIEVsZW1lbnRzXG4gICAgdGhpcy5maWx0ZXJFbGVtZW50ID0gJCgnLmNtLXNhdC1tLWZpbHRlcicpO1xuICAgIHRoaXMudGFnc0VsZW1lbnQgPSAkKCcuaXRlbS10YWdzJyk7XG4gICAgdGhpcy5zZWFyY2hFbGVtZW50ID0gJCgnLnNlYXJjaC1jcml0ZXJpYScpO1xuICAgIHRoaXMud2lzaGxpc3REZWxldGVFbGVtZW50ID0gJCgnLndpc2hsaXN0LWRlbGV0ZS1pY29uJyk7XG5cbiAgICB0aGlzLnRhZ3NFbGVtZW50LnBvcG92ZXIoKTtcblxuICAgIHRoaXMuc2VhcmNoRWxlbWVudC5wb3BvdmVyKCk7XG5cbiAgICB0aGlzLndpc2hsaXN0RGVsZXRlRWxlbWVudC5wb3BvdmVyKCk7XG5cbiAgICB0aGlzLndpc2hsaXN0RGVsZXRlRWxlbWVudC5vbignc2hvd24uYnMucG9wb3ZlcicsIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHRoaXNQb3BvdmVyID0gJCh0aGlzKSxcbiAgICAgICAgICB3aXNobGlzdEl0ZW0gPSB0aGlzUG9wb3Zlci5jbG9zZXN0KCcucmVzdWx0cy1pdGVtJykucGFyZW50KCk7XG4gICAgICAvLyBIaWRlIFBvcG92ZXJcbiAgICAgICQoJy5idG4td2lzaGxpc3Qtbm8nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpc1BvcG92ZXIuY2xpY2soKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBSZW1vdmUgUG9wb3ZlciBBbmQgUmVtb3ZlIENvb2tpZVxuICAgICAgJCgnLmJ0bi13aXNobGlzdC15ZXMnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpc1BvcG92ZXIuY2xpY2soKTtcbiAgICAgICAgcmVzdWx0c0l0ZW1Ub3RhbCAtPSAxO1xuICAgICAgICB3aXNobGlzdEl0ZW0uaGlkZSgnc2xvdycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHdpc2hsaXN0SXRlbS5yZW1vdmUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBjb29raWVWYWx1ZSA9IENvb2tpZXMuZ2V0SlNPTignd2lzaGxpc3QnKSxcbiAgICAgICAgICAgIGNvb2tpZUluZGV4ID0gY29va2llVmFsdWUuaW5kZXhPZiggdGhpc1BvcG92ZXIuY2xvc2VzdCgnLnJlc3VsdHMtaXRlbScpLmF0dHIoJ2RhdGEtc2x1ZycpICk7XG4gICAgICAgIGNvb2tpZVZhbHVlLnNwbGljZShjb29raWVJbmRleCwgMSk7XG4gICAgICAgIENvb2tpZXMuc2V0KCd3aXNobGlzdCcsIGNvb2tpZVZhbHVlICk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMuZmlsdGVyRWxlbWVudC5vbignY2xpY2snLCAnLmZpbHRlci1sb2FkbW9yZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHZhciAkdGhpcyA9ICQodGhpcyksXG4gICAgICBnZXRSZXN1bHRzID0gJC5hamF4KHtcbiAgICAgICAgdHlwZTogJ0dFVCcsXG4gICAgICAgIHVybDogJHRoaXMuZmluZCgnYScpLmF0dHIoJ2hyZWYnKSxcbiAgICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJ1xuICAgICAgfSk7XG5cbiAgICAgIGdldFJlc3VsdHMuZG9uZShmdW5jdGlvbiggZGF0YSApIHtcblxuICAgICAgICB2YXIgbmV4dFBhZ2UgPSBkYXRhWydkYXRhJ11bJ25leHRQYWdlJ10sXG4gICAgICAgICAgICBzZWFyY2hRdWVyeSA9IGRhdGFbJ3EnXTtcbiAgICAgICAgaWYoIGRhdGFbJ2RhdGEnXVsnbmV4dFBhZ2UnXSAhPT0gJycgKSB7XG4gICAgICAgICAgdmFyIG5leHRVcmwgPSAnL2FwaS9zZWFyY2g/cT0nKyBzZWFyY2hRdWVyeSArJyZwPScgKyBuZXh0UGFnZTtcbiAgICAgICAgICAkdGhpcy5maW5kKCdhJykuYXR0cignaHJlZicsIG5leHRVcmwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICR0aGlzLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgICQoJy5maWx0ZXItcmVzdWx0cycpLmFwcGVuZCggJChkYXRhWydkYXRhJ11bJ2h0bWwnXSkgKTtcbiAgICAgICAgJCgnLml0ZW0tdGFncycpLnBvcG92ZXIoKTtcblxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGaWx0ZXI7IC8vc2V0IHdoYXQgY2FuIGJlIGltcG9ydGVkIGZyb20gdGhpcyBmaWxlXG4iLCJjbGFzcyBIb21lcGFnZUdyaWQge1xuXG4gIGNvbnN0cnVjdG9yICgpIHtcblxuICAgIC8vIEhvbWVwYWdlR3JpZCBFbGVtZW50c1xuICAgIHRoaXMuaG9tZXBhZ2VHcmlkRWxlbWVudCA9ICQoJy5jbS1zYXQtbS1ob21lcGFnZS1ncmlkJyk7XG5cbiAgICAvLyBNYW5hZ2UgSGVpZ2h0IE9mIEdyaWQgRWxlbWVudHNcbiAgICB0aGlzLmhvbWVwYWdlR3JpZEVsZW1lbnQuZmluZCgnLmlzLWRlc2t0b3AgLmZ1bGwtaGVpZ2h0IGltZycpLm1hdGNoSGVpZ2h0KHsgYnlSb3c6IGZhbHNlIH0pO1xuICAgIHRoaXMuaG9tZXBhZ2VHcmlkRWxlbWVudC5maW5kKCcuaXMtZGVza3RvcCAuaGFsZi1oZWlnaHQgaW1nJykubWF0Y2hIZWlnaHQoeyBieVJvdzogZmFsc2UgfSk7XG5cblxuICAgIC8vIE1hbmFnZSBIb3ZlciBTdHlsZXNcbiAgICB0aGlzLmhvbWVwYWdlR3JpZEVsZW1lbnQub24oJ2NsaWNrJywgJy5pdGVtLWhvdmVyJywgZnVuY3Rpb24oZSkge1xuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmhvbWVwYWdlR3JpZEVsZW1lbnQuZmluZCgnLml0ZW0taG92ZXInKS5ob3ZlcihcbiAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgIH0sIGZ1bmN0aW9uKCkge1xuICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgIH1cbiAgICApO1xuXG4gICAgdGhpcy5ob21lcGFnZUdyaWRFbGVtZW50Lm9uKCdjbGljaycsICcuaG92ZXItY2xvc2UnLCBmdW5jdGlvbigpIHtcbiAgICAgICQodGhpcykucGFyZW50KCcuaXRlbS1ob3ZlcicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgIGUuc3RvcFByb3BhdGF0aW9uKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmhvbWVwYWdlR3JpZEVsZW1lbnQuaW1hZ2VzTG9hZGVkKCAoKSA9PiB7XG4gICAgICAkKCcubG9hZGluZycpLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgfSk7XG5cbiAgICB2YXIgdmlkZW8gPSB0aGlzLmhvbWVwYWdlR3JpZEVsZW1lbnQuZmluZCgnLnlvdXR1YmUtaWZyYW1lIGlmcmFtZScpO1xuICAgICQod2luZG93KS5yZXNpemUoKCkgPT4ge1xuICAgICAgdmlkZW8uYXR0cihcInNyY1wiLCB2aWRlby5hdHRyKFwic3JjXCIpKTtcbiAgICB9KTtcblxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSG9tZXBhZ2VHcmlkOyAvL3NldCB3aGF0IGNhbiBiZSBpbXBvcnRlZCBmcm9tIHRoaXMgZmlsZVxuIiwiY2xhc3MgUGFyYWxsYXgge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnJlc2l6ZVRpbWVyO1xuICAgICAgICB0aGlzLmZsYWcgPSB0cnVlO1xuICAgICAgICB0aGlzLndyYXBwZXJfYm90dG9tID0gMDtcbiAgICB9XG5cbiAgICBwYXJhbGxheFJlc2l6ZSgpIHtcbiAgICAgICAgbGV0IHNsaWNrX2hlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NsaWRlci1pbWFnZScpWzBdO1xuICAgICAgICBsZXQgcGFyYWxsYXhFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NtLXNhdC1tLXBhcmFsbGF4Jyk7XG4gICAgICAgIGlmKHNsaWNrX2hlaWdodCAhPSBudWxsKSB7XG4gICAgICAgICAgc2xpY2tfaGVpZ2h0ID0gc2xpY2tfaGVpZ2h0LmNsaWVudEhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICBpZihwYXJhbGxheEVsZW1lbnQhPW51bGwpIHtcbiAgICAgICAgICAgIHBhcmFsbGF4RWxlbWVudC5zdHlsZS5oZWlnaHQgPSAoc2xpY2tfaGVpZ2h0ICsgJ3B4Jyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcGFyYWxsYXhTY3JvbGwoKXtcbiAgICAgICAgbGV0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpO1xuICAgICAgICBsZXQgcGFyYWxsYXhQYW5lbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lcGFnZS1wYW5lbCcpO1xuICAgICAgICBsZXQgaG9tZXBhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjbS1zYXQtcC1ob21lcGFnZScpWzBdO1xuICAgICAgICBsZXQgZWxlPSAkKCcuc2xpZGVyLWZpeGVkJyk7XG4gICAgICAgIGlmIChob21lcGFnZSE9bnVsbCkge1xuICAgICAgICAgICAgYm9keVswXS5jbGFzc0xpc3QuYWRkKFwibm8tc2Nyb2xsXCIpO1xuICAgICAgICAgICAgJChwYXJhbGxheFBhbmVsKS5hbmltYXRlKHt0b3A6IDB9LCAyODAwLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgYm9keVswXS5jbGFzc0xpc3QucmVtb3ZlKFwibm8tc2Nyb2xsXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7IGVsZS5mYWRlSW4oKTsgfSwgNzAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBhcmFsbGF4UmV2ZWFsKCkge1xuICAgICAgICBsZXQgcGFyYWxsYXhfd3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXJhbGxheC1yZXZlYWwtd3JhcHBlcicpO1xuICAgICAgICBsZXQgcGFyYWxsYXhfZ3JpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXJhbGxheC1ncmlkJyk7XG4gICAgICAgIGxldCBzbGlja193cmFwID0gJCgnLmNvdmVyLXdyYXBwZXInKTtcbiAgICAgICAgaWYgKHBhcmFsbGF4X3dyYXBwZXIgIT0gbnVsbCAmJiBwYXJhbGxheF9ncmlkICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmZsYWcpXG4gICAgICAgICAgICAgICAgdGhpcy53cmFwcGVyX2JvdHRvbSA9IHBhcmFsbGF4X2dyaWQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tO1xuICAgICAgICAgICAgaWYgKHBhcmFsbGF4X3dyYXBwZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tIDwgdGhpcy53cmFwcGVyX2JvdHRvbSkge1xuICAgICAgICAgICAgICAgIHBhcmFsbGF4X3dyYXBwZXIuY2xhc3NMaXN0LmFkZCgncmV2ZWFsZWQnKTtcbiAgICAgICAgICAgICAgICBwYXJhbGxheF9ncmlkLmNsYXNzTGlzdC5hZGQoJ3JldmVhbGVkJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5mbGFnID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgJChzbGlja193cmFwKS5jc3MoJ3Bvc2l0aW9uJywgJ3JlbGF0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGFyYWxsYXhfZ3JpZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b20gPiB0aGlzLndyYXBwZXJfYm90dG9tKSB7XG4gICAgICAgICAgICAgICAgcGFyYWxsYXhfd3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdyZXZlYWxlZCcpO1xuICAgICAgICAgICAgICAgIHBhcmFsbGF4X2dyaWQuY2xhc3NMaXN0LnJlbW92ZSgncmV2ZWFsZWQnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmZsYWcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICQoc2xpY2tfd3JhcCkuY3NzKCdwb3NpdGlvbicsICdmaXhlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG52YXIgcGFyYWxsYXggPSBuZXcgUGFyYWxsYXgoKTtcblxuaWYgKCAhL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICkge1xuICB2YXIgc2xpZGVySW1hZ2UgPSAkKCcuc2xpZGVyLWltYWdlJyksXG4gICAgICBzbGlkZXJJbWFnZUhlaWdodCA9IHNsaWRlckltYWdlLm91dGVySGVpZ2h0KCksXG4gICAgICBzbGlkZXJJbWFnZU9mZnNldCA9IHNsaWRlckltYWdlSGVpZ2h0IC8gNztcblxuICB3aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgcGFyYWxsYXgucGFyYWxsYXhSZXZlYWwoKTtcblxuICAgIGlmKCAkKCcuY20tc2F0LXAtaG9tZXBhZ2UnKVswXSApIHtcbiAgICAgIHZhciBzY3JvbGxUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cbiAgICAgIHNsaWRlckltYWdlLmNzcyh7XG4gICAgICAgIHRvcDogKCgoc2xpZGVySW1hZ2VIZWlnaHQgLSBzY3JvbGxUb3ApIC8gNykgLSBNYXRoLmZsb29yKHNsaWRlckltYWdlT2Zmc2V0KSkgKyAncHgnXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG4gIHdpbmRvdy5vbmxvYWQ9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHBhcmFsbGF4LnBhcmFsbGF4U2Nyb2xsKCk7XG4gICAgICBjbGVhclRpbWVvdXQocGFyYWxsYXgucmVzaXplVGltZXIpO1xuICAgICAgcGFyYWxsYXgucmVzaXplVGltZXIgPSBzZXRUaW1lb3V0KHBhcmFsbGF4LnBhcmFsbGF4UmVzaXplKCksIDEpO1xuICB9XG5cbiAgJCh3aW5kb3cpLm9uKCdyZXNpemUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzbGlkZXJJbWFnZUhlaWdodCA9IHNsaWRlckltYWdlLm91dGVySGVpZ2h0KCk7XG4gICAgICBzbGlkZXJJbWFnZU9mZnNldCA9IHNsaWRlckltYWdlSGVpZ2h0IC8gNztcbiAgICAgIGNsZWFyVGltZW91dChwYXJhbGxheC5yZXNpemVUaW1lcik7XG4gICAgICBwYXJhbGxheC5yZXNpemVUaW1lciA9IHNldFRpbWVvdXQocGFyYWxsYXgucGFyYWxsYXhSZXNpemUoKSwgMSk7XG4gIH0pO1xufVxubW9kdWxlLmV4cG9ydHMgPSBQYXJhbGxheDtcbiIsInZhciBlbnZfdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG52YXIgdXJsID0gZW5jb2RlVVJJQ29tcG9uZW50KGVudl91cmwpO1xuXG52YXIgZmFjZWJvb2tTdHJpbmcgPSBgaHR0cDovL3d3dy5mYWNlYm9vay5jb20vc2hhcmVyLnBocD9zPTEwMCZwW3VybF09JHt1cmx9YDtcbnZhciBnb29nbGVTdHJpbmcgPSBgaHR0cHM6Ly9wbHVzLmdvb2dsZS5jb20vc2hhcmU/dXJsPSR7dXJsfWA7XG52YXIgcGludGVyZXN0U3RyaW5nID0gYGh0dHA6Ly9waW50ZXJlc3QuY29tL3Bpbi9jcmVhdGUvbGluay8/dXJsPSR7dXJsfWA7XG5cbnZhciB0aXRsZSA9ICBlbmNvZGVVUklDb21wb25lbnQoICQoJ21ldGFbbmFtZT1cInR3aXR0ZXI6ZGVzY3JpcHRpb25cIl0nKS5hdHRyKCdjb250ZW50JykgKTtcbnZhciB0d2l0dGVyU3RyaW5nID0gYGh0dHBzOi8vdHdpdHRlci5jb20vc2hhcmU/dGV4dD0ke3RpdGxlfSZ1cmw9JHt1cmx9YDtcblxudmFyIHBhZ2VUaXRsZSA9IGVuY29kZVVSSUNvbXBvbmVudCggJCgndGl0bGUnKS50ZXh0KCkgKTtcbnZhciBlbWFpbFN0cmluZyA9IGBtYWlsdG86P3N1YmplY3Q9JHtwYWdlVGl0bGV9JmJvZHk9JHt1cmx9YDtcblxuY2xhc3MgU2hhcmUge1xuXG4gICAgICBjb25zdHJ1Y3RvcihkZWJ1ZyA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuc2hhcmVQb3BvdmVyRWxlbWVudHMgPSAkKCcuanMtc2hhcmUtcG9wb3ZlciwgLmpzLXNoYXJlLWZpeGVkLXBvcG92ZXInKTtcblxuICAgICAgICB0aGlzLnNoYXJlUG9wb3ZlckVsZW1lbnRzLm9uKCdzaG93bi5icy5wb3BvdmVyJywgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNoYXJlUG9wb3ZlckVsZW1lbnRzLm9uKCdoaWRlLmJzLnBvcG92ZXInLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy51bmJpbmRDbGljaygpO1xuICAgICAgICB9KTtcblxuICAgICAgfVxuXG4gICAgICBiaW5kRXZlbnRzICgpIHtcbiAgICAgICAgdGhpcy5mYWNlYm9vayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1mYWNlYm9vaycpO1xuICAgICAgICB0aGlzLnR3aXR0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtdHdpdHRlcicpO1xuICAgICAgICB0aGlzLmdvb2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1nb29nbGUnKTtcbiAgICAgICAgdGhpcy5waW50ZXJlc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtcGludGVyZXN0Jyk7XG4gICAgICAgIHRoaXMuZW1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtZW1haWwnKTtcblxuICAgICAgICB0aGlzLmZhY2Vib29rLmhyZWYgPSBmYWNlYm9va1N0cmluZztcbiAgICAgICAgdGhpcy5mYWNlYm9vay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xpY2tMaW5rLCBmYWxzZSk7XG5cbiAgICAgICAgdGhpcy5nb29nbGUuaHJlZiA9IGdvb2dsZVN0cmluZztcbiAgICAgICAgdGhpcy5nb29nbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsaWNrTGluaywgZmFsc2UpO1xuXG4gICAgICAgIHRoaXMudHdpdHRlci5ocmVmID0gdHdpdHRlclN0cmluZztcbiAgICAgICAgdGhpcy50d2l0dGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbGlja0xpbmssIGZhbHNlKTtcblxuICAgICAgICB0aGlzLnBpbnRlcmVzdC5ocmVmID0gcGludGVyZXN0U3RyaW5nO1xuICAgICAgICB0aGlzLnBpbnRlcmVzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xpY2tMaW5rLCBmYWxzZSk7XG5cbiAgICAgICAgdGhpcy5lbWFpbC5ocmVmID0gZW1haWxTdHJpbmc7XG4gICAgICB9XG5cbiAgICAgIHVuYmluZENsaWNrKCkge1xuICAgICAgICB0aGlzLmZhY2Vib29rLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJyk7XG4gICAgICAgIHRoaXMuZ29vZ2xlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJyk7XG4gICAgICAgIHRoaXMudHdpdHRlci5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycpO1xuICAgICAgfVxuXG4gICAgICBjbGlja0xpbmsgKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB3aW5kb3cub3Blbih0aGlzLmhyZWYsJycsICdtZW51YmFyPW5vLHRvb2xiYXI9bm8scmVzaXphYmxlPXllcyxzY3JvbGxiYXJzPXllcyxoZWlnaHQ9NjIwLHdpZHRoPTUwMCcpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2hhcmU7XG4iLCJjbGFzcyBUb3AxMCB7XG5cbiAgY29uc3RydWN0b3IgKCkge1xuXG4gICAgLy8gVG9wMTAgRWxlbWVudFxuICAgIHRoaXMudG9wMTBFbGVtZW50ID0gJCgnLmNtLXNhdC1wLXRvcDEwbWFwJyk7XG4gICAgdGhpcy5maXhlZEVsZW1lbnQgPSAkKCcuY29udGFpbmVyLWZpeGVkJyk7XG5cbiAgICAvLyBUb3AxMCBoZWFkZXIgZmFkZSBvdXRcbiAgICB0aGlzLmZpeGVkRWxlbWVudC5maW5kKCcuaGVhZGVyJykuZGVsYXkoNTAwKS5mYWRlVG8oJ3Nsb3cnLCAxKVxuICAgIHRoaXMuZml4ZWRFbGVtZW50LmZpbmQoJy5kZXNjcmlwdGlvbicpLmRlbGF5KDEwMDApLmZhZGVUbygnc2xvdycsIDEpO1xuICAgIHRoaXMuZml4ZWRFbGVtZW50LmRlbGF5KDIzMDApLmZhZGVPdXQoKTtcbiAgICB0aGlzLnRvcDEwRWxlbWVudC5maW5kKCcuY20tc2F0LW0tbWFwJykuZGVsYXkoMjcwMCkuZmFkZVRvKCdzbG93JywgMSk7XG5cbiAgICAvLyBUb3AxMCBjbG9zZSBzbGlkZXJcbiAgICB0aGlzLnRvcDEwRWxlbWVudC5vbignY2xpY2snLCAnLmNsb3NlLXNsaWRlcicsIGZ1bmN0aW9uKCkge1xuICAgICAgJCgnLmNtLXNhdC1tLXNsaWRlci10b3AxMCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICB9KTtcblxuICAgIC8vIFByZXZlbnQgcGFyZW50IHNsaWRlciBmcm9tIG1vdmluZyB3aGVuIHRoZSBjaGlsZCBzbGlkZXIgaXMgbW92aW5nIC8gYWRkIGFjdGl2ZSBjbGFzc1xuICAgICQoJy5qcy1zbGlkZXItY2hhcnQnKS5vbignYmVmb3JlQ2hhbmdlJywgZnVuY3Rpb24gKGV2ZW50LCBzbGljaywgY3VycmVudFNsaWRlLCBuZXh0U2xpZGUpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgJCh0aGlzKS5jbG9zZXN0KCcucy1pdGVtLXN0YXRzJykuZmluZCgnLmNoYXJ0LXN0YXQnKS5yZW1vdmVDbGFzcygnYWN0aXZlJykuZXEobmV4dFNsaWRlKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgfSk7XG4gICAgLy8gUHJldmVudCBwYXJlbnQgc2xpZGVyIGZyb20gbW92aW5nIHdoZW4gdGhlIGNoaWxkIHNsaWRlciBpcyBtb3ZpbmcgLyBhZGQgYWN0aXZlIGNsYXNzXG4gICAgJCgnLmpzLXNsaWRlci1zb2NpYWxjaGFydCcpLm9uKCdiZWZvcmVDaGFuZ2UnLCBmdW5jdGlvbiAoZXZlbnQsIHNsaWNrLCBjdXJyZW50U2xpZGUsIG5leHRTbGlkZSkge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSk7XG5cbiAgICAvLyBBZGQgQ2xpY2sgZXZlbnQgb24gbGVmdCBzdGF0c1xuICAgIHRoaXMudG9wMTBFbGVtZW50Lm9uKCdjbGljaycsICcuY2hhcnQtc3RhdCcsIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyICR0aGlzID0gJCh0aGlzKSxcbiAgICAgICAgICBpbmRleCA9ICR0aGlzLmluZGV4KCk7XG4gICAgICAkdGhpcy5jbG9zZXN0KCcucy1pdGVtLXN0YXRzJykuZmluZCgnLmpzLXNsaWRlci1jaGFydCcpLnNsaWNrKCdzbGlja0dvVG8nLCBpbmRleCk7XG4gICAgfSk7XG5cblxuICAgIC8vIG1lZGlhIHF1ZXJ5IGV2ZW50IGhhbmRsZXJcbiAgICBpZiAobWF0Y2hNZWRpYSkge1xuICAgICAgdmFyIG1xID0gd2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDc2N3B4KScpO1xuICAgICAgbXEuYWRkTGlzdGVuZXIoV2lkdGhDaGFuZ2UpO1xuICAgICAgV2lkdGhDaGFuZ2UobXEpO1xuICAgIH1cbiAgICAvLyBtZWRpYSBxdWVyeSBjaGFuZ2VcbiAgICBmdW5jdGlvbiBXaWR0aENoYW5nZShtcSkge1xuICAgICAgaWYgKG1xLm1hdGNoZXMpIHtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAvLyBTZXQgaGVpZ2h0IG9mIGNoYXJ0XG4gICAgICAgICQoJy5jaGFydC1pdGVtJykuaGVpZ2h0KCAkKCcuY2hhcnQtc3RhdCcpLnBhcmVudCgpLm91dGVySGVpZ2h0KCkgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRvcDEwOyAvL3NldCB3aGF0IGNhbiBiZSBpbXBvcnRlZCBmcm9tIHRoaXMgZmlsZVxuIiwiY2xhc3MgV2lzaGxpc3Qge1xuXG4gIGNvbnN0cnVjdG9yICgpIHtcblxuICAgIC8vIFdpc2hsaXN0IEVsZW1lbnRzXG4gICAgdmFyIHdpc2hsaXN0U2F2ZUVsZW1lbnQgPSAkKCcuanMtd2lzaGxpc3Qtc2F2ZScpLFxuICAgICAgICB3aXNobGlzdERlbGV0ZUVsZW1lbnQgPSAkKCcuanMtd2lzaGxpc3QtZGVsZXRlJyksXG4gICAgICAgIHNsdWcgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoICcvJyApLFxuICAgICAgICBzbHVnID0gc2x1Zy5zbGljZSgtMSlbMF07XG5cbiAgICAvLyBXaXNobGlzdCBDb29raWUgaGFzIG5vdCBiZWVuIGNyZWF0ZWQgeWV0LlxuICAgIGlmKCBDb29raWVzLmdldCgnd2lzaGxpc3QnKSA9PT0gdW5kZWZpbmVkICkge1xuICAgICAgd2lzaGxpc3REZWxldGVFbGVtZW50LmFkZENsYXNzKCdoaWRlJyk7XG4gICAgLy8gV2lzaGxpc3QgQ29va2llIGlzIGFscmVhZHkgY3JlYXRlZC5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gV2lzaGxpc3QgQ29va2llIHdhcyBjcmVhdGVkIGJ1dCB0aGlzIHBhZ2UgaXMgbm90IHBhcnQgb2YgaXQuXG4gICAgICBpZiggQ29va2llcy5nZXRKU09OKCd3aXNobGlzdCcpLmluZGV4T2Yoc2x1ZykgPT09IC0xICkge1xuICAgICAgICB3aXNobGlzdERlbGV0ZUVsZW1lbnQuYWRkQ2xhc3MoJ2hpZGUnKTtcbiAgICAgIC8vIFdpc2hsaXN0IENvb2tpZSB3YXMgY3JlYXRlZCBhbmQgdGhpcyBwYWdlIGlzIHBhcnQgb2YgaXQuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aXNobGlzdFNhdmVFbGVtZW50LmFkZENsYXNzKCdoaWRlJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU2hhcmUgRml4ZWQgU2F2ZSBGdW5jdGlvbmFsaXR5XG4gICAgd2lzaGxpc3RTYXZlRWxlbWVudC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcblxuICAgICAgLy8gV2lzaGxpc3QgQ29va2llIGhhcyBub3QgYmVlbiBjcmVhdGVkIHlldC5cbiAgICAgIGlmKCBDb29raWVzLmdldCgnd2lzaGxpc3QnKSA9PT0gdW5kZWZpbmVkICkge1xuICAgICAgICB2YXIgY29va2llVmFsdWUgPSBbXTtcbiAgICAgICAgY29va2llVmFsdWUucHVzaChzbHVnKTtcbiAgICAgICAgQ29va2llcy5zZXQoJ3dpc2hsaXN0JywgY29va2llVmFsdWUgKTtcbiAgICAgIC8vIFdpc2hsaXN0IENvb2tpZSBpcyBhbHJlYWR5IGNyZWF0ZWQuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgY29va2llVmFsdWUgPSBDb29raWVzLmdldEpTT04oJ3dpc2hsaXN0Jyk7XG4gICAgICAgIGNvb2tpZVZhbHVlLnB1c2goc2x1Zyk7XG4gICAgICAgIENvb2tpZXMuc2V0KCd3aXNobGlzdCcsIGNvb2tpZVZhbHVlICk7XG4gICAgICB9XG5cbiAgICAgIHdpc2hsaXN0U2F2ZUVsZW1lbnQuYWRkQ2xhc3MoJ2hpZGUnKTtcbiAgICAgIHdpc2hsaXN0RGVsZXRlRWxlbWVudC5yZW1vdmVDbGFzcygnaGlkZScpO1xuXG4gICAgfSk7XG5cbiAgICB3aXNobGlzdERlbGV0ZUVsZW1lbnQub24oJ3Nob3duLmJzLnBvcG92ZXInLCBmdW5jdGlvbigpIHtcbiAgICAgIHZhciB0aGlzUG9wb3ZlciA9ICQodGhpcyk7XG4gICAgICAvLyBIaWRlIFBvcG92ZXJcbiAgICAgICQoJy5idG4td2lzaGxpc3Qtbm8nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpc1BvcG92ZXIuY2xpY2soKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBSZW1vdmUgUG9wb3ZlciBBbmQgUmVtb3ZlIENvb2tpZVxuICAgICAgJCgnLmJ0bi13aXNobGlzdC15ZXMnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB2YXIgY29va2llVmFsdWUgPSBDb29raWVzLmdldEpTT04oJ3dpc2hsaXN0JyksXG4gICAgICAgICAgICBjb29raWVJbmRleCA9IGNvb2tpZVZhbHVlLmluZGV4T2Yoc2x1Zyk7XG4gICAgICAgIGNvb2tpZVZhbHVlLnNwbGljZShjb29raWVJbmRleCwgMSk7XG4gICAgICAgIENvb2tpZXMuc2V0KCd3aXNobGlzdCcsIGNvb2tpZVZhbHVlICk7XG5cbiAgICAgICAgdGhpc1BvcG92ZXIuY2xpY2soKTtcbiAgICAgICAgd2lzaGxpc3REZWxldGVFbGVtZW50LmFkZENsYXNzKCdoaWRlJyk7XG4gICAgICAgIHdpc2hsaXN0U2F2ZUVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBXaXNobGlzdDsgLy9zZXQgd2hhdCBjYW4gYmUgaW1wb3J0ZWQgZnJvbSB0aGlzIGZpbGVcbiIsImNsYXNzIEJvb3RzdHJhcCB7XG5cbiAgY29uc3RydWN0b3IgKCkge1xuXG4gICAgLy8gQm9vdHN0cmFwIEVsZW1lbnRzXG4gICAgdGhpcy5kcm9wZG93bkVsZW1lbnQgPSAkKCcuZHJvcGRvd24tbWVudSA+IGxpID4gYS5kcm9wZG93bi10b2dnbGUnKTtcbiAgICB0aGlzLm5hdkVsZW1lbnQgPSAkKCcubmF2LWl0ZW0nKTtcbiAgICB0aGlzLm5hdlRvZ2dsZUVsZW1lbnQgPSAkKCcuanMtbmF2LXRvZ2dsZScpO1xuICAgIHRoaXMuZm9vdGVyRWxlbWVudCA9ICQoJy5jbS1zYXQtbS1mb290ZXInKTtcbiAgICB0aGlzLmV4cGxvcmVFbGVtZW50ID0gJCgnLmNtLXNhdC1tLWV4cGxvcmUnKTtcbiAgICB0aGlzLndpc2hsaXN0RWxlbWVudCA9ICQoJyNuYXYtZHJvcGRvd24td2lzaGxpc3QnKTtcblxuICAgIC8vIENsaWNrIGJvb3RzdHJhcCBkcm9wZG93bnMgaW5zaWRlIG90aGVyIGRyb3Bkb3ducy5cbiAgICB0aGlzLmRyb3Bkb3duRWxlbWVudC5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICR0aGlzLm5leHQoKS50b2dnbGUoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAkdGhpcy5maW5kKCcubmF2LWNhcmV0JykudG9nZ2xlQ2xhc3MoJ2hpZGUnKTtcbiAgICB9KTtcblxuICAgIC8vIENsb3NlIGRyb3Bkb3ducyB3aGVuIHlvdSBvcGVuIG90aGVyIGRyb3Bkb3duXG4gICAgdGhpcy5uYXZUb2dnbGVFbGVtZW50Lm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkdGhpcyA9ICQodGhpcyksXG4gICAgICAgICAgdGhpc0Ryb3Bkb3duID0gJCh0aGlzKS5uZXh0KCksXG4gICAgICAgICAgY2xvc2VzdFBhcmVudCA9ICR0aGlzLmNsb3Nlc3QoJy5qcy1uYXYtdG9nZ2xlLXBhcmVudCcpO1xuICAgICAgaWYoIHRoaXNEcm9wZG93bi5oYXNDbGFzcygnb3BlbicpICkge1xuICAgICAgICB0aGlzRHJvcGRvd24ucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNsb3Nlc3RQYXJlbnQuZmluZCgnLm9wZW4nKS5wcmV2KCkuZmluZCgnLm5hdi1jYXJldCcpLnRvZ2dsZUNsYXNzKCdoaWRlJyk7XG4gICAgICAgIGNsb3Nlc3RQYXJlbnQuZmluZCgnLmRyb3Bkb3duLW1lbnUnKS5yZW1vdmVDbGFzcygnb3BlbicpLmhpZGUoKTtcbiAgICAgICAgdGhpc0Ryb3Bkb3duLmFkZENsYXNzKCdvcGVuJyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBTaG93L0hpZGUgY2xvc2UgU1ZHIHdoZW4gdGhlIGRyb3Bkb3duIGNoYW5nZS5cbiAgICB0aGlzLm5hdkVsZW1lbnQub24oJ3Nob3duLmJzLmRyb3Bkb3duIGhpZGRlbi5icy5kcm9wZG93bicsIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICR0aGlzLmZpbmQoJy5uYXYtaWNvbicpLnRvZ2dsZUNsYXNzKCdoaWRlJyk7XG4gICAgICAkdGhpcy5maW5kKCcubmF2LXRleHQnKS50b2dnbGVDbGFzcygnaGlkZScpO1xuICAgICAgaWYoJHRoaXMuZGF0YSgnbmF2JykgPT09ICdtZW51Jykge1xuICAgICAgICAkKCcuY20tc2F0LW0tbmF2JykudG9nZ2xlQ2xhc3MoJ25hdi1vcGVuJyk7XG4gICAgICB9XG4gICAgICAkKCcjZXhwbG9yZU1vZGFsJykubW9kYWwoJ2hpZGUnKTtcbiAgICAgICQoJy5jbS1zYXQtbS1tYXNrJykudG9nZ2xlQ2xhc3MoJ2luJyk7XG4gICAgfSk7XG5cbiAgICAvLyBTaG93L0hpZGUgU1ZHIGFuZCB0ZXh0IHdoZW4gdGhlIG1vZGFsIGNoYW5nZS5cbiAgICB0aGlzLmV4cGxvcmVFbGVtZW50Lm9uKCdzaG93bi5icy5tb2RhbCBoaWRkZW4uYnMubW9kYWwnLCBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBleHBsb3JlSXRlbSA9ICQoJy5uYXYtZXhwbG9yZScpLFxuICAgICAgICAgIHNsaWNrU2xpZGVyID0gJCgnLmpzLXNsaWNrLXNsaWRlcicpO1xuICAgICAgZXhwbG9yZUl0ZW0uZmluZCgnLm5hdi1pY29uJykudG9nZ2xlQ2xhc3MoJ2hpZGUnKTtcbiAgICAgIGV4cGxvcmVJdGVtLmZpbmQoJy5uYXYtdGV4dCcpLnRvZ2dsZUNsYXNzKCdoaWRlJyk7XG4gICAgICBpZiggJCh0aGlzKS5oYXNDbGFzcygnaW4nKSApIHtcbiAgICAgICAgc2xpY2tTbGlkZXIuc2xpY2soJ3NsaWNrUGF1c2UnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNsaWNrU2xpZGVyLnNsaWNrKCdzbGlja1BsYXknKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMud2lzaGxpc3RFbGVtZW50Lm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGlmKCBDb29raWVzLmdldCgnd2lzaGxpc3QnKSAhPT0gdW5kZWZpbmVkICYmIENvb2tpZXMuZ2V0SlNPTignd2lzaGxpc3QnKS5sZW5ndGggPiAwICkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvd2lzaGxpc3QuaHRtbCc7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBIaWRlIGZvb3RlciBhY2NvcmRpb25zIHdoZW4geW91IGNsaWNrIG9uIGEgZGlmZmVyZW50IGFjY29yZGlvbi5cbiAgICB0aGlzLmZvb3RlckVsZW1lbnQuZmluZCgnLmNvbGxhcHNlJykub24oJ3Nob3cuYnMuY29sbGFwc2UnLCBmdW5jdGlvbigpIHtcbiAgICAgICQoJy5jb2xsYXBzZScpLm5vdCh0aGlzKS5jb2xsYXBzZSgnaGlkZScpO1xuICAgIH0pO1xuXG4gICAgLy8gSGlkZSBwb3BvdmVyIG9uIGNsaWNrIG91dHNpZGUuXG4gICAgdmFyICRib2R5ID0gJCgnYm9keScpO1xuICAgICRib2R5Lm9uKCdzaG93bi5icy5wb3BvdmVyJywgJ1tkYXRhLXRvZ2dsZT1cInBvcG92ZXJcIl0nLCBmdW5jdGlvbigpIHtcbiAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAkYm9keS5vbignY2xpY2sucG9wb3Zlcm9wZW4nLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoISR0aGlzLmlzKGUudGFyZ2V0KSAmJiAkdGhpcy5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PT0gMCAmJiAkKCcucG9wb3ZlcicpLmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgJHRoaXMuY2xpY2soKTtcbiAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KS5vbignaGlkZGVuLmJzLnBvcG92ZXInLCBmdW5jdGlvbigpIHtcbiAgICAgICRib2R5Lm9mZignY2xpY2sucG9wb3Zlcm9wZW4nKTtcbiAgICB9KTtcblxuICAgIC8vIG1lZGlhIHF1ZXJ5IGV2ZW50IGhhbmRsZXJcbiAgICBpZiAobWF0Y2hNZWRpYSkge1xuICAgICAgdmFyIG1xID0gd2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDc2OHB4KScpO1xuICAgICAgbXEuYWRkTGlzdGVuZXIoV2lkdGhDaGFuZ2UpO1xuICAgICAgV2lkdGhDaGFuZ2UobXEpO1xuICAgIH1cbiAgICAvLyBtZWRpYSBxdWVyeSBjaGFuZ2VcbiAgICBmdW5jdGlvbiBXaWR0aENoYW5nZShtcSkge1xuICAgICAgaWYgKG1xLm1hdGNoZXMpIHtcbiAgICAgICAgJCgnLmpzLXNoYXJlLWZpeGVkLXBvcG92ZXInKS5hdHRyKCdkYXRhLXBsYWNlbWVudCcsICdib3R0b20nKVxuICAgICAgICAkKCcuanMtc2hhcmUtZml4ZWQtcG9wb3ZlcicpLnBvcG92ZXIoKTtcblxuICAgICAgICAkKCcuanMtd2lzaGxpc3QtZGVsZXRlJykuYXR0cignZGF0YS1wbGFjZW1lbnQnLCAnYm90dG9tJylcbiAgICAgICAgJCgnLmpzLXdpc2hsaXN0LWRlbGV0ZScpLnBvcG92ZXIoKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAkKCcuanMtc2hhcmUtZml4ZWQtcG9wb3ZlcicpLmF0dHIoJ2RhdGEtcGxhY2VtZW50JywgJ2F1dG8gcmlnaHQnKVxuICAgICAgICAkKCcuanMtc2hhcmUtZml4ZWQtcG9wb3ZlcicpLnBvcG92ZXIoKTtcblxuICAgICAgICAkKCcuanMtd2lzaGxpc3QtZGVsZXRlJykuYXR0cignZGF0YS1wbGFjZW1lbnQnLCAnYXV0byByaWdodCcpXG4gICAgICAgICQoJy5qcy13aXNobGlzdC1kZWxldGUnKS5wb3BvdmVyKCk7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCb290c3RyYXA7IC8vc2V0IHdoYXQgY2FuIGJlIGltcG9ydGVkIGZyb20gdGhpcyBmaWxlXG4iLCIvLyBCb290c3RyYXAgTXVsdGlzZWN0IERyb3Bkb3duXG5jbGFzcyBFeHBsb3JlTXVsdGlzZWxlY3Qge1xuXG4gIGNvbnN0cnVjdG9yICgpIHtcblxuICAgIC8vIEV4cGxvcmUgTXVsdGlzZWxlY3QgRWxlbWVudHNcbiAgICB0aGlzLnNlbGVjdEVsZW1lbnQgPSAkKCcuZXhwbG9yZS1tdWx0aXNlbGVjdCcpO1xuICAgIHRoaXMuZXhwbG9yZUVsZW1lbnQgPSAkKCcuY20tc2F0LW0tZXhwbG9yZScpO1xuXG4gICAgdGhpcy5zZWxlY3RFbGVtZW50LmVhY2goZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgICAgdmFyIG5hbWUgPSAkKHZhbHVlKS5kYXRhKCduYW1lJyk7XG4gICAgICAkKHZhbHVlKS5tdWx0aXNlbGVjdCh7XG4gICAgICAgIGluY2x1ZGVTZWxlY3RBbGxPcHRpb246IHRydWUsXG4gICAgICAgIG51bWJlckRpc3BsYXllZDogMSxcbiAgICAgICAgbm9uU2VsZWN0ZWRUZXh0OiBuYW1lLFxuICAgICAgICBvbkRyb3Bkb3duU2hvd246IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgJCgnLnRvdGFsLXNlbGVjdGVkJykucG9wb3ZlcignZGVzdHJveScpO1xuICAgICAgICAgICQoJy5zbGljay1kb3RzJykuYWRkQ2xhc3MoJ2RvdHMtaGlkZGVuJyk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRHJvcGRvd25IaWRkZW46IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgJCgnLnNsaWNrLWRvdHMnKS5yZW1vdmVDbGFzcygnZG90cy1oaWRkZW4nKTtcbiAgICAgICAgICB2YXIgc2VsZWN0ZWQgPSAkKCcuZXhwbG9yZS1tdWx0aXNlbGVjdCcpLmZpbmQoJzpzZWxlY3RlZCcpLFxuICAgICAgICAgICAgICBzZWxlY3RlZE9wdGlvbnMgPSBbXTtcbiAgICAgICAgICBpZihzZWxlY3RlZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAkKCcuZXhwbG9yZS10b3RhbCcpLnNsaWRlRG93bigpO1xuICAgICAgICAgICAgJCgnLnRvdGFsLXNlbGVjdGVkJykuZmluZCgnc3BhbicpLnRleHQoc2VsZWN0ZWQubGVuZ3RoKTtcbiAgICAgICAgICAgIHNlbGVjdGVkLmVhY2goZnVuY3Rpb24oc2VsZWN0ZWRLZXksIHNlbGVjdGVkVmFsdWUpIHtcbiAgICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb25zLnB1c2goJChzZWxlY3RlZFZhbHVlKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICQoJy50b3RhbC1zZWxlY3RlZCcpLnBvcG92ZXIoe1xuICAgICAgICAgICAgICBjb250YWluZXI6ICcuY20tc2F0LW0tZXhwbG9yZScsXG4gICAgICAgICAgICAgIGh0bWw6IHRydWUsXG4gICAgICAgICAgICAgIHBsYWNlbWVudDogJ2F1dG8gdG9wJyxcbiAgICAgICAgICAgICAgY29udGVudDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBvcHRpb24gaW4gc2VsZWN0ZWRPcHRpb25zKXtcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaCgnPGEgaHJlZj1cIiNcIiBjbGFzcz1cImpzLWVwLWl0ZW1cIiBkYXRhLXZhbHVlPVwiJyArICQoc2VsZWN0ZWRPcHRpb25zW29wdGlvbl0pLmF0dHIoJ3ZhbHVlJykgKyAnXCI+JyArICQoc2VsZWN0ZWRPcHRpb25zW29wdGlvbl0pLnRleHQoKSArICc8c3ZnPjx1c2UgeGxpbms6aHJlZj1cIiNjbG9zZVwiPjwvdXNlPjwvc3ZnPjwvYT4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKCc8ZGl2IGNsYXNzPVwicG9wb3Zlci1jbGVhcmFsbFwiPjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJqcy1lcC1jbGVhcmFsbFwiPkNsZWFyIGFsbDxzdmc+PHVzZSB4bGluazpocmVmPVwiI2Nsb3NlXCI+PC91c2U+PC9zdmc+PC9hPjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJqcy1jbG9zZXRvb2x0aXAgcHVsbC1yaWdodFwiPkNsb3NlPC9hPjwvZGl2PicpO1xuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25zO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCgnLmV4cGxvcmUtdG90YWwnKS5zbGlkZVVwKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIFJlbW92ZSBTaW5nbGUgUG9wb3ZlciBUYWcgT24gQ2xpY2suXG4gICAgdGhpcy5leHBsb3JlRWxlbWVudC5vbignY2xpY2snLCAnLmpzLWVwLWl0ZW0nLCBmdW5jdGlvbihlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLFxuICAgICAgICAgIGV4cGxvcmVNdWx0aSA9ICQoJy5leHBsb3JlLW11bHRpc2VsZWN0Jyk7XG4gICAgICBleHBsb3JlTXVsdGkubXVsdGlzZWxlY3QoICdkZXNlbGVjdCcsICR0aGlzLmRhdGEoJ3ZhbHVlJykgKTtcbiAgICAgICQoJy50b3RhbC1zZWxlY3RlZCcpLmZpbmQoJ3NwYW4nKS50ZXh0KGV4cGxvcmVNdWx0aS5maW5kKCc6c2VsZWN0ZWQnKS5sZW5ndGgpO1xuICAgICAgJHRoaXMucmVtb3ZlKCk7XG4gICAgICBpZihleHBsb3JlTXVsdGkuZmluZCgnOnNlbGVjdGVkJykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICQoJy50b3RhbC1zZWxlY3RlZCcpLnBvcG92ZXIoJ2Rlc3Ryb3knKTtcbiAgICAgICAgJCgnLmV4cGxvcmUtdG90YWwnKS5zbGlkZVVwKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBSZW1vdmUgQWxsIFBvcG92ZXIgVGFncyBPbiBDbGljay5cbiAgICB0aGlzLmV4cGxvcmVFbGVtZW50Lm9uKCdjbGljaycsICcuanMtZXAtY2xlYXJhbGwnLCBmdW5jdGlvbihlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB2YXIgZXhwbG9yZU11bHRpID0gJCgnLmV4cGxvcmUtbXVsdGlzZWxlY3QnKTtcbiAgICAgIGV4cGxvcmVNdWx0aS5tdWx0aXNlbGVjdCgnZGVzZWxlY3RBbGwnLCBmYWxzZSk7XG4gICAgICBleHBsb3JlTXVsdGkubXVsdGlzZWxlY3QoJ3VwZGF0ZUJ1dHRvblRleHQnKTtcbiAgICAgICQoJy50b3RhbC1zZWxlY3RlZCcpLnBvcG92ZXIoJ2Rlc3Ryb3knKTtcbiAgICAgICQoJy5leHBsb3JlLXRvdGFsJykuc2xpZGVVcCgpO1xuICAgIH0pO1xuXG4gICAgLy8gSGlkZSB0b29sdGlwIG9uIG1vYmlsZVxuICAgIHRoaXMuZXhwbG9yZUVsZW1lbnQub24oJ2NsaWNrJywgJy5qcy1jbG9zZXRvb2x0aXAnLCBmdW5jdGlvbihlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAkKCcudG90YWwtc2VsZWN0ZWQnKS5wb3BvdmVyKCdoaWRlJyk7XG4gICAgfSk7XG5cbiAgICAvLyBtZWRpYSBxdWVyeSBldmVudCBoYW5kbGVyXG4gICAgaWYgKG1hdGNoTWVkaWEpIHtcbiAgICAgIHZhciBtcSA9IHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA3NjdweCknKTtcbiAgICAgIHZhciBtcWwgPSB3aW5kb3cubWF0Y2hNZWRpYShcIihvcmllbnRhdGlvbjogcG9ydHJhaXQpXCIpO1xuICAgICAgbXEuYWRkTGlzdGVuZXIoV2lkdGhDaGFuZ2UpO1xuICAgICAgbXFsLmFkZExpc3RlbmVyKE9yaWVudGF0aW9uQ2hhbmdlKTtcbiAgICAgIFdpZHRoQ2hhbmdlKG1xKTtcbiAgICB9XG4gICAgLy8gbWVkaWEgcXVlcnkgY2hhbmdlXG4gICAgZnVuY3Rpb24gV2lkdGhDaGFuZ2UobXEpIHtcbiAgICAgIGlmICggbXEubWF0Y2hlcyApIHtcbiAgICAgICAgJCgnLmNtLXNhdC1tLWV4cGxvcmUnKS5maW5kKCcuYnRuLWdyb3VwJykuYWRkQ2xhc3MoJ2Ryb3B1cCcpO1xuICAgICAgICBPcmllbnRhdGlvbkNoYW5nZShtcWwpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgICQoJy5jbS1zYXQtbS1leHBsb3JlJykuZmluZCgnLmJ0bi1ncm91cCcpLnJlbW92ZUNsYXNzKCdkcm9wdXAnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBvcmllbnRhdGlvbiBjaGFuZ2VcbiAgICBmdW5jdGlvbiBPcmllbnRhdGlvbkNoYW5nZShtcWwpIHtcbiAgICAgIGlmICggbXFsLm1hdGNoZXMgKSB7XG4gICAgICAgICQoJy5jbS1zYXQtbS1leHBsb3JlJykuZmluZCgnLmJ0bi1ncm91cCcpLmFkZENsYXNzKCdkcm9wdXAnKTtcbiAgICAgICAgJCgnLmV4cGxvcmUtbXVsdGlwbGUnKS5lYWNoKGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAkKHZhbHVlKS5maW5kKCcuYnRuLWdyb3VwJykuZXEoMSkub2ZmKCdjbGljay5idG4tbGFuZHNjYXBlJyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgICQoJy5jbS1zYXQtbS1leHBsb3JlJykuZmluZCgnLmJ0bi1ncm91cCcpLnJlbW92ZUNsYXNzKCdkcm9wdXAnKTtcbiAgICAgICAgJCgnLmV4cGxvcmUtbXVsdGlwbGUnKS5lYWNoKGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAkKHZhbHVlKS5maW5kKCcuYnRuLWdyb3VwJykuZXEoMSkub24oJ2NsaWNrLmJ0bi1sYW5kc2NhcGUnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyksXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb25zID0gJCgnLmV4cGxvcmUtbXVsdGlzZWxlY3QnKS5maW5kKCc6c2VsZWN0ZWQnKS5sZW5ndGg7XG4gICAgICAgICAgICBpZiggISR0aGlzLmhhc0NsYXNzKCdvcGVuJykgJiYgc2VsZWN0ZWRPcHRpb25zID4gMCApIHtcbiAgICAgICAgICAgICAgJCgnLmV4cGxvcmUtdG90YWwnKS5oaWRlKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYoICR0aGlzLmhhc0NsYXNzKCdvcGVuJykgJiYgc2VsZWN0ZWRPcHRpb25zID4gMCApIHtcbiAgICAgICAgICAgICAgJCgnLmV4cGxvcmUtdG90YWwnKS5zaG93KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRXhwbG9yZU11bHRpc2VsZWN0OyAvL3NldCB3aGF0IGNhbiBiZSBpbXBvcnRlZCBmcm9tIHRoaXMgZmlsZVxuIiwiLy8gQm9vdHN0cmFwIE11bHRpc2VjdCBEcm9wZG93blxuY2xhc3MgRmlsdGVyTXVsdGlzZWxlY3Qge1xuXG4gIGNvbnN0cnVjdG9yICgpIHtcblxuICAgIC8vIEZpbHRlciBNdWx0aXNlbGVjdCBFbGVtZW50c1xuICAgIHRoaXMuZmlsdGVyRWxlbWVudCA9ICQoJy5jbS1zYXQtbS1maWx0ZXInKTtcbiAgICB0aGlzLnNlbGVjdEVsZW1lbnQgPSAkKCcuZmlsdGVyLW11bHRpc2VsZWN0Jyk7XG4gICAgdGhpcy53aXNobGlzdEVsZW1lbnQgPSAkKCcuY20tc2F0LXAtd2lzaGxpc3QnKTtcblxuICAgIHRoaXMuc2VsZWN0RWxlbWVudC5lYWNoKGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICAgIHZhciBuYW1lID0gJCh2YWx1ZSkuZGF0YSgnbmFtZScpO1xuICAgICAgJCh2YWx1ZSkubXVsdGlzZWxlY3Qoe1xuICAgICAgICBpbmNsdWRlU2VsZWN0QWxsT3B0aW9uOiB0cnVlLFxuICAgICAgICBidXR0b25UZXh0OiBmdW5jdGlvbihvcHRpb25zLCBzZWxlY3QpIHtcbiAgICAgICAgICBpZiAob3B0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBuYW1lO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbmFtZSArICcgKCcgKyBvcHRpb25zLmxlbmd0aCArICcpJ1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmZpbHRlckVsZW1lbnQub24oJ2NsaWNrJywgJy5maWx0ZXItY3RhJywgZnVuY3Rpb24oZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy53aXNobGlzdEVsZW1lbnQub24oJ2NsaWNrJywgJy5maWx0ZXItY3RhJywgZnVuY3Rpb24oZSkge1xuICAgICAgdmFyIHNlbGVjdGVkT3B0aW9ucyA9ICQoJy5zYXQtbXVsdGlzZWxlY3QnKS5maW5kKCc6c2VsZWN0ZWQnKSxcbiAgICAgICAgICB0b3RhbEl0ZW1zID0gJCgnLnRvdGFsLWl0ZW1zJyksXG4gICAgICAgICAgcmVzdWx0SXRlbSA9ICQoJy5yZXN1bHRzLWl0ZW0nKTtcblxuICAgICAgcmVzdWx0SXRlbS5hdHRyKCdkYXRhLWZvdW5kJywgJ2ZhbHNlJyk7XG5cbiAgICAgIGlmKHNlbGVjdGVkT3B0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHNlbGVjdGVkT3B0aW9ucy5lYWNoKGZ1bmN0aW9uKG9wdGlvbktleSwgb3B0aW9uVmFsdWUpIHtcbiAgICAgICAgICByZXN1bHRJdGVtLmVhY2goZnVuY3Rpb24ocmVzdWx0S2V5LCByZXN1bHRWYWx1ZSkge1xuICAgICAgICAgICAgdmFyIGl0ZW1UYWdzID0gJChyZXN1bHRWYWx1ZSkuZmluZCgnLml0ZW0tdGFncycpLmRhdGEoJ2NvbnRlbnQnKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgaWYoIGl0ZW1UYWdzLmluZGV4T2YoJChvcHRpb25WYWx1ZSkudGV4dCgpLnRvTG93ZXJDYXNlKCkpICE9PSAtMSAmJiAkKHJlc3VsdFZhbHVlKS5hdHRyKCdkYXRhLWZvdW5kJykgPT09ICdmYWxzZScgKSB7XG4gICAgICAgICAgICAgICQocmVzdWx0VmFsdWUpLnBhcmVudCgpLnNob3coJ3Nsb3cnKTtcbiAgICAgICAgICAgICAgJChyZXN1bHRWYWx1ZSkuYXR0cignZGF0YS1mb3VuZCcsICd0cnVlJyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCQocmVzdWx0VmFsdWUpLmF0dHIoJ2RhdGEtZm91bmQnKSA9PT0gJ2ZhbHNlJykge1xuICAgICAgICAgICAgICAkKHJlc3VsdFZhbHVlKS5wYXJlbnQoKS5oaWRlKCdzbG93Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0SXRlbS5wYXJlbnQoKS5zaG93KCdzbG93Jyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZpbHRlck11bHRpc2VsZWN0OyAvL3NldCB3aGF0IGNhbiBiZSBpbXBvcnRlZCBmcm9tIHRoaXMgZmlsZVxuIiwiY2xhc3MgR29vZ2xlTWFwcyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGxldCBjb250YWN0TWFwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWN0TWFwXCIpO1xuICAgICAgICBsZXQgaG9tZXBhZ2VNYXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWVwYWdlLW1hcFwiKTtcbiAgICAgICAgbGV0IGFydGljbGVNYXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFydGljbGVNYXBcIik7XG4gICAgICAgIGxldCB0b3AxME1hcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9wMTBNYXBcIik7XG4gICAgICAgIGxldCBleHBsb3JlTWFwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJleHBsb3JlTWFwXCIpO1xuICAgICAgICBsZXQgaG9tZXBhZ2VNYXBFbGVtZW50ID0gJCgnLmpzLXNsaWNrLWhvbWVwYWdlLW1hcCcpO1xuICAgICAgICBsZXQgdG9wMTBNYXBFbGVtZW50ID0gJCgnLmpzLXNsaWRlci10b3AxMCcpO1xuICAgICAgICBsZXQgY3VzdG9tTWFya2VyID0gJ2ltYWdlcy9tYXBzL21hcmtlci5wbmcnO1xuICAgICAgICBsZXQgY3VzdG9tTWFya2VyRXhwbG9yZSA9ICdpbWFnZXMvbWFwcy9tYXJrZXJFeHBsb3JlLnBuZyc7XG4gICAgICAgIGxldCBjdXN0b21NYXJrZXJFeHBsb3JlVHJhbnNwYXJlbnQgPSAnaW1hZ2VzL21hcHMvbWFya2VyRXhwbG9yZVRyYW5zcGFyZW50LnBuZyc7XG4gICAgICAgIGxldCBjdXN0b21NYXJrZXJfaG92ZXIgPSAnaW1hZ2VzL21hcHMvbWFya2VyX2hvdmVyLnBuZyc7XG4gICAgICAgIHZhciBtYXJrZXJzID0gW107XG4gICAgICAgIC8vQXJ0aWNsZSBNYXBcbiAgICAgICAgaWYgKGFydGljbGVNYXAgIT0gbnVsbCkge1xuICAgICAgICAgICAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFydGljbGVMYXRMbmcgPSB7bGF0OiAtMzIuOTEwNDcyNSwgbG5nOiAyMy41MjA0MzMyfTtcbiAgICAgICAgICAgICAgICBsZXQgbWFwT3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgY2VudGVyOiB0aGlzLmFydGljbGVMYXRMbmcsXG4gICAgICAgICAgICAgICAgICAgIHpvb206IDcsXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbHdoZWVsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbWFwVHlwZUlkOiBnb29nbGUubWFwcy5NYXBUeXBlSWQuUk9BRE1BUFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgbGV0IG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoYXJ0aWNsZU1hcCwgbWFwT3B0aW9ucyk7XG5cbiAgICAgICAgICAgICAgICB2YXIgZ2V0QXJ0aWNsZU1hcCA9ICQuYWpheCh7XG4gICAgICAgICAgICAgICAgICB0eXBlOiAnR0VUJyxcbiAgICAgICAgICAgICAgICAgIHVybDogJy4uL2FwaS9hcnRpY2xlTWFwLmpzb24nLFxuICAgICAgICAgICAgICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbidcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGdldEFydGljbGVNYXAuZG9uZShmdW5jdGlvbiggZGF0YSApIHtcblxuICAgICAgICAgICAgICAgICAgJChkYXRhKS5lYWNoKGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZU1hcmtlcihcbiAgICAgICAgICAgICAgICAgICAgICBtYXAsXG4gICAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhW2luZGV4XVsnbGF0aXR1ZGUnXSxcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhW2luZGV4XVsnbG9uZ2l0dWRlJ10sXG4gICAgICAgICAgICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICBuZXcgaW5mb1dpbmRvdyhcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbaW5kZXhdWydtYXJrZXJJbWFnZSddLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVtpbmRleF1bJ21hcmtlclRpdGxlJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhW2luZGV4XVsnbWFya2VyU3VidGl0bGUnXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkRG9tTGlzdGVuZXIod2luZG93LCAnbG9hZCcsIGluaXQpO1xuICAgICAgICB9XG4gICAgICAgIC8vRXhwbG9yZSBNYXBcbiAgICAgICAgaWYgKGV4cGxvcmVNYXAgIT0gbnVsbCkge1xuICAgICAgICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgICAgICB0aGlzLmV4cGxvcmVMYXRMbmcgPSB7bGF0OiAtMjUuMjY2MDQ2LCBsbmc6IDE1LjkyNjYyMH07XG4gICAgICAgICAgICBsZXQgbWFwT3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgY2VudGVyOiB0aGlzLmV4cGxvcmVMYXRMbmcsXG4gICAgICAgICAgICAgIHpvb206IDYsXG4gICAgICAgICAgICAgIHNjcm9sbHdoZWVsOiBmYWxzZSxcbiAgICAgICAgICAgICAgbWFwVHlwZUNvbnRyb2xPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgbWFwVHlwZUlkczogWydtYXBfc3R5bGUnXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB6b29tQ29udHJvbE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogZ29vZ2xlLm1hcHMuQ29udHJvbFBvc2l0aW9uLlJJR0hUX0JPVFRPTVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgbGV0IGN1c3RvbXN0eWxlcyA9IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiBcImFsbFwiLFxuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImxhYmVsc1wiLFxuICAgICAgICAgICAgICAgIHN0eWxlcnM6IFtcbiAgICAgICAgICAgICAgICAgIHt2aXNpYmlsaXR5OiBcIm9mZlwifVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgbGV0IHN0eWxlZE1hcCA9IG5ldyBnb29nbGUubWFwcy5TdHlsZWRNYXBUeXBlKGN1c3RvbXN0eWxlcywge25hbWU6IFwiU3R5bGVkIE1hcFwifSk7XG4gICAgICAgICAgICBsZXQgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChleHBsb3JlTWFwLCBtYXBPcHRpb25zKTtcbiAgICAgICAgICAgIG1hcC5tYXBUeXBlcy5zZXQoJ21hcF9zdHlsZScsIHN0eWxlZE1hcCk7XG4gICAgICAgICAgICBtYXAuc2V0TWFwVHlwZUlkKCdtYXBfc3R5bGUnKTtcblxuICAgICAgICAgICAgdmFyIGdldEV4cGxvcmVNYXAgPSAkLmFqYXgoe1xuICAgICAgICAgICAgICB0eXBlOiAnR0VUJyxcbiAgICAgICAgICAgICAgdXJsOiAnLi4vYXBpL2V4cGxvcmVNYXAuanNvbicsXG4gICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbidcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBnZXRFeHBsb3JlTWFwLmRvbmUoZnVuY3Rpb24oIGRhdGEgKSB7XG5cbiAgICAgICAgICAgICAgJChkYXRhKS5lYWNoKGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgY3JlYXRlTWFya2VyV2l0aExhYmVsRXhwbG9yZShcbiAgICAgICAgICAgICAgICAgIG1hcCxcbiAgICAgICAgICAgICAgICAgIGRhdGFbaW5kZXhdWydsYXRpdHVkZSddLFxuICAgICAgICAgICAgICAgICAgZGF0YVtpbmRleF1bJ2xvbmdpdHVkZSddLFxuICAgICAgICAgICAgICAgICAgZGF0YVtpbmRleF1bJ2xhYmVsJ10sXG4gICAgICAgICAgICAgICAgICAxNTAsXG4gICAgICAgICAgICAgICAgICBkYXRhW2luZGV4XVsnbGFiZWxBbmNob3JZJ10sXG4gICAgICAgICAgICAgICAgICBkYXRhW2luZGV4XVsndHlwZSddXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKCcuY20tc2F0LW0tZXhwbG9yZScpLm9uKCdzaG93bi5icy5tb2RhbCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBnb29nbGUubWFwcy5ldmVudC50cmlnZ2VyKG1hcCwgJ3Jlc2l6ZScpO1xuICAgICAgICAgICAgICBtYXAuc2V0Wm9vbSggbWFwLmdldFpvb20oKSApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkRG9tTGlzdGVuZXIod2luZG93LCAnbG9hZCcsIGluaXQpO1xuICAgICAgICB9XG4gICAgICAgIC8vQ29udGFjdCBNYXBcbiAgICAgICAgLy9DaGVja2luZyBpZiBjb250YWN0IG1hcCBlbGVtZW50IGV4aXN0LCBpZiBkb2VzLCB0aGVuIGNyZWF0ZSB0aGUgbWFwXG4gICAgICAgIGlmIChjb250YWN0TWFwICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vZmZpY2VMYXRMbmcgPSB7bG5nOiAtMC4yMDk4MDcxLCBsYXQ6IDUxLjQxOTU0MjJ9O1xuICAgICAgICAgICAgICAgIGxldCBtYXBPcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICBjZW50ZXI6IHRoaXMub2ZmaWNlTGF0TG5nLFxuICAgICAgICAgICAgICAgICAgICB6b29tOiAxMCxcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsd2hlZWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBtYXBUeXBlSWQ6IGdvb2dsZS5tYXBzLk1hcFR5cGVJZC5ST0FETUFQXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBsZXQgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChjb250YWN0TWFwLCBtYXBPcHRpb25zKTtcbiAgICAgICAgICAgICAgICBsZXQgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB0aGlzLm9mZmljZUxhdExuZyxcbiAgICAgICAgICAgICAgICAgICAgbWFwOiBtYXAsXG4gICAgICAgICAgICAgICAgICAgIGljb246IGN1c3RvbU1hcmtlclxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHZhciBjb250ZW50U3RyaW5nID0gXCI8ZGl2IGNsYXNzPSdtYXJrZXJJbmZvJz5cIiArXG4gICAgICAgICAgICAgICAgICAgIFwiPGltZyBzcmM9Jy4uL2ltYWdlcy9tYXBzL3BvcHVwLWNvbnRhY3QuanBnJz5cIiArXG4gICAgICAgICAgICAgICAgICAgIFwiPGRpdiBjbGFzcz0nbWFya2VyVGV4dENvbnRhaW5lcic+XCIgK1xuICAgICAgICAgICAgICAgICAgICBcIjxwIGNsYXNzPSdtYXJrZXJUZXh0Jz5Tb3V0aCBBZnJpY2FuIFRvdXJpc208L3A+XCIgK1xuICAgICAgICAgICAgICAgICAgICBcIjxwIGNsYXNzPSdtYXJrZXJUZXh0Jz42IEFsdGVybmF0ZSBHcm92ZTwvcD4gXCIgK1xuICAgICAgICAgICAgICAgICAgICBcIjxwIGNsYXNzPSdtYXJrZXJUZXh0Jz5Mb25kb24sIEVuZ2xhbmQ8L3A+XCIgK1xuICAgICAgICAgICAgICAgICAgICBcIjwvZGl2PlwiICtcbiAgICAgICAgICAgICAgICAgICAgXCI8L2Rpdj5cIjtcbiAgICAgICAgICAgICAgICB2YXIgaW5mb3dpbmRvdyA9IG5ldyBnb29nbGUubWFwcy5JbmZvV2luZG93KHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogY29udGVudFN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IDE4MFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIG1hcmtlci5hZGRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZm93aW5kb3cub3BlbihtYXAsIG1hcmtlcik7XG5cbiAgICAgICAgICAgICAgICAgICAgJCgnLmdtLXN0eWxlLWl3JykucHJldigpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAkKCcuZ20tc3R5bGUtaXcnKS5wYXJlbnQoKS5hZGRDbGFzcygnaW5mb3dpbmRvdy1wYXJlbnQnKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkRG9tTGlzdGVuZXIod2luZG93LCAnbG9hZCcsIGluaXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9Ib21lcGFnZSBNYXBcbiAgICAgICAgLy9DaGVja2luZyBpZiBtYXAgZWxlbWVudCBleGlzdCwgaWYgZG9lcywgdGhlbiBjcmVhdGUgdGhlIG1hcFxuICAgICAgICBpZiAoaG9tZXBhZ2VNYXAgIT0gbnVsbCkge1xuICAgICAgICAgICAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNhTGF0TG5nID0ge2xhdDogLTI4LjYwNTQxNjksIGxuZzogMjUuMTc4NjE1N307XG4gICAgICAgICAgICAgICAgdGhpcy5ob21lcGFnZU1hcCA9IGhvbWVwYWdlTWFwO1xuICAgICAgICAgICAgICAgIGxldCBtYXBPcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICBjZW50ZXI6IHRoaXMuc2FMYXRMbmcsXG4gICAgICAgICAgICAgICAgICAgIHpvb206IDYsXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbHdoZWVsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbWFwVHlwZUlkOiBnb29nbGUubWFwcy5NYXBUeXBlSWQuUk9BRE1BUCxcbiAgICAgICAgICAgICAgICAgICAgem9vbUNvbnRyb2w6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHpvb21Db250cm9sT3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGdvb2dsZS5tYXBzLkNvbnRyb2xQb3NpdGlvbi5SSUdIVF9CT1RUT01cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGxldCBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKHRoaXMuaG9tZXBhZ2VNYXAsIG1hcE9wdGlvbnMpO1xuXG4gICAgICAgICAgICAgICAgdmFyIGdldEhvbWVwYWdlTWFwID0gJC5hamF4KHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdHRVQnLFxuICAgICAgICAgICAgICAgICAgdXJsOiAnLi4vYXBpL2hvbWVwYWdlTWFwLmpzb24nLFxuICAgICAgICAgICAgICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbidcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGdldEhvbWVwYWdlTWFwLmRvbmUoZnVuY3Rpb24oIGRhdGEgKSB7XG5cbiAgICAgICAgICAgICAgICAgICQoZGF0YSkuZWFjaChmdW5jdGlvbihpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBjcmVhdGVNYXJrZXJXaXRoTGFiZWwoXG4gICAgICAgICAgICAgICAgICAgICAgbWFwLFxuICAgICAgICAgICAgICAgICAgICAgIGRhdGFbaW5kZXhdWydzbGlkZXJJbmRleCddLFxuICAgICAgICAgICAgICAgICAgICAgIGRhdGFbaW5kZXhdWydsYXRpdHVkZSddLFxuICAgICAgICAgICAgICAgICAgICAgIGRhdGFbaW5kZXhdWydsb25naXR1ZGUnXSxcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhW2luZGV4XVsnbGFiZWwnXSxcbiAgICAgICAgICAgICAgICAgICAgICAxNTBcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1hcmtlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIobWFya2Vyc1tpXSwgJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMuc2xpZGVySW5kZXggKyAxO1xuICAgICAgICAgICAgICAgICAgICAgIGhvbWVwYWdlTWFwRWxlbWVudC5zbGljaygnc2xpY2tHb1RvJywgaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkRG9tTGlzdGVuZXIod2luZG93LCAnbG9hZCcsIGluaXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9Ub3AxME1hcExQXG4gICAgICAgIGlmKHRvcDEwTWFwIT1udWxsKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2FMYXRMbmcgPSB7bGF0OiAtMjguNjA1NDE2OSwgbG5nOiAyNS4xNzg2MTU3fTtcbiAgICAgICAgICAgICAgICB0aGlzLnRvcDEwTWFwID0gdG9wMTBNYXA7XG4gICAgICAgICAgICAgICAgbGV0IG1hcE9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGNlbnRlcjogdGhpcy5zYUxhdExuZyxcbiAgICAgICAgICAgICAgICAgICAgem9vbTogNixcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsd2hlZWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBtYXBUeXBlSWQ6IGdvb2dsZS5tYXBzLk1hcFR5cGVJZC5ST0FETUFQLFxuICAgICAgICAgICAgICAgICAgICB6b29tQ29udHJvbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgem9vbUNvbnRyb2xPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZ29vZ2xlLm1hcHMuQ29udHJvbFBvc2l0aW9uLkxFRlRfQk9UVE9NXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGxldCBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKHRoaXMudG9wMTBNYXAsIG1hcE9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBnZXRUb3AxME1hcCA9ICQuYWpheCh7XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ0dFVCcsXG4gICAgICAgICAgICAgICAgICAgICAgdXJsOiAnLi4vYXBpL3RvcDEwTWFwLmpzb24nLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJ1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBnZXRUb3AxME1hcC5kb25lKGZ1bmN0aW9uKCBkYXRhICkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgJChkYXRhKS5lYWNoKGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlTWFya2VyV2l0aExhYmVsKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhW2luZGV4XVsnc2xpZGVySW5kZXgnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhW2luZGV4XVsnbGF0aXR1ZGUnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhW2luZGV4XVsnbG9uZ2l0dWRlJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVtpbmRleF1bJ2xhYmVsJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMTUwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiggaW5kZXggPT09IGRhdGEubGVuZ3RoIC0gMSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja01hcmtlcnNUb3AxMCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBpbmRleCoyMDApO1xuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gY2xpY2tNYXJrZXJzVG9wMTAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1hcmtlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIobWFya2Vyc1tpXSwgJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy5jbS1zYXQtbS1zbGlkZXItdG9wMTAnKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwLnBhblRvKHRoaXMuZ2V0UG9zaXRpb24oKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwLnBhbkJ5KDEwMCwwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSB0aGlzLnNsaWRlckluZGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDEwTWFwRWxlbWVudC5zbGljaygnc2xpY2tHb1RvJywgaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSwgMjcwMCk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZERvbUxpc3RlbmVyKHdpbmRvdywgJ2xvYWQnLCBpbml0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vT2JqZWN0IGRlY2xhcmF0aW9uIGZvciBtYXJrZXJzIHdpdGggaW5mb1dpbmRvd1xuICAgICAgICBmdW5jdGlvbiBpbmZvV2luZG93KGltZ1VSTCwgaGVhZGVyLCB0ZXh0KSB7XG4gICAgICAgICAgICB0aGlzLmltZ1VSTCA9IGltZ1VSTDtcbiAgICAgICAgICAgIHRoaXMuaGVhZGVyID0gaGVhZGVyO1xuICAgICAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgICAgfVxuICAgICAgICAvKlxuICAgICAgICAgRnVuY3Rpb24gdG8gZGVjbGFyZSBhbnkgbmV3IG1hcmtlciB3aXRoIGEgbGFiZWxcbiAgICAgICAgIEBwYXJhbSB7bWFwfSBtYXAgdGhlIG1hcCB3aGljaCB0aGUgbWFya2VyIHdpbGwgdXNlXG4gICAgICAgICBAcGFyYW0ge3NsaWRlckluZGV4fSBzbGlkZXIgaW5kZXhcbiAgICAgICAgIEBwYXJhbSB7bGF0fSBsYXQgbGF0aXR1ZGUgb2YgdGhlIG1hcmtlclxuICAgICAgICAgQHBhcmFtIHtsbmd9IGxuZyBsb25naXR1ZGUgb2YgdGhlIG1hcmtlclxuICAgICAgICAgQHBhcmFtIHtsYWJlbENvbnRlbnR9IGxhYmVsQ29udGVudCB0aGUgdGV4dCBvZiB0aGUgbGFiZWxcbiAgICAgICAgIEBwYXJhbSB7bGFiZWxBbmNob3J9IGxhYmVsQW5jaG9yIHRoZSBYIGF4aXMgb2YgdGhlIG1hcmtlclxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlTWFya2VyV2l0aExhYmVsKG1hcCwgc2xpZGVySW5kZXg9MCwgbGF0LCBsbmcsIGxhYmVsQ29udGVudD1cIlwiLCBsYWJlbEFuY2hvcj0xNTAsIGhhc19hbmltYXRpb249ZmFsc2UpIHtcbiAgICAgICAgICAgIHZhciBhbmltYXRpb249bnVsbDtcbiAgICAgICAgICAgIGlmKGhhc19hbmltYXRpb24pIGFuaW1hdGlvbj1nb29nbGUubWFwcy5BbmltYXRpb24uRFJPUDtcbiAgICAgICAgICAgIGxldCBtYXJrZXIgPSBuZXcgTWFya2VyV2l0aExhYmVsKHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhsYXQsIGxuZyksXG4gICAgICAgICAgICAgICAgbWFwOiBtYXAsXG4gICAgICAgICAgICAgICAgbGFiZWxDb250ZW50OiBsYWJlbENvbnRlbnQsXG4gICAgICAgICAgICAgICAgbGFiZWxBbmNob3I6IG5ldyBnb29nbGUubWFwcy5Qb2ludChsYWJlbEFuY2hvciwgNzMpLFxuICAgICAgICAgICAgICAgIGxhYmVsQ2xhc3M6IFwibWFwLWxhYmVsc1wiLFxuICAgICAgICAgICAgICAgIGljb246IGN1c3RvbU1hcmtlcixcbiAgICAgICAgICAgICAgICBzbGlkZXJJbmRleDogc2xpZGVySW5kZXgsXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBhbmltYXRpb25cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbWFya2Vycy5wdXNoKG1hcmtlcik7XG4gICAgICAgIH07XG4gICAgICAgIC8qXG4gICAgICAgIEZ1bmN0aW9uIHRvIGNyZWF0ZSBtYXJrZXJzIHdpdGhvdXQgYSBsYWJlbCwgYWxzbyBpdCBjYW5cbiAgICAgICAgaGF2ZSBhIGluZm8gd2luZG93XG4gICAgICAgICBAcGFyYW0ge21hcH0gbWFwIHRoZSBtYXAgd2hpY2ggdGhlIG1hcmtlciB3aWxsIHVzZVxuICAgICAgICAgQHBhcmFtIHtsYXR9IGxhdCBsYXRpdHVkZSBvZiB0aGUgbWFya2VyXG4gICAgICAgICBAcGFyYW0ge2xuZ30gbG5nIGxvbmdpdHVkZSBvZiB0aGUgbWFya2VyXG4gICAgICAgICBAcGFyYW0ge2hhc19pbmZvfSBib29sZWFuIHRvIGRldGVybWluZSBpZiBtYXJrZXIgaGFzIHRvb2x0aXBcbiAgICAgICAgIEBwYXJhbSB7aW5mb3dpbmRvd30gZ2V0cyBhbiBvYmplY3QgaW5mb1dpbmRvdyB0byBzZXQgdGhlIHByb3BlcnRpZXMgb2YgdGhlIG1lc3NhZ2VcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZU1hcmtlcihtYXAsIHNsaWRlckluZGV4PTAsIGxhdCwgbG5nLCBoYXNfaW5mbz1mYWxzZSwgaW5mb3dpbmRvdykge1xuICAgICAgICAgICAgbGV0IG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKGxhdCwgbG5nKSxcbiAgICAgICAgICAgICAgICBtYXA6IG1hcCxcbiAgICAgICAgICAgICAgICBpY29uOiBjdXN0b21NYXJrZXIsXG4gICAgICAgICAgICAgICAgc2xpZGVySW5kZXg6IHNsaWRlckluZGV4XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChoYXNfaW5mbykgY3JlYXRlSW5mb1dpbmRvdyhpbmZvd2luZG93LCBtYXJrZXIsIG1hcCk7XG4gICAgICAgICAgICBtYXJrZXJzLnB1c2gobWFya2VyKTtcbiAgICAgICAgfVxuICAgICAgICAvKlxuICAgICAgICAgRnVuY3Rpb24gdG8gY3JlYXRlIGluZm9XaW5kb3dzIGZvciBtYXJrZXJzLCBhbmQgY3JlYXRlcyB0aGUgZXZlbnQgdG8gb3BlbiBpdFxuICAgICAgICAgQHBhcmFtIHtpbmZvd2luZG93fSBnZXRzIGFuIG9iamVjdCBpbmZvV2luZG93IHRvIHNldCB0aGUgcHJvcGVydGllcyBvZiB0aGUgbWVzc2FnZVxuICAgICAgICAgQHBhcmFtIHttYXJrZXJ9IGdldHMgdGhlIG1hcmtlciB3aGljaCB3aWxsIHVzZSB0aGUgaW5mb1dpbmRvd1xuICAgICAgICAgQHBhcmFtIHttYXB9IG1hcCB0aGUgbWFwIHdoaWNoIHRoZSBtYXJrZXIgd2lsbCB1c2VcbiAgICAgICAgIHByZXZfaW5mb3dpbmRvdyBjaGVjayBpZiBvdGhlciBpbmZvd2luZG93IHdhcyBvcGVuZWQgYW5kIGNsb3NlIGl0IGJlZm9yZSBvcGVuaW5nIGEgbmV3IG9uZS5cbiAgICAgICAgICovXG4gICAgICAgIHZhciBwcmV2X2luZm93aW5kb3cgPSBmYWxzZTtcbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlSW5mb1dpbmRvdyhpbmZvV2luZG93LCBtYXJrZXIsIG1hcCkge1xuICAgICAgICAgICAgdmFyIGNvbnRlbnRTdHJpbmcgPSBcIjxkaXYgY2xhc3M9J21hcmtlckluZm8nPlwiICtcbiAgICAgICAgICAgICAgICBcIjxpbWcgc3JjPSdcIiArIGluZm9XaW5kb3cuaW1nVVJMICsgXCInPlwiICtcbiAgICAgICAgICAgICAgICBcIjxkaXYgY2xhc3M9J21hcmtlclRleHRDb250YWluZXInPlwiICtcbiAgICAgICAgICAgICAgICBcIjxwIGNsYXNzPSdtYXJrZXJUZXh0Jz5cIiArIGluZm9XaW5kb3cuaGVhZGVyICsgXCI8L3A+XCIgK1xuICAgICAgICAgICAgICAgIFwiPHAgY2xhc3M9J21hcmtlclRleHQnPlwiICsgaW5mb1dpbmRvdy50ZXh0ICsgXCI8L3A+XCIgK1xuICAgICAgICAgICAgICAgIFwiPC9kaXY+XCIgK1xuICAgICAgICAgICAgICAgIFwiPC9kaXY+XCI7XG4gICAgICAgICAgICB2YXIgaW5mb3dpbmRvdyA9IG5ldyBnb29nbGUubWFwcy5JbmZvV2luZG93KHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBjb250ZW50U3RyaW5nLFxuICAgICAgICAgICAgICAgIG1heFdpZHRoOiAxODBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbWFya2VyLmFkZExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiggcHJldl9pbmZvd2luZG93ICkge1xuICAgICAgICAgICAgICAgICAgcHJldl9pbmZvd2luZG93LmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHByZXZfaW5mb3dpbmRvdyA9IGluZm93aW5kb3c7XG4gICAgICAgICAgICAgICAgaW5mb3dpbmRvdy5vcGVuKG1hcCwgbWFya2VyKTtcbiAgICAgICAgICAgICAgICAvL1N0eWxlcyBmb3IgdGhlIGFycm93XG4gICAgICAgICAgICAgICAgJCgnLmdtLXN0eWxlLWl3JykucHJldigpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICQoJy5nbS1zdHlsZS1pdycpLnBhcmVudCgpLmFkZENsYXNzKCdpbmZvd2luZG93LXBhcmVudCcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLypcbiAgICAgICAgIEZ1bmN0aW9uIHRvIGRlY2xhcmUgYW55IG5ldyBtYXJrZXIgd2l0aCBhIGxhYmVsIGFuZCBpbmZvd2luZG93XG4gICAgICAgICBAcGFyYW0ge21hcH0gbWFwIHRoZSBtYXAgd2hpY2ggdGhlIG1hcmtlciB3aWxsIHVzZVxuICAgICAgICAgQHBhcmFtIHtsYXR9IGxhdCBsYXRpdHVkZSBvZiB0aGUgbWFya2VyXG4gICAgICAgICBAcGFyYW0ge2xuZ30gbG5nIGxvbmdpdHVkZSBvZiB0aGUgbWFya2VyXG4gICAgICAgICBAcGFyYW0ge2xhYmVsQ29udGVudH0gbGFiZWxDb250ZW50IHRoZSB0ZXh0IG9mIHRoZSBsYWJlbFxuICAgICAgICAgQHBhcmFtIHtsYWJlbEFuY2hvcn0gbGFiZWxBbmNob3IgdGhlIFggYXhpcyBvZiB0aGUgbWFya2VyXG4gICAgICAgICBAcGFyYW0ge2hhc19pbmZvfSBib29sZWFuIHRvIGRldGVybWluZSBpZiBtYXJrZXIgaGFzIHRvb2x0aXBcbiAgICAgICAgIEBwYXJhbSB7aW5mb3dpbmRvd30gZ2V0cyBhbiBvYmplY3QgaW5mb1dpbmRvdyB0byBzZXQgdGhlIHByb3BlcnRpZXMgb2YgdGhlIG1lc3NhZ2VcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZU1hcmtlckxhYmVsSW5mb1dpbmRvdyhtYXAsIGxhdCwgbG5nLCBsYWJlbENvbnRlbnQ9XCJcIiwgbGFiZWxBbmNob3I9MTUwLCBoYXNfaW5mbz1mYWxzZSwgaW5mb3dpbmRvdykge1xuICAgICAgICAgICAgbGV0IG1hcmtlciA9IG5ldyBNYXJrZXJXaXRoTGFiZWwoe1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKGxhdCwgbG5nKSxcbiAgICAgICAgICAgICAgICBtYXA6IG1hcCxcbiAgICAgICAgICAgICAgICBsYWJlbENvbnRlbnQ6IGxhYmVsQ29udGVudCxcbiAgICAgICAgICAgICAgICBsYWJlbEFuY2hvcjogbmV3IGdvb2dsZS5tYXBzLlBvaW50KGxhYmVsQW5jaG9yLCA3MyksXG4gICAgICAgICAgICAgICAgbGFiZWxDbGFzczogXCJtYXAtbGFiZWxzXCIsXG4gICAgICAgICAgICAgICAgaWNvbjogY3VzdG9tTWFya2VyLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoaGFzX2luZm8pIGNyZWF0ZUluZm9XaW5kb3coaW5mb3dpbmRvdywgbWFya2VyLCBtYXApO1xuICAgICAgICB9O1xuICAgICAgICAvKlxuICAgICAgICAgRnVuY3Rpb24gdG8gZGVjbGFyZSBhbnkgbmV3IG1hcmtlciB3aXRoIGEgbGFiZWwgdG8gdGhlIEV4cGxvcmUgTWFwXG4gICAgICAgICBAcGFyYW0ge21hcH0gbWFwIHRoZSBtYXAgd2hpY2ggdGhlIG1hcmtlciB3aWxsIHVzZVxuICAgICAgICAgQHBhcmFtIHtsYXR9IGxhdCBsYXRpdHVkZSBvZiB0aGUgbWFya2VyXG4gICAgICAgICBAcGFyYW0ge2xuZ30gbG5nIGxvbmdpdHVkZSBvZiB0aGUgbWFya2VyXG4gICAgICAgICBAcGFyYW0ge2xhYmVsQ29udGVudH0gbGFiZWxDb250ZW50IHRoZSB0ZXh0IG9mIHRoZSBsYWJlbFxuICAgICAgICAgQHBhcmFtIHtsYWJlbEFuY2hvcn0gbGFiZWxBbmNob3IgdGhlIFggYXhpcyBvZiB0aGUgbWFya2VyXG4gICAgICAgICBAcGFyYW0ge3R5cGV9IFR5cGUgb2YgbGFiZWwsIGl0IGNhbiBiZSBjaXR5IG9yIHByb3ZpbmNlXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBjcmVhdGVNYXJrZXJXaXRoTGFiZWxFeHBsb3JlKG1hcCwgbGF0LCBsbmcsIGxhYmVsQ29udGVudD1cIlwiLCBsYWJlbEFuY2hvclg9MTUwLCBsYWJlbEFuY2hvclk9NDIsIHR5cGUpIHtcbiAgICAgICAgICAgIGlmKCB0eXBlID09PSAnY2l0eScgKSB7XG4gICAgICAgICAgICAgIGxldCBtYXJrZXIgPSBuZXcgTWFya2VyV2l0aExhYmVsKHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhsYXQsIGxuZyksXG4gICAgICAgICAgICAgICAgbWFwOiBtYXAsXG4gICAgICAgICAgICAgICAgbGFiZWxDb250ZW50OiBsYWJlbENvbnRlbnQsXG4gICAgICAgICAgICAgICAgbGFiZWxBbmNob3I6IG5ldyBnb29nbGUubWFwcy5Qb2ludChsYWJlbEFuY2hvclgsIGxhYmVsQW5jaG9yWSksXG4gICAgICAgICAgICAgICAgbGFiZWxDbGFzczogXCJtYXAtbGFiZWxzIGNpdHlcIixcbiAgICAgICAgICAgICAgICBpY29uOiBjdXN0b21NYXJrZXJFeHBsb3JlXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBtYXJrZXJzLnB1c2gobWFya2VyKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiggdHlwZSA9PT0gJ3Byb3ZpbmNlJyApIHtcbiAgICAgICAgICAgICAgbGV0IG1hcmtlciA9IG5ldyBNYXJrZXJXaXRoTGFiZWwoe1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKGxhdCwgbG5nKSxcbiAgICAgICAgICAgICAgICBtYXA6IG1hcCxcbiAgICAgICAgICAgICAgICBsYWJlbENvbnRlbnQ6IGxhYmVsQ29udGVudCxcbiAgICAgICAgICAgICAgICBsYWJlbEFuY2hvcjogbmV3IGdvb2dsZS5tYXBzLlBvaW50KGxhYmVsQW5jaG9yWCwgbGFiZWxBbmNob3JZKSxcbiAgICAgICAgICAgICAgICBsYWJlbENsYXNzOiBcIm1hcC1sYWJlbHMgcHJvdmluY2VcIixcbiAgICAgICAgICAgICAgICBpY29uOiBjdXN0b21NYXJrZXJFeHBsb3JlVHJhbnNwYXJlbnRcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIG1hcmtlcnMucHVzaChtYXJrZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIEhvbWVwYWdlIG1hcDogQ2xpY2sgb24gdGhlIG1lbnUgaWNvbiB0byBnbyB0byB0aGUgZmlyc3Qgc2xpZGUuXG4gICAgICAgICQoJy5tZW51LW1hcC1saXN0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGhvbWVwYWdlTWFwRWxlbWVudC5zbGljaygnc2xpY2tHb1RvJywgMCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEhvbWVwYWdlIG1hcDogQ2hhbmdlIHRoZSBhY3RpdmUgc3RhdGUgb2YgdGhlIG1hcmtlciB3aGVuIHRoZSBzbGlkZXIgY2hhbmdlLlxuICAgICAgICBob21lcGFnZU1hcEVsZW1lbnQub24oJ2JlZm9yZUNoYW5nZScsIGZ1bmN0aW9uIChldmVudCwgc2xpY2ssIGN1cnJlbnRTbGlkZSwgbmV4dFNsaWRlKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1hcmtlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgbWFya2VySW5kZXggPSBtYXJrZXJzW2ldLnNsaWRlckluZGV4ICsgMTtcbiAgICAgICAgICAgICAgICBpZiAobmV4dFNsaWRlID09PSBtYXJrZXJJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBtYXJrZXJzW2ldLnNldEljb24oY3VzdG9tTWFya2VyX2hvdmVyKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBtYXJrZXJzW2ldLnNldEljb24oY3VzdG9tTWFya2VyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFRvcDEwIG1hcDogQ2hhbmdlIHRoZSBhY3RpdmUgc3RhdGUgb2YgdGhlIG1hcmtlciB3aGVuIHRoZSBzbGlkZXIgY2hhbmdlLlxuICAgICAgICB0b3AxME1hcEVsZW1lbnQub24oJ2JlZm9yZUNoYW5nZScsIGZ1bmN0aW9uIChldmVudCwgc2xpY2ssIGN1cnJlbnRTbGlkZSwgbmV4dFNsaWRlKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1hcmtlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgbWFya2VySW5kZXggPSBtYXJrZXJzW2ldLnNsaWRlckluZGV4O1xuICAgICAgICAgICAgICAgIGlmIChuZXh0U2xpZGUgPT09IG1hcmtlckluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmtlcnNbaV0uc2V0SWNvbihjdXN0b21NYXJrZXJfaG92ZXIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBtYXJrZXJzW2ldLnNldEljb24oY3VzdG9tTWFya2VyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gR29vZ2xlTWFwcztcbiIsImNsYXNzIFRvcDEwIHtcblxuICBjb25zdHJ1Y3RvciAoKSB7XG5cbiAgICAvLyBCYXNlIGNvbmZpZyBmb3IgYWxsIHRoZSBjaGFydHNcbiAgICB2YXIgYmFzZUNvbmZpZyA9IHtcbiAgICAgIGNoYXJ0OiB7XG4gICAgICAgIHR5cGU6ICdjb2x1bW4nXG4gICAgICB9LFxuICAgICAgeEF4aXM6IHtcbiAgICAgICAgdHlwZTogJ2NhdGVnb3J5JyxcbiAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIGZvbnRTaXplOiAnMTNweCdcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHRpY2tJbnRlcnZhbDogNFxuICAgICAgfSxcbiAgICAgIGV4cG9ydGluZzoge1xuICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIGNyZWRpdHM6IGZhbHNlLFxuICAgICAgeUF4aXM6IHtcbiAgICAgICAgbWluOiAwLFxuICAgICAgICB0aXRsZToge1xuICAgICAgICAgIHRleHQ6IG51bGxcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGxlZ2VuZDoge1xuICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBnZXRXZWF0aGVyID0gJC5hamF4KHtcbiAgICAgIHR5cGU6ICdHRVQnLFxuICAgICAgdXJsOiAnLi4vYXBpL3dlYXRoZXIuanNvbicsXG4gICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgZGF0YVR5cGU6ICdqc29uJ1xuICAgIH0pO1xuXG4gICAgZ2V0V2VhdGhlci5kb25lKGZ1bmN0aW9uKCBkYXRhICkge1xuICAgICAgJChkYXRhKS5lYWNoKGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICAgICQoJyNjaGFydC0nICsgZGF0YVtpbmRleF1bJ2hzLXR5cGUnXSArICctJyArIGRhdGFbaW5kZXhdWydocy1wb3NpdGlvbiddKS5oaWdoY2hhcnRzKFxuICAgICAgICAgICQuZXh0ZW5kKGJhc2VDb25maWcsIGRhdGFbaW5kZXhdKVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUb3AxMDsgLy9zZXQgd2hhdCBjYW4gYmUgaW1wb3J0ZWQgZnJvbSB0aGlzIGZpbGVcbiIsImNsYXNzIE1hdGNoSGVpZ2h0IHtcblxuICBjb25zdHJ1Y3RvciAoKSB7XG5cbiAgICAvLyBNYXRjaEhlaWdodCBFbGVtZW50c1xuICAgIHRoaXMuYWx0ZXJuYXRpdmVFbGVtZW50ID0gJCgnLmFsdGVybmF0aXZlLWNvbnRlbnQnKTtcblxuICAgIC8vIE1hdGNoSGVpZ2h0IENhbGxzXG4gICAgdGhpcy5hbHRlcm5hdGl2ZUVsZW1lbnQubWF0Y2hIZWlnaHQoKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1hdGNoSGVpZ2h0OyAvL3NldCB3aGF0IGNhbiBiZSBpbXBvcnRlZCBmcm9tIHRoaXMgZmlsZVxuIiwiY2xhc3MgU2hhcmVBZmZpeCB7XG5cbiAgY29uc3RydWN0b3IgKCkge1xuXG4gICAgLy8gU2hhcmVBZmZpeCBFbGVtZW50c1xuICAgIHRoaXMuc2hhcmVGaXhlZEVsZW1lbnQgPSAkKCcuY20tc2F0LW0tc2hhcmUtZml4ZWQnKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5zaGFyZUZpeGVkRWxlbWVudC5hZmZpeCh7XG4gICAgICAgIG9mZnNldDoge1xuICAgICAgICAgIHRvcDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHNsaWRlckhlaWdodCA9ICQoJy5jbS1zYXQtbS1zbGlkZXInKS5vdXRlckhlaWdodCgpLFxuICAgICAgICAgICAgICAgIG5hdkhlaWdodCA9ICQoJy5jbS1zYXQtbS1uYXYnKS5vdXRlckhlaWdodCgpLFxuICAgICAgICAgICAgICAgIGJvZHlNYXJnaW4gPSBwYXJzZUludCgkKCdib2R5JykuY3NzKCdtYXJnaW4tdG9wJykpO1xuXG4gICAgICAgICAgICByZXR1cm4gKCB0aGlzLnRvcCA9IHNsaWRlckhlaWdodCAtIG5hdkhlaWdodCArIGJvZHlNYXJnaW4gKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJvdHRvbTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGZvb3RlckhlaWdodCA9ICQoJy5jbS1zYXQtbS1mb290ZXInKS5vdXRlckhlaWdodCgpLFxuICAgICAgICAgICAgICAgIHJlbGF0ZWRIZWlnaHQgPSAkKCcuY20tc2F0LW0tcmVsYXRlZCcpLm91dGVySGVpZ2h0KCksXG4gICAgICAgICAgICAgICAgY29udGFjdE1hcCA9ICQoJy5jbS1zYXQtbS1tYXAuY20tc2F0LWlzLWNvbnRhY3QnKS5vdXRlckhlaWdodCgpLFxuICAgICAgICAgICAgICAgIHNoYXJlID0gJCgnLmNtLXNhdC1tLXNoYXJlJykub3V0ZXJIZWlnaHQoKTtcblxuICAgICAgICAgICAgaWYoICQoJy5jbS1zYXQtcC1jb250YWN0JylbMF0gKSB7XG4gICAgICAgICAgICAgIHJldHVybiAoIHRoaXMuYm90dG9tID0gZm9vdGVySGVpZ2h0ICsgcmVsYXRlZEhlaWdodCArIHNoYXJlICsgY29udGFjdE1hcCApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiAoIHRoaXMuYm90dG9tID0gZm9vdGVySGVpZ2h0ICsgcmVsYXRlZEhlaWdodCArIDcwMCApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSwgMTUwMCk7XG5cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNoYXJlQWZmaXg7IC8vc2V0IHdoYXQgY2FuIGJlIGltcG9ydGVkIGZyb20gdGhpcyBmaWxlXG4iLCJjbGFzcyBTa3JvbGxyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgbGV0IHNvY2lhbF9jb250YWluZXIgPSAkKCcuY20tc2F0LW0tc29jaWFsJyksXG4gICAgICAgICAgICBjb250YWluZXJfdmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNrcm9sbHIgPSBza3JvbGxyO1xuICAgICAgICB0aGlzLnNrcm9sbHIuaW5pdCh7XG4gICAgICAgICAgICBmb3JjZUhlaWdodDogZmFsc2UsXG4gICAgICAgICAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoc29jaWFsX2NvbnRhaW5lci5oYXNDbGFzcygnc2tyb2xsYWJsZS1hZnRlcicpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghY29udGFpbmVyX3Zpc2libGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lcl92aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzb2NpYWxfaXRlbXMgPSBzb2NpYWxfY29udGFpbmVyLmZpbmQoXCIuc29jaWFsLWl0ZW1cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKHNvY2lhbF9pdGVtcykudG9BcnJheSgpLm1hcChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAkKGUpLmZhZGVJbigzMDApLnByb21pc2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5yZWR1Y2UoZnVuY3Rpb24gKGN1ciwgbmV4dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjdXIudGhlbihuZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sICQoKS5wcm9taXNlKCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb250YWluZXJfdmlzaWJsZSkge1xuICAgICAgICAgICAgICAgICAgICBjb250YWluZXJfdmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKC9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgICAgICAgICAgdGhpcy5za3JvbGxyLmluaXQoKS5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IFNrcm9sbHI7XG4iLCIvLyBTbGljayBzbGlkZXIgLSBtYWluIGltYWdlcy5cbi8vIEhvbWVwYWdlIFJlbGF0ZWQgU2xpY2sgc2xpZGVyLlxuLy8gSG9tZXBhZ2UgU29jaWFsIFNsaWNrIHNsaWRlci5cbmNsYXNzIFNsaWNrIHtcblxuICBjb25zdHJ1Y3RvciAoKSB7XG5cbiAgICAvLyBTbGljayBFbGVtZW50c1xuICAgIHRoaXMuc2xpZGVyRWxlbWVudCA9ICQoJy5qcy1zbGljay1zbGlkZXInKTtcbiAgICB0aGlzLmV4cGxvcmVFbGVtZW50ID0gJCgnLmNtLXNhdC1tLWV4cGxvcmUnKTtcbiAgICB0aGlzLmV4cGxvcmVTbGlkZXIgPSAkKCcuZXhwbG9yZS1zbGlkZXInKTtcbiAgICB0aGlzLmV4cGxvcmVOYXYgPSAkKCcuZXhwbG9yZS1uYXYnKTtcbiAgICB0aGlzLnJlbGF0ZWRFbGVtZW50ID0gJCgnLmpzLXNsaWNrLXJlbGF0ZWQnKTtcbiAgICB0aGlzLnNvY2lhbEVsZW1lbnQgPSAkKCcuanMtc2xpY2stc29jaWFsJyk7XG4gICAgdGhpcy5zbGlkZXJUb3AxMEVsZW1lbnQgPSAkKCcuanMtc2xpZGVyLXRvcDEwJyk7XG4gICAgdGhpcy5zbGlkZXJDaGFydEVsZW1lbnQgPSAkKCcuanMtc2xpZGVyLWNoYXJ0Jyk7XG4gICAgbGV0IGhvbWVwYWdlTWFwRWxlbWVudD0kKCcuanMtc2xpY2staG9tZXBhZ2UtbWFwJyk7XG5cbiAgICB0aGlzLnNsaWRlck9wdGlvbnMgPSB7XG4gICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgZG90czogdHJ1ZSxcbiAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgc3BlZWQ6IDEwMDAsXG4gICAgICBwYXVzZU9uSG92ZXI6IGZhbHNlXG4gICAgfVxuXG4gICAgdGhpcy5leHBsb3JlT3B0aW9ucyA9IHtcbiAgICAgIGFycm93czogZmFsc2UsXG4gICAgICBkb3RzOiBmYWxzZSxcbiAgICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICAgIGFjY2Vzc2liaWxpdHk6IGZhbHNlLFxuICAgICAgZHJhZ2dhYmxlOiBmYWxzZSxcbiAgICAgIHN3aXBlOiB0cnVlLFxuICAgICAgdmVydGljYWw6IHRydWUsXG4gICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBicmVha3BvaW50OiA3NjgsXG4gICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgICAgICB2ZXJ0aWNhbDogZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG5cbiAgICB0aGlzLnJlbGF0ZWRPcHRpb25zID0ge1xuICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgIGRvdHM6IHRydWUsXG4gICAgICBzbGlkZXNUb1Nob3c6IDYsXG4gICAgICBzbGlkZXNUb1Njcm9sbDogNixcbiAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogMTE4MCxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDNcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICBjZW50ZXJNb2RlOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIF1cbiAgICB9XG5cbiAgICB0aGlzLnNvY2lhbE9wdGlvbnMgPSB7XG4gICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgZG90czogdHJ1ZSxcbiAgICAgIHNsaWRlc1RvU2hvdzogNixcbiAgICAgIHNsaWRlc1RvU2Nyb2xsOiA2LFxuICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgYnJlYWtwb2ludDogMTE4MCxcbiAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDNcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBicmVha3BvaW50OiA3NjgsXG4gICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuXG4gICAgdGhpcy5ob21lcGFnZU1hcE9wdGlvbnM9e1xuICAgICAgYXV0b1BsYXk6ZmFsc2UsXG4gICAgICBhcnJvd3M6dHJ1ZSxcbiAgICAgIGRvdHM6dHJ1ZSxcbiAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgIGluZmluaXRlOmZhbHNlLFxuICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWVcbiAgICB9XG5cbiAgICB0aGlzLnNsaWRlclRvcDEwT3B0aW9ucyA9IHtcbiAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxuICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgZG90czogdHJ1ZSxcbiAgICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICAgIGFjY2Vzc2liaWxpdHk6IGZhbHNlLFxuICAgICAgZHJhZ2dhYmxlOiBmYWxzZSxcbiAgICAgIHN3aXBlOiBmYWxzZVxuICAgIH1cblxuICAgIHRoaXMuc2xpZGVyQ2hhcnRPcHRpb25zID0ge1xuICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgIGRvdHM6IHRydWUsXG4gICAgICBpbmZpbml0ZTogZmFsc2UsXG4gICAgICBhY2Nlc3NpYmlsaXR5OiBmYWxzZSxcbiAgICAgIGRyYWdnYWJsZTogZmFsc2VcbiAgICB9XG5cbiAgICAvL0luaXQgb2YgdGhlIHNsaWRlcnNcbiAgICB0aGlzLnJlbGF0ZWRFbGVtZW50LnNsaWNrKHRoaXMucmVsYXRlZE9wdGlvbnMpO1xuICAgIHRoaXMuc29jaWFsRWxlbWVudC5zbGljayh0aGlzLnNvY2lhbE9wdGlvbnMpO1xuICAgIHRoaXMuc2xpZGVyRWxlbWVudC5zbGljayh0aGlzLnNsaWRlck9wdGlvbnMpO1xuICAgIHRoaXMuc2xpZGVyVG9wMTBFbGVtZW50LnNsaWNrKHRoaXMuc2xpZGVyVG9wMTBPcHRpb25zKTtcbiAgICB0aGlzLnNsaWRlckNoYXJ0RWxlbWVudC5zbGljayh0aGlzLnNsaWRlckNoYXJ0T3B0aW9ucyk7XG4gICAgaG9tZXBhZ2VNYXBFbGVtZW50LnNsaWNrKHRoaXMuaG9tZXBhZ2VNYXBPcHRpb25zKTtcblxuICAgICAgLy9TbGlkZXIgRXZlbnRzXG4gICAgICB0aGlzLmV4cGxvcmVOYXYub24oJ2NsaWNrJywgJ2xpJywgZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLFxuICAgICAgICAgIHNsaWRlSW5kZXggPSAkdGhpcy5pbmRleCgpO1xuICAgICAgJCgnLmV4cGxvcmUtc2xpZGVyJykuc2xpY2soICdzbGlja0dvVG8nLCBzbGlkZUluZGV4ICk7XG4gICAgICAkKCcuZXhwbG9yZS1uYXYnKS5maW5kKCdsaScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICR0aGlzLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICB9KTtcblxuICAgICAgdGhpcy5leHBsb3JlRWxlbWVudC5vbignc2hvd24uYnMubW9kYWwnLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5leHBsb3JlU2xpZGVyLnNsaWNrKHRoaXMuZXhwbG9yZU9wdGlvbnMpO1xuICAgICAgJCgnLmV4cGxvcmUtbmF2JykuZmluZCgnbGknKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAkKCcuZXhwbG9yZS1uYXYnKS5maW5kKCdsaScpLmZpcnN0KCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICB9KTtcbiAgICAgICAgdGhpcy5leHBsb3JlRWxlbWVudC5vbignaGlkZGVuLmJzLm1vZGFsJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmV4cGxvcmVTbGlkZXIuc2xpY2soJ3Vuc2xpY2snKTtcbn0pO1xuXG4gICAgLy8gV2Ugd2VyZSBjaGVja2luZyBmb3IgdXNlciBhZ2VudCBiZWZvcmUuXG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywoKT0+e1xuICAgICAgICBhbmltYXRlU3RhdHMoMCk7XG4gICAgfSk7XG4gICAgdGhpcy5zbGlkZXJFbGVtZW50Lm9uKCdhZnRlckNoYW5nZScsIChldmVudCwgc2xpY2ssIGN1cnJlbnRTbGlkZSkgPT4ge1xuICAgICAgICBhbmltYXRlU3RhdHMoY3VycmVudFNsaWRlKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc2xpZGVyRWxlbWVudC5vbignYmVmb3JlQ2hhbmdlJywgKGV2ZW50LCBzbGljaywgY3VycmVudFNsaWRlLCBuZXh0U2xpZGUpID0+IHtcbiAgICAgICAgaGlkZVN0YXRzKGN1cnJlbnRTbGlkZSxzbGljay5zbGlkZUNvdW50KTtcbiAgICB9KTtcblxuXG4kKCcuY20tc2F0LW0taG9tZXBhZ2UtbWFwLXNsaWRlcicpLm9uKCdjbGljaycsICcuanMtcHJvdmluY2VzLWl0ZW0nLCBmdW5jdGlvbigpIHtcbiAgdmFyIGluZGV4ID0gJCh0aGlzKS5pbmRleCgpICsgMTtcbiAgaG9tZXBhZ2VNYXBFbGVtZW50LnNsaWNrKCAnc2xpY2tHb1RvJywgaW5kZXggKTtcbn0pO1xuXG4vL0VuZCBIb21lcGFnZSBNYXAgU2xpZGVyIGV2ZW50c1xuXG4gICAgLy8gbWVkaWEgcXVlcnkgZXZlbnQgaGFuZGxlclxuICAgIGlmIChtYXRjaE1lZGlhKSB7XG4gICAgICB2YXIgbXEgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogNzY3cHgpJyk7XG4gICAgICBtcS5hZGRMaXN0ZW5lcihXaWR0aENoYW5nZSk7XG4gICAgICBXaWR0aENoYW5nZShtcSk7XG4gICAgfVxuICAgIC8vIG1lZGlhIHF1ZXJ5IGNoYW5nZVxuICAgIGZ1bmN0aW9uIFdpZHRoQ2hhbmdlKG1xKSB7XG4gICAgICB2YXIgYWx0ZXJuYXRpdmVTbGljayA9ICQoJy5qcy1zbGljay1hbHRlcm5hdGl2ZScpLFxuICAgICAgICAgIHNvY2lhbGNoYXJ0U2xpY2sgPSAkKCcuanMtc2xpZGVyLXNvY2lhbGNoYXJ0Jyk7XG4gICAgICBpZiAobXEubWF0Y2hlcykge1xuICAgICAgICBhbHRlcm5hdGl2ZVNsaWNrLnNsaWNrKHtcbiAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcbiAgICAgICAgICBjZW50ZXJQYWRkaW5nOiAnMzBweCcsXG4gICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc29jaWFsY2hhcnRTbGljay5zbGljayh7XG4gICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICAgIGNlbnRlck1vZGU6IHRydWUsXG4gICAgICAgICAgY2VudGVyUGFkZGluZzogJzMwcHgnXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGlmKCBhbHRlcm5hdGl2ZVNsaWNrLmhhc0NsYXNzKCdzbGljay1pbml0aWFsaXplZCcpICkge1xuICAgICAgICAgIGFsdGVybmF0aXZlU2xpY2suc2xpY2soJ3Vuc2xpY2snKTtcbiAgICAgICAgfVxuICAgICAgICBpZiggc29jaWFsY2hhcnRTbGljay5oYXNDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKSApIHtcbiAgICAgICAgICBzb2NpYWxjaGFydFNsaWNrLnNsaWNrKCd1bnNsaWNrJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gSGlkZSBIb21lcGFnZSBTbGlkZXIgU3RhdHNcbiAgICBmdW5jdGlvbiBoaWRlU3RhdHMoc2xpZGUsIG51bWJlck9mU2xpZGVzKXtcbiAgICBpZihzbGlkZSA9PT0gbnVtYmVyT2ZTbGlkZXMtMSl7XG4gICAgICAgIGhpZGVTdGF0cygtMSxudW1iZXJPZlNsaWRlcyk7XG4gICAgfVxuICAgIHNsaWRlPXNsaWRlKzE7XG4gICAgbGV0IHByZXZzbGlkZSA9ICQoJ2RpdltkYXRhLXNsaWNrLWluZGV4PScgKyBzbGlkZSArICddJyk7XG4gICAgbGV0IGNvbnRhaW5lciA9IHByZXZzbGlkZS5maW5kKFwiLnNsaWRlci1pbmZvXCIpO1xuICAgIGNvbnRhaW5lciA9IGNvbnRhaW5lci5maW5kKFwiLnNsaWRlci1zdGF0c1wiKTtcbiAgICAkKGNvbnRhaW5lcikudG9BcnJheSgpLm1hcChmdW5jdGlvbihzdGF0KSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgcmV0dXJuICQoc3RhdCkuaGlkZSgpLnByb21pc2UoKTtcbiAgICAgICAgfTtcbiAgICB9KS5yZWR1Y2UoZnVuY3Rpb24oY3VyLCBuZXh0KSB7XG4gICAgICAgIHJldHVybiBjdXIudGhlbihuZXh0KTtcbiAgICB9LCAkKCkucHJvbWlzZSgpKTtcbiAgICB9XG4gICAgLy8gQW5pbWF0ZSBIb21lcGFnZSBTbGlkZXIgU3RhdHNcbiAgICBmdW5jdGlvbiBhbmltYXRlU3RhdHMoY3VycmVudFNsaWRlKSB7XG4gICAgbGV0IHNsaWRlID0gJCgnZGl2W2RhdGEtc2xpY2staW5kZXg9JytjdXJyZW50U2xpZGUrJ10nKTtcbiAgICBsZXQgY29udGFpbmVyPXNsaWRlLmZpbmQoXCIuc2xpZGVyLWluZm9cIik7XG4gICAgY29udGFpbmVyPWNvbnRhaW5lci5maW5kKFwiLnNsaWRlci1zdGF0c1wiKTtcbiAgICAkKGNvbnRhaW5lcikudG9BcnJheSgpLm1hcChmdW5jdGlvbihzdGF0KSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gJChzdGF0KS5mYWRlSW4oKS5wcm9taXNlKCk7XG4gICAgICAgIH07XG4gICAgfSkucmVkdWNlKGZ1bmN0aW9uKCBjdXIsIG5leHQgKSB7XG4gICAgICAgIHJldHVybiBjdXIudGhlbihuZXh0KTtcbiAgICB9LCAkKCkucHJvbWlzZSgpKTtcbiAgICB9XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gU2xpY2s7IC8vc2V0IHdoYXQgY2FuIGJlIGltcG9ydGVkIGZyb20gdGhpcyBmaWxlXG4iXX0=
