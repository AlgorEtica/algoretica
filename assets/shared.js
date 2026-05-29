(function() {
  function inject() {
    if (document.getElementById('alg-nav-injected')) return;

    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const base = '/algoretica/';

    const pages = [
      { href: 'index.html',      label: 'Inicio' },
      { href: 'novedades.html',  label: 'Novedades' },
      { href: 'trata.html',      label: 'Trata digital' },
      { href: 'acerca.html',     label: 'Acerca de' },
      { href: 'servicios.html',  label: 'Servicios' },
      { href: 'recursos.html',   label: 'Recursos' },
      { href: 'directorio.html', label: 'Directorio' },
    ];

    const navLinks = pages.map(p =>
      `<a href="${base}${p.href}" class="${currentPage === p.href ? 'active' : ''}">${p.label}</a>`
    ).join('');

    const nav = document.createElement('nav');
    nav.id = 'alg-nav-injected';
    nav.className = 'alg-nav';
    nav.innerHTML = `
      <a href="${base}index.html" class="alg-nav-logo">
        <span class="alg-nav-logo-name">AlgorÉtica</span>
      </a>
      <button class="alg-nav-mobile-toggle" onclick="this.nextElementSibling.classList.toggle('open')">☰</button>
      <div class="alg-nav-links">${navLinks}</div>
      <a href="${base}acerca.html#contacto" class="alg-nav-cta">Contacto</a>
    `;

    const footer = document.createElement('footer');
    footer.id = 'alg-footer-injected';
    footer.className = 'alg-footer';
    footer.innerHTML = `
      <div class="alg-footer-inner">
        <div class="alg-footer-brand">
          <div class="alg-nav-logo-name">AlgorÉtica</div>
          <p>Plataforma colaborativa para la gestión ética de algoritmos con enfoque en derechos humanos desde el Sur Global.</p>
          <a href="mailto:algoretica@gmail.com" class="alg-footer-email">algoretica@gmail.com</a>
        </div>
        <div class="alg-footer-col">
          <h4>Secciones</h4>
          <a href="${base}index.html">Inicio</a>
          <a href="${base}novedades.html">Novedades</a>
          <a href="${base}directorio.html">Directorio</a>
          <a href="${base}recursos.html">Recursos</a>
        </div>
        <div class="alg-footer-col">
          <h4>Proyecto</h4>
          <a href="${base}acerca.html">Acerca de</a>
          <a href="${base}acerca.html#equipo">El equipo</a>
          <a href="${base}servicios.html">Servicios</a>
          <a href="${base}trata.html">Trata digital</a>
        </div>
      </div>
      <div class="alg-footer-bottom">
        <span>© 2025 AlgorÉtica. Todos los derechos reservados.</span>
        <span>Sur Global · IA y derechos humanos</span>
      </div>
    `;

    document.body.insertBefore(nav, document.body.firstChild);
    document.body.appendChild(footer);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
