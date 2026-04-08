import MainPage from "../componenents/MainPage";
import { useState } from "react";

export default function App(){
    let [theme,setTheme] = useState(false)
    return <>
    <MainPage theme={theme} setTheme={setTheme} /></>
}