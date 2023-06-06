var form = document.getElementById("frm")
var namee = document.getElementById("name")
var email = document.getElementById("email")
var body = document.getElementById("body")
var btn = document.getElementById("btn")

function sendmsg(){
    Email.send({
        SecureToken : "c09c7938-8700-47d6-ad69-32836297d0f4",
        To : 'zayman655@gmail.com',
        From : 'zayman655@gmail.com',
        Subject : email.value,
        Body : namee.value + ':' + body.value
    }).then(
        message => alert("Email sent")
    )
}
form.addEventListener("submit",function(event){
    event.preventDefault()
    sendmsg()
})
