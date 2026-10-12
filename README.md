# Portfolio de Pablo Dominguez

Portfolio profesional, responsive y sin dependencias de compilación. Está construido con HTML,
CSS y JavaScript modular, por lo que puede publicarse directamente en GitHub Pages.

## Ejecutar en local

Los módulos JavaScript requieren un servidor local. Desde esta carpeta:

```bash
python -m http.server 8080
```

Luego abrí `http://localhost:8080`.

Alternativa con Node.js:

```bash
npx serve .
```

## Estructura

```text
.
├── index.html
├── styles.css
├── js/
│   ├── app.js
│   └── data.js
└── assets/
    ├── projects/
    ├── certificates/
    └── cv/
```

`js/data.js` concentra el perfil, los proyectos, las competencias y las certificaciones.
`js/app.js` crea las tarjetas y los casos de estudio a partir de esos datos.

## Agregar un proyecto

1. Copiá un objeto dentro del array `projects` en `js/data.js`.
2. Asignale un `id` único.
3. Completá nombre, categoría, problema, solución, responsabilidades, funcionalidades, stack y estado.
4. Guardá una imagen optimizada en `assets/projects/` y cargá su ruta en `image`.
5. Agregá `repositoryUrl` y `demoUrl` solamente cuando existan.
6. Completá todos los campos de `caseStudy`.

Si `repositoryUrl` o `demoUrl` están vacíos, la interfaz no crea enlaces falsos.

## Reemplazar placeholders

Las imágenes actuales de proyectos son visuales conceptuales y están identificadas como tales.
Reemplazalas por capturas reales manteniendo nombres simples, por ejemplo:

```text
assets/projects/fitconnection-dashboard.webp
```

Actualizá después la propiedad `image` del proyecto. Usá WebP o AVIF cuando sea posible y evitá
imágenes con datos personales.

Para certificados, guardá la miniatura o PDF en `assets/certificates/` y completá
`certificateUrl`. Los datos marcados como `Pendiente` deben confirmarse antes de publicar.

## Configurar el CV

1. Guardá el PDF en `assets/cv/pablo-dominguez-cv.pdf`.
2. En `js/data.js`, cambiá:

```js
cvUrl: "assets/cv/pablo-dominguez-cv.pdf"
```

Mientras la ruta esté vacía, el botón permanece visible pero informa que el CV está pendiente.

## Publicar en GitHub Pages

### Opción A: repositorio dedicado

```bash
git init
git add .
git commit -m "Publicar portfolio profesional"
git branch -M main
git remote add origin https://github.com/pablodominguez0226-ai/REPOSITORIO.git
git push -u origin main
```

En GitHub:

1. Abrí **Settings → Pages**.
2. En **Build and deployment**, seleccioná **Deploy from a branch**.
3. Elegí la rama `main` y la carpeta `/(root)`.
4. Guardá la configuración.

### Opción B: carpeta dentro de otro repositorio

Publicá la carpeta en una rama o copiá su contenido a la raíz del repositorio que utilizará Pages.
Como las rutas son relativas, el sitio funciona también bajo
`https://usuario.github.io/nombre-del-repositorio/`.

## Datos pendientes antes de publicar

- URLs de repositorio y demo de los proyectos.
- Capturas reales de proyectos en producción/demo.
- Dataset, notebook, período, gráficos y conclusiones del análisis de Bitcoin.
- Archivos o URLs públicas de los certificados.
- URL definitiva del sitio para completar `og:url` y, si se desea, una imagen Open Graph PNG.

## Decisiones de contenido

- El título de **Analista Universitario en Sistemas de Información** (UTN FRM) figura como obtenido.
- La **Ingeniería en Sistemas de Información** (UTN FRM) se presenta en estado **graduando**.
- Se incluye la formación futura en **Tecnicatura Universitaria en Ciencia de Datos**.
- Se detallan las 4 certificaciones oficiales (Ciencia de Datos con Python, Analista de Datos, Power BI, Cloud Computing con Microsoft Azure).
- Los proyectos se identifican con su alcance auténtico (comercial, personal, académico, cuantitativo, IA).
- No se incluyen años de experiencia exagerados, porcentajes de habilidades ni métricas no verificadas.
- No se presenta el análisis de Bitcoin como recomendación financiera.
