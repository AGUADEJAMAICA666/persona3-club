document.addEventListener("DOMContentLoaded", function () {
  // Elementos
  const contenido = document.getElementById("contenido-principal");
  const login = document.getElementById("seccion-login");
  const mensaje = document.getElementById("mensaje-login");

  // Navegación
  document.getElementById("btn-INICIO").onclick = () =>
    mostrarSeccion("INICIO");
  document.getElementById("btn-CONTENIDO").onclick = () =>
    mostrarSeccion("CONTENIDO");
  document.getElementById("btn-CONTACTANOS").onclick = () =>
    mostrarSeccion("CONTACTANOS");
  document.getElementById("btn-LOGIN").onclick = () =>
    mostrarSeccion("seccion-login");

  // Login
  document
    .getElementById("form-login")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      mensaje.textContent = "Sesión iniciada correctamente.";
    });

  // mostrar solo una sección
  function mostrarSeccion(id) {
    // Ocultar Secciones
    if (contenido) contenido.style.display = "none";
    if (login) login.style.display = "none";

    // Muestra Sección deseada
    const target = document.getElementById(id);
    if (target) {
      target.style.display = "block";
      target.scrollIntoView({ behavior: "smooth" });
    }
  }
});
