const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
const navLinks = [...document.querySelectorAll('.nav a')];
const sections = [...document.querySelectorAll('main section[id]')];

navToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(open));
  navToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
});

const updateActiveNav = () => {
  const offset = window.scrollY + 160;
  let current = sections[0]?.id;
  sections.forEach(section => {
    if (section.offsetTop <= offset) current = section.id;
  });
  navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${current}`));
};

window.addEventListener('scroll', updateActiveNav, { passive: true });
window.addEventListener('load', updateActiveNav);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
document.getElementById('year').textContent = new Date().getFullYear();

const projectsTrack = document.getElementById('projectsTrack');
const projectsPrev = document.querySelector('.slider-prev');
const projectsNext = document.querySelector('.slider-next');
const projectsProgress = document.getElementById('projectsProgress');

const updateProjectsSlider = () => {
  if (!projectsTrack) return;
  const maxScroll = projectsTrack.scrollWidth - projectsTrack.clientWidth;
  const atStart = projectsTrack.scrollLeft <= 4;
  const atEnd = projectsTrack.scrollLeft >= maxScroll - 4;
  if (projectsPrev) projectsPrev.disabled = atStart;
  if (projectsNext) projectsNext.disabled = maxScroll <= 0 || atEnd;
  if (projectsProgress) {
    if (maxScroll <= 0) {
      projectsProgress.style.width = '100%';
      projectsProgress.style.left = '0%';
    } else {
      const thumbWidth = Math.max((projectsTrack.clientWidth / projectsTrack.scrollWidth) * 100, 10);
      const thumbLeft = (projectsTrack.scrollLeft / maxScroll) * (100 - thumbWidth);
      projectsProgress.style.width = `${thumbWidth}%`;
      projectsProgress.style.left = `${thumbLeft}%`;
    }
  }
};

projectsPrev?.addEventListener('click', () => {
  projectsTrack?.scrollBy({ left: -projectsTrack.clientWidth, behavior: 'smooth' });
});
projectsNext?.addEventListener('click', () => {
  projectsTrack?.scrollBy({ left: projectsTrack.clientWidth, behavior: 'smooth' });
});
projectsTrack?.addEventListener('scroll', updateProjectsSlider, { passive: true });
window.addEventListener('resize', updateProjectsSlider);
window.addEventListener('load', updateProjectsSlider);
updateProjectsSlider();
