import Base from "../pageObejcts/base"

class SearchPage extends Base {
  static get url() {
    return "http://localhost:3000/#/search";
  }

  static get searchBtn(){
      return cy.get('.mat-search_icon-search')
  }

  static get selectProduct(){
      return cy.get('.mat-card > .mat-tooltip-trigger')
  }

  static get selectedProduct(){
      return cy.get('#mat-dialog-1')
  }

  // SCENARIO FOUR

  static get selectLemonJuice(){
      return cy.get("div[class='mat-tooltip-trigger product']")
  }

  static get selectedLemonJuice(){
      return cy.get("div[class='container mat-typography']")
  }

  // SCENARIO FIVE

  static get selectedEggfruit(){
      return cy.get("div[class='container mat-typography']")
  }

  static get closeBtn(){
      return cy.get('.close-dialog')
  }

}

export default SearchPage;
