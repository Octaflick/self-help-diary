import HomePage from "../componenents/HomePage";
import MainPage from "../componenents/MainPage";
import { useState } from "react";

export default function App() {
	// default true -> light theme
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
