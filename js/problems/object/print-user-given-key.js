var obj = {
    title:"X",
    brand:"Apple",
    ram:'8GB',
    price:7890,
    currency:"AED",
    discounueData:undefined,
   
}


var userEnteredKey = prompt("Enter a key")

if( userEnteredKey in obj){
    console.log(obj[userEnteredKey])
}else{
    console.log("invalid key provided")
}



let keys = Object.keys(obj)
console.log(keys)



