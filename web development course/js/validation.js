function validateForm(){
  for(var i = 0; i < myform.elements.length; i++)
  {
          if (myform.elements[i].className == 'req' && myform.elements[i].value.length == 0)
          {
            alert("Please, complete all required fields!");
            return false;
          }
  }

  var email = document.getElementById('email').value;
  var atpos = email.indexOf('@');
  var dotpos = email.lastIndexOf('.');
  if(atpos < 3 || dotpos < atpos+2 || dotpos+2 >= x.length){
     alert("Please enter a valid email!");
     return false;
  }
}
