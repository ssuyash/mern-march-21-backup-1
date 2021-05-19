function getNDigitNumber(n, digit){
    var num = 0

    for(var i=1; i<=n; i++){
        num = num*10 + digit
    }

    return  num

}

function pow(a, b){
    var ans = 1
    for(var i=1; i<=b; i++){
        ans *= a
    }

    return ans
}


var terms = 5
var sum = 0

// for(var i=1; i<=terms; i++){
//     sum += getNDigitNumber(i, 9)
// }


for(var i=1; i<=terms; i++){
    sum += pow(10, i)-1
}


console.log(sum)
