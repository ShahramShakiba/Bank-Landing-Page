//==>> NavBar ========================================
const navBar = document.querySelector('header'),
  sections = document.querySelectorAll('section'),
  activeNavLink = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    navBar.classList.add('bg-neutral-900');
    navBar.style.zIndex = '999'; //=> Set z-index to a higher-value
  } else {
    navBar.classList.remove('bg-neutral-900');
    navBar.style.zIndex = '99'; //=> Reset z-index to the original-value
  }
});

//=> toggle active-link on scroll
const toggleActiveLink = () => {
  const scrollPosition = window.scrollY;

  sections.forEach((section) => {
    //=> Gets the top offset position of each section and subtracts 60 pixels to account for the height of the navbar
    const sectionTop = section.offsetTop - 60;
    const sectionID = section.getAttribute('id');

    if (scrollPosition >= sectionTop) {
      Array.from(activeNavLink).forEach((link) => {
        link.classList.remove('text-amber-400');

        // slice(1)=> to remove the hash-symbol(#) followed by the section ID, like: #home
        // console.log(link.getAttribute('href').slice(1));
        if (link.getAttribute('href').slice(1) === sectionID) {
          link.classList.add('text-amber-400');
        }
      });
    }
  });
};

window.addEventListener('scroll', toggleActiveLink);
//========================================================

//=> Toggle active-link on click
activeNavLink.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); //=> Prevent the default behavior of the link

    //=> Get the target section id
    const navID = link.getAttribute('href').slice(1);

    const targetSection = document.getElementById(navID);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth', 
      });
    }
  });
});

//==>> Hamburger Menu ================================

const hamburgerIcon = document.querySelector('.hamburger'),
  navList = document.querySelector('#menu'),
  navLinks = document.querySelectorAll('#menu a'),
  closeIcon = document.querySelector('.close');

hamburgerIcon.addEventListener('click', () => {
  navList.classList.toggle('hidden');
});

closeIcon.addEventListener('click', () => {
  navList.classList.add('hidden');
});

//Close the menu when a link is clicked
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navList.classList.add('hidden');
  });
});

//==>> Testimonial ================================

const customerImages = document.querySelectorAll('.customer-img'),
  customerTexts = document.querySelectorAll('.customer-txt');

const showFeedback = (e) => {
  customerImages.forEach((img) => {
    img.classList.remove('active-pic');
  });

  customerTexts.forEach((text) => {
    text.classList.remove('active-txt');
  });

  let index = Array.from(customerImages).indexOf(e.target);

  customerImages[index].classList.add('active-pic');
  customerTexts[index].classList.add('active-txt');
};

customerImages.forEach((img) => {
  img.addEventListener('click', showFeedback);
});

//==>> Pricing ===================================

const toggleBtn = document.getElementById('toggleBtn'),
  leftCardFront = document.querySelector('#left-card-front'),
  leftCardBackside = document.querySelector('#left-card-backside'),
  middleCardFront = document.querySelector('#middle-card-front'),
  middleCardBackside = document.querySelector('#middle-card-backside'),
  rightCardFront = document.querySelector('#right-card-front'),
  rightCardBackside = document.querySelector('#right-card-backside');

toggleBtn.addEventListener('change', () => {
  //=> Left-card
  leftCardFront.classList.toggle('-rotate-y-180');
  leftCardBackside.classList.toggle('rotate-y-180');

  //=> Middle-card
  middleCardFront.classList.toggle('-rotate-y-180');
  middleCardBackside.classList.toggle('rotate-y-180');

  //=> Right-card
  rightCardFront.classList.toggle('-rotate-y-180');
  rightCardBackside.classList.toggle('rotate-y-180');
});
