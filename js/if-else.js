//control statements

// if statements

//if(condition){
    //line of code
//}


//some other stuff


// console.log("start")
// var avg = 50

// if(avg >= 33){

//     console.log("you are pass")
// }

// if(avg < 33){
//     console.log("you are fail")
// }

// console.log("end")


var legelAgeForVote = 18

var userAge = parseInt(prompt("Please enter your age"))
console.log(userAge)

if(isNaN(userAge)){
    console.log("only numbers are allowed")
}else{
    if(userAge > 0 && userAge < 150){
        if(userAge >= legelAgeForVote){
            console.log("user can vote")
        }else{
            console.log("user can not vote")
        }
    }else{
        console.log("invalid age")
    }
}





