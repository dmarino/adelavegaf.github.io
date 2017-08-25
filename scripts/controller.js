(function () {
    "use strict";

    // Add Navigation information from data.
    var navHolder = document.getElementById("main-navbar");
    navHolder.appendChild(NavWidget(data));

    // Add Portfolio information from data.
    var cardHolder = document.getElementById("card-holder");

    for (var i = 0; i < data.length; i++) {
        var card = CardWidget(data[i]);
        cardHolder.appendChild(card);
    }
})();