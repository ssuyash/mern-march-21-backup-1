//1) global this   => global object => browser(window)  // node(global)
console.log("from global : ", this)



//2) Regular function => this => global object => browser(window)

function testOfThis(){
    console.log("from regular function:",this)
}
testOfThis()


//3) Inside any Method => this => owner object

var person = {
    name:'suyash',
    getName:function(){
        console.log("from method : ",this)
    }
}


person.getName()


var person = {
    name:'suyash',
    hobbies:['tech', 'trekk', 'music'],
    getHobbies:function(){
       name = "vicky"
       this.hobbies.forEach((hobby)=>{
       console.log(this.name)
    })
    }
}


person.name = "karan"

person.getHobbies()

console.log(name)