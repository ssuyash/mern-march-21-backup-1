var arr = ["arshad", "brijesh",  "milan", "shraddha", "harshit"]

var find = prompt("Enter find")
var index = arr.indexOf(find)

if( index != -1){
    var replace = prompt("Enter replace")

    arr.splice(index, 1, replace)
    console.log(arr)
}else{
    console.log("no search found")
}