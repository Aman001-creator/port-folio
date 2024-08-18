//active link hover script
document.addEventListener("DOMContentLoaded", function () {
    let navLinks = document.querySelectorAll('.navbar-nav a');

    window.addEventListener('scroll', function () {
        let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

        navLinks.forEach(link => {
            let sectionId = link.getAttribute('href').substring(1);
            let section = document.getElementById(sectionId);

            if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    });


    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);


            let offset = 0;
            if (window.innerWidth <= 768) {
                offset = document.querySelector('.navbar').offsetHeight;
            } else {
                offset = document.querySelector('.navbar').offsetHeight - 55;
            }

            window.scrollTo({
                top: targetSection.offsetTop + offset,
                behavior: 'smooth'
            });


            navLinks.forEach(navLink => {
                navLink.classList.remove('active');
            });

            this.classList.add('active');
        });
    });
});




//top script

document.addEventListener("DOMContentLoaded",function(){
    var scrollTopBtn = document.getElementById("scrollTopBtn");

    window.onscroll = function(){
        toggleScrollTopButton();
};

function toggleScrollTopButton(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop >20){
        scrollTopBtn.style.display = "block";
    }
    else{
        scrollTopBtn.style.display = "none";
    }
}

    function scrollToTop(){
        window.scrollTo({top:0, behaviour:"smooth"});
    }
    if(scrollTopBtn){
        scrollTopBtn.onclick = scrollToTop;
    }
});

//scroll reveal script
ScrollReveal({ 
    reset: true,
    distance:'80px',
    duration:2000,
    delay:200

});

ScrollReveal().reveal('.home-content, .heading', { origin:'top' });
ScrollReveal().reveal('.heading1', { origin:'bottom' });
ScrollReveal().reveal('.home-img, .project-box, .form-group', { origin:'bottom' });
ScrollReveal().reveal('.about-img', { origin:'bottom' });
ScrollReveal().reveal('.home-content h1', { origin:'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin:'left' });
ScrollReveal().reveal('.progress,.skill h3,.skill h6', { origin:'left' });

//typed js
const typed = new Typed('.multiple-text',{
    strings: ['Developer','Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

//email script
const form = document.querySelector('form');
const fullname = document.getElementById('fullname');
const email = document.getElementById('email');
const mobile = document.getElementById('mobile');
const subject = document.getElementById('subject');
const message = document.getElementById('message');

function sendEmail(){
    const bodyMessage = `Full Name: ${fullname.value}<br> Email: ${email.value}<br> Phone Number: ${mobile.value}<br> Message: ${message.value}`;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "itsakpro1@gmail.com",
        Password : "1B4D52693310A1EE88DBBF92AAA4C248EF67",
        To : 'itsakpro1@gmail.com',
        From : "itsakpro1@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => alert('Message sent sucessfully!')
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendEmail();
});
