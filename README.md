# Portfolio Camila Sarmiento

Este repositorio contiene el código fuente del portfolio personal de **Camila Sarmiento**. El proyecto se desarrolló usando React con Vite y Tailwind CSS para construir una aplicación web responsiva que muestra proyectos, habilidades y detalles de contacto.

## Estructura del proyecto

```
frontend/
  ├─ public/                 # Archivos estáticos
  ├─ src/                    # Código fuente de la aplicación
  │   ├─ assets/             # Imágenes y activos de proyectos
  │   ├─ components/         # Componentes reutilizables
  │   ├─ data/               # Datos estáticos (por ejemplo, lista de proyectos)
  │   ├─ hooks/              # Hooks personalizados (ej. modo oscuro)
  │   └─ pages/              # Páginas principales (Home, ProjectDetail)
  ├─ index.html
  ├─ package.json
  ├─ tailwind.config.js
  ├─ tsconfig.json
  └─ vite.config.ts
```

## Tecnologías utilizadas

- React 18
- Vite (bundler y servidor de desarrollo)
- Tailwind CSS
- JavaScript / JSX

## Instalación y uso

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/Camila-Sarmiento/Portfolio-Camila-Sarmiento.git
   cd Portfolio-Camila-Sarmiento/frontend
   ```
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```
   La aplicación se abrirá en `http://localhost:5173` (por defecto).

4. Para generar un build de producción:
   ```bash
   npm run build
   ```

## Rutas

- `/` - Página de inicio con una sección hero y proyectos destacados.
- `/projects/:id` - Detalle del proyecto seleccionado.

## Personalización

- Los datos de los proyectos se encuentran en `src/data/projects.js`.
- Para agregar nuevos proyectos, modificar el arreglo exportado y agregar las imágenes en `src/assets/projects/`.

## Contribuciones

Este repositorio está destinado principalmente a uso personal. Si deseas sugerir mejoras o reportar problemas, abre un issue en GitHub.

## Licencia

El contenido de este portafolio está licenciado bajo CC BY-SA 4.0.

---

¡Gracias por visitar el portafolio!