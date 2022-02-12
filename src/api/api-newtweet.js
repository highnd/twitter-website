import axios from "axios"
import { mainAxios } from "./api"


const apinewtweet = (data,callback) => {
     
    mainAxios().post("/tweets",data)
    
    .then(Response=>{

        const data = response.data
        callback(true)
    }).catch(error=>{
        console.log("error")
        callback(false)
    })
}

export default apinewtweet