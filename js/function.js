// function statement
//function add(a, b=0, ...args){
//     console.log(a, b, args)
//     //rest operator => ...
//     return a+b
// }

// console.log(add(10, 56))


//function expression 
var sum = function(a, b){
    console.log("this function is running")
    return a+b
}


function test(fn){
    fn(10, 20)  //argument function > call
}

//callback
//function as an argument
test(sum)



function loopOnArray(arr, cb){
    for(var i=0; i<arr.length; i++){
        cb(arr[i], i, arr)  // callback
    }
}


var arr = ["arshad", "brijesh",  "milan", "shraddha", "harshit"]

loopOnArray(arr, function(el){
    console.log(el)
})

var arr = [1, 2, 3, 4]
loopOnArray(arr, function(a, b, c){
    console.log("test")
})



function sum(a, b){
    return a+b
}

sum(10, 20)
sum(30, 40)
// fn(param)