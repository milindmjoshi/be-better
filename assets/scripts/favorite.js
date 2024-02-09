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
        var image = document.createElement("img");
        image.style.display = 'inline';
        image.style.float = 'right';
        image.setAttribute("src","../be-better/assets/images/trash.png");
        image.addEventListener('click',()=>{
            //alert("delete me");
            deleteFavorite(joke);
        })
        console.log("image: " + image);
        fav.appendChild(image);
        var br = document.createElement("br");
        fav.appendChild(br);
        var hr = document.createElement("hr");
        fav.appendChild(hr);
    }
});

function deleteFavorite(joke){
    var index = jokesArray.indexOf(joke);
    console.log("deleting index: " + index);
    if (index != -1){
        jokesArray.splice(index,1);
    }
    localStorage.setItem("jokes",jokesArray.join(","));
    document.location.reload();

}