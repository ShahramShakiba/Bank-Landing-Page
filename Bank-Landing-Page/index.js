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
  card_1_front = document.querySelector('#card-1-front'),
  card_1_backside = document.querySelector('#card-1-backside');

toggleBtn.addEventListener('change', () => {
  card_1_front.classList.toggle('-rotate-y-180');
  card_1_backside.classList.toggle('rotate-y-180');
});
