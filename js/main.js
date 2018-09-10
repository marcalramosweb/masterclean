// Shorthand for $( document ).ready()
$(function() {
    
   const el = document.getElementById('op1');
   const el2 = document.getElementById('op2');
   const tplimpeza2 = el2.innerText;
   const tplimpeza = el.innerText;

   el.addEventListener("click", function(){

    document.querySelector('.result-tipo-limpeza').textContent = tplimpeza;
    document.querySelector('.styled-radio-1 label').style.border = '2px solid #10b2e7';

   });

   el2.addEventListener("click", function(){
    
    document.querySelector('.result-tipo-limpeza2').textContent = tplimpeza2;
   });

});