import MainPage from "../componenents/MainPage";
import { useState } from "react";

export default function App() {
  // default true -> light theme (matches :root in styles.css)
  let [theme, setTheme] = useState(true);
  return (
    <>
      <MainPage theme={theme} setTheme={setTheme} />
    </>
  );
}
