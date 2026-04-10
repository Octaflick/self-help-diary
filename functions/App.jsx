import HomePage from "../components/HomePage.jsx";
import MainPage from "../components/MainPage.jsx";
import { useState } from "react";

export default function App() {
	// default true -> light theme (matches :root in styles.css)
	let [theme, setTheme] = useState(true);
	let [showMain, setShowMain] = useState(false);
	return (
		<>
			{showMain ?
				<MainPage theme={theme} setTheme={setTheme} />
			:	<HomePage onStart={() => setShowMain(true)} />}
		</>
	);
}
