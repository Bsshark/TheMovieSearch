import movieApi from "../assets/api/movieApi";
import { useAppDispatch, useAppSelector } from "./dispatch"
import { onSearch, onLoad } from '../store/movieSlice';
import { movieState } from "../interfaces/movieInterfaces";

export const useMovieStore = () => {
    const dispatch = useAppDispatch();
    
    const { moviesDisplay, isLoading }:movieState = useAppSelector((state) => state.movie);

    const startSearchingMovie = (movieName: string) => {
        return async() => {
            dispatch(onLoad());
            const includeAdult = true;
            const lang = 'es-ES';
            const pagination = 1;
            const resp = await movieApi.get(`search/movie?query=${movieName}&include_adult=${includeAdult}&language=${lang}&page=${pagination}`);
            dispatch(onSearch(resp.data.results));
        }
    }

    return {
        //props
        isLoading,
        moviesDisplay,
        //metodos
        startSearchingMovie
    }

}