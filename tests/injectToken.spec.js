import {test , expect} from "../fixtures/PageObjects"

test('Inject Token Into The Browser' , async({apiUtils , productDetailsPage , dashboardPage2 , page})=>{

    const authToken = await apiUtils.getToken();
    //console.log(authToken)

    await page.addInitScript(token => {
        localStorage.setItem('token' , token)
    } ,authToken)

    await page.goto('/client')
    await expect(page).toHaveURL(/dashboard/)
    await dashboardPage2.viewProduct()
    await expect(productDetailsPage.productName).toBeVisible() 
 
})