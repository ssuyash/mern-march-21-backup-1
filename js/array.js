// array collection of data

var arr = ['suyash', 'geeksdoor', 'codiotic', 'Abc']



for(var i = 0; i <arr.length; i++){
    console.log(arr[i])
}

//Array Methods

//insertion methods

//end  => push()  // inserts data at the end of the array

arr.push("Xyz")

//start => unshift() // inserts data at the begining of the array
arr.unshift("mno")
console.log(arr)

//deletion methods 
//end  => pop() //deletes data from the end of the array returns the deleted one
var deleted = arr.pop()
console.log(deleted, arr)


//start => shift() //deletes data at the beginning of the array and returns the deleted one
var deleted = arr.shift()
console.log(deleted, arr)


//at any position
// splice(start, deleteCount, elementsToInsert )

arr.splice(2, 0, "GeeksDoor")
console.log(arr)



//finding
console.log(arr.indexOf("codiotic Tech"))



//iteration ==> one by one 

//iteration methods
//1) forEach(cb(element, index, array){})  => 
var fer = arr.forEach(function(el){
    console.log(el)
})




//2) map(function(el, ind, arr){return }) => return array of elements retruned from cb function 

var arr = [1, 2, 3, 4, 5]
var sqrArr = arr.map(function(e){
    return e+10
})

console.log(sqrArr)


//3) filter => test return an array

var ages = [12, 45, 76, 98, 34, 18, 10, 12, 13]
var voters = ages.filter(function(age){
   return age>=18
})

var voters = []
ages.forEach(function(e){
    e>=18 && voters.push(e)
})

console.log(voters)

var students = [
    {name:"dhruv", existing:true},
    {name:"harshit", existing:false},
    {name:"karan", existing:false}
]

// console.log(students[0].name)

var students = students.filter(function(std){
    return std.name != "karan"
})

console.log(students)

//other
var obj = students.find(function(el){
    return el.name=="karan"
})

console.log(obj)

var ind = students.findIndex(function(el){
    return el.name=="karan"
})

console.log(ind)



var arr = [1, 10, 12, 23, 2, 7, 76, 100]
var sortedArr = arr.sort(function(a, b){
    return a-b
})

console.log(sortedArr)



var students = [
    {name:"dhruv", existing:true},
    {name:"harshit", existing:false},
    {name:"karan", existing:false}
]
console.log(students.reverse())


// console.log( {name:"karan", existing:false} ==  {name:"karan", existing:false})

//**at(index) => returns element from the index
var arr = [1, 3, 5, 6]
// console.log(arr.at(3))


//**Array.isArray(arr) => returns true if given parameter is array otherwise false


//**flat(depth) => return flat
var arr = [1, 2, [3, 4, [6,7, [9, 10]]], 5] // [1, 2, 3, 4, 5]

console.log(Array.isArray(arr))

var flat = arr.flat(3)

// arr.forEach(function(e){
//     if(Array.isArray(e)){
//         e.forEach(function(el){
//             flat.push(el)
//         })
//     }else{
//         flat.push(e)
//     }
// })



/* arr.reduce(reducer(accumulator, currentVal, index, array), initialValueOfAccumulator) =>

*/

//[1, 2, 3]
console.log(flat)

var reduced = flat.reduce(function(accumulator, current){
    return accumulator+current
})

console.log(reduced)


arr = [1, 2, 3, 7, 56, 76, 12, 9]

var sum = arr[0]
for(var i=1; i<= arr.length; i++){
    sum += arr[i]
}



var max = arr.reduce(function(a, b){
    return Math.max(a, b)
})
console.log(max)


// slice() 
// slice(start) 
// slice(start, end)
console.log("before slice", arr)
console.log(arr.slice())
console.log("after slice", arr)
var qeryStr = ["name=suyash", "pass=1234"]
console.log(qeryStr.join("&"))
var arr1 = [1, 2, 3]
var arr2 = arr1.slice()  // make copy of an array 1
arr2[0] = 10
console.log(arr1, arr2)
//arr1 = [1, 2, 3]
//arr2 = [10, 2, 3]

var arr1 = [1, 2, 3]
var arr2 = [4, 5, 6]

//[1, 2, 3, 4, 5, 6]
// arr2.forEach(function(e){
//     arr1.push(e)
// })
// console.log(arr1)

arr1 = arr1.concat(arr2)
console.log(arr1)

var allVoter = arr1.every(function(e){
    return e>=18
})



console.log(allVoter)


var arr1 = [1, 2, 3]
var arr2 = [1, 2, 3]

//yes

//type of both varialbes must be Array
// length must be same 
// every elemet should be same on same index

var arr3 = arr1

console.log("comparing references", arr1 == arr3)

var isSame = true
console.log("comparing array using cusotm loop start")
arr1.forEach(function(el, ind){
    if(el != arr2[ind]){
       isSame = false
    }
})

console.log("comparing array using cusotm loop end")
console.log(isSame)

function isSimilar(arr1, arr2){
   return Array.isArray(arr1) && Array.isArray(arr2) && arr1.length == arr2.length && arr1.every(function(el, ind){
        return el == arr2[ind]
    })
}

var arr1 = [{name:"harshit", age:20}]
var arr2 = [{name:"harshit", age:20}]

var strArr1 = JSON.stringify(arr1)
var strArr2 = JSON.stringify(arr2)
console.log("array of object comparision : ", strArr1 == strArr2)
var s1 = "suyash"
var s2 = "suyash"

console.log()




var arr1 = [1, 2, 1]
var arr2 = [].concat(arr1)

var arr2 = arr1.map(function(el){
    return el
})

console.log(arr2)
var arr2 = arr1.slice()
arr1[0] = 10
console.log(arr2)


//spread operator  (...)
var copyOfArr1 = [...arr1]  // ES6 

//forEach()
//slice
//