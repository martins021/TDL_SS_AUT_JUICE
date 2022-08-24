import Base from "../pageObejcts/base"

class OrderCompletionPage extends Base {
  static get url() {
    return "http://localhost:3000/#/search";
  }

  static get validate(){
      return cy.get("mat-card").find("h1")
  }

}

export default OrderCompletionPage;