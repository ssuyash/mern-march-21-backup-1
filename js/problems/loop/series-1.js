function fact(num) {
    
    var ans = 1
    for (var i = 1; i <= num; i++) {
        ans *= i
    }
    return ans
}


function pow(a, b){
    var ans = 1
    for(var i=1; i<=b; i++){
        ans *= a
    }

    return ans
}




var x = 2 
var n = 5

var termsCount = 1
var res = 0
var counter = 0

while(termsCount <= n){
    if(counter%2 == 0){
        
        if(termsCount%2 != 0){
            res += pow(x, counter)/fact(counter)
        }else{
            res -= pow(x, counter)/fact(counter)
        }
        
        console.log(counter)
        termsCount++
    }
    counter++

}

console.log(res)