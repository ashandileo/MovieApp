describe("Movies Lists", () => {
  beforeEach(() => {
    cy.visit("localhost:3000/");
    cy.intercept("GET", "https://api.themoviedb.org/3/movie/popular*").as(
      "popularMovies"
    );
    cy.intercept("GET", "https://api.themoviedb.org/3/movie/top_rated*").as(
      "topRatedMovies"
    );
  });

  it("Should able to show movie hero", () => {
    cy.get('[data-cy="movie-hero-title"]').should("be.visible");
  });

  it("Should able to redirect to movie detail page from movie hero", () => {
    cy.get('[data-cy="movie-hero-see-detail"]')
      .should("be.visible")
      .click({ force: true });

    cy.get('[data-cy="movie-detail-content"]').should("be.visible");
  });

  it("Should able to get popular movies", () => {
    cy.wait("@popularMovies").then((xhr) => {
      expect(xhr.response.statusCode).to.equal(200);
    });
  });

  it("Should able to show lists movies", () => {
    cy.get('[data-cy="header-movies"]').click({ force: true });

    cy.wait("@topRatedMovies").then((xhr) => {
      expect(xhr.response.statusCode).to.equal(200);
    });

    cy.get("[data-cy='movie-item']").first().should("be.visible");
  });

  it("Should able to show about page", () => {
    cy.get('[data-cy="header-about"]').click({ force: true });
    cy.get("[data-cy='about-content']").should("be.visible");
  });
});
