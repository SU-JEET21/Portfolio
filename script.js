 /* TYPED ANIMATION */
  const roles = [
    'Full-Stack Developer',
    'ML Enthusiast',
    'Open Source Contributor',
    'Problem Solver',
    'BTech IT Student'
  ];
  let roleIdx = 0, charIdx = 0, deleting = false;
  const el = document.getElementById('typed-text');

  function type() {
    const current = roles[roleIdx];
    if (!deleting) {
      el.textContent = current.slice(0, ++charIdx);
      if (charIdx === current.length) {
        setTimeout(() => { deleting = true; type(); }, 2000);
        return;
      }
    } else {
      el.textContent = current.slice(0, --charIdx);
      if (charIdx === 0) {
        deleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
      }
    }
    setTimeout(type, deleting ? 50 : 80);
  }
  type();

  /* SCROLL REVEAL */
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  /* MOBILE MENU */
  function openMenu() { document.getElementById('mobileMenu').classList.add('open'); }
  function closeMenu() { document.getElementById('mobileMenu').classList.remove('open'); }

  /* FORM */
  function handleSubmit(e) {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    btn.textContent = 'Message Sent ✓';
    btn.style.background = 'linear-gradient(135deg, #00b48a, #00d4a0)';
    setTimeout(() => { btn.textContent = 'Send Message →'; btn.style.background = ''; e.target.reset(); }, 3000);
  }
