var getcode = localStorage.getItem("code");
if(getcode == "secret"){

}else{
    window.location.href="home.html";
}

const getid = localStorage.getItem('hid');
if(getid === ""){
    window.location.href = "homepage.html";
}
console.log(getid);
const hoteldetail = document.getElementById("hoteldetail");
const llmark=document.getElementById("lmark");
const aamark=document.getElementById("amark");
const hhmark=document.getElementById("hmark");
const ddmark=document.getElementById("pmark");
fetch(`http://localhost:8090/hoteldata/${getid}`)
.then(respo=>respo.json())
.then((el) => {
    // console.log(el);
    const lmark=document.createElement("h1");
    const amark=document.createElement("p");
    lmark.innerText=el.landmark;
    amark.innerHTML=el.aboutlm;
    llmark.append(lmark);
    aamark.append(amark);

    const div = document.createElement("div");
    div.id = "tempdiv";
    const child1 = document.createElement("div");
    const child2 = document.createElement("div");
    const child3 = document.createElement("div");
    const image1 = document.createElement("img");
    const image2 = document.createElement("img");
    const image3 = document.createElement("img");
    const image1desc = document.createElement("h3");
    const image2desc = document.createElement("h3");
    const image3desc = document.createElement("h3");
    const desc1=document.createElement("p");
    const desc2=document.createElement("p");
    const desc3=document.createElement("p");
    const button1=document.createElement("button");
    const button2=document.createElement("button");
    const button3=document.createElement("button");
    const hmark=document.createElement("h1");
    const dmark=document.createElement("p");

    child1.id="cdiv";

    hmark.innerHTML=el.hmark;
    dmark.innerHTML=el.dmark;
    // console.log(hmark);
    hhmark.append(hmark);
    ddmark.append(dmark);
    



    button1.innerText="Book Now";
    button2.innerText="Book Now";
    button3.innerText="Book Now";
    button1.id="butt";
    button2.id="butt";
    button3.id="butt";

    image1.src = el.hotelimage1;
    image2.src = el.hotelimage2;
    image3.src = el.hotelimage3;
    image1.id = "imgsize";
    image2.id = "imgsize";
    image3.id = "imgsize";
 
    image1desc.innerText = el.hotelimagedescription1;
    image2desc.innerText = el.hotelimagedescription2;
    image3desc.innerText = el.hotelimagedescription3;
    image1desc.id="idesc";
    image2desc.id="idesc";
    image3desc.id="idesc";

    desc1.innerHTML=el.hdescription1;
    desc2.innerHTML=el.hdescription2;
    desc3.innerHTML=el.hdescription3;
    desc1.id="desc";
    desc2.id="desc";
    desc3.id="desc";





    child1.append(image1,image1desc,desc1,button1);
    child2.append(image2,image2desc,desc2,button2);
    child3.append(image3,image3desc,desc3,button3);
    div.append(child1,child2,child3);

    hoteldetail.append(div);

    button1.addEventListener("click" , ()=>{
        strFloat = el.cost1;
        let floatValue = parseFloat(strFloat);
        localStorage.setItem("cost", floatValue);
        window.location.href = "booking.html";
    });

    button2.addEventListener("click" , ()=>{

        strFloat = el.cost2;
        let floatValue = parseFloat(strFloat);
        localStorage.setItem("cost", floatValue);
        window.location.href = "booking.html";
    });

    button3.addEventListener("click" , ()=>{
        strFloat = el.cost3;
        let floatValue = parseFloat(strFloat);
        localStorage.setItem("cost", floatValue);
        window.location.href = "booking.html";
    });
});


const logoutbutton = document.getElementById("logoutbut");
logoutbutton.addEventListener("click" ,()=>{
    localStorage.removeItem('usernamestore');
      localStorage.removeItem('emailstore');
      localStorage.removeItem('userid');
      localStorage.removeItem('hid');
      localStorage.removeItem('cost');
      localStorage.setItem('code',"logout");
      window.location.reload();
});