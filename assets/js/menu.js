document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".navbar__toggle");
    const menu = document.querySelector("#menu");
  
    if (!toggle || !menu) return;
  
    // Abre/fecha menu
    const toggleMenu = () => {
      const isOpen = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen);
      toggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
    };
  
    toggle.addEventListener("click", toggleMenu);
  
    // Teclado (Enter/Espaço)
    toggle.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleMenu();
      }
    });
  
    // Esc fecha menu
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && menu.classList.contains("is-open")) {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", false);
        toggle.setAttribute("aria-label", "Abrir menu");
        toggle.focus();
      }
    });
  });
  