// login validation of user
const login=document.getElementById("login");
const uemail=document.getElementById("uemail");
const upass=document.getElementById("upass");
let flag=1;

login.addEventListener("click",()=>{
    check();
})

function check(){
    fetch("http://localhost:8090/userdata",{
        method:"GET",
    })
    .then((r)=>r.json())
    .then((a)=>{
    a.forEach((el) => {
        if(uemail.value==el.emailid && upass.value==el.password){
            localStorage.setItem('usernamestore',el.username);
            localStorage.setItem('emailstore' , el.emailid);
            localStorage.setItem('userid',el.id);
            localStorage.setItem("code","secret");
            // window.location.href = "homepage.html";
            window.location.href = "home.html";
            flag=0;
        }
    })
    if(flag===1){
        alert("Please enter valid Email and Password");
    }
    })
}