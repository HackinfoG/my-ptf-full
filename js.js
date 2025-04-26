// nav bar icon toggle
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

if (window.innerWidth <= 768) {
    document.querySelectorAll('.animate, .animate.scroll').forEach(el => {
      el.classList.remove('animate');
      el.classList.remove('scroll');
    });
  }
  
// scroll section
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");
window.onscroll =()=> {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop  -100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
            });
            // active section for animation on the scroll
            sec.classList.add("show-animate");
            
        }

        // if want to use animation that resects  on the scrolls use this
        else {
            sec.classList.remove("show-animate");
        }
    });
    // stricky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    //remove toggle icon and navbar when click navbar link (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animation footer on scroll 
    let footer = document.querySelector('footer');
    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
    // Example: Delay border showing
setTimeout(() => {
    document.querySelectorAll('.btn-box, .education-box').forEach(el => {
      el.classList.remove('hide-border');
    });
  }, 1000); // Animation duration ke baad
  
}