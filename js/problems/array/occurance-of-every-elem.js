var arr = [4, 7, 1, 4, 9, 6, 8, 3, 7, 9, 7, 4, 5]

//2) occurences of given number
var occurences = {}

arr.forEach(function(e){  // getting elements one by one
    if(e in occurences){ // check entry in occurences object
        var newOccurence = occurences[e]+1 //got perv entry and increased it by one
        occurences[e] = newOccurence // set new value
    }else{ 
        //that entry not avalible already in the object
        occurences[e] = 1
    }
})

console.log(occurences)

// //{4:2, 7:1, 1:1, }
// obj[4] //1
// obj[4] = 2

//{4:3, 7:3, 1:1, }

// [
//     {number:1, repeat:1},
       // {number:4, repeat:3},

// ]

var galla = [10, 10, 20, 50, 10, 2000, 500, 200, 500, 2000, 20, 10, 1, 2, 1, 2, 5]
var notes = []

galla.forEach(function(note){
    
   var noteData =  notes.find(function(e){
       return (e.note == note)
   })

   if(noteData == undefined){
       // note not in notes
       var newNote = {note:note, count:1}
       notes.push(newNote)
   }else{
        //note data is already in notes
        var noteDataIndex = notes.findIndex(function(e){
            return e.note == note
        })
        var newCount = notes[noteDataIndex].count+1
        notes[noteDataIndex].count = newCount
   }
})
console.log(notes)


