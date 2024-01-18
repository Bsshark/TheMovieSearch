import { Routes, Route, Navigate } from 'react-router-dom';
import { MovieDataScreen } from '../Pages/MovieDataScreen';
export const MovieRoutes = () => {
    return (
        <Routes>
            <Route path="/movie" element={<MovieDataScreen/>}/>
            <Route path="/*" element={<Navigate to="/"/>} /> 
            
        </Routes>
    )
}