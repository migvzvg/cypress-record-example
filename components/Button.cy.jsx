import React from "react";
import Button from "./Button";

describe("<Button />", () => {
  it("renders", () => {
    cy.mount(<Button />); 
    cy.get('body').realClick();
    cy.realPress('Tab');
    cy.get('button').should('be.focused');
    cy.realPress('Tab');
    cy.get('button').should('not.be.focused');
  });
});
