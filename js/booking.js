var getcode = localStorage.getItem("code");
    if(!getcode == "secret"){
        window.location.href="homepage.html";
    }
    var flag = 0;

//const getid = localStorage.getItem('hid');
var getcount;
var totalcost;
var temp1;
const currentDate = new Date();
const ccdate = currentDate.toLocaleDateString();
const cctime = currentDate.toLocaleTimeString();



const button99 = document.getElementById("save");
    const sdate = document.getElementById("sdate");
    const edate = document.getElementById("edate");
    const noro = document.getElementById("norr")
    
    const userid = localStorage.getItem('userid');
    const userId = localStorage.getItem('userid');
const generatecostbutton = document.getElementById("gcost");
const para = document.getElementById("printcost");

const d2=document.getElementById("d");

generatecostbutton.addEventListener("click" , ()=>{

    // console.log("hello");
    // console.log(sdate.value);
    // console.log(sdate.value);
    
    let startDate = new Date(sdate.value);
    let endDate = new Date(edate.value);
    
    // Calculate the time difference in milliseconds
    let timeDifference = endDate.getTime() - startDate.getTime();
    
    // Calculate the number of days
    let numberOfDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    
     console.log(numberOfDays); 
    const getcost = localStorage.getItem("cost");
    temp1=getcost;

     totalcost = getcost * numberOfDays*noro.value;



    // const myDiv = document.getElementById("gcost");
    // myDiv.innerHTML = `<p>${totalcost}</p>`;
   //  console.log(totalcost);
    para.value = totalcost;
    const d1=document.createElement("h4");
    d1.innerHTML=`<p>${totalcost}</p>`;
    d2.append(d1);

    
});

  
const price=document.getElementById("price1");
// console.log(temp1);
// price.append(temp1);
button99.addEventListener("click" ,()=>{

    // console.log(3);
    // console.log(noro);
    // console.log(totalcost);
    console.log(31);
    fetch(`http://localhost:8090/userdata/${userId}`, ()=>{

    })
    .then(res=>res.json())
    .then((user)=>{
    
        let maxBid = 0;
          user.bookingdata.forEach(booking => {
            if (booking.bid > maxBid) {
              maxBid = booking.bid;
            }
          });
        
        maxBid = maxBid+1;
    
const newBookingData = {
    "startdate" : sdate.value,
    "enddate" : edate.value,
    "cdate" : ccdate,
    "ctime" : cctime,
    "cost" : `${totalcost}`,

    "nor" : noro.value,
    "bid" : maxBid,
    "status" : "success"
    

};

localStorage.setItem("bookid","newbid");


fetch(`http://localhost:8090/userdata/${userid}`)
  .then((res) => res.json())
  .then((user) => {

    user.bookingdata.push(newBookingData);

    
    fetch(`http://localhost:8090/userdata/${userid}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((updatedUser) => {
        alert("Processing payment");
        console.log(2);
        window.location.href = "payment_redirect.html";
        console.log(updatedUser);
      })
      .catch((error) => {
        console.log(error);
      });
  })
  .catch((error) => {
    console.log(error);
    // Error occurred while fetching userdata
  });
});
});

