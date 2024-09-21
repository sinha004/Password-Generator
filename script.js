const passwordBox = document.getElementById("password");
const length = 12;

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|}{[]<>/-=";

const allchars = uppercase+lowercase+number+symbol;

function createPassword(){
    password = "";
    password += uppercase[Math.floor(Math.random()*uppercase.length)];
    password += lowercase[Math.floor(Math.random()*lowercase.length)];
    password += number[Math.floor(Math.random()*number.length)];
    password += symbol[Math.floor(Math.random()*symbol.length)];

    while(length>password.length)
    {
        password += allchars[Math.floor(Math.random()*allchars.length)];
    }

    passwordBox.value = password
}


function copyPassword(){
    passwordBox.select();
    document.execCommand("copy")
}