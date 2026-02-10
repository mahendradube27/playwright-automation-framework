

export class OrderPage {

    constructor(page){
        this.page = page
        this.searchCountry = page.getByPlaceholder('Select Country')
        this.selectCountry = page.getByText('India').last()
        this.placeOrderButton = page.getByText('Place Order')
        this.orderMessage = page.locator('.hero-primary')
    }

    async placeOrder(){
        await this.searchCountry.pressSequentially('India')
        await this.selectCountry.click()
        await this.placeOrderButton.click()
    }
}