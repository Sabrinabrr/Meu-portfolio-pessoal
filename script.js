document.addEventListener("DOMContentLoaded", () => {
  // 1. Destaque do Link Ativo no Menu de Navegação
  const linksNav = document.querySelectorAll(".lista-nav a");
  const paginaAtual = window.location.pathname.split("/").pop();

  linksNav.forEach((link) => {
    const hrefLink = link.getAttribute("href").split("/").pop();
    if (hrefLink === paginaAtual || (paginaAtual === "" && hrefLink === "index.html")) {
      link.classList.add("ativo");
    }
  });

  // 2. Animação de Surgimento (Fade-In) ao Rolar a Página
  const elementosAnimar = document.querySelectorAll(
    ".cartao-habilidade, .conteudo-projeto, .container-secao, .hero-conteudo"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visivel");
        }
      });
    },
    { threshold: 0.15 }
  );

  elementosAnimar.forEach((el) => {
    el.classList.add("escondido");
    observer.observe(el);
  });
});