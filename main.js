const btn = document.getElementById('btn');
const email = document.getElementById('email');
const maincard = document.getElementById('maincard');
const thankcard = document.getElementById('thankcard');
const emailid = document.getElementById('email-id');
const dismiss = document.getElementById('dismiss');
const error = document.getElementById('error');
console.log(error);


btn.addEventListener('click', () => {
  

    if (email.value =="") {
      error.innerHTML="valid email required"
        
    } else {
       emailid.innerText=email.value;
       maincard.setAttribute('aria-hidden', 'true');
       thankcard.setAttribute('aria-hidden', 'false');
    }
});
dismiss.addEventListener('click', () => {
    maincard.setAttribute('aria-hidden', 'false');
    thankcard.setAttribute('aria-hidden', 'true');

});
