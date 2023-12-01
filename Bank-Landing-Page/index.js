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


