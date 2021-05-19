//1 *
//2 ** 
//3 ***
//4 ****
//5 *****

// for(var i = 1; i <=5; i++){
//     var str = ""

//     for(var j = i; j>0; j--){
//         str += "*"
//     }

//     console.log(str)
// }


for(var i = 1; i <=5; i++){
    var str = ""

    for(var j = 1; j<=10; j++){
        str += i+"x"+j+"="+(i*j)+" "
    }

    console.log(str)
}