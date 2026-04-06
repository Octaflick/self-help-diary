let getapidata = async (url) => {
  let response = await fetch(url);
  let data = await response.json();
  return data.map((item) => item.content.rendered);
};

export default getapidata;
