import { ChangeEvent, useEffect, useRef, useState } from "react";
import { LoginForm } from "../components/LoginForm";
import { useAuthStore } from "../hooks/useAuthStore";
import { statusTypes } from "../interfaces/AuthInterfaces";
import { RegisterForm } from "../components/RegisterForm";
import { Navbar } from "../components/Navbar";
import { LoadingComponent } from "../components/LoadingComponent";
import { useMovieStore } from "../hooks/useMovieStore";
import { useAppDispatch } from "../hooks/dispatch";
import { MovieDisplay } from "../components/MovieDisplay";

export const WelcomeScreen = () => {

	const dispatch = useAppDispatch();

	const debounceRef = useRef<NodeJS.Timeout>();
	const { status } = useAuthStore();
	const { startSearchingMovie } = useMovieStore();
	const [showRegister, setShowRegister] = useState(false);
	const [movieSearch, setMovieSearch] = useState("");

	useEffect(() => {
	  onSearch(movieSearch);
	}, [movieSearch])
	

	const toggleShowForm = () => {
		setShowRegister(!showRegister);
	};

    if(status === statusTypes.checkingStatus) {
        return <LoadingComponent/>
    }

	const onSearch = (query: string) => {
		if (debounceRef.current) clearTimeout(debounceRef.current);

		debounceRef.current = setTimeout(() => {
			//todo: buscar
			dispatch(startSearchingMovie(query));
		}, 1000);
	};

	const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
		setMovieSearch(e.target.value)
	}

	return (
		<>
			{status === statusTypes.notAuthenticatedStatus ? (
				showRegister ? (
					<RegisterForm toggleShowForm={() => toggleShowForm()} />
				) : (
					<LoginForm toggleShowForm={() => toggleShowForm()} />
				)
			) : (
				<>
					<Navbar onMovieSearch={onSearchChange}/>
					<MovieDisplay/>
				</>
			)}
		</>
	);
};
