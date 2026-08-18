# CONTEXTO INTEGRAL Y REGISTRO MAESTRO DE CAMBIOS - PROYECTO ANTIOQUIA ZANA

> **Código de Proyecto:** BPIN 2020000100192  
> **Título Oficial:** Transformación integral de la cadena productiva de la zanahoria en el Oriente Antioqueño (2022–2026)  
> **Financiador:** Sistema General de Regalías (SGR) — Fondo de CTI  
> **Repositorio Git:** `elchamacoperro94/antioquia-zana` (Rama principal: `main`)  
> **Plataforma de Despliegue:** Vercel (Producción automática desde `main`)  
> **Entorno Local:** `http://localhost:5173/`

---

## 1. RESUMEN EJECUTIVO Y ARQUITECTURA DEL PROYECTO WEB

El sitio web **Antioquia Zana** es una plataforma bioeconómica y agroindustrial diseñada para divulgar los resultados científicos, tecnológicos, agroindustriales y de apropiación social del proyecto BPIN 2020000100192.

### 🏛️ Entidades Aliadas y Co-ejecutoras
1. **AGROSAVIA (C.I. La Selva):** Entidad ejecutora principal (Líder científico: Juan Camilo Henao Rojas).
2. **Universidad de Antioquia (UdeA - Grupo GISB):** Extracción, nanotecnología (NLC) y ensayos OCDE.
3. **Universidad Católica de Oriente (UCO):** Análisis de cadena de valor, planes de negocio y transferencia.
4. **Universidad Nacional de Colombia (UNal - Grupo NIRS):** Modelos de espectroscopia NIRS no destructiva.
5. **Fundación INTAL:** Inocuidad microbiológica, fisicoquímica y vida útil acelerada (ZanaPure).
6. **Kavitec S.A.S.:** Co-desarrollador tecnológico e ingeniería en Cavitación Hidrodinámica CHTD.
7. **Gobernación de Antioquia:** Supervisora del SGR.
8. **Alcaldía de Marinilla & Alcaldía de El Santuario:** Enlace territorial y asociaciones de productores hortícolas.

### 💻 Stack Tecnológico
- **Core:** React 18 / TypeScript / Vite 6 / Tailwind CSS v4 / Framer Motion / Lucide React
- **Arquitectura de Interfaz:** SPA museográfica oscura e inmersiva con micro-animaciones, Bento Grids y navegación flotante.

---

## 2. REGLAS DE TRABAJO Y PROTOCOLO DE AUDITORÍA (APROBADAS POR EL USUARIO)

1. **Flujo de Modificaciones por Sección:**
   - El usuario dicta las instrucciones sección por sección.
   - El agente valida los datos, explica su entendimiento exacto al usuario y espera aprobación previa.
   - **Nunca hacer push a Git sin revisión local previa:** Todo cambio se prueba primero en `http://localhost:5173/`.
   - Únicamente cuando el usuario revisa en local y da la orden explícita *"hagamos push en git"*, se realiza commit y push a `main`.

2. **Reinicio de Scroll:**
   - Cualquier cambio de sección o navegación restablece de forma instantánea la posición del scroll al inicio de la página (`top: 0`).

3. **Mantenimiento de este Archivo (`CONTEXTO.md`):**
   - Este documento debe actualizarse con cada nuevo cambio o decisión aprobada en el proyecto.

---

## 3. HISTORIAL COMPLETO DE CAMBIOS Y AJUSTES REALIZADOS

### 🔹 1. Fusión de las Secciones "Proyecto" e "Inicio" (Aprobado y Desplegado en Commit `b03d4b5`)
- **Motivo:** Evitar duplicidad de información entre la pestaña "Proyecto" y la pestaña "Inicio".
- **Acciones Ejecutadas:**
  - Se eliminó el botón "Proyecto" de la barra de navegación flotante (`FloatingNav.tsx`).
  - Se integró la sección explicativa completa (`About.tsx`: 4 problemas, 4 objetivos específicos, actividades, generalidades, equipo investigador de 24 miembros y las 9 entidades aliadas) directamente en la vista de **Inicio** (`App.tsx`).
  - La navegación de la pestaña **Inicio** fluye continuamente de la siguiente forma:  
    `Portada Hero ➔ Síntesis Ejecutiva & Árboles de Problemas/Objetivos ➔ Generalidades y Aliados ➔ Colección Bioeconómica Bento Grid`.

### 🔹 2. Enlace Oficial al Repositorio UCO para el Libro "¿Esta Zanahoria Pa' Qué?" (Aprobado y Desplegado)
- **Motivo:** Reemplazar descargas locales PDF por la publicación oficial indexada en la universidad.
- **Enlace Institucional:** `https://repositorio.uco.edu.co/items/faf7692d-0483-4cf8-9cc9-cc88179c5a19`
- **Componentes Actualizados:**
  - `ComplementaryProducts.tsx`: Tarjeta COMP-04 actualizada con redirección externa `target="_blank"` y botón *"Ver Publicación en Repositorio UCO"*.
  - `About.tsx`: Tarjeta destacada del libro de divulgación ajustada para abrir el enlace externo del repositorio UCO.
  - `projectData.ts`: Enlaces de entregables 1.11 y 4.4 redirigidos al repositorio de la UCO.

