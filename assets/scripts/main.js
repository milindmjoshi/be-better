console.log("Inside main.js");

// Link to inspire page
var inspireLink = document.querySelector(".inspire-link");

inspireLink.addEventListener('click',function() {
    window.location = "inspire.html";
});

console.log(inspireLink);

// Link to furry friends page 
var furryLink = document.querySelector(".furry-link");

furryLink.addEventListener('click',function() {
    window.location = "furry.html";
});

console.log(furryLink);



