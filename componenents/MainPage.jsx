import TextEditor from "./TextEditor"
import { useState } from "react";

export default function MainPage() {
  let time = new Date()
  let times = time.toString()
  return (
    <div id="mainpage">
      <p>{times}</p>
      <p id="quotetop">Quote Top</p>
      <TextEditor/>
      <p id="quotebottom">Quote Bottom</p>
    </div>
  );
}
