const highlights = document.querySelectorAll('.highlight');
const tooltip = document.getElementById('tooltip');

highlights.forEach(el => {
  el.addEventListener('mouseenter', (e) => {
    tooltip.textContent = el.dataset.tooltip;
    tooltip.style.opacity = 1;
    const rect = el.getBoundingClientRect();
    tooltip.style.top = (window.scrollY + rect.bottom + 5) + 'px';
    tooltip.style.left = (window.scrollX + rect.left) + 'px';
  });
  el.addEventListener('mouseleave', () => {
    tooltip.style.opacity = 0;
  });
});