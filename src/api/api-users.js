import axios from "axios"
import { mainAxios } from "./api"




const apiusers = (callback) => {
     
    mainAxios().get("/users").then(Response=>{

        const data = response.data
        callback(true,data)
    }).catch(error=>{
        console.log("error")
        callback(false,error)
    })
}

export default apiusers