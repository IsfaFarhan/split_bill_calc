function additem() {

 const parentElement = document.getElementById('user1');
 const childElement = parentElement.querySelector('#useritem')
  // Clone the useritem div
  const newUserItem = childElement.cloneNode(true);
  
  // Update the ID of the cloned div
  const newIdIndex = document.querySelectorAll("[id^='useritem']").length + 0;
  newUserItem.id = "useritem" + newIdIndex;

  // Update the IDs of the input elements inside the cloned div
  newUserItem.querySelectorAll("[id^='item']").forEach((input, index) => {
      input.id = "item" + newIdIndex + "-" + (index + 0);
      /* input.placeholder = (index + 1) + "item price"; */
  });
  
  // Update the label for the cloned element
  newUserItem.querySelector("label").textContent = "Item " + newIdIndex + " :";
  
  // Append the cloned useritem div
  document.body.insertBefore(newUserItem, document.querySelector('.addbuttons'));
}

function adduser() {

     // Clone the useritem div
     const newUser = document.getElementById('user1').cloneNode(true);
     
     // Update the ID of the cloned div
     const newIdIndex = document.querySelector("[id^='username']").length + 0;
     newUser.id = "username" + newIdIndex;
   
     // Update the IDs of the input elements inside the cloned div
     newUser.querySelectorAll("[id^='username']").forEach((input, index) => {
         input.id = "user" + newIdIndex + "-" + (index + 0);
         // input.placeholder = (index + 1) + "item price";
     });
     
     // Update the label for the cloned element
    /*   newUserItem.querySelector("label").textContent = "Item " + newIdIndex + " :"; */
     
     // Append the cloned useritem div
     document.body.insertBefore(newUser, document.querySelector('.addbuttons'));
   }