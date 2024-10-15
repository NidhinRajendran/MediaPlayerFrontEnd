import Category from "../components/Category"
import { commonAPI } from "./commonAPI"
import { serverUrl } from "./serverUrl"


export const AddVideoApi = async(reqBody)=>{
    return await commonAPI('POST',`${serverUrl}/videos`,reqBody)
}

export const GetVideoAPi = async() =>{
    return await commonAPI('GET', `${serverUrl}/videos`)
}

export const AddWatchHistoryAPI = async(reqBody) =>{
    return await commonAPI('POST',`${serverUrl}/history`,reqBody)
}

export const GetVideoFromWatchHistoryAPI = async()=>{
    return await commonAPI('GET',`${serverUrl}/history`)
}

export const DeleteVideoFromAllVideosAPI = async(id) =>{
    return await commonAPI('DELETE',`${serverUrl}/videos/${id}`)
}

export const DeleteVideoFromWatchHistoryAPI = async(id) =>{
    return await commonAPI('DELETE',`${serverUrl}/history/${id}`)
}

export const AddCategoryNameAPI = async(reqBody)=>{
    return await commonAPI('POST',`${serverUrl}/category`,reqBody)
}

export const GetAllCategoryNameAPI = async()=>{
    return await commonAPI('GET',`${serverUrl}/Category`)
}

export const DeleteCategoryAPI = async(id)=>{
    return await commonAPI('DELETE',`${serverUrl}/category/${id}`)
}

export const AddVideoToCategoryAPI = async(id , reqBody)=>{
    return await commonAPI('PUT',`${serverUrl}/category/${id}`,reqBody)
}