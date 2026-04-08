export let quotesapi = async (url) => {
  let response = await fetch(url);
  let data = await response.json();
  return data.map((item) => item.content.rendered);
};

export let time = ()=>{
  let time = new Date()
  return time.toString()
}

