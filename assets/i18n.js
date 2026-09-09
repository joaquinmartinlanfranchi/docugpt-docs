/* ============================================================
   DOCUGPT — motor de idioma ES/EN
   Cada página define su propio PAGE_DICT y llama a initI18n(PAGE_DICT).
   Toda cadena traducible vive en un diccionario {es, en} — nunca hay
   texto embebido dos veces en el HTML.
   ============================================================ */
var NAV_DICT = {
  "nav.brandTag": { es: "Guía funcional · Nybble Group", en: "Functional Guide · Nybble Group" },
  "nav.grp.producto": { es: "Producto", en: "Product" },
  "nav.grp.comportamiento": { es: "Comportamiento", en: "Behavior" },
  "nav.grp.medicion": { es: "Medición", en: "Measurement" },
  "nav.grp.guias": { es: "Guías", en: "Guides" },
  "nav.link.resumen": { es: "Resumen", en: "Overview" },
  "nav.link.conceptos": { es: "Conceptos clave", en: "Key Concepts" },
  "nav.link.roles": { es: "Roles y permisos", en: "Roles & Permissions" },
  "nav.link.estados": { es: "Ciclo de vida del documento", en: "Document Lifecycle" },
  "nav.link.planes": { es: "Organización y planes", en: "Organization & Plans" },
  "nav.link.conectores": { es: "Conectores", en: "Connectors" },
  "nav.link.modulos": { es: "Módulos de negocio", en: "Business Modules" },
  "nav.link.metricas": { es: "Métricas de impacto", en: "Impact Metrics" },
  "nav.link.tecnico": { es: "Notas técnicas", en: "Technical Notes" },
  "nav.link.guiaOwner": { es: "Guía · Owner", en: "Guide · Owner" },
  "nav.link.guiaUser": { es: "Guía · User", en: "Guide · User" },
  "toplink.top": { es: "↑ Arriba", en: "↑ Top" },
  "footer.full": {
    es: "© Nybble Group 2026 — Confidencial y de uso interno. Fuente: presentaciones de producto DocuGPT · <a href=\"https://www.nybblegroup.com\" target=\"_blank\" rel=\"noopener\">nybblegroup.com</a>",
    en: "© Nybble Group 2026 — Confidential, for internal use only. Source: DocuGPT product presentations · <a href=\"https://www.nybblegroup.com\" target=\"_blank\" rel=\"noopener\">nybblegroup.com</a>"
  },
  "footer.short": { es: "© Nybble Group 2026 — Confidencial y de uso interno.", en: "© Nybble Group 2026 — Confidential, for internal use only." },
  "pager.anterior": { es: "Anterior", en: "Previous" },
  "pager.siguiente": { es: "Siguiente", en: "Next" },
  "pager.volver": { es: "Volver", en: "Back" }
};

function initI18n(pageDict){
  var DICT = Object.assign({}, NAV_DICT, pageDict || {});
  var STORAGE_KEY = "docugpt-lang";

  function apply(lang){
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("data-lang", lang);

    document.querySelectorAll("[data-i18n]").forEach(function(el){
      var entry = DICT[el.getAttribute("data-i18n")];
      if(entry && entry[lang] != null) el.textContent = entry[lang];
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function(el){
      var entry = DICT[el.getAttribute("data-i18n-html")];
      if(entry && entry[lang] != null) el.innerHTML = entry[lang];
    });
    document.querySelectorAll(".langtoggle button").forEach(function(btn){
      var active = btn.getAttribute("data-lang-btn") === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  function setLang(lang){
    try { localStorage.setItem(STORAGE_KEY, lang); } catch(e) {}
    apply(lang);
  }

  var stored = "es";
  try { stored = localStorage.getItem(STORAGE_KEY) || "es"; } catch(e) {}
  apply(stored);

  document.querySelectorAll(".langtoggle button").forEach(function(btn){
    btn.addEventListener("click", function(){ setLang(btn.getAttribute("data-lang-btn")); });
  });
}
