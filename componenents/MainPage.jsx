import TextEditor from "./TextEditor";
import { quotesapi } from "../functions/apis";
import { useEffect, useState } from "react";
import { time } from "../functions/apis";

export default function MainPage({ theme, setTheme }) {
	useEffect(() => {
		if (theme) {
			// light theme
			document.documentElement.style.setProperty("--color", "antiquewhite");
			document.documentElement.style.setProperty("--accent", "#101010");
		} else {
			// dark theme
			document.documentElement.style.setProperty("--color", "#101010");
			document.documentElement.style.setProperty("--accent", "antiquewhite");
		}
	}, [theme]);

	const changetheme = () => setTheme((prev) => !prev);

	const [topQuote, setTopQuote] = useState("");
	const [bottomQuote, setBottomQuote] = useState("");

	const getTwoRandomQuotes = (arr) => {
		if (!Array.isArray(arr) || arr.length === 0) return ["", ""];
		if (arr.length === 1) return [arr[0], ""];
		const n = arr.length;
		const i1 = Math.floor(Math.random() * n);
		let i2 = Math.floor(Math.random() * (n - 1));
		if (i2 >= i1) i2 += 1;
		return [arr[i1], arr[i2]];
	};

	useEffect(() => {
		(async () => {
			const data = await quotesapi("https://zenquotes.io/api/quotes/");
			const [q1, q2] = getTwoRandomQuotes(data);
			setTopQuote(q1);
			setBottomQuote(q2);
		})();
	}, []);

	return (
		<div id='mainpage'>
			<p id='time'>{time()}</p>
			<p id='quotetop'>{topQuote || "Quote Top"}</p>
			<TextEditor />
			<p id='quotebottom'>{bottomQuote || "Quote Bottom"}</p>
			<button id='theme-button' onClick={changetheme} type='button'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='1em'
					height='1em'
					viewBox='0 -960 960 960'
					fill='currentColor'>
					<path d='M492-280q83 0 141.5-58.5T692-480q0-83-58.5-141.5T492-680q-22 0-43 4.5T408-662q54 25 85.5 74T525-480q0 59-31.5 108T408-298q20 9 41 13.5t43 4.5ZM480-28 346-160H160v-186L28-480l132-134v-186h186l134-132 134 132h186v186l132 134-132 134v186H614L480-28Zm0-112 100-100h140v-140l100-100-100-100v-140H580L480-820 380-720H240v140L140-480l100 100v140h140l100 100Zm0-340Z' />
				</svg>
				Theme: {theme ? "Light" : "Dark"}
			</button>
		</div>
	);
}
