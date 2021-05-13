var amount = 9800
var notes = {2000:0, 500:0, 200:0, 100:0, 50:0}


//for 2000 note
if(amount >= 2000){
   var note2000 =  (amount-amount%2000)/2000
   amount -= 2000*note2000

   notes[2000] = note2000
}


//for 500 note
if(amount >= 500){
    var note500 =  (amount-amount%500)/500
    amount -= 500*note500
    notes[500] = note500
 }


 //for 200 note
if(amount >= 200){
    var note2000 =  (amount-amount%200)/200
    amount -= 200*note2000
    notes[200] = note2000
    console.log("200x",note2000)
 }


 if(amount >= 100){
    var note2000 =  (amount-amount%100)/100
    amount -= 100*note2000
    notes[100] = note2000
    console.log("100x",note2000)
 }




console.log(notes)