console.log(document.title)

var btn = document.getElementById('btn')
var count = 0
var oldTitle = document.title

btn.addEventListener('click',function(){
    count++;
    var newTitle = `${oldTitle} (${count})`
    document.title = newTitle
})


console.log(document.URL) // current url //read only

console.log(document.location)
//document.location = "http://www.google.com"


console.log(document.referrer)
console.log(document.domain)
console.log(document.lastModified)
console.log(document.readyState)
console.log(document.cookie)


setTimeout(function(){
    console.log(document.readyState)
}, 1000)


