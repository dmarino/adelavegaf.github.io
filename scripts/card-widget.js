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

        var imgSrc = section["section-image"];

        if (imgSrc) {
            var image = document.createElement("img");
            image.setAttribute("src", imgSrc);
            image.setAttribute("width", "128");
            image.className = "rounded mx-auto d-block";
            sectionDiv.appendChild(image);
        }

        var subtitles = section["section-subtitle"];
        for (var i = 0; i < subtitles.length; i++) {
            var subtitle = document.createElement("p");
            subtitle.className = "lead text-center";
            subtitle.appendChild(document.createTextNode(subtitles[i]));
            sectionDiv.appendChild(subtitle);
        }

        var paragraphs = section["text"];
        for (i = 0; i < paragraphs.length; i++) {
            var paragraph = document.createElement("p");
            paragraph.className = "card-text";
            paragraph.appendChild(document.createTextNode(paragraphs[i]));
            sectionDiv.appendChild(paragraph);
        }

        var bottomLinkSection = document.createElement("div");
        bottomLinkSection.className = "text-center";
        sectionDiv.appendChild(bottomLinkSection);

        var bottomLinks = section["bottom-link"];

        for (i = 0; i < bottomLinks.length; i++) {
            var anchor = document.createElement("a");
            anchor.className = "icon " + bottomLinks[i]["icon-class"];
            anchor.setAttribute("href", bottomLinks[i]["link"]);
            anchor.setAttribute("target", "_blank");

            var icon = document.createElement("i");
            icon.className = "fa fa-2x " + bottomLinks[i]["icon"];
            anchor.appendChild(icon);

            bottomLinkSection.appendChild(anchor);
        }

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
        cardTitle.appendChild(document.createTextNode(cardData["title"]));
        cardBody.appendChild(cardTitle);

        var cardSections = document.createElement("ul");
        cardSections.className = "list-group list-group-flush";
        cardBody.appendChild(cardSections);

        var sections = cardData["sections"];
        for (var i = 0; i < sections.length; i++) {
            var section = constructCardSection(sections[i]);
            cardSections.appendChild(section);
        }
        return card;
    }

    return constructCard(cardData);
}