import {test as base} from "../fixtures/LoginFixture"
import { LoginPage } from "../pages/LoginPage"
import { DashboardPage } from "../pages/DashboardPage"
import { ProductsDetailsPage } from "../pages/ProductsDetailsPage"
import { MyCartPage } from "../pages/MyCartPage"
import { OrderPage } from "../pages/OrderPage"

export const test = base.extend({
    loginPage : async({page} , use)=>{
        const login = new LoginPage(page)
        await use(login)
    } ,

    dashboardPage : async({loginFixture, page} , use)=>{
        const dashboardPage = new DashboardPage(page)
        await use(dashboardPage)
    } , 

    productDetailsPage : async({page} , use)=>{

        const productDetailsPage = new ProductsDetailsPage(page)
        await use(productDetailsPage)
    } ,

    myCartPage : async({page} , use)=>{
        const myCartPage = new MyCartPage(page)
        await use(myCartPage)
    } ,
  
    orderPage : async({page} , use)=>{
        const orderPage = new OrderPage(page)
        await use(orderPage)
    }


})

export {expect} from "@playwright/test"