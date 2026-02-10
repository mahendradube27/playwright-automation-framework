
import {test , expect} from "../fixtures/PageObjects"

test('Order Place Flow With Fixture' , async({dashboardPage , productDetailsPage , myCartPage , orderPage ,page})=>{

    await expect(page).toHaveURL(/dashboard/)
    await dashboardPage.viewProduct()
    await expect(productDetailsPage.productName).toBeVisible() 
    await productDetailsPage.ClickAddToCart()
    await productDetailsPage.clickCartButton()
    await expect(myCartPage.cartSection).toContainText('ADIDAS ORIGINAL')
    await myCartPage.clickOnBuy()
    await orderPage.placeOrder()
    await expect(orderPage.orderMessage).toContainText('Thankyou for the order.')
})