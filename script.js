// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
  
  // Configuración del Intersection Observer
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.15 // Se activa cuando el 15% del elemento es visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Añadir la clase .active para activar la animación CSS
        entry.target.classList.add("active");
        // Dejar de observar el elemento una vez animado
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Seleccionar todos los elementos con la clase .reveal
  const revealElements = document.querySelectorAll(".reveal");
  revealElements.forEach(element => {
    observer.observe(element);
  });

});