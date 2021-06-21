var tds = document.getElementsByTagName('td')
tds = Array.from(tds)


tds.forEach(function(td){
    td.addEventListener('click', function(e){
        e.target.style.backgroundColor = getRandomColor()
    })
})


function getRandomColor(){
    return `rgb(${getRandomNumber(255)}, ${getRandomNumber(255)}, ${getRandomNumber(255)})`
}

function getRandomNumber(range){
    return Math.round(Math.random()*1000)%(range+1)
}



// var userName = "suyash kumar"


// //Suyash Kumar
// SK  => a

// //Santosh Khair
// SK => a


// //Shraddha Jakhetiya
// SJ => b