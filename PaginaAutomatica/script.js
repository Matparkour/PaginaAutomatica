const copyBtn = document.getElementById('copyBtn');
const message = document.getElementById('message');

if (copyBtn && message) {
  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(message.innerText.trim());
      copyBtn.innerText = 'Mensaje copiado';
      setTimeout(() => copyBtn.innerText = 'Copiar mensaje', 1800);
    } catch (error) {
      alert('No se pudo copiar. Copialo manualmente.');
    }
  });
}
