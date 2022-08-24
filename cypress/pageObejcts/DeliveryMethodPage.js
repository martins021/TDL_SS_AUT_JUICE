import Base from "../pageObejcts/base"

class DeliveryMethodPage extends Base {
  static get url() {
    return "http://localhost:3000/#/search";
  }

  static get selectDeliverySpeed(){
      return cy.get("mat-row[role='row']")
  }

}

export default DeliveryMethodPage;