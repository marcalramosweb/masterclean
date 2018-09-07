// Shorthand for $( document ).ready()
$(function() {
    
   const el = document.getElementById('op1');

   el.addEventListener("click", function(){
     

    const tplimpeza = el.innerText;

    document.querySelector('.result-tipo-limpeza').textContent = tplimpeza;

   });

});