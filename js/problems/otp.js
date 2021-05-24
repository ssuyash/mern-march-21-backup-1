// function getOtp(optlen){

// var otp = ""

// for(var i=1; i<=optlen; i++){
//     otp += Math.round(Math.random()*100000)%10
// }

// return otp

// }



// console.log(getOtp(6))

// + => addition   => num + num
// + => concatation  => otherwise


var optlen = 4
var otp  = ""
for(var i=1; i<=optlen; i++){
   let randomNum = Math.round(Math.random()*47659)%10   
   otp += randomNum

}


console.log(otp)


Math.pow(2, 5)
