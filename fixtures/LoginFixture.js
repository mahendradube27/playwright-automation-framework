import {test as base} from "@playwright/test"
import { LoginPage } from "../pages/LoginPage"

 export const test = base.extend({
    loginFixture : async({page} , use)=>{
       const loginPage = new LoginPage(page)
       await loginPage.goto()
       await loginPage.login(process.env.TEST_USERNAME , process.env.TEST_PASSWORD)
       await use(loginPage)
    }
 })

 export {expect} from "@playwright/test"