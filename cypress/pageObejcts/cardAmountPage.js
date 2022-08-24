import Base from "../pageObejcts/base"

class CardAmountPage extends Base {
  static get url() {
    return "http://localhost:3000/#/search";
  }

  static get selectAllProducts(){
    return cy.get("div[class='mat-tooltip-trigger product']")
  }

  static get itemsPerPage(){
    return cy.get("[role='combobox']")
  }

  static get itemsPerPageSelect(){
    return cy.get("span[class='mat-option-text']")
  }

}

export default CardAmountPage;