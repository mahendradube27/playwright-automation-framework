
import { request } from "@playwright/test"

export class APIUtils {

    constructor(request){
        this.request = request
    }
    async getToken(){
        
        const responce = await this.request.post(process.env.API_BASEURL , {
            data : {
                userEmail: "mahi123@gmail.com", 
                userPassword: "Pass@123"
            }
        })

        const body = await responce.json()
        const token = await body.token

        return token
    }
}
