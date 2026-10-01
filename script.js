document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('leadForm');

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const nome = document.getElementById('nome');
      const telefone = document.getElementById('telefone');

      if (!nome.value.trim() || !telefone.value.trim()) {
        alert('Por favor, preencha seu nome e telefone para continuar.');
        return;
      }

      const message = encodeURIComponent(
        `Olá! Gostaria de solicitar um atendimento.\n\nNome: ${nome.value}\nTelefone: ${telefone.value}\nMelhor horário: ${document.getElementById('horario').value}\nTipo de atendimento: ${document.getElementById('servico').value}`
      );

      window.open(`https://wa.me/5531988285602?text=${message}`, '_blank');
      form.reset();
      alert('Mensagem preparada no WhatsApp. Você pode enviar a mensagem diretamente para a clínica.');
    });
  }

  const menuLinks = document.querySelectorAll('.main-nav a');
  menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      document.querySelector('.main-nav')?.classList.remove('open');
    });
  });
});




