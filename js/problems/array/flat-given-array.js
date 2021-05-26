var arr = [1, 2, [3, 4], 5] // [1, 2, 3, 4, 5]
var flat = []
arr.forEach(function(e){
    if(Array.isArray(e)){
        e.forEach(function(el){
            flat.push(el)
        })
    }else{
        flat.push(e)
    }
})

console.log(flat)