// Human-initiated reveal. This is obfuscation, not a guarantee against sophisticated bots.
(() => {
  const codes = [127,115,59,110,118,127,123,118,77,127,114,118,123,116,130,122,58,58,129,114,121,121,124,117,112,118,125,59,121,114,127,130,110];
  const decode = () => codes.map(n => String.fromCharCode((n + 243) % 256)).reverse().join('');
  document.addEventListener('click', (event) => {
    const button = event.target.closest('[data-reveal-email]');
    if (!button) return;
    const address = decode();
    const a = document.createElement('a');
    a.href = 'mai' + 'lto:' + address;
    a.textContent = address;
    a.setAttribute('aria-label', address);
    button.replaceWith(a);
    a.focus();
  });
})();
