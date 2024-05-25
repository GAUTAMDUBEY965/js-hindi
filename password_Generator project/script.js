const inputfiled= document.getElementById('input');
const displayfiled= document.getElementById('msg');

inputfiled.addEventListener('input', function(){
    let password = inputfiled.value;
    if(password < 8){
        displayfiled.innerText='password is too short'
        displayfiled.style.color='red'
    }
      else if(password.search(/[a-z]/) == -1){
        displayfiled.innerText='password is missing lowercase letter'
        displayfiled.style.color='red'
    } else if(password.search(/[A-Z]/)==-1){
        displayfiled.innerText='password is missing uppercase letter'
        displayfiled.style.color='red'
    
    } else if(password.search(/[0-9-]/)==-1){

        displayfiled.innerText='password is missing numeric letter'
        displayfiled.style.color='red'
    
    }else if(password.search(/[\@\#\$\%\^\&\*\(\)\_\=\+\|\[\]\{\}\;\:\ ]/) ==-1){
        displayfiled.innerText='password is missing specail letter'
        displayfiled.style.color='red'
    }else{
        displayfiled.innerText='password is strong'
        displayfiled.style.color='green'
    }
       
})

