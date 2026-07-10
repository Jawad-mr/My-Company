(() => {
  const toggle = document.querySelector('[data-menu-toggle]');
  const drawer = document.querySelector('[data-mobile-drawer]');
  const backdrop = document.querySelector('[data-drawer-backdrop]');
  const closeBtn = document.querySelector('[data-menu-close]');

  const setOpen = (open) => {
    if (!toggle || !drawer || !backdrop) return;
    drawer.classList.toggle('open', open);
    backdrop.classList.toggle('open', open);
    document.body.classList.toggle('sidebar-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    drawer.setAttribute('aria-hidden', String(!open));
  };

  if (toggle) {
    toggle.addEventListener('click', () => setOpen(!drawer.classList.contains('open')));
  }
  if (closeBtn) closeBtn.addEventListener('click', () => setOpen(false));
  if (backdrop) backdrop.addEventListener('click', () => setOpen(false));
  if (drawer) drawer.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setOpen(false)));
})();