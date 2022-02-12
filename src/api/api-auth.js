import axios from "axios"
import { mainAxios, mainAxiosAuth } from "./api"




const apiAuthlog = (user,callback) => {
     
    mainAxiosAuth().post("login",user).then(Response=>{

        const data = response.data
        callback(true,data)
    }).catch(error=>{
        console.log("error")
        callback(false,error.Response.massage)
    })
}

export default apiAuthlog



export const apiAuthreg = (user,callback) => {
     
    mainAxiosAuth().post("register",user).then(Response=>{

        const data = response.data
        callback(true,data)
    }).catch(error=>{
        console.log("error")
        callback(false,error.Response.massage)
    })
}

