import axios from "axios"
import { mainAxios } from "./api"




const apitweets = (callback) => {
     
    mainAxios().get("/tweets").then(Response=>{

        const data = response.data
        callback(true,data)
    }).catch(error=>{
        console.log("error")
        callback(false,error)
    })
}

export default apitweets

