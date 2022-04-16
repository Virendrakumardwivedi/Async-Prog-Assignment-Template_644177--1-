


let regluruser =  JSON.parse(localStorage.getItem("userCreds"))

function data(e, p, ){
    this.email=e;
    this.password=p;
}


function logfun(e) {
    e.preventDefault();

    let form = document.getElementById("log")

    let email = form.email.value;
    let password = form.pass.value;

    for(let i=0; i<regluruser.length; i++){
        console.log(regluruser[i])
        if (
            regluruser[i].email == email &&
            regluruser[i].password == password
          ) {
            alert("login success");
            window.location.href = "index.html";
            break;
          } else {
            console.log("login failed");
        }
    }
}