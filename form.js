let btn = document.getElementById('btn');
btn.addEventListener('click',function(e){
  let Name1 =document.getElementById('Name1');
  let Name2 =document.getElementById('Name2');
  let Name3 =document.getElementById('Name3');
  let gender =document.getElementById('gender');
  let email =document.getElementById('email');
  let pincode =document.getElementById('pincode');
  let info = localStorage.getItem("info");

  if(info == null)
   {
     infoObj =[];
   }
  else
   {
     infoObj =JSON.parse(info);
   }

  let myObj ={
    firstName :Name1.value,
    LastName :Name2.value,
    Education:Name3.value,
    gender: gender.value,
    Email:email.value,
    pincode: pincode.value
  }
  infoObj.push(myObj);
  localStorage.setItem("info", JSON.stringify(infoObj));

  Name1.value ="";
  Name2.value ="";
  Name3.value ="";
  gender.value="";
  email.value="";
  pincode.value="";
 //a =prompt('Wants to submit');
    if (confirm('Wants to Submit')) {
        // Save it!
        console.log('saved');
      } else {
        // Do nothing!
        console.log('not saved');
      }

     alert('Thank You For Your Response:-)') ;
      
    });  
