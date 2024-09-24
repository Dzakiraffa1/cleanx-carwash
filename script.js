document.querySelectorAll('nav .navbar h3 a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetID = this.getAttribute('href');
      const targetElement = document.querySelector(targetID);
  
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    });
  });

// faq
const q = document.querySelectorAll('.q');  
const a = document.querySelectorAll('.a');  
const arr = document.querySelectorAll('.arrow'); 

for(let i = 0; i < q.length; i++) {
    q[i].addEventListener('click', () => {
        a[i].classList.toggle('a-opened');  
        arr[i].classList.toggle('arrow-rotated'); 
    });
}


function bookNow1() {
    const phoneNumber = '6281808151558'; 
    const message = 'Hello, I would like to book a car wash service.'; 
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
}


document.getElementById('booking-btn').addEventListener('click', bookNow1);


  

