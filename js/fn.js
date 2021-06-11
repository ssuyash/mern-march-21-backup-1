//IIFE  ==> immediate invoked function expression
(function(){
    console.log("inside function")
})()

//function statement
function sum(a, b){
    return a + b
}

//function expression
var sum = function(a, b){
    return a+b
}

sum // it will give function body
sum() // it will execute the function

console.log(sum)



//Arrow function expression

var sum = (a, b)=>{
    return a+b+10
}

console.log(sum(10, 20))


var sqr = a=>a*a

// var sqr = (a)=>{
//     return a*a
// }




//js engine => global object 
// browser enviroment => window

function test(){
    console.log(this) //global object
}

var arrowTest = ()=>{
    console.log(this)
}

window.name = 'vicky'

let person = {
    name : 'suyash',
    showName:()=>{
        console.log(this.name)
    }
}


let person2 = {
    name:'Shraddha',
    showName:()=>{
        person.showName()
    }
}

//calling context function
person.showName()


//function => global



//constructor function

console.log(this)

//this => object
//object literals
//new => class, constructor function


// [2, 3, [4, 6]] => 

// [2, 3, 4, 5] => flat





var arr = [1, 2, 3, 4, 5]

arr.splice(startIndex, deleteCount, ...newEntries)

arr.splice(3, 0, 10)




