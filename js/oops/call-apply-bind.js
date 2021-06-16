var person = {
    firstName:"suyash",
    lastName:"kumar",
    age:26,
    getFullName:function(test){
        console.log(this.firstName+" "+this.lastName+" "+this.age+test)
    }
}


console.log(person.getFullName())


var person2 = {
    firstName:"santosh",
    lastName:"jain",
    age:26
}


console.log(Object.keys(person2))
console.log(Object.values(person2))
console.log(Object.entries(person2))

var keyValArr = [
    ["name", "suyash"],
    ["age", 26]
]

console.log(Object.fromEntries(keyValArr))

console.log(person.hasOwnProperty('abc'))

var a = {a:2, b:3}
var b = {b:4, a:5}


//make copy of any object
console.log(Object.assign({}, b))
console.log({...a, ...b})






//call apply bind

//bind

var person2getfullname = person.getFullName.bind(person2)

// console.log(person.getFullName.call(person2 ))
// console.log(person.getFullName.apply(person2 ))


//context(this) pass
person2getfullname("hellow")
person.getFullName.call(person2, "hi from call")
person.getFullName.apply(person2, ["hi from apply"])
