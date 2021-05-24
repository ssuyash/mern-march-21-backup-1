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




//iteration methods
//other


