console.log("Inside main.js");

// Link to inspire page
var inspireLink = document.querySelector(".inspire-link");

inspireLink.addEventListener('click',function() {
    window.location = "inspire.html";
});

console.log(inspireLink);

    fetch('https://api.giphy.com/v1/gifs/search?api_key=XDTWk5xjItvuF74CqVAOZgnxNIy8n5zV&q=inspiration&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.data.length >0) {
                const gifUrl=data.data[0].images.original.url;
                document.getElementById("inspireGif").src =gifUrl;
            }
        });

console.log("Inside main.js");

// Link to favorite page
var favoriteLink = document.querySelector(".favorite-link");

favoriteLink.addEventListener('click',function() {
    window.location = "favorite.html";
});

console.log(favoriteLink);


