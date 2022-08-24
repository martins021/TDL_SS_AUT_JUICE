import LoginPage from "../pageObejcts/loginPage"
import RegistrationPage from "../pageObejcts/registrationPage";
import SearchPage from "../pageObejcts/searchPage";

context("Juice shop", () => {
  context("Login page scenarios", () => {
    beforeEach(() => {
      LoginPage.visit();
      LoginPage.acceptCookies.click()
      LoginPage.dismiss.click()
    });


    it("Login", () => {
      LoginPage.accountBtn.click()
      LoginPage.loginBtn.click()
      LoginPage.emailInput.type("demo")
      LoginPage.passwrdInput.type("demo")
      LoginPage.clickLogin.click()
      LoginPage.accountBtn.click()
      LoginPage.popUP.should("contain", "demo")
    });

    it("Registration", () => {
      RegistrationPage.accountBtn.click()
      RegistrationPage.loginBtn.click()
      cy.wait(500)
      RegistrationPage.notCustomer.click()
      let emailNumber = Math.floor(Math.random()*10000)
      let uniqueEmail = `email_${emailNumber}@ebox.com`
      RegistrationPage.fillEmail.type(uniqueEmail)
      let pswrdNumber = Math.floor(Math.random()*100000)
      RegistrationPage.fillPswrd.type(pswrdNumber)
      RegistrationPage.repeatPswrd.type(pswrdNumber)
      RegistrationPage.securityQ.click()
      RegistrationPage.securityQPetName.click()
      RegistrationPage.securityQAnswer.type("Bob")
      RegistrationPage.registerBtn.click()
      RegistrationPage.loginFillEmail.type(uniqueEmail)
      RegistrationPage.loginFillPswrd.type(pswrdNumber)
      RegistrationPage.loginLoginBtn.click()
      LoginPage.accountBtn.click()
      LoginPage.popUP.should("contain", uniqueEmail)
    })

    it("Search and validate Lemon", () => {
      SearchPage.searchBtn.type("Lemon{enter}")
      SearchPage.selectProduct.click()
      SearchPage.selectedProduct.should("contain", "Sour but full of vitamins.")
    })

    it("Search 500ml and validate Lemon, while having multiple cards", () => {
      SearchPage.searchBtn.type("500ml{enter}")
      SearchPage.selectLemonJuice.contains("Lemon").click()
      SearchPage.selectedLemonJuice.should("contain", "Sour but full of vitamins.")
    })

    it.only("Search 500ml and validate cards", () => {
      SearchPage.searchBtn.type("500ml{enter}")
      SearchPage.selectLemonJuice.contains("Eggfruit").click()
      SearchPage.selectedEggfruit.should("contain", "Now with even more exotic flavour.")
      SearchPage.closeBtn.click()
      SearchPage.selectLemonJuice.contains("Lemon").click()
      SearchPage.selectedLemonJuice.should("contain", "Sour but full of vitamins.")
      SearchPage.closeBtn.click()
      SearchPage.selectLemonJuice.contains("Strawberry").click()
      SearchPage.selectedLemonJuice.should("contain", "Sweet & tasty!")
    })
  });
});