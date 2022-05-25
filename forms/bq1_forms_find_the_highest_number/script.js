let button = document.querySelector('#process')
button.addEventListener('click', function(){

   let num1 = Number(document.querySelector("#num1").value);
   let num2 = Number(document.querySelector("#num2").value);
   let num3 = Number(document.querySelector("#num3").value);


   if(num1>num2 && num1>num3)
   {
      console.log(num1, "= greatest");
   }
   else if(num2>num1 && num2>num3)
   {
      console.log(num2 ,"= greatest");
   }
   else {
      console.log(num3 ,"= greatest")
   }



})