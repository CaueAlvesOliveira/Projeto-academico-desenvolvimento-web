//  iframe do menu cadastrar e menu entrar

const iframeContainer = document.getElementById("iframeContainer");
const closeBtn = document.getElementById("closeBtn");

function abrirIframe(arquivo) {
  // Remove iframe existente
  const iframeExistente = iframeContainer.querySelector("iframe");
  if (iframeExistente) {
    iframeContainer.removeChild(iframeExistente);
  }
  // Cria novo iframe
  const iframe = document.createElement("iframe");
  iframe.src = arquivo;
  iframe.style.width = "95%";
  iframe.style.height = "80%";
  iframe.style.border = "none";
  iframeContainer.appendChild(iframe);
  iframeContainer.style.display = "block";
}

document.getElementById("btnAbrirLogin").addEventListener("click", () => {
  abrirIframe("entrar.html");
});

document.getElementById("btnAbrirCadastro").addEventListener("click", () => {
  abrirIframe("cadastro.html");
});

closeBtn.addEventListener("click", () => {
  iframeContainer.style.display = "none";
  const iframe = iframeContainer.querySelector("iframe");
  if (iframe) {
    iframeContainer.removeChild(iframe);
  }
});

// ===============================================================================================

//muda a cor dos menus, quando o mouse passa em cima deles
let menu = document.querySelectorAll(".info");

menu.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.style.color = "red";
  });

  item.addEventListener("mouseout", () => {
    item.style.color = "white";
  });
});

//===============================================================================================

//muda a cor da borda dos conteiners, quando o mouse entra no conteiner
const boxes = document.querySelectorAll(".box_nos, .box_adotar");

boxes.forEach((box) => {
  box.addEventListener("mouseenter", () => {
    box.style.border = "3px solid purple";
  });
  box.addEventListener("mouseleave", () => {
    box.style.border = "1px solid white";
  });
});

//===============================================================================================
