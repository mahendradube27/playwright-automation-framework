import {test as base} from "../fixtures/LoginFixture"
import { LoginPage } from "../pages/LoginPage"
import { DashboardPage } from "../pages/DashboardPage"
import { ProductsDetailsPage } from "../pages/ProductsDetailsPage"
import { MyCartPage } from "../pages/MyCartPage"
import { OrderPage } from "../pages/OrderPage"
import { APIUtils } from "../utils/APIUtils"
import { request } from "@playwright/test"

export const test = base.extend({
    loginPage : async({page} , use)=>{
        const login = new LoginPage(page)
        await use(login)
    } ,

    dashboardPage : async({loginFixture, page} , use)=>{
        const dashboardPage = new DashboardPage(page)
        await use(dashboardPage)
    } ,

    dashboardPage2 : async({page} , use) => {
        const dashboardPage2 = new DashboardPage(page)
        await use(dashboardPage2)
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
    } ,

    apiUtils : async({request} , use) => {
        const apiUtils = new APIUtils(request)
        await use(apiUtils)
    }


})

export {expect} from "@playwright/test"