import Base from "../pageObejcts/base"

class LoginPage extends Base {
  static get url() {
    return "http://localhost:3000/#/search";
  }

  static get acceptCookies(){
      return cy.get('.cc-btn')
  }

  static get dismiss(){
    return cy.get('.close-dialog')
  }

  static get accountBtn(){
    return cy.get('#navbarAccount')
  }

  static get loginBtn(){
      return cy.get('.mat-menu-content')
  }

  static get emailInput(){
      return cy.get('.mat-form-field.ng-tns-c119-11 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
  }

  static get passwrdInput(){
    return cy.get('.mat-form-field-hide-placeholder > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
  }

  static get clickLogin(){
      return cy.get('#loginButton')
  }

  static get popUP(){
      return cy.get('#mat-menu-panel-0 > .mat-menu-content')
  }
}

export default LoginPage;
