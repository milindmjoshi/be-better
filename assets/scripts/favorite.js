// get joke from local storage
var fav = document.querySelector(".favorites");

var jokes = localStorage.getItem("jokes");

var jokesArray=(jokes.split(","));

jokesArray.forEach(joke => {
    if (joke != ""){
        var p = document.createElement("p");
        p.classList.add("favoriteItem");
        console.log("Joke:" + joke);
        p.innerHTML = joke;
        fav.appendChild(p);
        var hr = document.createElement("hr");
        fav.appendChild(hr);
    }
});
