import Base from "../pageObejcts/base"

class PaymentOptionsPage extends Base {
  static get url() {
    return "http://localhost:3000/#/search";
  }

  static get selectCard(){
      return cy.get("mat-row").contains("5678").get(".mat-radio-outer-circle")
  }

  static get clickContinue(){
      return cy.get("button[aria-label='Proceed to review']")
  }

}

export default PaymentOptionsPage;