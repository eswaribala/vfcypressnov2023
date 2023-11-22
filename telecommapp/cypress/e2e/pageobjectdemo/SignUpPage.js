import {BasePage} from "./BasePage";

export class SignUpPage extends BasePage{

    register(testData){
        cy.get("#user_title").select(testData.title)
        cy.get("#user_firstname").type(testData.firstName)
        cy.get("#user_surname").type(testData.surName)
        cy.get("#user_phone").type(testData.mobileNo)
        cy.get("#user_dateofbirth_1i").type(testData.year)
        cy.get("#user_dateofbirth_2i").type(testData.month)
        cy.get("#user_dateofbirth_3i").type(testData.day)
        cy.get("#licencetype_t").check()
        cy.get("#user_occupation_id").select(testData.occupation)
        cy.get("#user_licenceperiod").select(testData.licensePeriod)
        cy.get("#user_address_attributes_street").type(testData.address)
        cy.get("#user_address_attributes_city").type(testData.city)
        cy.get("#user_address_attributes_county").type(testData.country)
        cy.get("#user_address_attributes_postcode").type(testData.postalCode)
        cy.get("#user_user_detail_attributes_email").type(testData.email)
        cy.get("#user_user_detail_attributes_password").type(testData.password)
        cy.get("#user_user_detail_attributes_password_confirmation").type(testData.confirmPassword)
        cy.get("input[type='submit']").click()
    }

}
