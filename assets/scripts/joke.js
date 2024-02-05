var joketile = document.querySelector(".dadjoke");

function setJoke(data){
    joketile.textContent = data.joke;
    joketile.setAttribute("style", "color:brown; font-size: 25px; font-family: Cambria");
  }

var jokeObject = fetch('https://icanhazdadjoke.com/',{
    method: "GET",
    headers: {
        "Accept":"application/json"
    }
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data){
    setJoke(data);
  });


  