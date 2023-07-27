// -------about-section-------

const tabs = document.querySelectorAll('.tab-links');
const all_content = document.querySelectorAll('.tab-contents');

tabs.forEach((tab, index)=>{
    tab.addEventListener('click',(e)=>{
        tabs.forEach(tab=>{tab.classList.remove('active-link')});
        tab.classList.add('active-link');


        all_content.forEach(content=>{content.classList.remove('active-tab')});
    all_content[index].classList.add('active-tab');
    })
})


// ---------------sidemenu------------

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-200px";
}


// -----------------contactform----------------


  const scriptURL = 'https://script.google.com/macros/s/AKfycbz67OIFxdyk_daIs5gxRsTiu9VgvQot5r3lVD1Ufo_BnOcKKy88iNLH9Sa6LQOh-VoC/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {msg.innerHTML= "Message sent successfully"
      setTimeout(function(){
        msg.innerHTML = ""
      },5000)
      form.reset()
    })
      .catch(error => console.error('Error!', error.message))
  })