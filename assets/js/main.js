(() => {
  const button = document.querySelector('.lh-menu-button');
  const nav = document.querySelector('.lh-mobile-nav');
  if (!button || !nav) return;
  button.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    button.setAttribute('aria-expanded', String(isOpen));
  });
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    button.setAttribute('aria-expanded', 'false');
  }));
})();

(() => {
  const form = document.querySelector('.lh-form');
  const toast = document.querySelector('.lh-toast');
  if (!form || !toast) return;

  const consent = form.querySelector('.lh-consent input[type="checkbox"]');
  const consentError = form.querySelector('.lh-consent__error');

  if (consent && consentError) {
    consent.addEventListener('invalid', () => {
      consent.setCustomValidity('Пожалуйста, подтвердите согласие с политикой конфиденциальности.');
      consentError.hidden = false;
    });

    consent.addEventListener('change', () => {
      consent.setCustomValidity('');
      consentError.hidden = consent.checked;
    });
  }

  let hideTimer;
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (consentError) consentError.hidden = true;
    toast.classList.add('is-visible');
    form.reset();
    clearTimeout(hideTimer);
    hideTimer = setTimeout(() => toast.classList.remove('is-visible'), 3500);
  });
})();
