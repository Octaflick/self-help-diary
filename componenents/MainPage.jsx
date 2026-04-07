import TextEditor from "./TextEditor"
import { useState } from "react";

export default function MainPage() {
  return (
    <div id="mainpage">
      <p id="quotetop">Quote Top</p>
      <TextEditor/>
      <p id="quotebottom">Quote Bottom</p>
    </div>
  );
}
