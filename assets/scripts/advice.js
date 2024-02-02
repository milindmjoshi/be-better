var api = 'https://api.adviceslip.com/advice';
var advice = document.querySelector("be nice")

function setadvice(data) {
advicetile.textcontext = data.advice 




fetch(api)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data.slip.advice);
    advice = data.slip.advice 
  });





