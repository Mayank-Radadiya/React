//Appwrite Login/Logout/NewAccount For any app  Backend code

import conf from "../Conf/Conf";
import { Client, Account, ID } from "appwrite"

export class Auth_Service{
    client = new Client();
    account; 

    constructor() {
        this.client
         .setEndpoint(conf.AppWriteUrl)
         .setProject(conf.AppWriteProjectId);
         this.account = new Account(this.client);
    }

    async createAccount({email , password , name}){
        try{
            const userAccont =   await this.account.create(ID.unique(), email, password, name);
            if (userAccont) {
                //If user create new accout. Next we start  Login Process here after create new account
                return this.Login(email, password)
            }else{
                return userAccont;
            }
        }
        catch(error) {
            throw error;
        }
    }

    async Login({email,password}){
        try {
          return  await this.account.createEmailPasswordSession(email, password)
            
        } catch (error) {
            throw error
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            throw error
        }
        return null
    }

    async logout(){
        try {
            return await this.account.deleteSessions("current")
            
        } catch (error) {
            console.log("AppWrite Service:: LogOut::  ",error);
        }

    }
}


const authService = new Auth_Service(); 


export  default  authService

