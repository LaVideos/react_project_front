import axios from "axios";
import {baseURL} from "../../constants";
import {authService} from "../auth.service/auth.service";

const axiosService = axios.create({baseURL});

axiosService.interceptors.request.use((config)=>{
    const token = authService.setToken();
    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }
    return  config
});

export {
    axiosService
}