// $(document).ready(function() {
//     // Keydown event for physical keyboards
//     $(document).keydown(function(event) {
//       var key = event.key.toUpperCase();
//       var button = $('#keyboard button:contains(' + key + ')');
//       button.addClass('active');
//     });
  
//     // Touchstart event for touchscreen devices
//     $('#keyboard button').on('touchstart', function(event) {
//       event.preventDefault();
//       var key = $(this).text().toUpperCase();
//       $(this).addClass('active');
//     });
  
//     // Keyup event for physical keyboards
//     $(document).keyup(function(event) {
//       var key = event.key.toUpperCase();
//       var button = $('#keyboard button:contains(' + key + ')');
//       button.removeClass('active');
//     });
  
//     // Touchend event for touchscreen devices
//     $('#keyboard button').on('touchend', function(event) {
//       event.preventDefault();
//       $(this).removeClass('active');
//     });
//   });
let saveRegistrationInfo= ()=>{
    console.timeLog('SWATI');
    //object.method()
    let fn = document.getElementById("first_name").value;
    let ln = document.getElementById("last_name").value;

    console.log(fn);
    console.log(ln);
    window.localStorage.setItem('first_name',fn);
    window.localStorage.setItem('last_name',ln);
    // To reload Page in JavaScript
    window.location.reload();
}

let logout= ()=>{
    // To clear/Logout Page in JavaScript
    window.localStorage.clear();
    // To reload Page in JavaScript
    window.location.reload();

}

//    ()(); IIFE 
(()=>{
    let fn = window.localStorage.getItem('first_name');
    let ln = window.localStorage.getItem('last_name');
    console.log('Page Loaded Successfully');
    //Get a reference to the modal element
    var modal = document.getElementById('registrationModal');

    //create a Bootstrap modal instance using the modal element
    var modalInstance = new bootstrap.Modal(modal);
    
    //call the 'show' method on the modal instance to launch the modal
    console.log(fn);
    if(fn === null){
        //True
        modalInstance.show();
    }

    //check if the local storage is set or not
    if(fn !== null){
        document.querySelector('.s_welcome').innerHTML = 'Welcome '+ fn + " "+ln+'<button class="btn btn-sm btn-danger ms-4" onclick="logout()">Logout</button>';
    }

})();
