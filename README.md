# DocuGPT — Guía funcional

Documentación funcional de DocuGPT (Nybble Group): sitio estático multi-página, sin build step, pensado para hostearse en GitHub Pages.

## Estructura

```
index.html            Producto — resumen, conceptos clave, roles
comportamiento.html    Comportamiento — ciclo de vida del documento (etapas + estados), planes, conectores, módulos
medicion.html          Medición — métricas de impacto, notas técnicas
guia-owner.html        Guía paso a paso para el rol Owner (piloto)
guia-user.html         Guía paso a paso para el rol User (piloto)
assets/style.css       Estilos compartidos por todas las páginas (con soporte de modo oscuro vía prefers-color-scheme)
assets/steps.js        Lógica del componente stepper (guías paso a paso)
```

Cada `.html` es un documento standalone completo — no hay templating ni build step. El `<nav class="side">` está **duplicado verbatim en cada página**; la única diferencia entre copias es qué link/grupo lleva la clase `is-here`. Si agregás, quitás o renombrás una sección o página, hay que actualizar el bloque `<nav>` en **todos** los archivos `.html`, no solo en el que estás editando.

Fuente del contenido: presentaciones de producto DocuGPT. No hay todavía un tracker (Jira/Confluence) del cual citar tickets por claim — cuando exista, conviene sumar una página de "Límites conocidos" en `medicion.html` con esas fuentes.

## Publicar en GitHub Pages

1. Crear el repositorio en GitHub y subir este contenido (`git push`).
2. En el repo, ir a **Settings → Pages**.
3. En **Build and deployment → Source**, elegir **Deploy from a branch**.
4. Elegir la rama `main` y la carpeta `/ (root)`.
5. Guardar. GitHub publica el sitio en `https://<usuario>.github.io/<repo>/` (puede tardar un par de minutos).

## Actualizar el contenido

Editar el/los `.html` correspondientes y hacer commit + push — GitHub Pages redespliega automáticamente con cada push a `main`. Si el cambio toca la navegación, revisar el checklist de sincronización del `<nav>` de arriba.
