// Shared nav + footer injected into every page
function getNav(active) {
  const links = [
    { href: 'index.html', label: 'Home' },
    { href: 'ai-agents.html', label: 'AI Agents' },
    { href: 'resources.html', label: 'Resources' },
    { href: 'industries.html', label: 'Industries' },
    { href: 'use-cases.html', label: 'Use Cases' },
    { href: 'pricing.html', label: 'Pricing' },
    { href: 'blog.html', label: 'Blog' },
  ];
  return `
  <nav>
    <div class="nav-inner">
      <a href="index.html" class="logo">
        <div class="logo-icon">
          <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="3" fill="white"/>
            <path d="M10 2a1 1 0 011 1v2a1 1 0 01-2 0V3a1 1 0 011-1zm0 12a1 1 0 011 1v2a1 1 0 01-2 0v-2a1 1 0 011-1zM2 10a1 1 0 011-1h2a1 1 0 010 2H3a1 1 0 01-1-1zm12 0a1 1 0 011-1h2a1 1 0 010 2h-2a1 1 0 01-1-1z" fill="white" fill-rule="evenodd"/>
          </svg>
        </div>
        AI Agents
      </a>
      <ul class="nav-links">
        ${links.map(l => `<li><a href="${l.href}" class="${l.label === active ? 'active' : ''}">${l.label}</a></li>`).join('')}
      </ul>
      <div class="nav-actions">
        <a href="login.html" class="btn-ghost">Log in</a>
        <a href="login.html#signup" class="btn-primary">Get Started →</a>
      </div>
    </div>
  </nav>`;
}

function getFooter() {
  return `
  <footer>
    <div class="footer-inner">
      <div class="footer-top">
        <div class="footer-brand">
          <a href="index.html" class="logo">
            <div class="logo-icon">
              <svg viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="3" fill="white"/><path d="M10 2a1 1 0 011 1v2a1 1 0 01-2 0V3a1 1 0 011-1zm0 12a1 1 0 011 1v2a1 1 0 01-2 0v-2a1 1 0 011-1zM2 10a1 1 0 011-1h2a1 1 0 010 2H3a1 1 0 01-1-1zm12 0a1 1 0 011-1h2a1 1 0 010 2h-2a1 1 0 01-1-1z" fill="white" fill-rule="evenodd"/></svg>
            </div>
            AI Agents
          </a>
          <p>Build and deploy AI agents for your business — without writing a single line of code.</p>
        </div>
        <div class="footer-col">
          <h5>Product</h5>
          <a href="ai-agents.html">AI Agents</a>
          <a href="pricing.html">Pricing</a>
          <a href="use-cases.html">Use Cases</a>
          <a href="#">Integrations</a>
          <a href="#">Security</a>
        </div>
        <div class="footer-col">
          <h5>Industries</h5>
          <a href="industries.html">Real Estate</a>
          <a href="industries.html">E-commerce</a>
          <a href="industries.html">Service Businesses</a>
          <a href="industries.html">Healthcare</a>
          <a href="industries.html">Finance</a>
        </div>
        <div class="footer-col">
          <h5>Resources</h5>
          <a href="resources.html">Documentation</a>
          <a href="blog.html">Blog</a>
          <a href="use-cases.html">Use Cases</a>
          <a href="resources.html">Webinars</a>
          <a href="resources.html">Community</a>
        </div>
        <div class="footer-col">
          <h5>Company</h5>
          <a href="#">About</a>
          <a href="#">Careers</a>
          <a href="#">Partners</a>
          <a href="#">Contact</a>
          <a href="login.html">Login</a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2025 AI Agents, Inc. All rights reserved.</p>
        <div class="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Settings</a>
        </div>
      </div>
    </div>
  </footer>`;
}

function initPage(active) {
  document.getElementById('nav-placeholder').innerHTML = getNav(active);
  document.getElementById('footer-placeholder').innerHTML = getFooter();
  // Fade-up observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-up').forEach((el, i) => {
    el.style.transitionDelay = (Math.floor(i % 4) * 0.1) + 's';
    observer.observe(el);
  });
}
