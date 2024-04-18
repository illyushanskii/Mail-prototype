let log = "user";
let pass = "user21";

function start(){
    let atr = document.createAttribute("style");
    atr.value = "visibility: hidden;";
    let elem = document.getElementById("visible");
    elem.setAttributeNode(atr);
    atr = document.createAttribute("style");
    atr.value = "transition-duration: 0s;";
    elem = document.getElementById("bthEm");
    elem.setAttributeNode(atr);
    document.getElementById("out").value ="";
    document.getElementById('login').focus()
}

function logIn(){
    let login = document.getElementById("login").value;
    let password = document.getElementById("password").value;
    let checkbox = document.getElementById("check").checked;
    if(login != log){
        start();
        alert("Не уведений або не коректний логин.");
        return;
    }
    else if(!checkbox && password !=pass){
        start();
        document.getElementById('password').focus()
        alert("Не уведений або не коректний пароль. Введіть пароль.");
        document.getElementById('password').value = "";
        return;
    }
    else{
        let atr = document.createAttribute("style");
        atr.value = "visibility: visible;";
        let elem = document.getElementById("visible");
        elem.setAttributeNode(atr);
        atr = document.createAttribute("style");
        atr.value = "transition-duration:.5s;";
        elem = document.getElementById("bthEm");
        elem.setAttributeNode(atr);
    }
}

function send(){
    let enter = document.getElementById("in").value;
    document.getElementById("out").value = enter;
}