var str = "abcda"
var str1 = "cadab"


function getCharMap(str) {
    str = str.split("").sort()
    var count = {}
    for (var i = 0; i < str.length; i++) {
        if (str[i] in count) {
            count[str[i]]++
        } else {
            count[str[i]] = 1
        }
    }
    return count
}

if(JSON.stringify(getCharMap(str)) == JSON.stringify(getCharMap(str1))){
    console.log("anagram")
}else{
    console.log("non anagram")
}



//method 2
var strSort = str.split("").sort().join("")
var str1Sort = str1.split("").sort().join("")

if(strSort == str1Sort){
    console.log("anagram")
}else{
    console.log("non anagram")
}