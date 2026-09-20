# Evolution — Landing Page

Landing page de una sola página para **Evolution**, un centro de medicina estética. Sitio estático enfocado en presentar tratamientos, destacados, equipo, preguntas frecuentes y blog, con contacto centralizado por WhatsApp e Instagram.

## Estructura del proyecto

```
.
├── Evolution Landing Page.dc.html   # Fuente del sitio (editor/diseño)
├── support.js                        # Script de soporte cargado por el HTML
├── _ds/                               # Design system: tokens de fuentes, colores y efectos (CSS)
├── uploads/                           # Imágenes usadas en el sitio (equipo, tratamientos, etc.)
└── deploy/                            # Copia lista para publicar (index.html, support.js, _ds, uploads)
```

El sitio no tiene build step ni dependencias: es HTML estático con estilos inline y tokens CSS importados desde `_ds/`.

## Secciones del sitio

- **Hero** — presentación principal.
- **Destacados** (`#destacados`)
- **Tratamientos** (`#tratamientos`)
- **Nosotros** (`#nosotros`)
- **FAQ** (`#faq`)
- **Blog** (`#blog`)
- **Footer** — links de contacto y redes (Instagram, Facebook, WhatsApp, LinkedIn).

## Contacto

El canal de contacto principal es **WhatsApp**: `wa.me/543549469411`.

## Desarrollo local

Al ser HTML estático, alcanza con abrir el archivo en un navegador o servirlo con cualquier servidor estático, por ejemplo:

```bash
npx serve deploy
```

## Deploy

La carpeta `deploy/` contiene la versión lista para publicar (`index.html` + assets). Apuntar el hosting estático a esa carpeta.

> ⚠️ Nota: las imágenes en `uploads/` incluyen capturas de referencia/inspiración (moodboard) además de las fotos finales del sitio — revisar antes de publicar cuáles corresponden al contenido real.
