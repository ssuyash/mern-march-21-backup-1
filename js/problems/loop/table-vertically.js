var num = 8

for(var i=1; i<=10; i++){
    var str = ""
    for(var j=1; j<=num; j++){
        str += i+"x"+j+"="+(i*j)+" "
    }

    console.log(str)
}