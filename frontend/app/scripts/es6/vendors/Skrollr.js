class Skrollr {
    constructor() {
        let social_container = $('.cm-sat-m-social'),
            container_visible = false;
        this.skrollr = skrollr;
        this.skrollr.init({
            forceHeight: false,
            render: function () {
                if (social_container.hasClass('skrollable-after')) {
                    if (!container_visible) {
                        container_visible = true;
                        var social_items = social_container.find(".social-item");
                        $(social_items).toArray().map(function (e) {
                            return function () {
                                return $(e).fadeIn(300).promise()
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
    }
}
module.exports = Skrollr;
