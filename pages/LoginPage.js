

export class LoginPage {

    constructor(page){
        this.page = page
        this.enterEmail = page.getByPlaceholder('email@example.com')
        this.enterPassword = page.getByPlaceholder('enter your passsword')
        this.loginBtn = page.getByRole('button' , {name : 'Login'})
    }

    async goto(){
        await this.page.goto('https://rahulshettyacademy.com/client/#/auth/login')
    }

    async login(userName , passWord){
        await this.enterEmail.fill(userName)
        await this.enterPassword.fill(passWord)
        await this.loginBtn.click()
    }
}