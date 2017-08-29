/**
 * Generates a card widget from the portfolio data. The information
 * would be layout as following:
 *
 * +------------------------------------------------------------+
 * |CARD TITLE                                                  |
 * +------------------------------------------------------------+
 * |card-section                                                |
 * |                        +----------+                        |
 * |                        |  Image   |                        |
 * |                        +----------+                        |
 * |                          Subtitle                          |
 * |                          Subtitle                          |
 * |Paragraph                                                   |
 * |                       link link link                       |
 * +------------------------------------------------------------+
 * |card-section                                                |
 * |                        +----------+                        |
 * |                        |  Image   |                        |
 * |                        +----------+                        |
 * |                          Subtitle                          |
 * |                                                            |
 * |Paragraph                                                   |
 * |Paragraph                                                   |
 * |                            link                            |
 * +------------------------------------------------------------+
 *
 * @param cardData, data from which the information that would
 *      be displayed would be retrieved.
 * @constructor
 */
function CardWidget(cardData) {
    "use strict";

    function constructCardSection(section) {
        var sectionElement = document.createElement("li");
        sectionElement.className = "list-group-item";

        var sectionDiv = document.createElement("div");
        sectionElement.appendChild(sectionDiv);

        var img = section["section-image"];

        if (Object.keys(img).length > 0) {
            var image = document.createElement("img");
            image.setAttribute("src", img.src);
            image.setAttribute("alt", img.alt);
            image.setAttribute("width", "128");
            image.className = "rounded mx-auto d-block";
            sectionDiv.appendChild(image);
        }

        var subtitles = section["section-subtitle"];
        subtitles.forEach(function (element) {
            var subtitle = document.createElement("p");
            subtitle.className = "lead text-center";
            subtitle.appendChild(document.createTextNode(element));
            sectionDiv.appendChild(subtitle);
        });

        var paragraphs = section.text;
        paragraphs.forEach(function (element) {
            var paragraph = document.createElement("p");
            paragraph.className = "card-text";
            paragraph.appendChild(document.createTextNode(element));
            sectionDiv.appendChild(paragraph);
        });

        var bottomLinkSection = document.createElement("div");
        bottomLinkSection.className = "text-center";
        sectionDiv.appendChild(bottomLinkSection);

        var bottomLinks = section["bottom-link"];
        bottomLinks.forEach(function (element) {
            var anchor = document.createElement("a");
            anchor.className = "icon " + element["icon-class"];
            anchor.setAttribute("href", element.link);
            anchor.setAttribute("target", "_blank");

            var icon = document.createElement("i");
            icon.className = "fa fa-2x " + element.icon;
            icon.setAttribute("title", element["icon-title"]);
            anchor.appendChild(icon);

            bottomLinkSection.appendChild(anchor);
        });

        return sectionElement;
    }

    function constructCard(cardData) {
        var card = document.createElement("div");
        card.className = "card card-container";

        var anchor = document.createElement("a");
        anchor.setAttribute("id", cardData["anchor-name"]);
        anchor.className = "anchor";
        card.appendChild(anchor);

        var cardBody = document.createElement("div");
        cardBody.className = "card-body";
        card.appendChild(cardBody);

        var cardTitle = document.createElement("h4");
        cardTitle.className = "card-title";
        cardTitle.appendChild(document.createTextNode(cardData.title));
        cardBody.appendChild(cardTitle);

        var cardSections = document.createElement("ul");
        cardSections.className = "list-group list-group-flush";
        cardBody.appendChild(cardSections);

        var sections = cardData.sections;
        sections.forEach(function (element) {
            var section = constructCardSection(element);
            cardSections.appendChild(section);
        });

        return card;
    }

    return constructCard(cardData);
}