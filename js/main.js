// Shorthand for $( document ).ready()
$(function() {
    
   const el = document.getElementById('op1');

   el.addEventListener("click", function(){
        const valuex = el.innerText;
       console.log(valuex);
   });

});