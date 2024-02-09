var api = 'https://api.adviceslip.com/advice';
var advicetile = document.querySelector(".advice")
console.log(advicetile) 

function setadvice(data) 
{
console.log("in set advice data is :"+ data);
advicetile.textContent = data 



}


fetch(api)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data.slip.advice);
    setadvice(data.slip.advice)
  });





//hi my name is chris