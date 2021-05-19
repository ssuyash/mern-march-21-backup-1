var sum = 0
var userInp ;
for(var i=0; i<10; i++){
    userInp = parseInt(prompt("Enter a number"))
    sum += userInp  // sum = sum+userInp
}

var avg = sum/10 

console.log(sum, avg)