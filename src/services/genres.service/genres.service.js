import {urls} from "../../constants";
import {axiosService} from "../index";

export const genresService={
    getAllGenres:()=>axiosService.get(urls.getGenres),
}