import axios from 'axios';
import { API_NOTIFICATION_MESSAGES } from '../constants/config';

const API_URL = "http://localhost:8000";

// api intercepters
const axiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json"
    }
})

axiosInstance.interceptors.request.use(
    function (config){
        return config;
    },
    function (error){
        return Promise.reject(error);
    }
)

axiosInstance.interceptors.response.use(
    function (response){
        // stop global loader here
        return processResponse(response);
    },
    function (error){
        // stop global loader here 
        return Promise.reject(processError(error));
    }
)

//  
// if sucess -> return {isSuccess: true, data: response.data}
// if fail -> return {isFailure: true, status: string, msg: string, code: int}
//  
const processResponse = (response)=>{
    if(response?.status === 200){
        return {isSuccess: true, data: response.data}
    } else{
        return {
            isFailure: true,
            status: response?.status,
            msg: response?.msg,
            code: response?.code
        }
    }


}

const processError = (error) => {
    if(error.response){
        // request made ad server responded with a status other
        // that fails out of the range
        console.log('Error in Response: ', error.toJSON());
        return{
            isError: true,
            msg: API_NOTIFICATION_MESSAGES.responseFailure,
            code: error.response.status
        }

    } else if(error.request){
        // request made but no response was received
        console.log('Error in Request', error.toJSON());
        return{
            isError: true,
            msg: API_NOTIFICATION_MESSAGES.requestFailure,
            code: ""
        }

    } else{
        // aapne front end me gadbad kar di
        console.log('Error in Network', error.toJSON());
        return{
            isError: true,
            msg: API_NOTIFICATION_MESSAGES.networkError,
            code: ""
        }
    }

}