(() => {
  const ambientStyles = document.createElement('link');
  ambientStyles.rel = 'stylesheet';
  ambientStyles.href = 'assets/ambient.css?v=infra-network-4';
  document.head.append(ambientStyles);

  const ambientNetwork = document.createElement('img');
  ambientNetwork.className = 'infra-ambient-network';
  ambientNetwork.src = 'assets/infrastructure-ambient.svg?v=infra-network-4';
  ambientNetwork.alt = '';
  ambientNetwork.setAttribute('aria-hidden', 'true');
  document.body.prepend(ambientNetwork);

  const menu = document.querySelector('.menu');
  const nav = document.querySelector('#site-nav');
  if (menu && nav) {
    menu.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menu.setAttribute('aria-expanded', String(open));
    });
    nav.addEventListener('click', event => {
      if (event.target.closest('a')) {
        nav.classList.remove('open');
        menu.setAttribute('aria-expanded', 'false');
      }
    });
  }

  const currentFile = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('#site-nav a').forEach(link => {
    if (link.getAttribute('href') === currentFile) link.setAttribute('aria-current', 'page');
  });

  const revealItems = [...document.querySelectorAll('[data-reveal]')];
  document.documentElement.classList.add('js');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    }), { threshold: .12, rootMargin: '0px 0px -25px 0px' });
    revealItems.forEach((item, index) => {
      item.style.setProperty('--reveal-delay', `${(index % 4) * 75}ms`);
      observer.observe(item);
    });
  } else revealItems.forEach(item => item.classList.add('in-view'));

  const filterButtons = [...document.querySelectorAll('[data-filter]')];
  const serviceCards = [...document.querySelectorAll('[data-category]')];
  filterButtons.forEach(button => button.addEventListener('click', () => {
    filterButtons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    const selected = button.dataset.filter;
    serviceCards.forEach(card => {
      card.hidden = selected !== 'all' && card.dataset.category !== selected;
    });
  }));

  const progress = document.querySelector('.scroll-progress span');
  if (progress) {
    const update = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      progress.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
    };
    addEventListener('scroll', update, { passive: true });
    update();
  }
})();
