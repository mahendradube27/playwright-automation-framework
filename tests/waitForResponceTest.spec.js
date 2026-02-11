import {test , expect} from "../fixtures/PageObjects"

test('Wait For Responce Test' , async({apiUtils , productDetailsPage , dashboardPage2, myCartPage , orderPage , page})=>{

    const authToken = await apiUtils.getToken();
    
    await page.addInitScript(token => {
        localStorage.setItem('token' , token)
    } ,authToken)

    await page.goto('/client')
    await expect(page).toHaveURL(/dashboard/)
    await dashboardPage2.viewProduct()
    await expect(productDetailsPage.productName).toBeVisible() 

    const [responce] = await Promise.all([
        page.waitForResponse(resp => resp.url().includes('add-to-cart') && resp.status() === 200),
        productDetailsPage.ClickAddToCart()
    ])

    const body  = await responce.json()
    await expect(body.message).toEqual('Product Added To Cart')

    await productDetailsPage.clickCartButton()
    await expect(myCartPage.cartSection).toContainText('ADIDAS ORIGINAL')
    await myCartPage.clickOnBuy()
    await orderPage.placeOrder()
    await expect(orderPage.orderMessage).toContainText('Thankyou for the order.')

})