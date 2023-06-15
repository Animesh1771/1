// <h1 class=>JSON Server</h1>
var getcode = localStorage.getItem("code");
if(getcode == "secret"){

}else{
    window.location.href="home.html";
}
let tbody = document.getElementById("tbody")

const uname = localStorage.getItem("usernamestore");
const greetingElement = document.getElementById("greeting");
greetingElement.textContent = `Hello ${uname}`;
//const bookingData = data.bookingdata;
//console.log(bookingData);
const getuid = localStorage.getItem("userid");
const userId = localStorage.getItem("userid");
console.log(userId);
fetch(`http://localhost:8090/userdata/${getuid}`)
    .then(res => res.json())
    .then(jsson => {
        const bookingData = jsson.bookingdata;
        console.log(bookingData);
     
      
      bookingData.forEach(data => {

        console.log(data);
        tbody.append(td_fun(data));
      });
    })

function td_fun({ startdate, enddate, cdate, ctime,status,cost,bid,nor}){
    let td = document.createElement('tr');
    td.innerHTML = `
    <td class="px-6 py-4 whitespace-nowrap">
        <span class="text-sm text-gray-700 text-center font-bold">
            ${startdate}
        </span>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
        <span class="text-sm text-gray-700 text-center font-bold font-bold">
           ${enddate}
        </span>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
        <span class="text-sm text-gray-700 text-center font-bold">${ctime}</span>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
        <span class="text-sm text-gray-700 text-centerfont-bold font-bold">${cdate}</span>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
        <span class="text-sm text-gray-700 text-center font-bold">${status}</span>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
        <span class="text-sm text-gray-700 text-center font-bold">${nor}</span>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
    <span class="text-sm text-gray-700 text-center font-bold">${cost}</span>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
    
    <button type = "submit" class="bg-blue-800 hover:bg-blue-700 text-white  py-2 px-4 rounded " id="up" >UPDATE</button>
     </td>
     <td class="px-6 py-4 whitespace-nowrap">

   <button type = "submit" class="bg-red-800 hover:bg-red-700 text-white  py-2 px-4 rounded " id="del">DELETE</button>
    </td>
    
    `;


var updateButton = td.querySelector("#up");
  updateButton.addEventListener("click", ()=>{

    localStorage.setItem("tempbid",bid);
    localStorage.setItem("updatetemp","pass");
    localStorage.setItem("updateitemsd",startdate);
    localStorage.setItem("updateitemedate",enddate);
    localStorage.setItem("updateitemnor",nor);
    window.location.href = "boking.html";

    

  });

  var deleteButton = td.querySelector("#del");

  // DELETE PART
  deleteButton.addEventListener("click", ()=>{
    // Show the popup modal for confirmation
    let confirmation = confirm("Are you sure you want to delete this booking?");

    if(confirmation){
      const bookingIdToDelete = bid;

      fetch(`http://localhost:8090/userdata/${userId}`)
        .then(response => response.json())
        .then(user => {
          // Filter out the booking to delete from the bookingdata array
          user.bookingdata = user.bookingdata.filter(booking => booking.bid !== bookingIdToDelete);

          // Update the user's bookingdata
          fetch(`http://localhost:8090/userdata/${userId}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
          })
            .then(response => {
              if (response.ok) {
                console.log('Booking deleted successfully');
                window.location.href = "home.html";
              } 
            })
            .catch(err => {
                console.log("Error occured");
            });
        })
        .catch(err => {
            console.log("Error occured");
        });
    }
  });
  
  return td;
}