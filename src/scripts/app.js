window.addEventListener('DOMContentLoaded', () => {
  window.onscroll = () => {
    console.log(window.scrollY)
    if (window.scrollY > 0) {
      document.querySelector('header').classList.add('fixed');
    } else {
      document.querySelector('header').classList.remove('fixed');
    }
  }
});