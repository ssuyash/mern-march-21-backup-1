//property methods(functionality) 
//object => real world entity
//laptop => brand, screenSize, ram, processor, hdd, 
//       => songPlay, wordEditing, 
//object literals


var person = {
    name:"Suyash",
    age:26,
    hobbies:["a", "b", "c"],
    printName : function(){
        console.log(this.name)
    }
}

console.log(person.name)
console.log(person['name'])
var key = "name"

//accessing dynamic keys
console.log(person[key])

console.log(person.hobbies[0])

person.name = "Shraddha"
person.age = 27
//person.jobDescription = "Sr Java Developer"

//console.log(person.jobDescription)

delete person.name
console.log(person)
console.log('jobDescription' in person)

console.log(typeof person)


console.log(person.printName())

console.log(this)


//get all the keys in object in an array
Object.keys(obj)