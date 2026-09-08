# DocuGPT — Guía funcional

Documentación funcional de DocuGPT (Nybble Group): sitio estático de una sola página, sin build step, pensado para hostearse en GitHub Pages.

## Publicar en GitHub Pages

1. Crear el repositorio en GitHub y subir este contenido (`git push`).
2. En el repo, ir a **Settings → Pages**.
3. En **Build and deployment → Source**, elegir **Deploy from a branch**.
4. Elegir la rama `main` y la carpeta `/ (root)`.
5. Guardar. GitHub publica el sitio en `https://<usuario>.github.io/<repo>/` (puede tardar un par de minutos).

## Actualizar el contenido

Editar `index.html` y hacer commit + push — GitHub Pages redespliega automáticamente con cada push a `main`.
