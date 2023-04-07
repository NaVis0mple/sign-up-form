  let inputvalid = document.querySelectorAll('input');
  inputvalid.forEach((inputvalid)=>{
    inputvalid.addEventListener('blur', function(event) {
        event.target.classList.remove('validate');
      });
    inputvalid.addEventListener('focus', function(event) {
        event.target.classList.add('validate');
      });
  });
  
