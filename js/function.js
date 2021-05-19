function fact(num) {
    var ans = 1
    for (var i = 1; i <= num; i++) {
        ans *= i
    }
    return num
}


var f =  fact(5)
console.log(f)