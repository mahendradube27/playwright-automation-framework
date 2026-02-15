
import {test , expect} from "../fixtures/PageObjects"


test('Login Fixture Use @smoke' , async({dashboardPage , productDetailsPage , page})=>{
   await expect(page).toHaveURL(/dashboard/)
   await dashboardPage.viewProduct()
   await expect(productDetailsPage.productName).toBeVisible()
   await expect(productDetailsPage.productName).toHaveText('ADIDAS ORIGINAL')
})