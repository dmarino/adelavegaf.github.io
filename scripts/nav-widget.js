/**
 * Generates a collapsable navigation widget. The widget displays
 * all the links that redirect to the appropriate sections of
 * the portfolio.
 * +--------------------------------------------+
 * |.nav                                        |
 * |                                            |
 * |            [icon] section-title            |
 * |                                            |
 * |            [icon] section-title            |
 * |                                            |
 * |            [icon] section-title            |
 * |                                            |
 * |            [icon] section-title            |
 * |                                            |
 * |                                            |
 * +--------------------------------------------+
 *
 * @param navData, data from which the information that would
 *      be displayed would be retrieved.
 * @returns {Element}
 * @constructor
 */
function NavWidget(navData) {
    "use strict";

    var navWidget = document.createElement("ul");
    navWidget.className = "nav nav-pills flex-column text-center";

    navData.forEach(function (element) {
        if (!element["anchor-name"]) {
            return;
        }
        var listItem = document.createElement("li");
        listItem.className = "nav-item lead";
        navWidget.appendChild(listItem);

        var anchor = document.createElement("a");
        anchor.className = "nav-link";
        anchor.setAttribute("href", "#" + element["anchor-name"]);
        // On click, the navigation widget should collapse.
        anchor.addEventListener("click", function () {
            $(".collapse").collapse("hide");
        });
        listItem.appendChild(anchor);

        var icon = document.createElement("i");
        icon.className = "fa " + element.icon;
        icon.setAttribute("aria-hidden", "true");
        anchor.appendChild(icon);

        anchor.appendChild(document.createTextNode(" " + element.title));
    });
    return navWidget;
}