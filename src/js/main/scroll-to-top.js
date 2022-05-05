let topBtn = document.querySelector(".scroll-to-top-desktop");

topBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

window.onscroll = () => {
  window.scrollY > 500 ? topBtn.style.opacity = 1 : topBtn.style.opacity = 0
}

const target = document.querySelector('footer');

function handleIntersection(entries) {
  entries.map((entry) => {
    if (entry.isIntersecting) {
      topBtn.style.position = 'absolute'
    } else {
      topBtn.style.bottom = '30px'
      topBtn.style.position = 'fixed'
    }
  });
}

const observer = new IntersectionObserver(handleIntersection);
observer.observe(target);