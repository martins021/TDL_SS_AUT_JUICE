import Base from "../pageObejcts/base"

class RegistrationPage extends Base {
  static get url() {
    return "http://localhost:3000/#/search";
  }

  static get accountBtn(){
    return cy.get('#navbarAccount')
  }

  static get loginBtn(){
    return cy.get('.mat-menu-content')
  }

  static get notCustomer(){
      return cy.get('#newCustomerLink')
  }

  static get fillEmail(){
      return cy.get('.mat-form-field.ng-tns-c119-13 > .mat-form-field-wrapper > .mat-form-field-flex')
  }

  static get fillPswrd(){
      return cy.get('#passwordControl')
  }

  static get repeatPswrd(){
      return cy.get('#repeatPasswordControl')
  }

  static get securityQ(){
      return cy.get('.mat-select-placeholder')
  }

  static get securityQPetName(){
      return cy.get('#mat-option-9 > .mat-option-text')
  }

  static get securityQAnswer(){
      return cy.get('#securityAnswerControl')
  }

  static get registerBtn(){
      return cy.get('#registerButton')
  }

  static get loginFillEmail(){
      return cy.get('.mat-form-field.ng-tns-c119-20 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
  }

  static get loginFillPswrd(){
      return cy.get('.mat-form-field-hide-placeholder > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
  }

  static get loginLoginBtn(){
      return cy.get('#loginButton')
  }
}

export default RegistrationPage;
