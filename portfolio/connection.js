// Portfolio JS

let textLength = 0;
let text = "(In process of being a) Full Stack Developer and (actual) Systems Engineering degree (Student) ;)";

function type() {
    let textChar = text.charAt(textLength++);
    let paragraph = document.getElementById("typed");
    let charElement = document.createTextNode(textChar);
    paragraph.appendChild(charElement);
    if (textLength < text.length + 1) {
        setTimeout('type()', 50);
    } else {
        text = 'Python and Web Developer - Systems Engineering Student';
    }
}
document.addEventListener("DOMContentLoaded", function () {
    type()
}); 

function linkedin(){
    window.location.href="https://www.linkedin.com/in/juan-pablo-baron-sandoval-a17b51262/";
}
function git(){
    window.location.href="https://github.com/juanpablob11";
}
function instagram(){
    window.location.href="https://www.instagram.com/jp_baron10/"
}
function gmail(){
    window.location.href="https://www.instagram.com/jp_baron10/"
}