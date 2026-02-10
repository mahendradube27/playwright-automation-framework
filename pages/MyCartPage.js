

export class MyCartPage {
    constructor(page){
        this.page = page
        this.cartSection = page.locator("div.cart")
        this.buyButton = page.getByRole('button' , {name : 'Buy Now'})
    }

    async clickOnBuy(){
        await this.buyButton.click()
    }
}