// add user data in data.json 
console.log(2);
const uname=document.getElementById("uname");
const upass=document.getElementById("upass");
const uemail=document.getElementById("uemail");
const phone=document.getElementById("phone");
const aadhar=document.getElementById("aadhar");
const signup=document.getElementById("signup");
 console.log(2);
signup.addEventListener("click",()=>{
    console.log(2);
    if(uname.value==""){
        alert("Please enter your name");
    }
    else if(uemail.value==""){
        alert("Please enter your Email Id");
    }
    else if(upass.value==""){
        alert("Please enter your password");
    }
    else if(phone.value==""){
        alert("Please enter your Phone number");
    }
    else if(aadhar.value==""){
        alert("Please enter your Aadhar number");
    }
    else{
        add();
    }
})

function add(){
    const obj={
        username:uname.value,
        password:upass.value,
        emailid:uemail.value,
        phone:phone.value,
        aadhar:aadhar.value,
        "bookingdata":[],
        // id:Date.now(),
    };
    fetch("http://localhost:8090/userdata",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(obj),
    })
    .then((response) => response.json())
    .then((data) => {
        // console.log(data);
        window.location.href = "login.html";
            // alert("Account created");
        })
    .catch((err) => console.log(err));
}