const seccionesOcultas = document.querySelectorAll('.esconder');
const navLinks = document.querySelectorAll('#Nvar div ul li a');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        entry.target.classList.toggle('mostrar', entry.isIntersecting);
    });
},
        {
            threshold: 0.4,
        });



    seccionesOcultas.forEach((seccion) => observer.observe(seccion));


    let typed = new Typed('.typed', {
        strings: ['Yo soy Elton Cruz', 'Soy Desarrollador de software'],
        typeSpeed: 75,
        loop: true,
        backSpeed: 72,
        showCursor: true,
        startDelay: 200,
    });


    