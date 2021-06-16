class Student {

    constructor(name, course){
        console.log("I am constructor of student class")
        this.name = name;
        this.course = course;
    }

    getDetails = ()=>{
        console.log(this.name, this.course)
    }
    
}

// var s1 =  new Student("karan", 'mern')
// s1.getDetails()


// var s2 =  new Student("Harshit", 'mern')
// s2.getDetails()
// //console.log(s1)


class Library extends Student{
    constructor(name, course, membership){
        super()
        console.log("I am constructor of Library class")
        this.membership = membership
    }

    getMemberShip(){
        return `${this.name} has ${this.membership} membership available`
    }

    //overriding
    getDetails = ()=>{
        super.getDetails()
    }
}


var lib1 = new Library("karan", 'mern', 'lifetime')
console.log(lib1.getMemberShip())

var lib2 = new Library("Harshi", 'mern', '35 years')
console.log(lib2.getMemberShip())


var student = new Student()