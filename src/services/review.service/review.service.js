import {axiosService} from "../axios.service/axios.service";
import {params, urls} from "../../constants";

export const reviewService = {
    getAllReview:(id)=>axiosService.get(urls.getMovie+id+'/reviews',{params:{params}})
}
