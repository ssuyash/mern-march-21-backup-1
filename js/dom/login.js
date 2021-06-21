var lgnBtn = document.getElementById('btnLogin');
var inpUsername = document.getElementById('username')
var inpPassword = document.getElementById('password')
var msgPara = document.getElementById('msg')

lgnBtn.addEventListener('click',function(){
    if(inpUsername.value == "abc" && inpPassword.value == "12345"){
        document.location = "http://www.google.com"
    }else{
        msgPara.innerText = "invalid username or password"
        
    }

})