const baseUrl = "http://localhost:8080/";
const pageUrl = `${baseUrl}`;

describe("Banner test", function() {
  it("Banner is present", function() {
    const banner = "div.App_header > a:first";
    const about = "div.App_header >a:last";
    cy.visit(pageUrl);
    // check main banner title
    cy.get(banner)
      .contains("Reason React Hacker News")

    // check About link
    cy.get(about)
      .contains("About")
      .should(
        // find a specific attribute of the found HTML element
        "have.attr",
        "href",
        "https://github.com/reasonml-community/reason-react-hacker-news"
      );

  });
});
