import axios from "axios"
import { mainAxios } from "./api"




const apihashtag = (callback) => {
     
    mainAxios().get("/hashTags").then(Response=>{

        const data = response.data
        callback(true,data)
    }).catch(error=>{
        console.log("error")
        callback(false,error)
    })
}

export default apihashtag