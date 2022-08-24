import Base from "../pageObejcts/base"

class OrderSummaryPage extends Base {
  static get url() {
    return "http://localhost:3000/#/search";
  }

  static get placeOrder(){
      return cy.get("button[aria-label='Complete your purchase']")
  }

}

export default OrderSummaryPage;