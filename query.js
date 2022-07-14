const querystring = require('querystring');

var query = "http://localhost:80?name=zeeshan&age=23"
let arrOfWords = query.split('');

var newQuery ='';
for(let i = arrOfWords.lastIndexOf('?')+1; i < arrOfWords.length;i++){
    newQuery+=arrOfWords[i];
}

var data = querystring.parse(newQuery)

console.log(data.name)
console.log(data.age)