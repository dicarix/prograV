class Explore {

  constructor () {

    // Explore Elements
    this.exploreElement = $('.cm-sat-m-explore');

    // Explore close functionality.
    this.exploreElement.on('click', '.view-map', () => {
      this.exploreElement.toggleClass('map-open');
    });

    // Explore Caret functionality.
    // this.exploreElement.on('click', '.total-selected', () => {
    //   this.exploreElement.find('.nav-caret').toggleClass('hide');
    // });

  }
}

module.exports = Explore; //set what can be imported from this file
