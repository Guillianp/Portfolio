const hamburgerMenu = document.querySelector('#navigation .nav-icon');
const navContent = document.querySelector('#nav-content');
const closeNavButton = document.querySelector('#nav-content .close-btn');
const navLinks = document.querySelectorAll('#nav-content nav ul li a');
const scrollButton = document.querySelector(".scroll-top");

// scroll TOP Button Events

if(scrollButton){
  window.addEventListener('scroll', ()=> {
    if(pageYOffset > (window.innerHeight * 1.2)){
      scrollButton.style.display="flex";
    }else{
      scrollButton.style.display="none";
    }
  });
  scrollButton.addEventListener("click", () => {
    window.scrollTo(0, 0);
  });
}

// Hamburger Menu events
hamburgerMenu.addEventListener('click', ()=>{
  navContent.classList.add('show');
  document.body.style.overflow="hidden";
});
closeNavButton.addEventListener('click', ()=>{
  navContent.classList.remove('show');
  document.body.style.overflow="initial";
});
navLinks.forEach( link => {
  link.addEventListener('click', ()=> {
    navContent.classList.remove('show');
    document.body.style.overflow="initial";
  })
})

// //contact form validation
// function validate(){
//   var name = document.getElementById("name").value;
//   var email = document.getElementById("email").value;
//   var message = document.getElementById("message").value;
//   var error_message = document.getElementById("error_message");
  
//   error_message.style.padding = "10px";
  
//   var text;
//   if(name.length < 5){
//     text = "Please Enter valid Name";
//     error_message.innerHTML = text;
//     return false;
//   }
//   if(subject.length < 10){
//     text = "Please Enter Correct Subject";
//     error_message.innerHTML = text;
//     return false;
//   }
//   if(isNaN(phone) || phone.length != 10){
//     text = "Please Enter valid Phone Number";
//     error_message.innerHTML = text;
//     return false;
//   }
//   if(email.indexOf("@") == -1 || email.length < 6){
//     text = "Please Enter valid Email";
//     error_message.innerHTML = text;
//     return false;
//   }
//   if(message.length <= 140){
//     text = "Please Enter More Than 140 Characters";
//     error_message.innerHTML = text;
//     return false;
//   }
//   alert("Form Submitted Successfully!");
//   return true;
// }