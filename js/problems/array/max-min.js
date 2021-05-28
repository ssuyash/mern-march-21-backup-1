var arr = [4, 7, 1, 4, 9, 6, 8]

//1) find maximum & maximum of the array.

var max = arr[0]
var min = arr[0]


for(var i = 1; i < arr.length; i++){
    if(arr[i] > max){
        max = arr[i]
    }

    if(arr[i]<min){
        min = arr[i]
    }
}

console.log(max, min)