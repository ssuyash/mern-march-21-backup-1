//string literals  => premitive
//string object 

var str1 = 'suyash'
var str2 = "kumar"
var str3 = `this is
multiline string`

var str4 = new String("geeksdoor")

console.log(str1, str2, str3, str4)

console.log(typeof(str1), typeof(str4))


//props and Methods
console.log(str1.length)
console.log(str1[0])


//charAt()
console.log(str1.charAt(0))


//charCode 
console.log(str1.charCodeAt(0))



//@gmail.com
//endsWith()

var str = "kumarsuyash94@gmail.com"
console.log(str.endsWith("@gmail.com"))


//startWith()
console.log(str.startsWith("kumar"))



//concat()
var firstName = "suyash"
var lastName = "kumar"
var fullName = firstName.concat(lastName)
console.log(fullName)


//fromCharCode()
console.log(String.fromCharCode(112))


//includes()
console.log(str.includes("!"))


//indexOf() lastIndexOf()
var name = "suyash"
console.log(name.indexOf("s"))
console.log(name.lastIndexOf("s"))


//var name = "inna musa abu abdulla al khwarizmi"

//repeat()
console.log("*".repeat(10))

//"kumarsuyash94@gmail.com"


//replace() replaceAll()
var msg = "Dear USER_NAME Your order ORDER_NUMBER has been dipatched. your password is USER_NAME"

var send = msg
.replaceAll("USER_NAME", name)
.replaceAll("ORDER_NUMBER", "abc34")


//method chaining
console.log(send)
console.log(str.slice(-7, -1))


//split()
var str = "i love my india"
console.log(str.split('i'))

var wordCount = str.split(" ").length
console.log(wordCount)


var email = "helloworld@geeksdoor.com"
var start = email.slice(0, 3)
var end = email.slice(email.length-6, email.length)
var final = start+("*".repeat(email.length-8))+end
console.log(final)

function generateOTP(charCount){
    var str = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY"
    var otp = ""
    for(var i=0; i<charCount; i++){
        var rand = (Math.ceil(Math.random()*10000))%str.length
        otp += str[rand]
    }
    return otp
}



console.log(generateOTP(5))
// toUpper()
// toLower()
//reverse()

// 1) palindrome
// 2) str = "My Name is Suyash"
//     "yM emaN si hsayuS"
// 3) count any specific word in given string
//     str  = "india is a great country, india have 29 states, india has"
//     word = "india"
//     output : 3


//4) var str = "asdasdsdfasdfasdfsdafsdfsadfdf"
// output : {a:4, d:89, f:98}


