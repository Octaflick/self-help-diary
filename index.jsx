import { createRoot } from "react-dom/client";

// let app = {
    
// }

let getapi = async (url)=>{
    let response = await fetch(url)
    let data = await response.json()
    console.log(data)

}

getapi("https://quotesondesign.com/wp-json/wp/v2/posts/")