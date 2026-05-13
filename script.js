// GSAP

gsap.registerPlugin(ScrollTrigger);

// LOADER

gsap.to(".loader",{

  opacity:0,
  duration:1.5,
  delay:1.5,

  onComplete:()=>{

    document.querySelector(".loader").style.display="none";

  }

});

// HERO ANIMATIONS

gsap.from(".subtitle",{

  y:50,
  opacity:0,
  duration:1,
  delay:2

});

gsap.from("h1",{

  y:80,
  opacity:0,
  duration:1.2,
  delay:2.2

});

gsap.from(".description",{

  y:40,
  opacity:0,
  duration:1,
  delay:2.5

});

gsap.from(".hero-btn",{

  y:40,
  opacity:0,
  duration:1,
  delay:2.8

});

// REVEAL ON SCROLL

gsap.utils.toArray(".reveal").forEach((element)=>{

  gsap.to(element,{

    scrollTrigger:{

      trigger:element,
      start:"top 82%"

    },

    opacity:1,
    y:0,

    duration:1.5,

    ease:"power4.out"

  });

});

// PARALLAX HERO

window.addEventListener("scroll",()=>{

  const scroll = window.pageYOffset;

  gsap.to(".hero-content",{

    y:scroll * 0.25,
    duration:1

  });

});

// MOBILE MENU

const hamburger =
document.querySelector(".hamburger");

const mobileMenu =
document.querySelector(".mobile-menu");

hamburger.addEventListener("click",()=>{

  mobileMenu.classList.toggle("active");

});

// CLOSE MENU WHEN CLICK

document.querySelectorAll(".mobile-menu a")
.forEach(link=>{

  link.addEventListener("click",()=>{

    mobileMenu.classList.remove("active");

  });

});