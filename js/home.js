var getcod = localStorage.getItem("code");
const d=document.getElementById("k");
if(getcod == "secret"){
    const list3=document.createElement("li");
    const log=document.createElement("a");
    log.innerHTML="Logout";
    list3.append(log);
    d.append(list3);
    log.addEventListener("click" ,()=>{
    localStorage.removeItem('usernamestore');
    localStorage.removeItem('emailstore');
    localStorage.removeItem('userid');
    localStorage.removeItem('hid');
    localStorage.removeItem('cost');
    localStorage.setItem('code',"logout");
    window.location.reload();
})

}else{
   const list1=document.createElement("li");
    const list2=document.createElement("li")
    const l=document.createElement("a");
    const s=document.createElement("a");
    l.innerHTML="Login";
    s.innerHTML="Signup";
    list1.append(l);
    list2.append(s);
    d.append(list1,list2);
    l.addEventListener("click",()=>{
        window.location.href = "login.html";
    })
    s.addEventListener("click",()=>{
        window.location.href = "signup.html";
    })
}

fetch("http://localhost:8090/hoteldata",{
    method:"GET",
})
.then((r)=>r.json())
.then((data)=>{
    const hotel=document.getElementById("show");
    data.forEach((el)=>{
        const div=document.createElement("div");
        div.id="temp";
        const image=document.createElement("img");
        image.src=el.image;
        const location=document.createElement("h3");
        location.innerText=el.location;
        location.id="title";
        image.addEventListener("click",()=>{
          var getcode = localStorage.getItem("code");
            if(getcode == "secret"){
                const eleid = el.id;
                window.localStorage.setItem('hid' ,eleid );
                window.location.href = "hoteldetails.html";
            }else{
               alert("Want to Book.You need to first register");
            }

        })
        div.append(image,location);
        hotel.append(div);
    });
})


