// Função para enviar mensagem via WhatsApp
function enviarMensagem(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const mensagem = document.getElementById("mensagem").value;
  const telefone = "5585991986569";

  const texto = `Olá! Me chamo ${nome}, ${mensagem}`;
  const mensagemFormatada = encodeURIComponent(texto);

  const url = `https://wa.me/${telefone}?text=${mensagemFormatada}`;

  window.open(url, "_blank");
}

// Reveal no scroll: primeira seção esquerda, próxima direita, alternando
(function initRevealOnScroll() {
  const elementos = Array.from(document.querySelectorAll(".reveal-scroll"));

  if (!("IntersectionObserver" in window) || elementos.length === 0) {
    elementos.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  // Define direção alternada por índice
  elementos.forEach((el, idx) => {
    const dir = idx % 2 === 0 ? "left" : "right";
    el.setAttribute("data-dir", dir);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -10% 0px",
    },
  );

  elementos.forEach((el) => observer.observe(el));
})();
