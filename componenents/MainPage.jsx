import TextEditor from "./TextEditor"
import { useState } from "react";
import { time } from "../functions/apis";

export default function MainPage() {
  let [theme,setTheme] = useState(false)

  let changetheme = ()=>{
    
    if (theme){
      document.documentElement.style.setProperty("--color","#101010")
      setTheme(false)
    }else{
      document.documentElement.style.setProperty("--color","antiquewhite")
      setTheme(true)
    }

  }

  return (
    <div id="mainpage">
      <p>{time()}</p>
      <p id="quotetop">Quote Top</p>
      <TextEditor/>
      <p id="quotebottom">Quote Bottom</p>
      <button onClick={changetheme} type="button">Theme: {theme?"Light":"Dark"}</button>
    </div>
  );
}
