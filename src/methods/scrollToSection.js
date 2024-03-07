export default function scrollToSection(event) {
  event.preventDefault();
  const href = event.target.getAttribute('href');
  const top = document.querySelector(href).offsetTop - 64;
  window.scrollTo({
    top: top,
    behavior: 'smooth'
  })
}