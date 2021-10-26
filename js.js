function operation()
{
  var n1 =parseFloat(document.getElementById('num1').value);
  var n2 = parseFloat(document.getElementById('num2').value); 
  
  document.getElementById("add").addEventListener("click", function(){
    document.getElementById("result").value=n1+n2;
  }); 

  document.getElementById("min").addEventListener("click", function(){
    document.getElementById("result").value=n1-n2;
  }); 

  document.getElementById("div").addEventListener("click", function(){
    document.getElementById("result").value=n1/n2;
  }); 

  document.getElementById("mul").addEventListener("click", function(){
    document.getElementById("result").value=n1*n2;
  }); 
}