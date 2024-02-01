
fetch('http://www.boredapi.com/api/activity?participants=1&participants=1')
.then(function(res) {return res.json()})
.then(function(data){console.log(data)})

