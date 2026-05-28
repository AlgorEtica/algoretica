/* shared.js — inyecta nav y footer en todas las páginas */
(function() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

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
    `<a href="${p.href}" class="${currentPage === p.href ? 'active' : ''}">${p.label}</a>`
  ).join('');

  const navHTML = `
  <nav class="alg-nav">
    <a href="index.html" class="alg-nav-logo">
      <span class="alg-nav-logo-name">AlgorÉtica</span>
    </a>
    <button class="alg-nav-mobile-toggle" onclick="this.nextElementSibling.classList.toggle('open')">☰</button>
    <div class="alg-nav-links">${navLinks}</div>
    <a href="acerca.html#contacto" class="alg-nav-cta">Contacto</a>
  </nav>`;

  const footerHTML = `
  <footer class="alg-footer">
    <div class="alg-footer-inner">
      <div class="alg-footer-brand">
        <div class="alg-nav-logo-name">AlgorÉtica</div>
        <p>Plataforma colaborativa para la gestión ética de algoritmos con enfoque en derechos humanos desde el Sur Global.</p>
        <a href="mailto:algoretica@gmail.com" class="alg-footer-email">algoretica@gmail.com</a>
      </div>
      <div class="alg-footer-col">
        <h4>Secciones</h4>
        <a href="index.html">Inicio</a>
        <a href="novedades.html">Novedades</a>
        <a href="directorio.html">Directorio</a>
        <a href="recursos.html">Recursos</a>
      </div>
      <div class="alg-footer-col">
        <h4>Proyecto</h4>
        <a href="acerca.html">Acerca de</a>
        <a href="acerca.html#equipo">El equipo</a>
        <a href="servicios.html">Servicios</a>
        <a href="trata.html">Trata digital</a>
      </div>
    </div>
    <div class="alg-footer-bottom">
      <span>© 2025 AlgorÉtica. Todos los derechos reservados.</span>
      <span>Sur Global · IA y derechos humanos</span>
    </div>
  </footer>`;

  document.body.insertAdjacentHTML('afterbegin', navHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);
})();
