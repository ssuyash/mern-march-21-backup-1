var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

var chunkSize = 2
//[[1, 2], [3, 4], [5, 6], [7, 8], [9]]

var chunked = []

for(var i = 0; i <arr.length; i+=chunkSize){
    chunked.push(arr.slice(i, i + chunkSize))
}



console.log(chunked)

