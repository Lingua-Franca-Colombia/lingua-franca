import React from "react";
import NavBar from "./components/NavBar";
import MainPage from "./components/MainPage";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<>
			<NavBar />
			<Routes>
				<Route path="/" element={<MainPage />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
