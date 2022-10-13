
let typed = new Typed('.typed', {
    strings: ['Yo soy Elton Cruz','Soy software Developer', 'Soy web Developer', 'Soy mobile Developer' ,'Soy web Designer','Soy UI/UX Designer'] ,
    typeSpeed: 75,
    loop: true,
    backSpeed: 72,
    showCursor: true,
    startDelay: 200,
});


window.addEventListener("scroll", inte);





function scr (){
    let scrol = this.window.scrollY;
    let heade = document.getElementById("heade");

    if (scrol > 10) {

        heade.style.borderBottom = "2px solid #72b9ea";
  
    
    } else {
        heade.style.borderBottom = "none"
    }
        

}
function inte(){
    scr ();
    scr1();
}

function scr1(){
    let scrol = this.window.scrollY;
    let Inicio = document.getElementById("Lst1");
    let About = document.getElementById("Lst2");
    let Skills = document.getElementById("Lst3");
    let Projects = document.getElementById("Lst4");
    let Contats = document.getElementById("Lst5");

    if (scrol >= 0 && scrol <= 600) {
        Limpiar();
        Inicio.style.textShadow = "0 0 4px #72b9ea" ;
        Inicio.style.boxShadow = "0 0 4px #72b9ea" ; 
        Inicio.style.color = "#72b9ea" ;      
    }
    else if (scrol > 600 && scrol <= 1100) {
        Limpiar();
        About.style.textShadow = "0 0 4px #72b9ea" ;
        About.style.boxShadow = "0 0 4px #72b9ea" ; 
        About.style.color = "#72b9ea" ;      
    }
    else if (scrol > 1100 && scrol <= 1650) {
        Limpiar();
        Skills.style.textShadow = "0 0 4px #72b9ea" ;
        Skills.style.boxShadow = "0 0 4px #72b9ea" ; 
        Skills.style.color = "#72b9ea" ;      
    }
    else if (scrol > 1650 && scrol <= 1900) {
        Limpiar();
        Projects.style.textShadow = "0 0 4px #72b9ea" ;
        Projects.style.boxShadow = "0 0 4px #72b9ea" ; 
        Projects.style.color = "#72b9ea" ;      
    }
    else {
        Limpiar();
        Contats.style.textShadow = "0 0 4px #72b9ea" ;
        Contats.style.boxShadow = "0 0 4px #72b9ea" ; 
        Contats.style.color = "#72b9ea" ; 
    }

}

function Limpiar(){
    let Inicio = document.getElementById("Lst1");
    let About = document.getElementById("Lst2");
    let Skills = document.getElementById("Lst3");
    let Projects = document.getElementById("Lst4");
    let Contats = document.getElementById("Lst5");

    Inicio.style.textShadow = "none" ;
    Inicio.style.boxShadow = "none" ; 
    Inicio.style.color = "#337eab" ; 
    
    Skills.style.textShadow = "none" ;
    Skills.style.boxShadow = "none" ; 
    Skills.style.color = "#337eab" ; 
    
    Projects.style.textShadow = "none" ;
    Projects.style.boxShadow = "none" ; 
    Projects.style.color = "#337eab" ; 
    
    Contats.style.textShadow = "none" ;
    Contats.style.boxShadow = "none" ; 
    Contats.style.color = "#337eab" ; 
    
    About.style.textShadow = "none" ;
    About.style.boxShadow = "none" ; 
    About.style.color = "#337eab" ; 
    





}

    var swiper = new Swiper(".mySwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

        slidesPerView: 1,
        spaceBetween: 10,


        breakpoints: {
            620: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            680: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            920: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1240: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          } 
      });

  function  Adapted(){
        let vara = document.getElementById("heade");
        vara.style.backgroundColor = "#180539";
      }