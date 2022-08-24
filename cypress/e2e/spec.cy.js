import LoginPage from "../pageObejcts/loginPage";
import RegistrationPage from "../pageObejcts/registrationPage";
import SearchPage from "../pageObejcts/searchPage";
import AddReviewPage from "../pageObejcts/addReviewPage";
import CardAmountPage from "../pageObejcts/cardAmountPage";
import BasketPage from "../pageObejcts/basketPage";
import SelectAddressPage from "../pageObejcts/SelectAddressPage";
import DeliveryMethodPage from "../pageObejcts/DeliveryMethodPage";
import PaymentOptionsPage from "../pageObejcts/PaymentOptionsPage";
import OrderSummaryPage from "../pageObejcts/OrderSummaryPage";
import OrderCompletionPage from "../pageObejcts/OrderCompletionPage";

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
      cy.wait(800)
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
      RegistrationPage.accountBtn.click()
      RegistrationPage.popUP.should("contain", uniqueEmail)
    })

    it("Search and validate Lemon", () => {
      SearchPage.searchBtn.type("Lemon{enter}")
      SearchPage.selectProduct.click()
      SearchPage.selectedProduct.should("contain", "Sour but full of vitamins.")
    })

    it("Search 500ml and validate Lemon, while having multiple cards", () => {
      SearchPage.searchBtn.type("500ml{enter}")
      SearchPage.selectJuice.contains("Lemon").click()
      SearchPage.selectedLemonJuice.should("contain", "Sour but full of vitamins.")
    })

    it("Search 500ml and validate cards", () => {
      SearchPage.searchBtn.type("500ml{enter}")
      SearchPage.selectJuice.contains("Eggfruit").click()
      SearchPage.selectedEggfruit.should("contain", "Now with even more exotic flavour.")
      SearchPage.closeBtn.click()
      SearchPage.selectJuice.contains("Lemon").click()
      SearchPage.selectedLemonJuice.should("contain", "Sour but full of vitamins.")
      SearchPage.closeBtn.click()
      SearchPage.selectJuice.contains("Strawberry").click()
      SearchPage.selectedLemonJuice.should("contain", "Sweet & tasty!")
    })

    it("Add a review", () => {
      LoginPage.accountBtn.click()
      LoginPage.loginBtn.click()
      LoginPage.emailInput.type("demo")
      LoginPage.passwrdInput.type("demo")
      LoginPage.clickLogin.click()

      SearchPage.searchBtn.type("Raspberry{enter}")
      SearchPage.selectJuice.contains("Raspberry").click()
      AddReviewPage.writeReview.click().type("Tastes like metal")
      AddReviewPage.submitBtn.click({force:true})
      AddReviewPage.expandReviews.click()
      AddReviewPage.reviewPane.should("contain", "Tastes like metal")
    })

    it("Validate product card amount", () => {
      [12, 24, 36].forEach((item) => {
        cy.log(item)
        CardAmountPage.itemsPerPage.click({force:true})
        CardAmountPage.itemsPerPageSelect.contains(item).click({force:true})
        if(item == 36){
          item -= 1;
        }
        CardAmountPage.selectAllProducts.should("have.length", item)
      })
    })

    it.only("Buy Girlie T-shirt", () => {
      LoginPage.accountBtn.click()
      LoginPage.loginBtn.click()
      LoginPage.emailInput.type("demo")
      LoginPage.passwrdInput.type("demo")
      LoginPage.clickLogin.click()

      SearchPage.searchBtn.type("Girlie{enter}")
      BasketPage.addToBasket.click()
      BasketPage.openBasket.click()
      BasketPage.checkout.click()
      
      SelectAddressPage.selectAddress.contains("United Fakedom").click()
      SelectAddressPage.clickContinue.contains("Continue").click()
      DeliveryMethodPage.selectDeliverySpeed.contains("Standard Delivery").click()
      SelectAddressPage.clickContinue.contains("Continue").click()
      
      PaymentOptionsPage.selectCard.click()
      PaymentOptionsPage.clickContinue.click()

      OrderSummaryPage.placeOrder.click()

      OrderCompletionPage.validate.should("contain", "Thank you for your purchase!")
    })
  });
});