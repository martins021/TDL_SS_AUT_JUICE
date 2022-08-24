import Base from "../pageObejcts/base"

class BasketPage extends Base {
  static get url() {
    return "http://localhost:3000/#/search";
  }

  static get addToBasket(){
    //return cy.get('button[class="mat-focus-indicator btn-basket mat-button mat-raised-button mat-button-base mat-primary ng-star-inserted"]')
    return cy.get('mat-card').find("button")
  }

  static get openBasket(){
      return cy.get('button[routerlink="/basket"]')
  }

  static get checkout(){
      return cy.get("#checkoutButton")
  }
}

export default BasketPage;