### 🔹 3. Estandarización de Nombres de Fotografías del Proyecto (163 Archivos)
- **Ubicación:** `public/photos-proyecto/`
- **Acción:** Se renombraron 163 imágenes con nombres crípticos o genéricos (`img_0403.jpg`, `foto-1.jpg`) a una nomenclatura estandarizada por actividad y categoría:
  - `act-01-investigacion-agronomica-001.jpg` a `031.jpg`
  - `act-05-prototipado-alimentario-001.jpg` a `030.jpg`
  - `act-06-pruebas-sensoriales-001.jpeg` a `031.jpeg`
  - `act-10-escalamiento-cosmetico-001.jpg` a `031.jpg`
  - `act-13-apropiacion-social-001.jpg` a `034.jpg`
  - `soporte-documental-*`, `soporte-tecnico-*`, `trl-infografia-escala-madurez.png`, `hero-portada-zanahoria.png`.
- **Integración:** Actualizados los archivos de datos e interfaz `galleryPhotos.ts`, `ActivityAccordion.tsx` y `TrlExplanation.tsx`.

### 🔹 4. Corrección de Errores de Compilación TypeScript para Vercel
- **Acción:** Se limpiaron 22 importaciones no utilizadas en `ActivityAccordion.tsx`, `ComplementaryProducts.tsx`, `ResultsDashboard.tsx`, `StudentsPage.tsx`, `TreeDiagram.tsx`, `TrlExplanation.tsx` y `About.tsx`.
- **Resultado:** Compilación 100% limpia sin advertencias `TS6133` ni errores de namespace `JSX`.

---

## 4. ESTRUCTURA DE RUTAS Y COMPONENTES CLAVE

```
src/
├── App.tsx                    # Orquestador SPA, estado de pestañas y scroll reset
├── components/
│   ├── FloatingNav.tsx        # Menú flotante inferior (Inicio, Objetivos, Actividades, etc.)
│   ├── ComplementaryProducts.tsx # Tarjetas de libros, recetarios y manuales UCO
│   ├── ActivityAccordion.tsx  # Desglose interactivo de las 14 actividades
│   ├── ResultsDashboard.tsx   # Dashboard de indicadores de resultados
│   ├── StudentsPage.tsx       # Estudiantes de pregrado y posgrado financiados
│   ├── SectionHeader.tsx      # Encabezados de sección con insignias
│   └── TreeDiagram.tsx        # Árbol de problemas (5.3) y árboles de objetivos (12.4)
├── sections/
│   ├── Hero.tsx               # Portada principal con efecto parallax
│   ├── About.tsx              # Resumen ejecutivo, 4 problemas/objetivos, equipo y aliados
│   ├── Objectives.tsx         # Detalle de objetivos estratégicos
│   ├── Activities.tsx         # Vista de actividades del proyecto
│   ├── Products.tsx           # Prototipos (ZanaPure, ZanaGlow, ZanaFiber, etc.)
│   ├── Results.tsx            # Resultados y métricas del proyecto
│   ├── Gallery.tsx            # Galería fotográfica categorizada
│   ├── Partners.tsx           # Rejilla de las 9 entidades aliadas
│   ├── Contact.tsx            # Formulario de contacto y pie
│   └── Footer.tsx             # Pie de página con créditos e indicadores
└── data/
    ├── projectData.ts         # Datos maestros del proyecto (equipo, aliados, entregables)
    ├── activityReports.ts     # Informes detallados por cada una de las 14 actividades
    └── galleryPhotos.ts       # Registro estandarizado de fotografías
```

---

## 5. REGISTRO DE SEGUIMIENTO (LOG PARA FUTURAS MODIFICACIONES)

| Fecha | Componente | Descripción de la Modificación | Estado Git |
| :--- | :--- | :--- | :--- |
| 2026-08-14 | `App.tsx` / `FloatingNav.tsx` | Eliminación de pestaña Proyecto y fusión bajo Inicio. | Commit `b03d4b5` |
| 2026-08-14 | `ComplementaryProducts.tsx` | Redirección de "¿Esta Zanahoria Pa' Qué?" al Repositorio UCO. | Commit `b03d4b5` |
| 2026-08-15 | `About.tsx` / `projectData.ts` | Actualización de tarjetas e imágenes de divulgación al repositorio UCO. | Commit `b03d4b5` |
| 2026-08-16 | `CONTEXTO.md` | Creación del documento maestro de contexto del proyecto. | Pendiente de commit |

---
*Este documento se mantendrá actualizado en la raíz del espacio de trabajo para consulta y alineación permanente.*
