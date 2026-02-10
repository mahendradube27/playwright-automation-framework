

export class LoginPage {

    constructor(page){
        this.page = page
        this.enterEmail = page.getByPlaceholder('email@example.com')
        this.enterPassword = page.getByPlaceholder('enter your passsword')
        this.loginBtn = page.getByRole('button' , {name : 'Login'})
    }

    async goto(){
        if (!process.env.BASE_URL) {
        throw new Error("BASE_URL is missing from environment variables!");
        }
        await this.page.goto(process.env.BASE_URL)
    }

    async login(userName , passWord){
        await this.enterEmail.fill(userName)
        await this.enterPassword.fill(passWord)
        await this.loginBtn.click()
    }
}