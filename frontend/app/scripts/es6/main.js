'use strict';

// Import Modules
import HomepageGrid from "./modules/HomepageGrid";
import Explore from "./modules/Explore";
import Wishlist from "./modules/Wishlist";
import Share from "./modules/Share";
import Parallax from "./modules/Parallax";
import Top10 from "./modules/Top10";
import Filter from "./modules/Filter";
import Backtotop from "./modules/Backtotop";
import CookiesBar from "./modules/CookiesBar";

// Import Vendors
import Bootstrap from "./vendors/Bootstrap";
import MatchHeight from "./vendors/MatchHeight";
import Slick from "./vendors/Slick";
import ExploreMultiselect from "./vendors/ExploreMultiselect";
import FilterMultiselect from "./vendors/FilterMultiselect";
import Skrollr from "./vendors/Skrollr";
import GoogleMaps from "./vendors/GoogleMaps";
import HighCharts from "./vendors/HighCharts";
import ShareAffix from "./vendors/ShareAffix";

// jQuery DOM Ready
$(() => {
  'use strict';

  // Initialize Modules
  new HomepageGrid();
  new Explore();
  new Wishlist();
  new Share();
  new Parallax();
  new Top10();
  new Filter();
  new Backtotop();
  new CookiesBar();

  // Initialize Vendors
  new Bootstrap();
  new Slick();
  new MatchHeight();
  new ExploreMultiselect();
  new FilterMultiselect();
  new Skrollr();
  new GoogleMaps();
  new HighCharts();
  new ShareAffix();
});
