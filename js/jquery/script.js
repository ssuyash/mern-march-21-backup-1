$(function(){
    // $("#btn").click(function(){
    //     alert('clicked on button')
    // })

    $("#btn").on('click', function(){
      alert($('p').text())
      $('p').text('this is a new text')
    })


//$(this) => e.target


    $("#inp").on('keyup', function(){
        var val = $(this).val()
        console.log(val)
        $("#inpval").text(val)
    })


})


// $(document).ready(function(){

// })


//select element
//event 
//callback


var a = `

//text : 
    text()
    text(newVal)
// html
    html()
    html(newVal)
//value
    val()
    val(newVal)
//attribute
    attr(attName)
    attr(attValue, newVal)
//css
    css('font-size')
    css('font-size', 14)


//append(html)
//prepend(html)

`