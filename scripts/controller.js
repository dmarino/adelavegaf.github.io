(function () {
    "use strict";

    // Add Navigation information from data.
    var navHolder = document.getElementById("main-navbar");
    var navWidget = new NavWidget(data);
    navHolder.appendChild(navWidget);

    // Add Portfolio information from data.
    var cardHolder = document.getElementById("card-holder");

    for (var i = 0; i < data.length; i++) {
        var card = new CardWidget(data[i]);
        cardHolder.appendChild(card);
    }
})();