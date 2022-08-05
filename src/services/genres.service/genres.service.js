import {params, urls} from "../../constants";
import {axiosService} from "../index";


export const genresService={
    getAllGenres:()=>axiosService.get(urls.getGenres,{params:{params}}),
}