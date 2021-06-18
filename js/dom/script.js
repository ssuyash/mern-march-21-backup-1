// // 1) select the element
// // 2) add event listeners
// // 3) set callback function on events

// // submit btn => click => function
// //registration btn=> click => function

// //id selector
// var btn = document.getElementById("btn")


// //tagName selector
// var buttons = document.getElementsByTagName("button")
// console.log(buttons)


// //class name selector
// var classSelected = document.getElementsByClassName("btn-click")
// console.log(classSelected)



// //querySelector 
// var qs = document.querySelector('.btn-click')
// console.log("qs : ", qs)


// //querySelectorAll
// var qs = document.querySelectorAll('.btn-click')
// console.log("qsa : ", qs)


// //add event listeners
// document.getElementById("btn").addEventListener('click', function(){
//     alert("clicked here")
// })




// //click 
// //dblclick 
// //hover 
// //mouseenter 
// //mouseleave
// //keyup 
// //keydown
// //keypress
// //change


// //focus
// //blur

// // document.getElementById("inp").addEventListener('keyup', function(brijesh){
// //     console.log(brijesh.target.value)
// //     //alert('you pressed any key ')
// // })

// // document.getElementById("inp").addEventListener('blur', function(e){
// //     console.log(e)
// //     //alert('you have leaved the input field')
// // })


// document.querySelectorAll('.inp-text').forEach(function(node){
//     node.addEventListener('keyup', function(e){
//     //    if(isNaN(e.key)){
//     //        //non number key
//     //         var val = e.target.value
//     //         e.target.value = val.replace(e.key, "")
//     //         console.log("non number key pressed")
//     //    }
//     })
// })


//React/Angular/Vue => document 
//jQuery => 

//console.log(inps)

//shuffle an given array
// [1, 2, 3, 4, 5]

// [3, 2, 5, 4, 1]


// var element = document.getElementById('para')
// console.log(element.innerText)
// console.log(element.innerHTML)


var btn = document.getElementById('btn')
var inp = document.getElementById('inp')
var ul = document.getElementById('ul')

btn.addEventListener('click', function(e){
    var val = inp.value
    ul.innerHTML += `<p>${val}</p>`
    inp.value = ""

    btn.style.backgroundColor = "red"
})


var btnRight = document.getElementById('right')
var btnBottom = document.getElementById('bottom')

btnRight.addEventListener('click', function(){
   var div =  document.getElementById('div')
   var appliedMargin = parseInt(div.style.marginLeft.replace("px", ""))
   appliedMargin =  isNaN(appliedMargin) ? 0 : appliedMargin
   var newMargin = appliedMargin+1
   console.log(appliedMargin, newMargin)
   div.style.marginLeft += `${newMargin}px`
})


//parsing
//string => parse => html














