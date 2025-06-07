
  let menuIcon = document.querySelector("#menu-icon");
  let navbar = document.querySelector(".navbar");

  menuIcon.onclick = () => {
    navbar.classList.toggle("active");
    menuIcon.classList.toggle("bx-x");
  };

  window.onscroll = () => {
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
  };

  const typed = new Typed('.multiple-text', {
    strings: [
      'Frontend Developer',
      'Backend Developer',
      'UI/UX Designer',
      'SEO Specialist',
      'Content Writer',
      'Graphic Designer'
    ],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
  });