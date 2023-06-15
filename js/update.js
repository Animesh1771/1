




const updatetempval = localStorage.getItem("updatetemp");
const getcode = localStorage.getItem("code");
if(updatetempval === "pass" && getcode === "secret"){
    console.log(3);

    const sdatee = localStorage.getItem("updateitemsd");
    const edatee = localStorage.getItem("updateitemedate");
    const bookid = localStorage.getItem("tempbid");
    const nor = localStorage.getItem("updateitemnor");


    console.log(sdatee);

    const startDateInput = document.getElementById('sdate');
    const endDateInput = document.getElementById('edate');
    const numberofrooms = document.getElementById('norr');
    startDateInput.value = sdatee;
    endDateInput.value = edatee;
    numberofrooms.value = nor;

    const userid = localStorage.getItem('userid');
    const userId = localStorage.getItem('userid');
    const generatecostbutton = document.getElementById("gcost");
    const para = document.getElementById("printcost");

    const currentDate = new Date();
    const ccdate = currentDate.toLocaleDateString();
    const cctime = currentDate.toLocaleTimeString();


generatecostbutton.addEventListener("click" , ()=>{

        console.log("23");
    
        const startDate = new Date(sdate.value);
        const endDate = new Date(edate.value);
        
        // Calculate the time difference in milliseconds
        const timeDifference = endDate.getTime() - startDate.getTime();
        
        // Calculate the number of days
        const numberOfDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        
         console.log(numberOfDays); 
        const getcost = localStorage.getItem("cost");
    
         totalcost = getcost * numberOfDays*noro.value;
        const myDiv = document.getElementById("totalcost34");
        myDiv.innerHTML = `<p>${totalcost}</p>`;
       //  console.log(totalcost);
        para.value = totalcost;
        
    });

    const button2 = document.getElementById("save");
    const sdate = document.getElementById("sdate");
    const edate = document.getElementById("edate");
    const noro = document.getElementById("norr")

    fetch(`http://localhost:8090/userdata/${userid}`)
    .then((res) => res.json())
    .then((user) => {
  
      
      //console.log(user.bookingdata.length);
      console.log(parseInt(bookid));
    });



    button2.addEventListener("click" ,()=>{

        fetch(`http://localhost:8090/userdata/${userId}`)
        .then(res => res.json())
        .then(user => {
          const updatedBookingData = {
            startdate: sdate.value,
            enddate: edate.value,
            cdate: ccdate,
            ctime: cctime,
            cost: `${totalcost}`,
            nor: noro.value,
            bid: bookid,
            status: "success"
          };
      
        // console.log(24);
        // console.log(user.bookingdata[0].bid == bookid);
        
        // console.log(bookid);
        // console.log("eh");
     
    let bookingIndex = -1;

    for (let i = 0; i < user.bookingdata.length; i++) {
        if (user.bookingdata[i].bid == bookid) {
          bookingIndex = i;
          break;
        }else{
            //console.log(user.bookingdata.bid);
        }
      }

      console.log(user.bookingdata[0].bid);
      
      if (bookingIndex !== -1) {
      
        user.bookingdata[bookingIndex] = updatedBookingData;
  
        fetch(`http://localhost:8090/userdata/${userId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        })
          .then(response => {
            if (response.ok) {
              window.location.assign("showdata.html");
               localStorage.removeItem("temporary");
        localStorage.setItem("updatetemp","fail");
        localStorage.removeItem("updateitemsd");
        localStorage.removeItem("updateitemedate");
        localStorage.removeItem("updateitemnor");
            } else {
              throw new Error("Failed to update booking");
            }
          })
          .catch(error => {
            console.log("Error occured");
          });
      } else {
        console.log('Booking not found');
      }
    })
    .catch(error => {
      console.log("Error occured");
    });

    });

        
    
        


}else{

   
        window.location.href = 'home.html';
    
    
}