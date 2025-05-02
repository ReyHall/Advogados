export default function scrollToSection(event) {
  event.preventDefault();
  const href = event.target.getAttribute('href');
  const navbarHeight = document.querySelector('.navbar').clientHeight;
  const top = document.querySelector(href).offsetTop - navbarHeight;
  window.scrollTo({
    top: top,
    behavior: 'smooth'
  })
}