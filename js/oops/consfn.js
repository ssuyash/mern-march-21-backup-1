//obj = {}


//constructor function  => object 

var Student = function(name, course){
    this.name = name;
    this.course  = course;
}




var s1 = new Student("suyash", 'mern')

console.log(s1)


//call apply bind
//map reduce filter

Array.prototype.sum = function(){
    return this.reduce((acc, el)=>acc+el, 0)
}




var arr = [1, 2, 3]
console.log(arr.sum())
console.log(arr)


var arr2 = []
console.log(arr2.sum())




//overriding    =>  
//overloading   => 