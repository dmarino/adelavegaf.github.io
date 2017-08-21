(function() {
    var navElements = Array.prototype.slice.call(document.getElementsByClassName("nav-link"));
    navElements.map(function (element) {
        element.addEventListener("click", function() {
            $('.collapse').collapse("hide");
        });
    });
})();