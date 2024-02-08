var joketile = document.querySelector(".dadjoke");
var jokeheart = document.querySelector("#heart-joke");

var jokes = localStorage.getItem("jokes");
if (jokes == null ){
  jokes = "";
}

jokeheart.addEventListener('click',()=>{
  alert('Saved to Favorites');
  var joke = joketile.textContent.trim();
  jokes = jokes.concat(joke + ",");
  localStorage.setItem("jokes",jokes);

});

function setJoke(data){
    joketile.textContent = data.joke;
    joketile.setAttribute("style", "color:yellow; font-size: 25px; font-family: Cambria");
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


  