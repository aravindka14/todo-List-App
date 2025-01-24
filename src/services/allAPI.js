import serverURL from "./serverURL";
import commonAPI from "./commonAPI";

export const addDetailsAPI = async(todo)=>{
    return await commonAPI("POST",`${serverURL}/todo`,todo)
}


export const getDetailsAPI = async()=>{
    return await commonAPI("GET",`${serverURL}/todo`,"")
}