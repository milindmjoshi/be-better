var joketile = document.querySelector(".dadjoke");
var jokeObject = fetch('https://icanhazdadjoke.com/',{
    method: "GET",
    headers: {
        "Accept":"application/json"
    }
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // console.log(data);
    // console.log(joketile);
    joketile.textContent = data.joke;
    return data;
  });