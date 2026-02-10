import {test , expect} from "@playwright/test"
import { LoginPage } from "../pages/LoginPage"

test('Login into App @regression' , async({page})=>{
    const loginPage = new LoginPage(page)
    await loginPage.goto()
    await loginPage.login('mahi123@gmail.com' , 'Pass@123')
    await expect(page).toHaveURL(/dashboard/)
    expect(page.url()).toContain('dashboard')
})