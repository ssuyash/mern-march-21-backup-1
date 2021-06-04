var str = "asdasdsdfasdfasdfsdafsdfsadfdf"

var count = {'a':1}

for(var i=0; i<str.length; i++){
    if(str[i] in count){
        count[str[i]]++
    }else{
        count[str[i]] = 1
    }
}

console.log(count)





