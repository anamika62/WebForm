console.log('button');
let btn = document.getElementById('btn');
let Name = document.getElementById('Name');
btn.addEventListener('click',function(e){
    //a =prompt('Wants to submit');
    if (confirm('Wants to Submit')) {
        // Save it!
        console.log('saved');
      } else {
        // Do nothing!
        console.log('not saved');
      }
      
    });  
    
    localStorage.setItem('Name',Name);
     // function saving();

// let Name = document.getElementById('Name');
// window.localStorage.setItem('Name');
// let Name = localStorage.getItem("notes");
//   if (Name == null) {
//     NameObj = [];
//   } else {
//     NameObj = JSON.parse(notes);
//   }
//   console.log(Name);

