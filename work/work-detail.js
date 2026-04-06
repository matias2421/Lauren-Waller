/* work-detail.js — Sin overlay, solo navegación normal */
(function () {
  /* No hacer nada con el overlay - se queda oculto permanentemente */
  var overlay = document.querySelector('.page-overlay');
  if (overlay) {
    overlay.classList.add('hidden');
    overlay.style.display = 'none';
  }

  /* Navegación normal (sin overlay de salida) */
  document.querySelectorAll('a[href]').forEach(function (link) {
    var href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('mailto') || href.startsWith('http')) return;

    link.addEventListener('click', function (e) {
      /* Permitir navegación normal sin overlay */
      return;
    });
  });
})();