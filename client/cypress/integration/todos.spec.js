import { convertHexToRGB } from "@material-ui/core/styles";

/* eslint-disable func-names */
/* eslint-disable no-undef */
describe("The Todos", function() {
  beforeEach(() => {
    cy.visit("/");
  });
  it("successfully loads", function() {
    cy.get("input[name=createtodo]").should("be.empty");
  });

  it("accepts input", () => {
    const typeinput = "Go to meetup javascript";
    cy.get("input[name=createtodo]")
      .type(typeinput)
      .should("have.value", typeinput);
  });
  context("Submiting todo", () => {
    it("adds a new todo ", () => {
      const todos = ["task one", "task two"];
      todos.forEach(todo => {
        cy.get("input[name=createtodo]").type(todo);
        cy.get("button[classkey=send]").click({ multiple: true });
      });
    });
  });

  context("Ckecks todos", () => {
    it("Conplete todo of contains", () => {
      cy.get('[type="checkbox"]').check({ multiple: true });
    });
  });

  context("Delete all todos", () => {
    it("Conplete first todo of contains", () => {
      cy.get("button[classkey=delete]").click({ multiple: true });
    });
  });
});
