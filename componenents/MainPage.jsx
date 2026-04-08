import TextEditor from "./TextEditor";
import { useEffect } from "react";
import { time } from "../functions/apis";

export default function MainPage({ theme, setTheme }) {
  // keep CSS vars in sync with `theme`
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

  return (
    <div id="mainpage">
      <p id="time">{time()}</p>
      <p id="quotetop">Quote Top</p>
      <TextEditor />
      <p id="quotebottom">Quote Bottom</p>
      <button onClick={changetheme} type="button">
        Theme: {theme ? "Light" : "Dark"}
      </button>
    </div>
  );
}
