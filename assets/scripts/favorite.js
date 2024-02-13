// get joke from local storage
var fav = document.querySelector(".favorites");

var jokes = localStorage.getItem("jokes");

// split jokes string by , into a jokes array
var jokesArray=(jokes.split(","));

var hr = document.createElement("hr");
fav.appendChild(hr);

// for each joke create p dom element and append 
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
        image.setAttribute("id","trash-icon");
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

// delete joke from favorites if it exists
function deleteFavorite(joke){
    var index = jokesArray.indexOf(joke);
    console.log("deleting index: " + index);
    if (index != -1){
        jokesArray.splice(index,1);
    }
    localStorage.setItem("jokes",jokesArray.join(","));
    document.location.reload();

}