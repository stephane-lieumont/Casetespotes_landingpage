docReady(() => {
  let header = document.querySelector('#header-page')

  header.querySelector(".hamburger").addEventListener('click', (e) => {
    e.target.classList.toggle('is-active')
  })

  header.querySelector("nav").querySelectorAll('li').forEach((t) => {
    t.addEventListener('click', () => {
      document.querySelector(".hamburger").classList.toggle('is-active')
    })
  })
});

function docReady(fn) {
  // see if DOM is already available
  if (document.readyState === "complete" || document.readyState === "interactive") {
    // call on next available tick
    setTimeout(fn, 1);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}
