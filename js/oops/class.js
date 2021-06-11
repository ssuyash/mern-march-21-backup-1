class Student {

    constructor(name, course){
        this.name = name;
        this.course = course;
    }


    getDetails = ()=>{
        console.log(this.name, this.course)
    }
    
}

var s1 =  new Student("karan", 'mern')
s1.getDetails()


var s2 =  new Student("Harshit", 'mern')
s2.getDetails()
//console.log(s1)


