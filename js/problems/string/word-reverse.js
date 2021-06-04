function reverseStr(str){
    return str
    .split("")
    .reverse()
    .join("")
}


var str = "I love My India"
var revWordStr = str.split(" ").map(function(word){
    return reverseStr(word)
}).join(" ")

console.log(revWordStr)