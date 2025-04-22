const navLinks = document.querySelectorAll('a.nav-item');

navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth'
    });
  });
});

// Change header background on scroll
window.addEventListener('scroll', function() {
  const header = document.getElementById('header');
  if (window.scrollY > 50) {
    header.classList.add('bg-light');
    header.classList.remove('bg-dark');
  } else {
    header.classList.add('bg-dark');
    header.classList.remove('bg-light');
  }
});


