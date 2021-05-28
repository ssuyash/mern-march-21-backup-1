var arr = [4, 7, 1, 4, 9, 6, 8, 3, 7, 9, 7, 4, 5]

//2) occurences of given number

var num = 9
var occurences = 0 

arr.forEach(function(e){
    if(e == num){
        occurences++
    }
})


console.log(occurences)