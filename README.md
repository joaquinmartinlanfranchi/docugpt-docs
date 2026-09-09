# DocuGPT — Guía funcional

Documentación funcional de DocuGPT (Nybble Group): sitio estático multi-página, sin build step, pensado para hostearse en GitHub Pages.

## Estructura

```
index.html            Producto — resumen, conceptos clave, roles
comportamiento.html    Comportamiento — ciclo de vida del documento (etapas + estados), planes, conectores, módulos
medicion.html          Medición — métricas de impacto, notas técnicas
guia-owner.html        Guía paso a paso para el rol Owner (piloto)
guia-user.html         Guía paso a paso para el rol User (piloto)
assets/style.css       Estilos compartidos (identidad Nybble Group + soporte de modo oscuro vía prefers-color-scheme)
assets/steps.js        Lógica del componente stepper (guías paso a paso)
assets/i18n.js         Motor de idioma ES/EN (toggle + persistencia)
```

Cada `.html` es un documento standalone completo — no hay templating ni build step. El `<nav class="side">` está **duplicado verbatim en cada página**; la única diferencia entre copias es qué link/grupo lleva la clase `is-here`. Si agregás, quitás o renombrás una sección o página, hay que actualizar el bloque `<nav>` en **todos** los archivos `.html`, no solo en el que estás editando.

Fuente del contenido: presentaciones de producto DocuGPT. No hay todavía un tracker (Jira/Confluence) del cual citar tickets por claim — cuando exista, conviene sumar una página de "Límites conocidos" en `medicion.html` con esas fuentes.

## Identidad visual

Paleta, tipografía (Montserrat + Sora) y componentes (botones, tags, fondo "mesh" de red conectada) siguen el **Nybble Brandbook 2026**. Tokens de color en `assets/style.css` (`:root` para modo claro, `@media (prefers-color-scheme: dark)` para oscuro — no hay toggle manual, sigue la preferencia del sistema/navegador de quien mira la página). Reglas de accesibilidad del brandbook respetadas: nunca texto naranja o azul sobre fondos Gray/Dark Blue — esos colores se usan como texto solo sobre superficies claras o como fill/acento decorativo.

## Idioma (ES/EN)

Cada página tiene un toggle **ES · EN** en el sidebar. Cómo funciona:

- Todo texto traducible tiene `data-i18n="clave"` (reemplaza `textContent`) o `data-i18n-html="clave"` (reemplaza `innerHTML`, para texto con `<strong>`/`<a>` embebidos) — nunca hay contenido duplicado dos veces en el HTML.
- `assets/i18n.js` define `NAV_DICT` (strings compartidos: nav, footer, pager, botón "Arriba") y la función `initI18n(pageDict)`.
- Cada página llama a `initI18n({...})` al final con su propio diccionario de esa página (fusionado con `NAV_DICT`).
- La preferencia de idioma se guarda en `localStorage` (`docugpt-lang`), así que se mantiene al navegar entre páginas.
- **Al agregar contenido nuevo**: envolver el texto en un elemento con `data-i18n`/`data-i18n-html`, y agregar la entrada `{ es: "...", en: "..." }` correspondiente en el diccionario de esa página (o en `NAV_DICT` si es un string de navegación compartido). Un texto con `data-i18n` (no `-html`) nunca debe tener HTML embebido en el diccionario (ni siquiera entidades como `&amp;`) porque se asigna vía `textContent`, no se parsea.

## Publicar en GitHub Pages

1. Crear el repositorio en GitHub y subir este contenido (`git push`).
2. En el repo, ir a **Settings → Pages**.
3. En **Build and deployment → Source**, elegir **Deploy from a branch**.
4. Elegir la rama `main` y la carpeta `/ (root)`.
5. Guardar. GitHub publica el sitio en `https://<usuario>.github.io/<repo>/` (puede tardar un par de minutos).

## Actualizar el contenido

Editar el/los `.html` correspondientes y hacer commit + push — GitHub Pages redespliega automáticamente con cada push a `main`. Si el cambio toca la navegación, revisar el checklist de sincronización del `<nav>` de arriba.
