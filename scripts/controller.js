/* JSHint global variables */
/*global data*/
/*global CardWidget*/
/*global NavWidget*/

$(function () {
    "use strict";

    // Add Navigation information from data.
    var navHolder = document.getElementById("main-navbar");
    var navWidget = new NavWidget(data);
    navHolder.appendChild(navWidget);

    // Add Portfolio information from data.
    var cardHolder = document.getElementById("card-holder");

    data.forEach(function (element) {
        var card = new CardWidget(element);
        cardHolder.appendChild(card);
    });
});