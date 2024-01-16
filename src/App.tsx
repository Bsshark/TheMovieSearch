import { Provider } from "react-redux";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { TheSearchMovieApp } from "./TheSearchMovieApp";
import { store } from "./store/store";

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<TheSearchMovieApp />
			</BrowserRouter>
		</Provider>
	);
}

export default App;
