var furrytile = document.querySelector("#furryImage");

var funnySayings = 
  [
    "Don't hate me because I am beautiful",
    "Have some fun",
    "Hello",
    "More beer please",
    "Be the best you can be",
    "You too can be great",
    "Its a tough job",
    "Dont you wish your girlfriend was hot like me",
    "I'm amazing",
    "You can do it!"
  ]

function randomSaying(){
    return funnySayings[Math.floor(Math.random()*funnySayings.length)];
  }

//fetch('https://cataas.com/cat/says/hello')
fetch("https://corsproxy.io/?https://cataas.com/cat/says/" + randomSaying() + "?fontSize=30&fontColor=yellow")
  .then(function (response) {
    return response.blob();
  })
  .then(function (blob){
    var imageURL = URL.createObjectURL(blob);
    console.log(imageURL);
    furrytile.setAttribute("src",imageURL);
  }).catch((e) => console.log(e));



  