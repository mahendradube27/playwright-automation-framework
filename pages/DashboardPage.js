

export class DashboardPage {

    constructor(page){
        this.page = page
        this.viewButton = page.getByRole('button', { name: 'View' }).first()
    }

    async viewProduct(){
        await this.viewButton.click()
    }
}

