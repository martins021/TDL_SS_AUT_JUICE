import Base from "../pageObejcts/base"

class AddReviewPage extends Base {
  static get url() {
    return "http://localhost:3000/#/search";
  }

  static get writeReview(){
      return cy.get("textarea[cols='50']")
  }

  static get submitBtn(){
      return cy.get('#submitButton')
  }

  static get expandReviews(){
      return cy.get('#mat-expansion-panel-header-0')
  }

  static get reviewPane(){
      return cy.get('.mat-expansion-panel-body')
  }
}

export default AddReviewPage;
