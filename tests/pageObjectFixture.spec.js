import { expect , test } from "../fixtures/PageObjects"

test('Fixture Page Object' , async({loginPage , page})=>{
    await loginPage.goto()
    await loginPage.login('mahi123@gmail.com' , 'Pass@123')
    await expect(page).toHaveURL('https://rahulshettyacademy.com/client/#/dashboard/dash')
})