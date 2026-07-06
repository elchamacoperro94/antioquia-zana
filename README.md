# Antioquia Zana — Ciencia e Innovación en la Cadena de la Zanahoria

[![Vite Build](https://img.style-shield.svg/badge/Build-Success-emerald?style=flat-square)](https://vite.dev)
[![React 19](https://img.style-shield.svg/badge/React-19.0-blue?style=flat-square)](https://react.dev)
[![TypeScript](https://img.style-shield.svg/badge/TypeScript-5.x-blue?style=flat-square)](https://typescriptlang.org)
[![Tailwind v4](https://img.style-shield.svg/badge/TailwindCSS-v4.0-orange?style=flat-square)](https://tailwindcss.com)

**Antioquia Zana** es una plataforma interactiva de divulgación científica y transferencia agroindustrial que visibiliza los resultados del proyecto *"Fortalecimiento de la cadena productiva de la zanahoria mediante la creación de prototipos de productos innovadores en el Oriente del departamento de Antioquia"*. 

El sitio ha sido diseñado con un enfoque visual de alto impacto (estilo *NASA showcase* y *Bloomberg Green*), fusionando rigor científico, datos analíticos interactivos y apropiación social del conocimiento agrícola.

---

## 📌 Ficha Técnica del Proyecto
*   **Nombre del Proyecto**: Fortalecimiento de la cadena productiva de la zanahoria mediante la creación de prototipos de productos innovadores en el Oriente del departamento de Antioquia.
*   **Código BPIN**: `2020000100192`
*   **NIT del Proyecto**: `8001946003`
*   **Entidad Ejecutora**: AGROSAVIA — Centro de Investigación La Selva (Rionegro, Antioquia).
*   **Investigador Principal**: Juan Camilo Henao Rojas, M.Sc. en Ingeniería de Alimentos con énfasis en Biotecnología.
*   **Contacto**: `jhenao@agrosavia.co` | (+57) 316 290 3251
*   **Región de Cobertura**: El Santuario, Marinilla, Rionegro y San Pedro de los Milagros.
*   **Financiación**: Sistema General de Regalías (SGR - Fondo de Ciencia, Tecnología e Innovación). Presupuesto aprobado: $6,301,659,967 COP.

---

## 🚀 Características del Sitio Web

El sitio es una **Single-Page Application (SPA)** interactiva compuesta por 10 secciones estructuradas:

1.  **Lienzo de Partículas 3D (Hero)**: Cabecera inmersiva reactiva al cursor del ratón, desarrollada con **Three.js** y **React Three Fiber**.
2.  **Sobre el Proyecto (About)**: Panel explicativo con tarjetas glassmórficas que detallan la gobernanza del proyecto y estadísticas de producción.
3.  **Pestañas de Objetivos (Objectives)**: Separadores interactivos que explican los 4 objetivos específicos del proyecto y sus logros en tiempo real con transiciones fluidas de Framer Motion.
4.  **Línea del Tiempo de Actividades (Activities)**: Acordeón interactivo que despliega las 14 actividades del proyecto, detallando su descripción, cronograma y un listado de **Hallazgos y Resultados Clave** extraídos de la documentación técnica.
5.  **Catálogo de Prototipos (Products)**: Fichas técnicas interactivas y modales detallados de los 5 prototipos desarrollados:
    *   **ZanaPure** (Compota infantil biofuncional).
    *   **ZanaPet** (Gomas nutricionales para mascotas).
    *   **Gomas Nutricionales** (Snack funcional para humanos).
    *   **Extracto Apocarotenoide** (Ingrediente cosmético antienvejecimiento).
    *   **Aurum Carota** (Emulsión facial antiarrugas).
6.  **Cuadro de Mando Científico (Results)**: Dashboard interactivo con KPIs de producción y gráficos en **Recharts** que desglosan muestras analizadas, finalización de actividades e indicadores clave.
7.  **Registro Fotográfico (Gallery)**: Galería de apropiación social con diseño de columnas tipo *masonry*, pestañas de filtrado de categorías y un visor de imágenes (*lightbox*) integrado para visualización de metadatos y descargas.
8.  **Red de Aliados (Partners)**: Mapa de actores y entidades colaboradoras (AGROSAVIA, Universidad Católica de Oriente, Hortisanos, etc.).
9.  **Contacto (Contact)**: Sección informativa con enlaces directos a correos, teléfonos y direcciones físicas de los investigadores.
10. **Pie de Página (Footer)**: Árbol de navegación y logotipos de patrocinio del Sistema General de Regalías (SGR).

---

## 🛠️ Stack Tecnológico
*   **Core**: React 19 + TypeScript + Vite.
*   **Estilos**: Tailwind CSS v4 + Vanilla CSS + Glassmorphism.
*   **Gráficos**: Recharts.
*   **Animaciones**: Framer Motion + GSAP ScrollTrigger (revelaciones al hacer scroll) + Lenis (desplazamiento suave).
*   **Lienzo 3D**: Three.js + React Three Fiber + @react-three/drei.
*   **Iconos**: Lucide React.

---

## ⚙️ Configuración y Ejecución Local

### Prerrequisitos
- Node.js (v18.x o superior)
- npm o yarn

### Instalación de dependencias
1. Clona el repositorio:
   ```bash
   git clone https://github.com/<usuario>/antioquia-zana.git
   cd antioquia-zana
   ```

2. Instala los paquetes:
   ```bash
   npm install
   ```

### Ejecutar en modo desarrollo
Inicia el servidor local de Vite:
```bash
npm run dev
```
El proyecto estará disponible en [http://localhost:5173/](http://localhost:5173/).

### Compilar para producción
Genera el empaquetado optimizado en la carpeta `/dist`:
```bash
npm run build
```

---

## 📂 Estructura del Código
```
├── public/                 # Favicon y fotografías del proyecto catalogadas
├── src/
│   ├── components/         # Componentes visuales reutilizables (Badge, GlassCard, etc.)
│   ├── data/               # Bases de datos y perfiles (projectData.ts, galleryPhotos.ts)
│   ├── sections/           # Los 10 bloques/secciones principales de la SPA
│   ├── App.tsx             # Punto de ensamble y configuración de scroll suave (Lenis)
│   ├── index.css           # Tokens de Tailwind CSS v4, animaciones y tema oscuro
│   └── main.tsx            # Punto de entrada de la aplicación
├── index.html              # Documento base con metadatos SEO
└── vite.config.ts          # Configuración de Vite y plugins
```

---

## 💡 Nota sobre el Sistema de Archivos Virtual (Windows / Google Drive)
En entornos Windows con unidades montadas virtualmente (como Google Drive `G:\`), `npm install` puede fallar debido a bloqueos de descriptor de archivo del sincronizador (`EBADF`/`EPERM`). 

**Solución**: Se recomienda realizar la descarga de módulos e instalación de dependencias en una partición física local de disco duro (`C:\` u otra), ejecutar los comandos de desarrollo o compilación de producción allí, y transferir los cambios de vuelta.
