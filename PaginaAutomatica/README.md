# PaginaAutomatica

Proyecto estático listo para Cloudflare Pages.

## Estructura

```txt
PaginaAutomatica/
├── index.html
├── style.css
├── script.js
└── clientes/
    └── demo/
        ├── index.html
        └── style.css
```

## Configuración recomendada en Cloudflare Pages

- Framework preset: None
- Build command: dejar vacío
- Build output directory: `/`
- Root directory: `/`

## Links cuando esté publicado

- Home: `https://tu-proyecto.pages.dev/`
- Demo cliente: `https://tu-proyecto.pages.dev/clientes/demo/`

La idea es que n8n después cree nuevas carpetas dentro de `clientes/`, por ejemplo:

```txt
clientes/barberia-el-corte/index.html
clientes/gym-fuerza/index.html
clientes/panaderia-dulce/index.html
```
