
// const botao = document.getElementById("add-plant-btn");

// Adiciona o evento de clique
// botao.addEventListener("click", function() {
//   const secao = document.getElementById("index.html#page-info");
//   if (secao) {
//     secao.scrollIntoView({ behavior: "smooth", block: "start" });
//   } else {
//     console.log("Seção não encontrada!");
//   }
// });

// document.addEventListener("DOMContentLoaded", function() {
//   const botao = document.getElementById("add-plant-btn");
//   const secao = document.getElementById("page-info");

//   if (!botao || !secao) {
//     console.log("Botão ou seção não encontrados!");
//     return;
//   }

//   botao.addEventListener("click", function() {
//     secao.scrollIntoView({ behavior: "smooth", block: "start" });
//   });
// });

// document.addEventListener("DOMContentLoaded", function() {
//   // Seletor do botão existente
//   const botao = document.querySelector("#add-plant-btn");
//   // Seletor da seção alvo
//   const secao = document.querySelector("#page-info");

//   if (!botao  !secao) {
//     console.log("Botão ou seção não encontrados!");
//     return;
//   }

//   botao.addEventListener("click", function(event) {
//     event.preventDefault(); // previne qualquer comportamento padrão do botão/link

//     // Encontrar o container de scroll mais próximo (ou document.body como fallback)
//     const container = secao.closest("div, main, section")  document.body;

//     // Scroll relativo ao container
//     container.scrollTo({
//       top: secao.offsetTop,
//       behavior: "smooth"
//     });
//   });
// });

// document.addEventListener("DOMContentLoaded", function() {
//   // Seleciona o botão e a seção
//   const botao = document.getElementById("add-plant-btn");
//   const secao = document.getElementById("#page-info");

//   if (!botao) {
//     console.log("Botão não encontrado!");
//     return;
//   }
//   if (!secao) {
//     console.log("Seção não encontrada!");
//     return;
//   }

//   // Adiciona o clique
//   botao.addEventListener("click", function(event) {
//     event.preventDefault(); // evita comportamento padrão
//     secao.scrollIntoView({ behavior: "smooth", block: "start" });
//   });
// });

// ...existing code...
function esperarElemento(seletor, callback, { timeout = 10000 } = {}) {
  // tenta imediato
  const existe = document.querySelector(seletor);
  if (existe) {
    callback(existe);
    return () => {};
  }

  // observer para detectar inserção no DOM
  const observer = new MutationObserver(() => {
    const el = document.querySelector(seletor);
    if (el) {
      clearTimeout(timer);
      observer.disconnect();
      callback(el);
    }
  });

  observer.observe(document.documentElement || document.body, { childList: true, subtree: true });

  // fallback de tempo limite
  const timer = setTimeout(() => {
    observer.disconnect();
    console.warn(`esperarElemento: timeout aguardando "${seletor}" após ${timeout}ms`);
  }, timeout);

  // retorna função para cancelar se necessário
  return () => {
    clearTimeout(timer);
    observer.disconnect();
  };
}
// ...existing code...
// Aguarda a seção existir e liga o clique ao botão
esperarElemento("#page-info", (secao) => {
  const botao = document.querySelector("#add-plant-btn");

  if (!botao) {
    console.log("Botão não encontrado!");
    return;
  }

  if (!secao) {
    console.log("Seção não encontrada!");
    return;
  }

  botao.addEventListener("click", (e) => {
    e.preventDefault();
    secao.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
// ...existing code...