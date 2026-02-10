import { expect , test } from "../fixtures/PageObjects"

test('Fixture Page Object' , async({loginPage , page})=>{
    await loginPage.goto()
    await loginPage.login(process.env.TEST_USERNAME , process.env.TEST_PASSWORD)
    await expect(page).toHaveURL('https://rahulshettyacademy.com/client/#/dashboard/dash')
})