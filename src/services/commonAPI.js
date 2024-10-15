import axios from "axios"

export const commonAPI = async(httpMethod, url, reqBody) =>{
    const configuration = {
        method:httpMethod,
        url,
        data:reqBody,
        headers:{"Content-Type":"application/json"}
    }
    return await axios(configuration).then((result)=>{
        return result
    }).catch((error)=>{
        return error
    })
}