import Base from "../pageObejcts/base"

class SelectAddressPage extends Base {
  static get url() {
    return "http://localhost:3000/#/search";
  }

  static get selectAddress(){
      return cy.get("mat-row[role='row']")
  }

  static get clickContinue(){
      return cy.get("mat-card[class='mat-card mat-focus-indicator mat-elevation-z6']").find("button")
  }
}

export default SelectAddressPage;