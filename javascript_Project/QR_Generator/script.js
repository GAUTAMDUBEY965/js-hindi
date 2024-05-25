const input = document.getElementById('qr-input')
const button = document.getElementById('qr-btn')
const qrimg= document.getElementById('qr-img')

button.addEventListener('click', () => {
   const inputValue = input.value;

   if(!inputValue){
    alert('please enter a valid URL');
    return
   }
   else{
    qrimg.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
    qrimg.alt= `QR code for ${inputValue}`;
}
   
})
