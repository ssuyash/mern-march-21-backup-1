var name = "madhya pradesh"
var firstNameInit = name[0]
var lastNameInit = name[name.indexOf(" ")+1]

var str = firstNameInit+lastNameInit

var charCode1 = firstNameInit.charCodeAt(0)
var charCode2 = lastNameInit.charCodeAt(0)

var charCode = `${charCode1}${charCode2}`
charCode = charCode.padStart(6, "0")

var colorCode = `#${charCode[0]}${charCode[1]}${charCode[2]}${charCode[3]}${charCode[4]}${charCode[5]}`
console.log(colorCode)

document.getElementById('name').innerHTML = str

document.getElementById('name').style.color = colorCode


