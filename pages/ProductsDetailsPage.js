

export class ProductsDetailsPage{

    constructor(page){
        this.page = page
        this.productName = page.getByText('ADIDAS ORIGINAL')
        this.addToCart = page.getByText('Add to Cart')
        this.cartButton = page.getByRole('button' , {name : 'Cart'}).first()
    }

    async ClickAddToCart(){
        await this.addToCart.click()
    }

    async clickCartButton(){
        await this.cartButton.click()
    }
}