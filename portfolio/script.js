const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");

function setHeaderState() {
  if (!header) return;
  header.classList.toggle("scrolled", window.scrollY > 12);
}

function closeNav() {
  if (!nav || !navToggle) return;
  nav.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
  document.body.classList.remove("nav-open");
}

function toggleNav() {
  if (!nav || !navToggle) return;
  const open = !nav.classList.contains("open");
  nav.classList.toggle("open", open);
  navToggle.setAttribute("aria-expanded", String(open));
  document.body.classList.toggle("nav-open", open);
}

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

if (navToggle) {
  navToggle.addEventListener("click", toggleNav);
}

document.querySelectorAll(".site-nav a").forEach((link) => {
  link.addEventListener("click", closeNav);
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeNav();
  }
});
