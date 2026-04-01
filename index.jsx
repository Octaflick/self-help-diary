import { createRoot } from "react-dom/client";

// let app = {
    
// }

let getapidata = async (url)=>{
    let response = await fetch(url)
    let data = await response.json()
    return(data.map((item)=>item.content.rendered))

}

getapidata("https://quotesondesign.com/wp-json/wp/v2/posts/")