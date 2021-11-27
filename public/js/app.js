let card = document.getElementById("card");

let cards = async () => {
  try {
    // const apiKey = document.getElementById('apiKey').value
    // const res = await fetch('http://localhost:3000/?apiKey=' + apiKey)
    const res = await fetch("http://localhost:3000/");
    const data = await res.json();
    console.log(data);
    if (data.error) {
      document.getElementById("img").innerText = "";
      document.getElementById("title").innerText = "";
      document.getElementById("text").innerText = "";
    } else {
      document.getElementById("img").innerText = data;
      document.getElementById("title").innerText = data;
      document.getElementById("text").innerText = data;
    }
  } catch (e) {
    console.log(e);
  }
};
