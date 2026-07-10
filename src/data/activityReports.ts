export interface ReportPage {
  title: string;
  paragraphs: string[];
  stats: { label: string; value: string; detail?: string }[];
  table?: {
    title: string;
    headers: string[];
    rows: string[][];
    description?: string;
  };
  photos: string[];
}

export interface ActivityReport {
  id: string;
  responsibleEntity: string;
  researchTeam: string[];
  pages: ReportPage[];
}

export const activityReports: Record<string, ActivityReport> = {
  "ACT-01": {
    id: "ACT-01",
    responsibleEntity: "AGROSAVIA (Centro de Investigación La Selva)",
    researchTeam: [
      "Jorge Eliecer Jaramillo",
      "Carolina Zuluaga",
      "Cristian Domínguez",
      "Rocío Alexandra Ortíz-Paz",
      "Albeiro de Jesús Macías",
      "Mario Alonso Mesa",
      "Rosa Helen Mira Herrera",
      "Karen Ballestas Álvarez",
      "Juan Camilo Henao Rojas"
    ],
    pages: [
      {
        title: "Hoja 1: Diagnóstico de Suelos y Lote Experimental",
        paragraphs: [
          "Para el establecimiento del lote experimental en el Centro de Investigación La Selva (Rionegro, Antioquia), se realizó una preparación y adecuación previa del suelo debido al alto régimen de lluvias característico de la zona del Oriente Antioqueño. El lote presentó problemas iniciales de drenaje superficial, causados por precipitaciones mayores a la velocidad de infiltración del terreno. Para mitigar estos riesgos de encharcamiento que demeritan el cultivo de zanahoria, se construyeron y adecuaron drenajes laterales y frontales.",
          "Adicionalmente, se realizó un control periódico y preventivo de malezas altamente competitivas (principalmente gramíneas y ciperáceas como 'coquito' y 'pasto cocuy') mediante la aplicación del herbicida Finale en dosis de 10 cc/L. Se marcaron y levantaron 14 eras o camas de siembra elevadas 25 cm para aislar las raíces de la humedad freática, la cual se ubicó entre 45 y 60 cm de profundidad.",
          "El análisis de suelos realizado previamente en el laboratorio determinó que el lote posee una textura Franco Arenosa, con un pH neutro de 6.0 y conductividad eléctrica de 0.16 dS/m. Presentó un alto contenido de materia orgánica y potasio, pero niveles deficientes de fósforo. Para corregir la fertilidad, se aplicó fertilizante edáfico granulado 10-30-10 a razón de 600 Kg/Ha al mes de la siembra, complementado con labores de aporque manual."
        ],
        stats: [
          { label: "Eras construidas", value: "14 Camas", detail: "5m largo x 1.2m ancho" },
          { label: "pH del suelo", value: "6.0 (Neutro)", detail: "Nivel óptimo para Bangor" },
          { label: "Conductividad", value: "0.16 dS/m", detail: "Baja salinidad" },
          { label: "Altura eras", value: "30 cm", detail: "Aislamiento freático" }
        ],
        table: {
          title: "Análisis Físico y de Fertilidad del Lote (CI La Selva)",
          headers: ["Parámetro Físico/Químico", "Valor Medido", "Interpretación Agronómica", "Enmienda Sugerida"],
          rows: [
            ["Textura de Suelo", "Franco Arenoso", "Drenaje medio, buena aireación", "Ninguna"],
            ["Materia Orgánica", "Alta (>8%)", "Excelente retención de nutrientes", "Mantener cobertura"],
            ["Fósforo Disponible", "Bajo (<15 ppm)", "Crítico para desarrollo radicular", "600 Kg/Ha 10-30-10"],
            ["Potasio Cambiable", "Alto (>0.4 meq/100g)", "Favorece calibre de la zanahoria", "Ninguna"]
          ]
        },
        photos: ["img-20240530-wa0018.jpg"]
      },
      {
        title: "Hoja 2: Avance Físico y Parámetros Operacionales",
        paragraphs: [
          "El avance del cultivo experimental se monitoreó a través de un riguroso esquema de registro semanal. Se midieron parámetros biofísicos en 40 plantas seleccionadas al azar en las camas centrales del lote experimental para evaluar la velocidad de emisión foliar y el desarrollo radicular del material Bangor.",
          "Se utilizaron calibradores digitales micrométricos de alta precisión para medir el diámetro distal y proximal de las raíces en desarrollo, complementado con el pesaje de biomasa fresca foliar y radicular en básculas calibradas Ohaus. El área foliar se evaluó en laboratorio mediante un escáner óptico LI-3000C, y se realizaron mediciones periódicas del índice de clorofila SPAD.",
          "Asimismo, para evaluar el desempeño fotosintético bajo condiciones de estrés hídrico o nubosidad del Oriente, se empleó un analizador de intercambio gaseoso portátil (IRGA LCPro) a nivel foliar en tres etapas del ciclo de cultivo (días 45, 75 y 105)."
        ],
        stats: [
          { label: "Plantas evaluadas", value: "40 Unidades", detail: "Muestreo aleatorio" },
          { label: "Registro semanal", value: "14 Semanas", detail: "Ciclo completo" },
          { label: "Fórmula foliar", value: "SPAD 42.5", detail: "Excelente nivel clorofila" },
          { label: "Fotosíntesis", value: "15 µmol/m²/s", detail: "Medición IRGA promedio" }
        ],
        table: {
          title: "Parámetros del Ciclo de Desarrollo de Bangor F1",
          headers: ["Etapa Fisiológica", "Día del Ciclo", "Altura Planta (cm)", "Diámetro Raíz (mm)", "Peso Fresco Raíz (g)"],
          rows: [
            ["Emergencia y Crecimiento", "Día 30", "12.4 cm", "4.2 mm", "1.8 g"],
            ["Desarrollo Foliar Rápido", "Día 60", "28.5 cm", "12.8 mm", "22.5 g"],
            ["Llenado de Raíz", "Día 90", "36.2 cm", "28.4 mm", "85.3 g"],
            ["Cosecha y Madurez", "Día 115", "41.0 cm", "38.2 mm", "117.1 g"]
          ]
        },
        photos: ["img-20240530-wa0024.jpg"]
      },
      {
        title: "Hoja 3: Incidencia Fitosanitaria de Patógenos en Fincas",
        paragraphs: [
          "Se llevó a cabo una exhaustiva evaluación fitosanitaria en 24 fincas productoras de zanahoria en veredas seleccionadas de los municipios de Marinilla y El Santuario. El objetivo fue identificar los patógenos más limitantes (hongos, bacterias y nematodos) y determinar su impacto en la calidad del cultivo Bangor. Se colectaron muestras foliares y radiculares durante la temporada de cosecha de plantas con edades de 3.5 a 4 meses.",
          "El hongo Alternaria spp. (tizón foliar) presentó una incidencia del 100% en todas las fincas muestreadas. Este patógeno destruye el follaje apical comenzando con manchas necróticas y halos cloróticos, lo que reduce la fotosíntesis y causa pérdidas de rendimiento de hasta el 99%. Asimismo, se identificaron hongos como Sclerotium rolfsii (pudrición de cuello) e Ilyonectria radicicola (pata negra) asociados a pudriciones secas de la raíz.",
          "En cuanto a nematodos, la prevalencia del nematodo agallador Meloidogyne spp. fue del 75% en las fincas de Oriente, superando con creces el umbral de daño económico al detectarse promedios de 3 individuos (J2) por g de suelo seco (el umbral tolerable es de 2). Las agallas y bifurcaciones radiculares no solo inhabilitan comercialmente a la zanahoria, sino que sirven como heridas de entrada para bacterias del género Pectobacterium, causantes de pudrición blanda con olor fétido."
        ],
        stats: [
          { label: "Incidencia Alternaria", value: "100%", detail: "Presente en todas las fincas" },
          { label: "Prevalencia Meloidogyne", value: "75%", detail: "Nematodo agallador" },
          { label: "Población Nematodos", value: "3 J2/g suelo", detail: "Supera el umbral crítico de 2" },
          { label: "Pérdidas asociadas", value: "40% - 99%", detail: "Daño foliar por Tizón" }
        ],
        table: {
          title: "Prevalencia de Patógenos y Umbrales Críticos en Suelos del Oriente",
          headers: ["Patógeno Evaluado", "Prevalencia (%)", "Población Promedio", "Umbral Crítico", "Efecto en Cultivo"],
          rows: [
            ["Alternaria spp. (Tizón)", "100.0%", "Severidad alta (36.6%)", "10.0%", "Secamiento foliar y defoliación"],
            ["Meloidogyne spp. (Agallador)", "75.0%", "3 J2 / g suelo seco", "2 J2 / g", "Bifurcación y agallas radiculares"],
            ["Pratylenchus spp. (Lesionador)", "40.0%", "2 individuos / g", "1 individuo / g", "Lesiones necróticas en raíz"],
            ["Pectobacterium spp. (Pudrición)", "83.3%", "Alta en campo de materos", "Presencia", "Pudrición húmeda y olor fétido"]
          ]
        },
        photos: ["img_0388.jpg", "img_0403.jpg"]
      },
      {
        title: "Hoja 4: Tamizaje de Cultivares y Entregables Oficiales",
        paragraphs: [
          "Para identificar materiales con resistencia y rendimiento óptimos bajo condiciones de manejo integrado, se evaluaron 14 cultivares promisorios de zanahoria en el Centro de Investigación La Selva. Entre los cultivares se evaluó el híbrido Bangor F1 (naranja, de uso común en la subregión) y el Deep Purple F1 (morado, rico en antocianinas).",
          "Los resultados demostraron una resistencia moderada destacada frente a Alternaria spp. en los materiales 8 y 9, con severidades promedio foliares de tan solo 3.81% y 5.00% respectivamente. Adicionalmente, el material 12 se destacó por presentar el mayor peso promedio del ensayo con 179 g, tolerando la enfermedad foliar sin reportar pudriciones, agallas ni bifurcaciones radiculares.",
          "Por el contrario, el Material 1 (usado como control) fue catalogado como no apto para comercialización o procesamiento industrial debido a un 33.33% de rajaduras longitudinales, pudriciones severas y un 44.44% de deformación radicular inducida por el nematodo agallador."
        ],
        stats: [
          { label: "Resistencia Mat. 8 y 9", value: "3.8% - 5.0%", detail: "Severidad de Alternaria" },
          { label: "Peso promedio Máx.", value: "179 g", detail: "Material 12 (Excelente)" },
          { label: "Rajaduras Control", value: "33.33%", detail: "Material 1 (No apto)" },
          { label: "Bifurcación Control", value: "44.44%", detail: "Deformación por nematodos" }
        ],
        table: {
          title: "Tamizaje de Rendimiento y Fitosanidad de Cultivares de Zanahoria",
          headers: ["Cultivar Evaluado", "Peso Promedio (g)", "Severidad Alternaria (%)", "Rajaduras (%)", "Bifurcaciones (%)"],
          rows: [
            ["Material 8 (Promisorio)", "117.07 g", "3.81%", "11.11%", "0.00%"],
            ["Material 9 (Promisorio)", "106.93 g", "5.00%", "0.00%", "0.00%"],
            ["Material 10 (Promisorio)", "117.14 g", "12.50%", "0.00%", "0.00%"],
            ["Material 12 (Tolerante)", "179.00 g", "51.33%", "0.00%", "0.00%"],
            ["Material 1 (Control)", "No comercial", "36.67%", "33.33%", "44.44%"]
          ],
          description: "Los materiales 8 y 9 exhiben el mejor balance fitosanitario del ensayo, combinando una severidad mínima de Alternaria con una inmunidad total a nematodos. El material 12 es el de mayor calibre y biomasa, siendo ideal para extracción industrial a pesar de su sensibilidad foliar."
        },
        photos: ["img_0333.jpg"]
      }
    ]
  },
  "ACT-02": {
    id: "ACT-02",
    responsibleEntity: "Universidad de Antioquia (UdeA) y AGROSAVIA",
    researchTeam: [
      "Juan Camilo Henao Rojas",
      "Carolina Zuluaga",
      "German Franco",
      "Liliana Ceballos"
    ],
    pages: [
      {
        title: "Hoja 1: Captura de Respuestas Espectrales en Dron",
        paragraphs: [
          "Para caracterizar la variabilidad fisiológica y nutricional de la zanahoria de forma rápida y no destructiva, se estableció una parcela experimental en el municipio de Bojacá, Cundinamarca, a una altitud de 2.600 msnm. Las coordenadas exactas del lote fueron 4°38'12.0\"N y 74°18'02.9\"W, sobre suelos del altiplano con alta representatividad horticola.",
          "Se sembraron parcelas con los híbridos de la casa Bejo: Caspi (banda control) y Córdoba (banda experimental). Para el monitoreo espacial no destructivo se programaron vuelos con un dron DJI Phantom 3 Advanced equipado con un sensor multiespectral MicaSense RedEdge de cinco bandas espectrales (azul, verde, rojo, red-edge e infrarrojo cercano).",
          "Los ortofotomosaicos generados en el software Agisoft Metashape sirvieron para calibrar índices de vegetación como el NDVI e identificar patrones de estrés nutricional en las hojas de las plantas a los 30, 60 y 90 días del ciclo."
        ],
        stats: [
          { label: "Dron empleado", value: "DJI Phantom 3", detail: "Dron multiespectral" },
          { label: "Sensor multiespectral", value: "MicaSense RedEdge", detail: "5 bandas ópticas" },
          { label: "Híbridos evaluados", value: "Caspi y Córdoba", detail: "Semillas Bejo" },
          { label: "Altitud experimental", value: "2.600 msnm", detail: "Bojacá, Cundinamarca" }
        ],
        table: {
          title: "Especificación de Bandas Espectrales Capturadas por Sensor",
          headers: ["Canal Óptico", "Longitud de Onda Central", "Ancho de Banda", "Propósito de Calibración"],
          rows: [
            ["Azul (Blue)", "475 nm", "20 nm", "Absorción de clorofila y carotenos"],
            ["Verde (Green)", "560 nm", "20 nm", "Vigor de vegetación y clorosis"],
            ["Rojo (Red)", "668 nm", "10 nm", "Contraste de índices de vegetación"],
            ["Red Edge", "717 nm", "10 nm", "Sensibilidad al estrés foliar"],
            ["Infrarrojo Cercano (NIR)", "842 nm", "40 nm", "Estructura celular y reflectancia foliar"]
          ]
        },
        photos: ["img-20240530-wa0044.jpg"]
      },
      {
        title: "Hoja 2: Calibración Espectral NIRS en Laboratorio",
        paragraphs: [
          "Para las mediciones directas en raíces, se empleó un espectrómetro Spectral Evolution con un rango dinámico de 350 a 1900 nm. Las lecturas de firmas ópticas se realizaron en tres posiciones diferentes por raíz (dos externas y una interna en el cilindro central) para capturar la variabilidad de la reflectancia en la corteza y la médula.",
          "En total se analizaron 240 muestras de raíces de diferentes variedades (Morada, Naranja Bangor, Amarilla, Blanca, 6KUR y 14BER) en laboratorio. Estas reflectancias tabulares sirvieron como matriz de entrada para modelados quimiométricos avanzados.",
          "En paralelo, la cuantificación de β-caroteno de referencia se realizó mediante un espectrofotómetro Genesys 10S UV-VIS configurado a 450 nm, de modo que cada espectro capturado NIRS tuviera su respectivo valor de laboratorio validado para la calibración matemática."
        ],
        stats: [
          { label: "Espectrómetro", value: "Spectral Evolution", detail: "Rango 350 - 1900 nm" },
          { label: "Muestras de calibración", value: "240 Raíces", detail: "Diferentes cultivares" },
          { label: "UV-VIS referencia", value: "Genesys 10S", detail: "Lecturas a 450 nm" },
          { label: "Lecturas por muestra", value: "3 Escaneos", detail: "Superficie y médula" }
        ],
        table: {
          title: "Matriz Espectral de Concentraciones y Reflectancia por Variedad",
          headers: ["Variedad de Raíz", "Nº Muestras", "Rango β-caroteno (ppm)", "Reflectancia a 450 nm", "Color de Corteza"],
          rows: [
            ["Bangor (Naranja)", "80 raíces", "45.2 - 82.5 ppm", "0.185", "Naranja intenso"],
            ["Deep Purple (Morada)", "45 raíces", "0.5 - 2.8 ppm", "0.082", "Morada / Antocianinas"],
            ["Amarilla (Cultivar 9)", "40 raíces", "12.4 - 28.1 ppm", "0.322", "Amarilla clara"],
            ["Blanca (Control)", "35 raíces", "0.1 - 0.5 ppm", "0.584", "Blanca cremosa"],
            ["14BER (Promisorio)", "40 raíces", "38.2 - 61.0 ppm", "0.210", "Naranja medio"]
          ]
        },
        photos: ["img-20240530-wa0044bn.jpg"]
      },
      {
        title: "Hoja 3: Modelado Matemático y Algoritmo RandomForest",
        paragraphs: [
          "Para predecir el contenido nutricional de β-caroteno a partir de las firmas espectrales, se desarrolló un script en Python 3.12 utilizando algoritmos de machine learning. El conjunto de datos espectrales se dividió en entrenamiento (80%) y validación (20%), estratificando por variedad vegetal para evitar sesgos.",
          "Se entrenó un regresor de bosque aleatorio (RandomForestRegressor) configurado con 300 estimadores, profundidad máxima de 12 niveles y un mínimo de 5 muestras por nodo hoja. Se alcanzaron coeficientes de determinación R² superiores a 0.90 en el conjunto de prueba para β-caroteno.",
          "Adicionalmente, se formuló un índice colorimétrico no destructivo denominado ICarot utilizando parámetros de color CIELAB (L*, a*, b*, C, h° e YI) medidos con colorímetro digital, logrando clasificar las muestras en tres niveles de concentración (bajo, medio y alto) con una precisión estadística del 94%."
        ],
        stats: [
          { label: "Algoritmo ML", value: "Random Forest", detail: "300 Estimadores" },
          { label: "Coeficiente R²", value: "0.9997", detail: "Precisión para caroteno" },
          { label: "Profundidad Max", value: "12 Niveles", detail: "Modelo en Python" },
          { label: "Precisión ICarot", value: "94.0%", detail: "Índice colorimétrico" }
        ],
        table: {
          title: "Métricas de Validación de Algoritmos Quimiométricos en Python",
          headers: ["Propiedad / Analito", "Algoritmo Evaluado", "Coeficiente R²", "RMSE (Error medio)", "MAE (Error absoluto)"],
          rows: [
            ["β-caroteno (Provitamina A)", "Random Forest Regressor", "0.9850", "0.125 ppm", "0.098 ppm"],
            ["β-caroteno (Provitamina A)", "PLSR (Regresión Parcial)", "0.9997", "0.0778 ppm", "0.052 ppm"],
            ["Capacidad Antioxidante", "PLSR", "0.9974", "1.553 µM", "1.120 µM"],
            ["Sólidos Solubles (°Brix)", "Support Vector Machine (SVM)", "0.9250", "0.240 °Brix", "0.180 °Brix"]
          ]
        },
        photos: ["img-20240530-wa0058.jpg"]
      },
      {
        title: "Hoja 4: Soportes y Descargas de Respuestas Espectrales",
        paragraphs: [
          "El modelado matemático y los códigos de calibración espectral desarrollados en Python se consolidaron en los entregables oficiales del Objetivo 1 del proyecto.",
          "Asimismo, el artículo científico derivado de la evaluación de respuestas espectrales fue publicado en la revista indexada PeerJ 2026, sirviendo de base científica para futuras transferencias tecnológicas en el departamento de Antioquia.",
          "A continuación, se disponen los enlaces oficiales para la descarga de los códigos, bases de datos espectrales raw y el artículo científico correspondiente."
        ],
        stats: [
          { label: "Banda crítica NIRS", value: "842 nm (NIR)", detail: "Mayor importancia relativa" },
          { label: "Límite detección", value: "0.156 µg/mL", detail: "Bajo error del sensor" },
          { label: "Modelos guardados", value: ".pkl (Python)", detail: "Archivos serializados" },
          { label: "Publicación", value: "Revista PeerJ", detail: "Artículo indexado Q1" }
        ],
        table: {
          title: "Índice de Importancia de Bandas Espectrales en el Modelo",
          headers: ["Orden de Importancia", "Banda Espectral (nm)", "Peso Relativo en Modelo", "Región del Espectro"],
          rows: [
            ["1º Lugar", "842 nm", "0.345", "Infrarrojo Cercano (NIR)"],
            ["2º Lugar", "668 nm", "0.280", "Rojo (VIS)"],
            ["3º Lugar", "717 nm", "0.195", "Red Edge"],
            ["4º Lugar", "560 nm", "0.120", "Verde (VIS)"],
            ["5º Lugar", "475 nm", "0.060", "Azul (VIS)"]
          ]
        },
        photos: ["img-20240530-wa0058_bn.jpg"]
      }
    ]
  },
  "ACT-03": {
    id: "ACT-03",
    responsibleEntity: "Universidad de Antioquia (UdeA) y UCO",
    researchTeam: [
      "Juan Camilo Henao Rojas",
      "German Franco",
      "Claudia Lukau"
    ],
    pages: [
      {
        title: "Hoja 1: Caracterización Fisicoquímica de Excedentes",
        paragraphs: [
          "Para definir la aptitud agroindustrial de las zanahorias descartadas por calibre o rajadura en el Oriente Antioqueño, se implementó un plan sistemático de muestreo fisicoquímico. En total se caracterizaron 117 muestras, de las cuales 62 correspondían a excedentes de cosecha Bangor en fincas de Marinilla y El Santuario, y 55 correspondían a nuevos cultivares evaluados en parcelas experimentales.",
          "El análisis abarcó la medición de acidez titulable (expresada como % de ácido málico mediante titulación potenciométrica), pH con potenciómetro calibrado de sobremesa, y contenido de sólidos solubles (°Brix) mediante refractómetro digital termocompensado.",
          "Se diseñó un análisis de varianza (ANOVA) multifactorial para evaluar el efecto de la procedencia (Marinilla vs. El Santuario) y la tipología de descarte (Calibre delgado, Bifurcada, Rajada o Deforme) sobre 24 variables físicas y bioquímicas."
        ],
        stats: [
          { label: "Muestras evaluadas", value: "117 Muestras", detail: "62 descartes + 55 nuevos cultivares" },
          { label: "Variables medidas", value: "24 Parámetros", detail: "Físicas y bioquímicas" },
          { label: "pH promedio", value: "5.85 - 6.12", detail: "Rango óptimo industrial" },
          { label: "Sólidos solubles", value: "8.40 °Brix", detail: "Promedio de dulzura" }
        ],
        table: {
          title: "Parámetros Fisicoquímicos Promedio de Zanahoria de Descarte",
          headers: ["Parámetro Evaluado", "Promedio Descarte", "Desviación Estándar", "Rango Observado", "Método Analítico"],
          rows: [
            ["pH", "5.98", "±0.12", "5.72 - 6.24", "Potenciometría digital"],
            ["Acidez Titulable", "0.085%", "±0.015%", "0.060% - 0.115%", "Titulación NaOH 0.1 N"],
            ["Sólidos Solubles", "8.25 °Brix", "±0.62", "7.10 - 9.80 °Brix", "Refractometría digital"],
            ["Humedad", "88.42%", "±1.15%", "86.50% - 90.10%", "Termobalanza a 105 °C"]
          ]
        },
        photos: ["img-20240530-wa0075.jpg"]
      },
      {
        title: "Hoja 2: Muestreo Biofuncional y Extracción",
        paragraphs: [
          "Para la determinación de compuestos funcionales (polifenoles totales, antocianinas y capacidad antioxidante), las muestras de raíz se liofilizaron previamente en un equipo de laboratorio Labconco a -50°C y una presión inferior a 0.05 mbar por 48 horas.",
          "Se estandarizó un método de extracción selectiva de compuestos polifenólicos utilizando disoluciones hidroalcohólicas de etanol al 70%. Las muestras liofilizadas se homogeneizaron y centrifugaron en equipo refrigerado Beckman Coulter a 13.000 RPM durante 10 minutos para recuperar el sobrenadante.",
          "La cuantificación de fenoles totales se realizó por el método colorimétrico de Folin-Ciocalteu, utilizando ácido gálico como estándar. La capacidad antioxidante se cuantificó mediante los ensayos FRAP y ORAC-L."
        ],
        stats: [
          { label: "Presión liofilizador", value: "0.05 mbar", detail: "Secado criogénico" },
          { label: "Centrifugación", value: "13.000 RPM", detail: "Separación de fases" },
          { label: "Tiempo centrifugado", value: "10 Minutos", detail: "A 4 °C de temperatura" },
          { label: "Solvente óptimo", value: "Etanol 70%", detail: "Máximo rendimiento fenólico" }
        ],
        table: {
          title: "Eficiencia de Extracción de Fenoles Totales según Disolvente",
          headers: ["Solvente de Extracción", "Concentración Solvente", "Polifenoles (mg EAG/100g)", "Actividad Antioxidante ORAC-L", "Rendimiento (%)"],
          rows: [
            ["Metanol puro", "99.9%", "85.38 mg", "4655.55 µmol", "12.4%"],
            ["Etanol hidroalcohólico", "70.0%", "57.10 mg", "6028.94 µmol", "18.2%"],
            ["Acetona diluida", "70.0%", "60.79 mg", "4849.91 µmol", "14.5%"],
            ["Acetato de Etilo", "99.0%", "26.01 mg", "887.38 µmol", "5.1%"]
          ]
        },
        photos: ["img-20240530-wa0075_bn.jpg"]
      },
      {
        title: "Hoja 3: Resultados Nutricionales de Nuevos Cultivares",
        paragraphs: [
          "La caracterización determinó variaciones bioquímicas muy marcadas entre el híbrido morado Deep Purple F1 y el naranja Bangor F1. El cultivar morado presentó concentraciones elevadas de antocianinas monoméricas totales (hasta 124.5 mg/100g de materia seca), compuestos ausentes en Bangor.",
          "En contraste, Bangor F1 reportó un contenido promedio de carotenoides totales de 94.2 mg/100g en base seca, constituyendo una de las mayores fuentes de provitamina A en la región hortícola de Oriente.",
          "El análisis de varianza determinó que las muestras de Marinilla tienen un contenido promedio de sólidos solubles ligeramente mayor (8.5 °Brix) en comparación con El Santuario (8.1 °Brix), debido a diferencias sutiles en la conductividad eléctrica y el contenido de arcilla de los suelos."
        ],
        stats: [
          { label: "Antocianinas moradas", value: "124.5 mg/100g", detail: "Deep Purple F1 seco" },
          { label: "Carotenoides Bangor", value: "94.2 mg/100g", detail: "Excelente provitamina A" },
          { label: "Efecto suelo (Solubles)", value: "+0.4 °Brix", detail: "Diferencia Marinilla/Santuario" },
          { label: "Humedad liofilizada", value: "3.20%", detail: "Humedad residual del polvo" }
        ],
        table: {
          title: "Comparación de Compuestos Funcionales: Morado vs Naranja",
          headers: ["Componente Analizado", "Híbrido Bangor (Naranja)", "Deep Purple (Morado)", "Efecto Significativo (p < 0.05)"],
          rows: [
            ["Carotenoides Totales", "94.20 mg/100g", "2.80 mg/100g", "Sí (p = 0.0002)"],
            ["Antocianinas Totales", "No detectado", "124.50 mg/100g", "Sí (p < 0.0001)"],
            ["Polifenoles Totales", "57.10 mg/100g", "148.60 mg/100g", "Sí (p = 0.0014)"],
            ["Capacidad Antioxidante (DPPH)", "195.93 µmol/100g", "524.30 µmol/100g", "Sí (p = 0.0008)"]
          ]
        },
        photos: ["img-20240530-wa0085.jpg"]
      },
      {
        title: "Hoja 4: Soportes y Descargas de Caracterización",
        paragraphs: [
          "Toda la caracterización fisicoquímica, perfiles funcionales e interpretación estadística se plasmaron en el Libro 'Modelo Productivo y Cadena de Valor de la Zanahoria en Antioquia'.",
          "Adicionalmente, se generó un artículo científico indexado que detalla las recomendaciones de uso industrial según las tipologías de descarte físico del Oriente Antioqueño.",
          "A continuación, se listan los accesos directos para la descarga de los perfiles nutricionales completos en PDF y el libro consolidado del modelo productivo."
        ],
        stats: [
          { label: "Total perfiles", value: "24 Fichas", detail: "Una por finca evaluada" },
          { label: "Ensayos por triplicado", value: "3 Repeticiones", detail: "Análisis químicos robustos" },
          { label: "Correlación color/caroteno", value: "r = 0.925", detail: "Valida uso del colorímetro" },
          { label: "Software estadístico", value: "R-Project 4.3", detail: "Análisis ANOVA y PCA" }
        ],
        table: {
          title: "Índice de Entregables Soportados de Caracterización",
          headers: ["Código de Entregable", "Nombre del Documento", "Extensión / Páginas", "Estado de Aprobación"],
          rows: [
            ["Entregable 1.3", "Libro Modelo Productivo y Cadena de Valor (V1_MP)", "248 páginas", "Aprobado Minciencias"],
            ["Entregable 1.6", "Artículo de perfiles de uso y recomendaciones", "18 páginas", "Publicado en Revista Actum"]
          ]
        },
        photos: ["img-20240530-wa0088.jpg"]
      }
    ]
  },
  "ACT-04": {
    id: "ACT-04",
    responsibleEntity: "Universidad de Antioquia (UdeA) y UCO",
    researchTeam: [
      "Juan Camilo Henao Rojas",
      "Carolina Zuluaga",
      "German Franco",
      "Mateo Londoño"
    ],
    pages: [
      {
        title: "Hoja 1: Mapeo Tecnológico y Tendencias",
        paragraphs: [
          "Para identificar rutas de valorización viables para el descarte de zanahoria en el Oriente Antioqueño, se realizó un análisis de patentes y tendencias tecnológicas a nivel internacional y latinoamericano. El estudio evaluó más de 80 procesos industriales de upcycling.",
          "El mapeo identificó que los principales usos industriales de excedentes hortícolas se centran en la elaboración de aderezos, salsas funcionales, deshidratados para panificación y suplementos nutricionales para mascotas.",
          "Se evaluaron los requerimientos de capital, complejidad de operación y adecuación de plantas procesadoras bajo regulaciones Invima para 6 tecnologías: secado convencional, secado solar, extrusión, cavitación hidrotermodinámica, hidrólisis enzimática y fermentación láctica."
        ],
        stats: [
          { label: "Patentes revisadas", value: "80 Procesos", detail: "Rutas de upcycling internacional" },
          { label: "Tecnologías tamizadas", value: "6 Opciones", detail: "Evaluación técnica de viabilidad" },
          { label: "Criterios evaluación", value: "12 Indicadores", detail: "Costo, energía, Invima, etc." },
          { label: "Región de enfoque", value: "Latinoamérica", detail: "Contexto andino compatible" }
        ],
        table: {
          title: "Evaluación Multicriterio de Tecnologías de Transformación",
          headers: ["Tecnología Evaluada", "Costo Inversión (CapEx)", "Costo Operación (OpEx)", "Complejidad Técnica", "Aptitud Invima"],
          rows: [
            ["Secado Convencional", "Medio", "Alto (Energía)", "Baja", "Fácil aprobación"],
            ["Secado Solar", "Bajo", "Bajo", "Baja", "Complejo control de humedad"],
            ["Cavitación (CHTD)", "Alto", "Bajo", "Media", "Apto para ingrediente líquido"],
            ["Hidrólisis Enzimática", "Medio", "Medio", "Media", "Apto para purés funcionales"],
            ["Fermentación Láctica", "Bajo", "Bajo", "Media", "Requiere estricto control de pH"]
          ]
        },
        photos: ["img-20240530-wa0088_bn.jpg"]
      },
      {
        title: "Hoja 2: Selección de Cavitación e Hidrólisis",
        paragraphs: [
          "El análisis multicriterio priorizó a la Cavitación Hidrotermodinámica (CHTD) y a la Hidrólisis Enzimática como las dos tecnologías limpias de menor impacto ambiental y mayor viabilidad de implementación local.",
          "La Cavitación CHTD utiliza ondas de choque físicas generadas por el flujo forzado de fluidos a través de placas de constricción, rompiendo mecánicamente las paredes celulares de la zanahoria para liberar carotenos y polifenoles sin usar solventes químicos dañinos.",
          "Por su parte, la hidrólisis enzimática controlada permite cortar los polisacáridos estructurales (celulosa y pectina) para transformar la pulpa en un puré fluido y altamente digerible, apto para la formulación de compotas infantiles y gomas."
        ],
        stats: [
          { label: "Tecnología priorizada 1", value: "Cavitación CHTD", detail: "Liberación física de carotenos" },
          { label: "Tecnología priorizada 2", value: "Hidrólisis", detail: "Degradación enzimática de pectina" },
          { label: "Uso de químicos", value: "0% Solventes", detail: "Tecnología limpia ecofriendly" },
          { label: "Eficiencia energética", value: "Alta", detail: "Aprovechamiento de energía hidráulica" }
        ],
        table: {
          title: "Parámetros de Proceso Priorizados para CHTD",
          headers: ["Variable de Operación", "Rango Estandarizado", "Efecto Celular", "Consumo de Energía"],
          rows: [
            ["Presión de entrada", "4.5 - 6.0 bar", "Fuerza motriz para microburbujas", "Media"],
            ["Flujo volumétrico", "12 L/min", "Cizallamiento y velocidad lineal", "Baja"],
            ["Número de ciclos", "15 pasadas", "Ruptura acumulada de pared celular", "Baja"],
            ["Temperatura máxima", "55 °C", "Previene degradación de carotenos", "Nulo (Autocalentamiento)"]
          ]
        },
        photos: ["img-20240530-wa0089.jpg"]
      },
      {
        title: "Hoja 3: Viabilidad Ambiental e Invima en el Oriente",
        paragraphs: [
          "Para garantizar que las tecnologías seleccionadas puedan implementarse en el Oriente Antioqueño, se realizó una evaluación de conformidad ambiental ante Cornare y de requisitos de inocuidad alimentaria ante el Invima.",
          "La cavitación hidrotermodinámica demostró una reducción del 85% en la huella de carbono y del 95% en la generación de vertimientos líquidos contaminantes en comparación con métodos tradicionales de extracción químico-orgánica.",
          "El puré hidrolizado enzimáticamente obtuvo la certificación analítica de inocuidad, con recuentos microbiológicos nulos de coliformes y patógenos, validando la estabilidad microbiológica del ingrediente líquido previo al formulado."
        ],
        stats: [
          { label: "Reducción huella C", value: "85.0%", detail: "Frente a solventes químicos" },
          { label: "Ahorro vertimientos", value: "95.0%", detail: "Proceso seco de cavitación" },
          { label: "Vertidos generados", value: "Cero", detail: "Circuito cerrado de agua" },
          { label: "Cumplimiento Invima", value: "Aprobado", detail: "Inocuidad garantizada" }
        ],
        table: {
          title: "Evaluación de Conformidad Invima y Ambiental (Cornare)",
          headers: ["Criterio de Evaluación", "Requisito Exigido", "Desempeño Cavitación", "Desempeño Hidrólisis", "Dictamen Final"],
          rows: [
            ["Inocuidad microbiológica", "Nulo patógenos", "Cumple (Recuento PCA < 10)", "Cumple (Recuento PCA < 10)", "APTO"],
            ["Consumo de Agua", "Eficiente", "Excelente (recircula 100%)", "Moderado (lavados)", "APTO"],
            ["Sustancias Tóxicas", "Libre de solventes", "0% orgánicos usados", "0% orgánicos usados", "APTO"],
            ["Vertimiento Orgánico", "Bajo DBO/DQO", "Sin vertidos químicos", "Fácil tratamiento biológico", "APTO"]
          ]
        },
        photos: ["img-20240530-wa0089_bn.jpg"]
      },
      {
        title: "Hoja 4: Soportes y Descargas del Estudio de Tecnologías",
        paragraphs: [
          "El informe de priorización tecnológica e inocuidad se consolidó en un artículo científico de revisión publicado bajo el Objetivo 1 del proyecto.",
          "Este documento sirve de guía técnica para las asociaciones de productores de Marinilla y El Santuario en el diseño de sus futuras plantas agroindustriales locales.",
          "A continuación, se presenta el enlace de descarga directa del artículo científico que documenta la selección técnica y ambiental de la cavitación y la hidrólisis."
        ],
        stats: [
          { label: "Artículos generados", value: "1 Paper", detail: "Publicado en revista indexada" },
          { label: "Asociaciones beneficiadas", value: "3 Gremios", detail: "Hortisanos, Cooasab y Asocampo" },
          { label: "Patentes licenciadas", value: "Públicas", detail: "Open Science para el Oriente" },
          { label: "Capacitaciones", value: "3 Talleres", detail: "Transferencia a líderes agrícolas" }
        ],
        table: {
          title: "Entregables del Estudio Tecnológico ACT-04",
          headers: ["Entregable ID", "Nombre Oficial del Documento", "Formato de Archivo", "Acceso"],
          rows: [
            ["Entregable 1.12", "Artículo científico sobre Tecnologías Apropiadas de Transformación", "PDF (Descarga directa)", "Público"],
            ["Anexo Técnico", "Protocolo de cavitación de pulpas de zanahoria", "PDF (Descarga directa)", "Público"]
          ]
        },
        photos: ["img-20240531-wa0047.jpg"]
      }
    ]
  },
  "ACT-05": {
    id: "ACT-05",
    responsibleEntity: "Universidad de Antioquia (UdeA) e INTAL",
    researchTeam: [
      "Juan Camilo Henao Rojas",
      "Carolina Zuluaga",
      "Edison Osorio",
      "Karent Bravo"
    ],
    pages: [
      {
        title: "Hoja 1: Formulación Base de Prototipos",
        paragraphs: [
          "Con base en las zanahorias caracterizadas y procesadas en el Objetivo 1, se procedió a la formulación piloto de tres prototipos de alimentos de alto valor agregado: ZanaPure (compota infantil), ZanaPet (suplemento nutricional para caninos y felinos) y gomas masticables biofuncionales.",
          "El diseño de las fórmulas balanceó de manera rigurosa la concentración de pulpa de zanahoria (para maximizar el upcycling de descarte) con la palatabilidad, textura y estabilidad física de los productos terminados.",
          "La preparación de las diluciones para el análisis microbiano de control se realizó utilizando solución de peptona al 0.1% esterilizada en autoclave a 121°C por 15 minutos, siguiendo la directriz estricta de la norma UNE-EN-ISO 6887-1:2000."
        ],
        stats: [
          { label: "Prototipos diseñados", value: "3 Alimentos", detail: "ZanaPure, ZanaPet y Gomas" },
          { label: "Norma peptona", value: "ISO 6887-1", detail: "Diluyente estandarizado" },
          { label: "Esterilización", value: "121 °C / 15 min", detail: "Control en autoclave" },
          { label: "Zanahoria incorporada", value: "Hasta 45%", detail: "Porcentaje de descarte útil" }
        ],
        table: {
          title: "Estructura de Fórmulas y Composición de Prototipos",
          headers: ["Prototipo Alimentario", "Zanahoria Utilizada (%)", "Agente Gelificante / Base", "Edulcorante / Saborizante", "Costo Ingredientes (COP/kg)"],
          rows: [
            ["ZanaPure (Compota)", "27.40%", "Pectina cítrica de bajo metoxilo", "Jugo concentrado de manzana", "$3.450 COP"],
            ["ZanaPet (Snacks)", "45.00%", "Harina de avena y linaza", "Caldo deshidratado de pollo", "$2.800 COP"],
            ["Gomas Funcionales", "18.00%", "Gelatina de cuero y agar-agar", "Fructosa y ácido cítrico", "$5.200 COP"]
          ]
        },
        photos: ["img-20260414-wa0002.jpg"]
      },
      {
        title: "Hoja 2: Procesamiento Piloto y Balances de Masa",
        paragraphs: [
          "Los lotes de procesamiento a escala piloto se corrieron en las instalaciones de la planta piloto del Instituto de Ciencia y Tecnología Alimentaria (INTAL). Se procesaron lotes medianos de hasta 63.38 kg para evaluar el rendimiento de los equipos industriales.",
          "Se utilizaron marmitas de vapor encamisadas con agitación constante para la cocción y pasteurización de ZanaPure, deshidratadores automáticos de bandejas para ZanaPet, y moldes de silicona de grado alimenticio para las gomas funcionales.",
          "Los balances de masa indicaron pérdidas mecánicas mínimas por adherencia en tanques y evaporación de humedad, las cuales se mantuvieron por debajo de 240g por lote de producción (menos del 0.5% del total procesado)."
        ],
        stats: [
          { label: "Lote ZanaPure", value: "63.38 kg", detail: "Masa procesada en marmita" },
          { label: "Lote ZanaPet", value: "50.00 kg", detail: "Masa en deshidratador" },
          { label: "Lote Gomas", value: "20.00 kg", detail: "Masa en mezclador piloto" },
          { label: "Pérdidas de lote", value: "< 240 g", detail: "Excelente rendimiento mecánico" }
        ],
        table: {
          title: "Balance de Materia y Rendimiento Operacional por Lote",
          headers: ["Fase de Proceso", "Masa de Entrada (kg)", "Masa de Salida (kg)", "Pérdida por Evaporación (kg)", "Rendimiento Operacional (%)"],
          rows: [
            ["ZanaPure (Marmita)", "65.00 kg", "63.38 kg", "1.45 kg (Vapor)", "97.5%"],
            ["ZanaPet (Secador)", "92.00 kg", "50.00 kg", "41.60 kg (Agua)", "54.3% (Sólidos concentrados)"],
            ["Gomas (Mezclador)", "20.20 kg", "20.00 kg", "0.10 kg", "99.0%"]
          ]
        },
        photos: ["img-20260414-wa0042.jpg"]
      },
      {
        title: "Hoja 3: Evaluación Microbiológica e Inocuidad",
        paragraphs: [
          "Para verificar la seguridad alimentaria de los prototipos antes de los ensayos de consumo, se realizaron muestreos microbiológicos microbiología de patógenos comunes de acuerdo con los criterios del Invima (Resolución 1407 de 2022).",
          "Se sembraron muestras diluidas en Agar de Recuento en Placa (Plate Count Agar - PCA) de Merck, incubándolas a 35°C durante 48 horas para bacterias mesófilas aerobias. Asimismo, se utilizó Agar Papa Dextrosa (PDA) acidificado para el recuento de mohos y levaduras.",
          "Los resultados indicaron la ausencia total de patógenos como Salmonella spp. en 25g y recuentos de Escherichia coli por debajo del límite de detección (< 10 UFC/g), confirmando que las fórmulas pasteurizadas y deshidratadas son microbiológicamente seguras."
        ],
        stats: [
          { label: "Agar bacterias", value: "PCA Merck", detail: "Recuento mesófilos aerobios" },
          { label: "Agar hongos", value: "PDA Acidificado", detail: "Recuento mohos y levaduras" },
          { label: "Salmonella en 25g", value: "Ausente", detail: "Requisito crítico Invima" },
          { label: "E. coli UFC/g", value: "< 10 UFC/g", detail: "Inocuidad microbiológica total" }
        ],
        table: {
          title: "Resultados de Microbiología y Control de Inocuidad",
          headers: ["Microorganismo Evaluado", "Límite Exigido (UFC/g)", "Resultado ZanaPure", "Resultado ZanaPet", "Resultado Gomas"],
          rows: [
            ["Mesófilos Aerobios", "< 10.000", "< 10 UFC/g", "120 UFC/g", "< 10 UFC/g"],
            ["Mohos y Levaduras", "< 100", "< 10 UFC/g", "< 10 UFC/g", "< 10 UFC/g"],
            ["Escherichia coli", "< 10", "Ausente (<10)", "Ausente (<10)", "Ausente (<10)"],
            ["Salmonella spp. (25g)", "Ausencia", "Ausencia", "Ausencia", "Ausencia"]
          ]
        },
        photos: ["img_0238.jpg"]
      },
      {
        title: "Hoja 4: Soportes y Descargas de Formulados Piloto",
        paragraphs: [
          "Los protocolos detallados de formulación, flujogramas de proceso y registros de balanza se recopilaron en los manuales de producción piloto correspondientes a cada prototipo.",
          "Estos documentos detallan las temperaturas de pasteurización (85°C por 5 minutos) y las curvas de secado para garantizar la reproducibilidad a escala industrial por microempresarios.",
          "A continuación, se listan los accesos de descarga para los protocolos oficiales de producción de ZanaPet, Gomitas Funcionales y compota ZanaPure."
        ],
        stats: [
          { label: "Temperatura pasteurizado", value: "85 °C / 5 min", detail: "Inactivación enzimática" },
          { label: "Humedad ZanaPet", value: "7.8%", detail: "Humedad estable en snack" },
          { label: "Actividad de agua (Aw)", value: "0.62 Aw", detail: "Previene crecimiento de mohos" },
          { label: "Viscosidad ZanaPure", value: "3.200 cP", detail: "Textura ideal para bebés" }
        ],
        table: {
          title: "Entregables de Producción Piloto y Formulados",
          headers: ["ID Documento", "Nombre de Protocolo", "Formato", "Acceso"],
          rows: [
            ["Entregable 1.8", "Protocolo de producción piloto de ZanaPet", "PDF (Descarga directa)", "Público"],
            ["Entregable 1.9", "Protocolo de producción piloto de Gomas", "PDF (Descarga directa)", "Público"],
            ["Entregable 1.10", "Protocolo de producción piloto de ZanaPure", "PDF (Descarga directa)", "Público"]
          ]
        },
        photos: ["img_0243.jpg"]
      }
    ]
  },
  "ACT-06": {
    id: "ACT-06",
    responsibleEntity: "Universidad de Antioquia (UdeA) e INTAL",
    researchTeam: [
      "Juan Camilo Henao Rojas",
      "Carolina Zuluaga",
      "Catalina Agudelo",
      "Mateo Londoño"
    ],
    pages: [
      {
        title: "Hoja 1: Diseño de Empaques y Estabilidad",
        paragraphs: [
          "Para comercializar y distribuir los prototipos formulados sin necesidad de cadena de frío en el Oriente y Medellín, se diseñaron empaques funcionales de alta barrera.",
          "Se seleccionaron empaques tipo doypack bilaminados flexibles de poliéster y polietileno de baja densidad con válvula de alivio para ZanaPure (100g) y ZanaPet (250g), los cuales bloquean la luz ultravioleta y el paso de oxígeno, previniendo la autooxidación de los carotenoides.",
          "Se establecieron cámaras de estabilidad acelerada a 40°C ± 2°C y 75% ± 5% de humedad relativa para estimar la degradación de compuestos funcionales y la vida útil microbiológica de los productos a lo largo del tiempo."
        ],
        stats: [
          { label: "Empaque seleccionado", value: "Doypack Bilaminado", detail: "Barrera a la luz y O₂" },
          { label: "Condición estabilidad", value: "40 °C / 75% HR", detail: "Estabilidad acelerada" },
          { label: "Tiempo de ensayo", value: "12 Semanas", detail: "Equivalente a 12 meses reales" },
          { label: "Frecuencia muestreo", value: "Quincenal", detail: "Puntos T0 a T6 evaluados" }
        ],
        table: {
          title: "Parámetros de Envasado y Condiciones de Almacenamiento",
          headers: ["Prototipo Alimentario", "Tipo de Envase", "Presentación (g)", "Temperatura Ensayo", "Humedad Relativa"],
          rows: [
            ["ZanaPure (Compota)", "Doypack flexible bilaminado", "100 g", "40 °C ± 2 °C", "75% ± 5%"],
            ["ZanaPet (Snacks)", "Bolsa metalizada con cremallera", "250 g", "Temperatura ambiente", "Normalizada"],
            ["Gomas Biofuncionales", "Blíster termoformado PVC/Alu", "30 unidades", "40 °C y 45 °C", "Controlada"]
          ]
        },
        photos: ["img_0251.jpg"]
      },
      {
        title: "Hoja 2: Ensayos Sensoriales con Catadores",
        paragraphs: [
          "La aceptabilidad y atributos sensoriales de los productos alimentarios se evaluaron mediante paneles de catadores entrenados y pruebas con consumidores potenciales en las instalaciones de la Asociación Hortisanos.",
          "Se estructuró una escala hedónica de 9 puntos (desde 'Me disgusta extremadamente' hasta 'Me gusta extremadamente') para evaluar apariencia, aroma, sabor, textura en boca y aceptabilidad general.",
          "El puré infantil ZanaPure obtuvo una calificación promedio de aceptabilidad general de 8.2 puntos, destacándose por su textura suave y dulzor balanceado, mientras que las gomas funcionales registraron un promedio de 7.9 puntos."
        ],
        stats: [
          { label: "Panelistas reclutados", value: "50 Consumidores", detail: "Pruebas de aceptabilidad" },
          { label: "Escala sensorial", value: "Hedónica 9 puntos", detail: "Método normalizado" },
          { label: "Calificación ZanaPure", value: "8.2 / 9.0", detail: "Excelente aceptación" },
          { label: "Calificación Gomas", value: "7.9 / 9.0", detail: "Buena aceptabilidad" }
        ],
        table: {
          title: "Evaluación de Atributos Sensoriales por Paneles",
          headers: ["Atributo Evaluado", "ZanaPure (Compota)", "ZanaPet (Snack Canino)", "Gomas Funcionales", "Desviación Estándar"],
          rows: [
            ["Apariencia / Color", "8.4 / 9.0", "7.8 / 9.0", "8.1 / 9.0", "±0.35"],
            ["Olor / Aroma", "7.9 / 9.0", "8.5 / 9.0 (Pollo)", "7.6 / 9.0", "±0.42"],
            ["Sabor / Gusto", "8.2 / 9.0", "8.3 / 9.0", "7.8 / 9.0", "±0.38"],
            ["Textura / Sensación", "8.3 / 9.0", "7.5 / 9.0 (Firme)", "8.0 / 9.0", "±0.45"]
          ]
        },
        photos: ["img_0252.jpg"]
      },
      {
        title: "Hoja 3: Degradación de Carotenos y Vida Útil",
        paragraphs: [
          "Durante las 12 semanas de estabilidad acelerada a 40°C, se cuantificó por espectrofotometría la retención de β-caroteno total en ZanaPure y Gomas funcionales. Se observó una degradación cinética de primer orden.",
          "La tasa de degradación indicó una retención del 78% de β-caroteno tras 12 semanas a 40°C, lo que proyecta una concentración funcional estable por encima de la dosis mínima diaria recomendada durante 12 meses a temperatura ambiente (20°C).",
          "El valor de peróxidos y el índice TBARS en el snack de mascotas ZanaPet se mantuvo por debajo de los límites de rancidez lipídica (< 1.5 meq O₂/kg), asegurando la estabilidad oxidativa del producto sin saborizantes artificiales."
        ],
        stats: [
          { label: "Retención β-caroteno", value: "78.0%", detail: "Tras 12 semanas a 40°C" },
          { label: "Vida útil proyectada", value: "12 Meses", detail: "Almacenamiento a 20°C" },
          { label: "Índice TBARS", value: "< 1.5 meq/kg", detail: "Libre de rancidez lipídica" },
          { label: "pH en estabilidad", value: "4.15 (Estable)", detail: "Evita crecimiento clostridium" }
        ],
        table: {
          title: "Estudio de Retención de β-caroteno en Estabilidad Acelerada",
          headers: ["Tiempo de Ensayo", "Concentración ZanaPure (ppm)", "Retención (%)", "Concentración Gomas (ppm)", "Retención (%)"],
          rows: [
            ["Semana 0 (T0)", "85.20 ppm", "100.0%", "32.40 ppm", "100.0%"],
            ["Semana 4 (T2)", "79.80 ppm", "93.6%", "30.12 ppm", "92.9%"],
            ["Semana 8 (T4)", "72.40 ppm", "84.9%", "27.50 ppm", "84.8%"],
            ["Semana 12 (T6)", "66.45 ppm", "78.0%", "24.95 ppm", "77.0%"]
          ]
        },
        photos: ["img_0254.jpg"]
      },
      {
        title: "Hoja 4: Soportes y Descarga de Fichas de Estabilidad",
        paragraphs: [
          "Los resultados consolidados de vida útil sensorial, cinética de degradación de carotenos y parámetros microbiológicos se integraron en los informes técnicos de validación del Objetivo 2.",
          "Las fichas técnicas finales de los tres prototipos alimentarios fueron radicadas para el proceso de transferencia tecnológica a las plantas procesadoras aliadas.",
          "A continuación, se listan los accesos para la descarga de las fichas de validación sensorial y estudios de vida útil de ZanaPet, Gomas y ZanaPure."
        ],
        stats: [
          { label: "Validaciones completadas", value: "3 Fichas", detail: "Una por cada prototipo" },
          { label: "Ensayos de estabilidad", value: "Triplicado", detail: "Enfoque estadístico robusto" },
          { label: "Límite microbiológico", value: "Conforme", detail: "Cumple especificaciones Invima" },
          { label: "Humedad de equilibrio", value: "6.2%", detail: "Óptimo para empaque ZanaPet" }
        ],
        table: {
          title: "Índice de Documentos de Validación y Fichas Técnicas",
          headers: ["Ficha Técnica ID", "Nombre del Documento de Validación", "Estado de Aprobación", "Acceso"],
          rows: [
            ["Entregable 2.3", "Ficha técnica y validación sensorial de ZanaPet (Mascotas)", "Aprobado Comité UdeA", "Público"],
            ["Entregable 2.4", "Ficha técnica y validación sensorial de Gomas (Humanos)", "Aprobado Comité UdeA", "Público"],
            ["Entregable 2.5", "Ficha técnica y validación sensorial de ZanaPure (Compota)", "Aprobado Comité UdeA", "Público"]
          ]
        },
        photos: ["img_0255.jpg"]
      }
    ]
  },
  "ACT-07": {
    id: "ACT-07",
    responsibleEntity: "Universidad de Antioquia (UdeA) y AGROSAVIA",
    researchTeam: [
      "Juan Camilo Henao Rojas",
      "Rocío Alexandra Ortíz-Paz",
      "Carolina Zuluaga",
      "Liliana Ceballos"
    ],
    pages: [
      {
        title: "Hoja 1: Extracción Fotoquímica de Apocarotenos",
        paragraphs: [
          "Para el desarrollo de ingredientes activos de uso cosmético antienvejecimiento, se diseñó un proceso fotoquímico catalizado por Fenton para la degradación controlada de β-caroteno y la generación de apocarotenoides y retinoides bioactivos.",
          "El proceso utiliza luz ultravioleta acoplada a una dosificación precisa de peróxido de hidrógeno y sulfato ferroso (reactivos Fenton) en soluciones hidroalcohólicas de extracto crudo de zanahoria naranja.",
          "La reacción se controló estrictamente a una temperatura de 35°C para evitar la degradación térmica total de los compuestos volátiles (iononas) y de la estructura de apocarotenoide rica en dobles enlaces conjugados."
        ],
        stats: [
          { label: "Radiación UV", value: "UV-C (254 nm)", detail: "Fotoactivación catalítica" },
          { label: "Reactivo Fenton", value: "Fe²⁺ / H₂O₂", detail: "Generación de radicales OH" },
          { label: "Temperatura reacción", value: "35 °C", detail: "Protección térmica del extracto" },
          { label: "Concentración solvente", value: "Etanol 70%", detail: "Solución de reacción óptima" }
        ],
        table: {
          title: "Parámetros Iniciales del Lote de Extracción Fotoquímica",
          headers: ["Reactivo / Parámetro", "Concentración Lote", "Volumen Adicionado", "Temperatura de Reacción", "Propósito en Proceso"],
          rows: [
            ["Extracto Crudo Zanahoria", "12.5 mg/mL", "500 mL", "35 °C", "Sustrato rico en β-caroteno"],
            ["Sulfato Ferroso (FeSO₄)", "0.5 mM", "25 mL", "35 °C", "Catalizador de reacción Fenton"],
            ["Peróxido de Hidrógeno (H₂O₂)", "10.0 mM", "50 mL", "35 °C", "Agente oxidante generador de OH"],
            ["Butilhidroxitolueno (BHT)", "100 ppm", "5 mL (Solución)", "35 °C", "Antioxidante de control cinético"]
          ]
        },
        photos: ["img_0265.jpg"]
      },
      {
        title: "Hoja 2: Adición de Antioxidantes y HPLC-DAD",
        paragraphs: [
          "Para prevenir la autooxidación en cadena del extracto degradado, se adicionaron 100 ppm de Butilhidroxitolueno (BHT) como antioxidante sintético de grado cosmético durante las etapas finales del proceso de fotooxidación.",
          "La monitorización de los fragmentos y retinoides generados se llevó a cabo por cromatografía líquida de alta resolución acoplada a un detector de arreglo de diodos (HPLC-DAD) en una columna C18 Poroshell 120 (100x3.0mm, 2.7 µm).",
          "Se estandarizó una mezcla de elución en gradiente compuesta por isopropanol (IPA), acetonitrilo (ACN) y metanol, permitiendo la separación completa de retinoles y carotenoides de cadena corta en un tiempo total de elución de 30 minutos."
        ],
        stats: [
          { label: "Antioxidante control", value: "100 ppm BHT", detail: "Previene sobreoxidación de iononas" },
          { label: "Columna HPLC", value: "C18 Poroshell", detail: "Poroshell 120 (2.7 µm)" },
          { label: "Fase móvil elución", value: "IPA / ACN / MeOH", detail: "Gradiente de alta resolución" },
          { label: "Tiempo de corrida", value: "30 Minutos", detail: "Corrida analítica completa" }
        ],
        table: {
          title: "Parámetros del Método Cromatográfico HPLC-DAD",
          headers: ["Parámetro Analítico", "Valor Estandarizado", "Columna de Separación", "Temperatura Columna", "Flujo de Fase Móvil"],
          rows: [
            ["Volumen de Inyección", "5 µL", "C18 Poroshell 120", "50 ◦C", "0.7 mL/min"],
            ["Detector DAD λ", "325 nm y 450 nm", "C18 Poroshell 120", "50 ◦C", "0.7 mL/min"],
            ["Temperatura Muestreador", "10 ◦C", "C18 Poroshell 120", "50 ◦C", "0.7 mL/min"],
            ["Presión de Operación", "240 bar", "C18 Poroshell 120", "50 ◦C", "0.7 mL/min"]
          ]
        },
        photos: ["img_0267.jpg"]
      },
      {
        title: "Hoja 3: Eficiencia de Ruptura y Rendimiento",
        paragraphs: [
          "El acoplamiento de ultrasonido (US) de alta intensidad con la reacción de Fenton potenció la degradación catalítica del β-caroteno en un tiempo reducido de 60 minutos, aumentando la eficiencia de rompimiento al 45.20%.",
          "El rendimiento relativo de iononas volátiles (como la α-ionona y β-ionona, precursores de retinoles) se incrementó al 9.12% ± 1.10% en comparación con la reacción Fenton convencional sin irradiación UV (4.24%).",
          "Este rendimiento óptimo de iononas volátiles se traduce en un ingrediente activo con alta potencia de regeneración dérmica y aroma característico amaderado suave."
        ],
        stats: [
          { label: "Eficiencia de ruptura", value: "45.20%", detail: "Fenton + Ultrasonido (60 min)" },
          { label: "Rendimiento iononas", value: "9.12% ± 1.1%", detail: "Fracción de iononas aromáticas" },
          { label: "Eficiencia Fenton simple", value: "18.50%", detail: "Reacción sin luz UV" },
          { label: "Tiempo reacción optimizado", value: "60 Minutos", detail: "Ahorro de 50% de tiempo" }
        ],
        table: {
          title: "Comparación de Eficiencia de Ruptura de Betacaroteno",
          headers: ["Tratamiento Evaluado", "Tiempo Reacción (min)", "Radiación UV", "Rendimiento Iononas (%)", "Eficiencia Rompimiento (%)"],
          rows: [
            ["Extracto + Fenton (F1)", "120 min", "Con UV", "7.83% ± 1.67%", "34.90%"],
            ["Extracto + Fenton (F1)", "120 min", "Sin UV", "4.24% ± 0.85%", "18.50%"],
            ["Extracto + Fenton + US", "60 min", "Con UV", "9.12% ± 1.10%", "45.20%"],
            ["Extracto Control", "120 min", "Sin UV", "0.05% ± 0.01%", "0.20%"]
          ]
        },
        photos: ["img_0270.jpg"]
      },
      {
        title: "Hoja 4: Soportes y Descargas de Fichas de Extracto",
        paragraphs: [
          "La caracterización del extracto obtenido, su perfil cromatográfico y los parámetros químicos del proceso de ruptura catalítica se integraron en la Ficha Técnica del Ingrediente Enriquecido.",
          "Asimismo, el protocolo paso a paso de extracción fotoquímica fue aprobado para el licenciamiento del bioingrediente a laboratorios de formulación cosmética locales.",
          "A continuación, se listan los accesos de descarga directa de los reportes y fichas técnicas del bioingrediente enriquecido en apocarotenoides."
        ],
        stats: [
          { label: "Fichas técnicas", value: "2 Documentos", detail: "Ficha técnica + Protocolo" },
          { label: "Validación HPLC", value: "r² = 0.9997", detail: "Linealidad del método analítico" },
          { label: "Límite detección", value: "0.125 µg/mL", detail: "Alta sensibilidad analítica" },
          { label: "Código de proyecto", value: "ACT-07", detail: "Objetivo 3 del SGR" }
        ],
        table: {
          title: "Índice de Entregables Soportados de Extracción Fotoquímica",
          headers: ["Código Entregable", "Nombre del Documento Oficial", "Páginas", "Acceso"],
          rows: [
            ["Entregable 3.1.1", "Ficha Técnica de Ingrediente Cosmético Enriquecido en Apocarotenoides", "12 páginas", "Público"],
            ["Entregable 3.1.2", "Protocolo de extracción fotoquímica y ruptura controlada", "18 páginas", "Público"]
          ]
        },
        photos: ["img_0271.jpg"]
      }
    ]
  },
  "ACT-08": {
    id: "ACT-08",
    responsibleEntity: "Universidad de Antioquia (UdeA) y AGROSAVIA",
    researchTeam: [
      "Juan Camilo Henao Rojas",
      "Rocío Alexandra Ortíz-Paz",
      "Carolina Zuluaga"
    ],
    pages: [
      {
        title: "Hoja 1: Encapsulación de Apocarotenos en NLC",
        paragraphs: [
          "Debido a la inestabilidad química de los apocarotenoides y retinoides (sensibles al oxígeno y la luz solar), se diseñó un sistema de estabilización coloidal mediante portadores lipídicos nanoestructurados (NLC).",
          "El portador utiliza una fase lipídica sólida (manteca de cacao de origen regional) y una fase lipídica líquida (aceite de aguacate), estabilizadas en una solución acuosa mediante tensioactivos no iónicos (Polisorbato 80 en concentración del 1.5% p/v).",
          "El extracto rico en apocarotenos se disuelve previamente en la fase lipídica caliente (65°C) antes de realizar el proceso de emulsificación gruesa con agitador Ultra-Turrax a 8.000 RPM por 5 minutos."
        ],
        stats: [
          { label: "Lípido sólido", value: "Manteca de Cacao", detail: "Origen regional (Antioquia)" },
          { label: "Lípido líquido", value: "Aceite Aguacate", detail: "Fase oleosa líquida" },
          { label: "Tensioactivo", value: "1.5% Polisorbato", detail: "Polisorbato 80 (Tween 80)" },
          { label: "Emulsificación", value: "8.000 RPM", detail: "Agitador Ultra-Turrax por 5 min" }
        ],
        table: {
          title: "Composición de la Emulsión Coloidal NLC",
          headers: ["Fase del Coloide", "Ingrediente Utilizado", "Proporción (% p/v)", "Temperatura Mezcla", "Función en la Cápsula"],
          rows: [
            ["Fase Lipídica Sólida", "Manteca de cacao refinada", "6.0%", "65 °C", "Matriz sólida estabilizadora"],
            ["Fase Lipídica Líquida", "Aceite de aguacate prensado", "4.0%", "65 °C", "Solvente de apocarotenos"],
            ["Fase Acuosa", "Agua ultrapura Milli-Q", "88.0%", "65 °C", "Fase continua coloidal"],
            ["Tensioactivo", "Polisorbato 80 (Tween 80)", "1.5%", "65 °C", "Disminución de tensión interfacial"]
          ]
        },
        photos: ["img_0277.jpg"]
      },
      {
        title: "Hoja 2: Homogenización de Alta Presión",
        paragraphs: [
          "La preemulsión gruesa a 65°C se procesó inmediatamente en un homogeneizador de alta presión de laboratorio (APV-2000) operando a 1.200 bar durante 3 ciclos continuos.",
          "Este proceso físico reduce el tamaño de las microburbujas lipídicas a la escala nanométrica, logrando un diámetro promedio de partícula inferior a 150 nanómetros con una distribución monodispersa.",
          "La suspensión coloidal se enfrió rápidamente en baño de agua helada a 4°C para inducir la cristalización de la manteca de cacao, atrapando los apocarotenoides en la matriz de lípido sólido nanoestructurado."
        ],
        stats: [
          { label: "Homogeneizador", value: "APV-2000", detail: "Alta presión de laboratorio" },
          { label: "Presión operacional", value: "1.200 bar", detail: "Ruptura de gotas interfaciales" },
          { label: "Ciclos de proceso", value: "3 Pasadas", detail: "Tamaño nanométrico uniforme" },
          { label: "Enfriamiento", value: "Baño a 4 °C", detail: "Cristalización rápida" }
        ],
        table: {
          title: "Influencia de la Presión en el Tamaño de Partícula",
          headers: ["Presión Aplicada (bar)", "Ciclos de Proceso", "Tamaño Partícula (nm)", "Índice Polidispersidad (PDI)", "Estabilidad Z (mV)"],
          rows: [
            ["400 bar", "3 pasadas", "385 nm", "0.420", "-18.5 mV"],
            ["800 bar", "3 pasadas", "220 nm", "0.312", "-24.2 mV"],
            ["1.200 bar", "3 pasadas", "138 nm", "0.185", "-32.4 mV (Altamente estable)"],
            ["1.200 bar", "5 pasadas", "135 nm", "0.190", "-31.8 mV"]
          ]
        },
        photos: ["img_0282.jpg"]
      },
      {
        title: "Hoja 3: Estabilidad Coloidal e Indicadores",
        paragraphs: [
          "La estabilidad coloidal de las suspensiones NLC cargadas con apocarotenoides se evaluó mediante medidas periódicas de Tamaño de Partícula (Z-average), Índice de Polidispersidad (PDI) y Potencial Zeta (Z-potential) utilizando Dynamic Light Scattering (DLS) en un equipo Zetasizer de Malvern.",
          "El potencial zeta medido fue de -32.4 mV, lo que indica una alta estabilidad coloidal debido a la repulsión electrostática e impedimento estérico, evitando la coalescencia o sedimentación del coloide durante un almacenamiento de 6 meses a 25°C.",
          "Los análisis espectroscópicos demostraron que los apocarotenos encapsulados en NLC tienen una vida útil fotolítica 5 veces superior frente a la radiación solar directa en comparación con el extracto libre no encapsulado."
        ],
        stats: [
          { label: "Z-average (Tamaño)", value: "138 nm", detail: "Diámetro nanométrico óptimo" },
          { label: "Polidispersidad (PDI)", value: "0.185 PDI", detail: "Distribución monodispersa" },
          { label: "Potencial Zeta", value: "-32.4 mV", detail: "Alta estabilidad electrostática" },
          { label: "Estabilidad fotolítica", value: "5x Superior", detail: "Protección UV de apocarotenos" }
        ],
        table: {
          title: "Estabilidad Coloidal a lo Largo de 6 Meses de Almacenamiento",
          headers: ["Tiempo de Almacenamiento", "Tamaño Partícula (nm)", "PDI (Polidispersidad)", "Potencial Zeta (mV)", "Retención Ingrediente (%)"],
          rows: [
            ["Mes 0 (T0)", "138 nm", "0.185", "-32.4 mV", "100.0%"],
            ["Mes 2 (T2)", "141 nm", "0.190", "-30.8 mV", "98.5%"],
            ["Mes 4 (T4)", "145 nm", "0.198", "-29.5 mV", "96.2%"],
            ["Mes 6 (T6)", "152 nm", "0.210", "-28.4 mV", "94.8%"]
          ]
        },
        photos: ["img_0288.jpg"]
      },
      {
        title: "Hoja 4: Soportes y Descargas de Ingrediente Nano",
        paragraphs: [
          "Toda la formulación física, curvas de dispersión y parámetros de cristalización se consolidaron en los entregables del Objetivo 3 del proyecto.",
          "La ficha técnica describe los rangos de pH óptimos del ingrediente líquido (pH 5.5 a 6.5) y las pautas para su dosificación e incorporación en emulsiones faciales cosméticas.",
          "A continuación, se dispone del acceso para la descarga de los informes analíticos y protocolos de estabilización coloidal del bioingrediente."
        ],
        stats: [
          { label: "Archivos analíticos", value: "2 Manuales", detail: "Ficha NLC + Homogenización" },
          { label: "Coloide en frío", value: "Estable a 4 °C", detail: "Mantiene tamaño nanométrico" },
          { label: "Fase acuosa continua", value: "88.0%", detail: "Excelente fluidez" },
          { label: "Tensioactivo seguro", value: "Tween 80", detail: "Grado cosmético no irritante" }
        ],
        table: {
          title: "Entregables del Ingrediente Nanoestructurado ACT-08",
          headers: ["Código Entregable", "Nombre Oficial de Archivo", "Extensión", "Acceso"],
          rows: [
            ["Entregable 3.2", "Ficha de transportador lipídico nanoestructurado (NLC)", "PDF (Descarga directa)", "Público"],
            ["Anexo Técnico 3.2.2", "Protocolo de homogenización de alta presión y estabilidad", "PDF (Descarga directa)", "Público"]
          ]
        },
        photos: ["img_0290.jpg"]
      }
    ]
  },
  "ACT-09": {
    id: "ACT-09",
    responsibleEntity: "Universidad de Antioquia (UdeA) y PECET",
    researchTeam: [
      "Juan Camilo Henao Rojas",
      "Carolina Zuluaga",
      "German Franco",
      "Karen Ballestas Álvarez"
    ],
    pages: [
      {
        title: "Hoja 1: Ensayos de Citotoxicidad Dérmica",
        paragraphs: [
          "Para garantizar la seguridad dermatológica del ingrediente activo nanoestructurado (NLC-apocarotenos), se implementaron ensayos toxicológicos in-vitro en modelos celulares humanos.",
          "Se utilizaron cultivos de fibroblastos humanos dérmicos (HDF) en pasajes tempranos (2 a 5). Las células se mantuvieron en medio de cultivo DMEM suplementado con 10% de suero fetal bovino en incubadora humidificada a 37°C con 5% de CO₂.",
          "Los cultivos celulares se expusieron a diferentes concentraciones del ingrediente encapsulado (de 0.1 a 10.0 mg/mL) durante 24 y 48 horas para evaluar la viabilidad celular mediante la técnica espectrofotométrica del MTT."
        ],
        stats: [
          { label: "Modelo celular", value: "Fibroblastos HDF", detail: "Origen dérmico humano" },
          { label: "Pasajes de cultivo", value: "Pasajes 2 a 5", detail: "Células jóvenes estables" },
          { label: "Medio de cultivo", value: "DMEM Merck", detail: "Suplementado con 10% SFB" },
          { label: "Temperatura incubación", value: "37 °C", detail: "Atmósfera con 5% CO₂" }
        ],
        table: {
          title: "Ensayos de Viabilidad Celular MTT (Fibroblastos)",
          headers: ["Concentración Ingrediente", "Viabilidad a 24h (%)", "Desviación Estándar", "Viabilidad a 48h (%)", "Dictamen Clínico"],
          rows: [
            ["0.1 mg/mL (Dosis cosmética)", "98.50%", "±1.15%", "97.40%", "NO CITOTÓXICO"],
            ["1.0 mg/mL", "95.40%", "±1.82%", "94.20%", "NO CITOTÓXICO"],
            ["5.0 mg/mL", "92.10%", "±2.25%", "90.80%", "NO CITOTÓXICO"],
            ["10.0 mg/mL (Dosis saturada)", "84.50%", "±3.10%", "81.20%", "NO CITOTÓXICO (Viabilidad > 70%)"]
          ]
        },
        photos: ["img_0294.jpg"]
      },
      {
        title: "Hoja 2: Ensayos de Fotoirritación y Corrosión",
        paragraphs: [
          "Se evaluó el potencial de fotoirritación celular del ingrediente activo bajo directrices de la guía internacional OCDE TG 432. Las células se irradiaron con dosis controladas de radiación ultravioleta B (UVB) en intensidades de 25, 50, 100 y 200 mJ/cm².",
          "Para los ensayos de corrosión y de irritación dérmica in-vitro (OCDE TG 431 y TG 439), se empleó un modelo tridimensional de epidermis humana reconstituida (RhE - SkinEthic).",
          "Los cultivos RhE expuestos al ingrediente puro no registraron una disminución significativa en la densidad óptica del ensayo MTT (viabilidad tisular del 95.4% tras 4 horas de exposición), clasificando el bioingrediente como NO IRRITANTE y NO CORROSIVO."
        ],
        stats: [
          { label: "Guía de fotoirritación", value: "OCDE TG 432", detail: "Ensayo in-vitro" },
          { label: "Guía de irritación", value: "OCDE TG 439", detail: "Modelo epidermis RhE" },
          { label: "Guía de corrosión", value: "OCDE TG 431", detail: "Modelo SkinEthic" },
          { label: "Viabilidad epidermis", value: "95.40%", detail: "No irritante dérmico" }
        ],
        table: {
          title: "Resumen de Resultados in-vitro Normas OCDE",
          headers: ["Modelo de Ensayo", "Directriz OCDE", "Dosis UVB Aplicada", "Viabilidad Registrada", "Clasificación de Peligro"],
          rows: [
            ["Epidermis RhE (SkinEthic)", "OCDE TG 439 (Irritación)", "Sin radiación", "95.40%", "Categoría 2: NO IRRITANTE"],
            ["Epidermis RhE (SkinEthic)", "OCDE TG 431 (Corrosión)", "Sin radiación", "98.20%", "NO CORROSIVO"],
            ["Queratinocitos (HaCaT)", "OCDE TG 489 (Fototoxicidad)", "200 mJ/cm²", "92.10%", "NO FOTOTÓXICO"],
            ["Fibroblastos (HDF)", "OCDE TG 432 (Fotoirritación)", "100 mJ/cm²", "95.40%", "NO FOTOIRRITANTE"]
          ]
        },
        photos: ["img_0297.jpg"]
      },
      {
        title: "Hoja 3: Validación Antienvejecimiento por ELISA",
        paragraphs: [
          "Para verificar la eficacia biológica antienvejecimiento y fotoprotectora del ingrediente enriquecido en apocarotenos, se cuantificó la modulación de biomarcadores proteicos en fibroblastos expuestos a estrés por radiación UVB.",
          "La síntesis de pro-colágeno tipo I alfa y la secreción de la metaloproteinasa de matriz 1 (MMP-1, enzima responsable de degradar el colágeno y producir arrugas) se cuantificaron mediante ensayos tipo ELISA utilizando kits DuoSet de R&D Systems.",
          "Los resultados indicaron que las células tratadas con el ingrediente nanoestructurado conservaron un 84% más de pro-colágeno tipo I tras una irradiación UVB de 100 mJ/cm², bloqueando eficazmente el fotoenvejecimiento celular."
        ],
        stats: [
          { label: "Marcador colágeno", value: "Pro-colágeno Iα", detail: "Síntesis estructural de matriz" },
          { label: "Marcador arrugas", value: "MMP-1 (Colagenasa)", detail: "Enzima de degradación" },
          { label: "Retención colágeno", value: "+ 84.0%", detail: "Células tratadas vs control" },
          { label: "Kit ELISA", value: "DuoSet R&D Systems", detail: "Ensayo inmunoenzimático de precisión" }
        ],
        table: {
          title: "Modulación de Biomarcadores de Fotoenvejecimiento (ELISA)",
          headers: ["Tratamiento Celular", "Dosis UVB", "Concentración Colágeno", "Nivel MMP-1 (pg/mL)", "Efecto Fotoprotector"],
          rows: [
            ["Control Sano (Sin UVB)", "0 mJ/cm²", "124.5 pg/mL", "12.4 pg/mL", "Línea base"],
            ["Control Irradiado (Sin tratamiento)", "100 mJ/cm²", "42.1 pg/mL", "88.2 pg/mL", "Degradación extrema de matriz"],
            ["Células + Extracto Libre", "100 mJ/cm²", "72.4 pg/mL", "54.0 pg/mL", "Protección parcial (58%)"],
            ["Células + NLC-Apocarotenos", "100 mJ/cm²", "102.8 pg/mL", "24.5 pg/mL", "Excelente fotoprotección (84%)"]
          ]
        },
        photos: ["img_0298.jpg"]
      },
      {
        title: "Hoja 4: Soportes y Descargas de Seguridad Dérmica",
        paragraphs: [
          "Los informes analíticos certificados de citotoxicidad in-vitro, corrosión y fotoirritación se recopilaron en los tomos de seguridad dermatológica del proyecto.",
          "Estos documentos son prerrequisitos indispensables para la obtención del registro sanitario NSOC ante el INVIMA previo a la producción industrial y venta de la emulsión facial.",
          "A continuación, se listan los accesos de descarga directa de los reportes toxicológicos de seguridad dermatológica certificados bajo normas OCDE."
        ],
        stats: [
          { label: "Reportes toxicología", value: "3 Informes", detail: "Citotoxicidad, corrosión y fotoirritación" },
          { label: "Clasificación clínica", value: "Dermatológicamente Seguro", detail: "Para uso facial humano" },
          { label: "Registro INVIMA", value: "NSOC Apto", detail: "Fase de radicación" },
          { label: "Validación estadística", value: "p < 0.01", detail: "Diferencia altamente significativa" }
        ],
        table: {
          title: "Entregables del Estudio de Seguridad Dérmica ACT-09",
          headers: ["Entregable ID", "Nombre Oficial de Archivo", "Formato", "Acceso"],
          rows: [
            ["Entregable 1.13", "Artículo científico sobre formulación y seguridad de prototipos cosméticos", "PDF (Descarga directa)", "Público"],
            ["Anexo Técnico 3.3.1", "Informes certificados de ensayos OCDE in-vitro", "PDF (Descarga directa)", "Público"]
          ]
        },
        photos: ["img_0302.jpg"]
      }
    ]
  },
  "ACT-10": {
    id: "ACT-10",
    responsibleEntity: "Universidad de Antioquia (UdeA) e INTAL",
    researchTeam: [
      "Juan Camilo Henao Rojas",
      "Carolina Zuluaga",
      "Edison Osorio"
    ],
    pages: [
      {
        title: "Hoja 1: Escalamiento Piloto de Deshidratación",
        paragraphs: [
          "Para realizar el escalamiento piloto de la producción del polvo enriquecido de zanahoria a partir de excedentes locales, se procesó un lote de 60 kg de zanahoria fresca Bangor en las instalaciones de la planta piloto del INTAL.",
          "Las zanahorias se lavaron, seleccionaron y rebanaron en rodajas uniformes de 2 mm de espesor utilizando una cortadora automática industrial (TT-F60).",
          "La deshidratación controlada se corrió en un secador de lecho fluidizado automático de bandejas (Actum) operando a 40°C durante 16 horas continuas, manteniendo el aire en circulación con humedad relativa de entrada del 10%."
        ],
        stats: [
          { label: "Lote de zanahoria", value: "60.00 kg", detail: "Zanahoria fresca Bangor" },
          { label: "Cortadora", value: "TT-F60", detail: "Rebanadas uniformes de 2 mm" },
          { label: "Deshidratador", value: "Lecho Fluidizado", detail: "Secado termocontrolado a 40°C" },
          { label: "Tiempo de secado", value: "16 Horas", detail: "Evita degradación térmica" }
        ],
        table: {
          title: "Variables Operacionales del Proceso de Deshidratación Piloto",
          headers: ["Parámetro de Proceso", "Valor Medido", "Efecto Físico", "Consumo Eléctrico (kWh)"],
          rows: [
            ["Temperatura Secado", "40 ◦C ± 1 ◦C", "Protección de carotenoides", "12.4 kWh"],
            ["Velocidad de Aire", "1.5 m/s", "Velocidad de evaporación constante", "8.5 kWh"],
            ["Humedad Relativa Entrada", "10% ± 2%", "Gradiente de transferencia de masa", "Nulo (Deshumidificador)"],
            ["Carga de Bandeja", "2.5 kg/m²", "Espesor óptimo de capa de rodajas", "Ninguno"]
          ]
        },
        photos: ["img_0312.jpg"]
      },
      {
        title: "Hoja 2: Molienda y Tamizaje por Malla 40",
        paragraphs: [
          "Las rodajas secas (humedad residual del 5.1%) se sometieron a una molienda de alta velocidad utilizando un molino de martillos criogénico con enfriamiento por nitrógeno gaseoso para evitar el calentamiento del polvo.",
          "El polvo obtenido se tamizó en una tamizadora vibratoria industrial utilizando malla número 40 (apertura de 420 micras), logrando la recuperación del 92.5% de la biomasa molida en un tamaño de partícula uniforme.",
          "El polvo tamizado se envasó inmediatamente al vacío en bolsas de aluminio trilaminado de alta barrera con atmósfera de nitrógeno gaseoso inerte, previniendo la degradación oxidativa del β-caroteno durante el almacenamiento."
        ],
        stats: [
          { label: "Humedad residual", value: "5.10%", detail: "Humedad de almacenamiento segura" },
          { label: "Tamiz empleado", value: "Malla Nº 40", detail: "Apertura de 420 micras" },
          { label: "Rendimiento molienda", value: "92.50%", detail: "Masa recuperada en polvo" },
          { label: "Envasado", value: "Vacío / Nitrógeno", detail: "Bloqueo de oxidación de carotenos" }
        ],
        table: {
          title: "Distribución Granulométrica de Polvo Estandarizado",
          headers: ["Tamaño de Apertura", "Designación Malla", "Porcentaje Retenido (%)", "Diámetro de Partícula (µm)", "Estado"],
          rows: [
            ["> 841 µm", "Malla Nº 20", "0.5%", "> 841 µm", "Rechazo (Remolienda)"],
            ["420 - 841 µm", "Malla Nº 40", "7.0%", "420 - 841 µm", "Rechazo (Remolienda)"],
            ["250 - 420 µm", "Malla Nº 60", "65.3%", "250 - 420 µm", "APTO (Fracción mayoritaria)"],
            ["< 250 µm", "Malla < 60", "27.2%", "< 250 µm", "APTO (Fracción fina)"]
          ]
        },
        photos: ["img_0314.jpg"]
      },
      {
        title: "Hoja 3: Formulación de la Emulsión Aurum Carota",
        paragraphs: [
          "El polvo estandarizado de zanahoria liofilizada y el extracto coloidal NLC se utilizaron como ingredientes bioactivos base para la formulación de la emulsión cosmética facial antienvejecimiento Aurum Carota.",
          "La formulación de la crema facial se estructuró a escala piloto en lotes de 10 kg en un reactor emulsionador encamisado con agitación de ancla a 120 RPM y homogeneizador de alto cizallamiento a 3.000 RPM.",
          "Se balanceó la viscosidad final, la absorción dérmica rápida y el pH fisiológico cutáneo (pH 5.5 ± 0.2), logrando una crema hidratante cosmética de alta gama y tacto seco."
        ],
        stats: [
          { label: "Lote de formulación", value: "10.00 kg", detail: "Crema facial Aurum Carota" },
          { label: "Agitación de ancla", value: "120 RPM", detail: "Reactor emulsionador piloto" },
          { label: "Homogeneizador", value: "3.000 RPM", detail: "Alto cizallamiento de emulsión" },
          { label: "pH final de la crema", value: "5.5 ± 0.2", detail: "pH biocompatible con la piel" }
        ],
        table: {
          title: "Fórmula de Emulsión Cosmética Aurum Carota (Lote de 10 kg)",
          headers: ["Ingrediente Activo / Base", "Función en la Crema", "Proporción (% p/p)", "Fase de Adición", "Origen"],
          rows: [
            ["Portador NLC-Apocarotenos", "Bioactivo antienvejecimiento", "5.0%", "Fase C (En frío, 35°C)", "Upcycling de descarte"],
            ["Aceite de Aguacate", "Emoliente / Fase grasa", "12.0%", "Fase A (Caliente, 70°C)", "Regional (Oriente)"],
            ["Glicerina Vegetal", "Humectante / Fase acuosa", "5.0%", "Fase B (Caliente, 70°C)", "Grado USP"],
            ["Agua ultrapura Milli-Q", "Fase continua / Solvente", "78.0%", "Fase B (Caliente, 70°C)", "Milli-Q de laboratorio"]
          ]
        },
        photos: ["img_0315.jpg"]
      },
      {
        title: "Hoja 4: Soportes y Descargas de Escalamiento",
        paragraphs: [
          "Los flujos de proceso, balances de materia finales, parámetros de molienda y la formulación maestra de la emulsión se integraron en el protocolo de escalamiento cosmético.",
          "Este documento sirve de plan de transferencia tecnológica para laboratorios de cosmética natural interesados en maquilar el producto en el Oriente Antioqueño.",
          "A continuación, se listan los accesos de descarga directa de los reportes y fichas de escalamiento piloto de la emulsión facial Aurum Carota."
        ],
        stats: [
          { label: "Documentos oficiales", value: "1 Protocolo", detail: "Entregable 3.3 de SGR" },
          { label: "Ensayos escalamiento", value: "2 Corridas", detail: "Lotes de 10 kg validados" },
          { label: "Viscosidad de crema", value: "4.800 cP", detail: "Textura ligera facial" },
          { label: "Estabilidad centrífuga", value: "Aprobado", detail: "Sin separación a 3.000 RPM" }
        ],
        table: {
          title: "Índice de Entregables Soportados de Escalamiento",
          headers: ["Código Entregable", "Nombre del Documento Técnico", "Extensión", "Acceso"],
          rows: [
            ["Entregable 3.3", "Protocolo de escalamiento de emulsión facial Aurum Carota", "24 páginas", "Público"],
            ["Anexo Técnico 3.3.3", "Plan de negocio para la comercialización de la emulsión", "15 páginas", "Público"]
          ]
        },
        photos: ["img_0329.jpg"]
      }
    ]
  },
  "ACT-11": {
    id: "ACT-11",
    responsibleEntity: "Universidad Católica de Oriente (UCO)",
    researchTeam: [
      "Juan Camilo Henao Rojas",
      "Carolina Zuluaga",
      "Claudia Lukau"
    ],
    pages: [
      {
        title: "Hoja 1: Mapeo de Actores de la Cadena",
        paragraphs: [
          "Para estructurar un modelo de economía circular viable en el Oriente Antioqueño, se realizó un levantamiento y caracterización de los actores de la cadena de valor de la zanahoria en los municipios de Marinilla, El Santuario y Carmen de Viboral.",
          "Se encuestaron y caracterizaron de forma directa 53 actores de la cadena de valor, segmentados en productores primarios, comercializadores locales, intermediarios, transportadores, gremios agrícolas e industriales del sector de alimentos y cosméticos.",
          "El mapeo relacional identificó los flujos físicos de biomasa, flujos financieros, canales de distribución, niveles de tecnificación agraria y el poder de negociación de cada eslabón."
        ],
        stats: [
          { label: "Actores encuestados", value: "53 Empresas", detail: "Mapeo completo en Oriente" },
          { label: "Municipios focales", value: "3 Municipios", detail: "Marinilla, Santuario, Carmen" },
          { label: "Eslabones mapeados", value: "5 Categorías", detail: "Productores a industriales" },
          { label: "Poder negociación", value: "Bajo en campo", detail: "Agricultor vulnerable a precio" }
        ],
        table: {
          title: "Distribución de Actores Mapeados en la Subregión",
          headers: ["Eslabón de la Cadena", "Actores Mapeados", "Ubicación Principal", "Tipologías Identificadas", "Nivel de Tecnificación"],
          rows: [
            ["Productores Primarios", "43 fincas (1.3 ha promedio)", "El Santuario / Marinilla", "Pequeño agricultor familiar", "Bajo (Riego manual)"],
            ["Procesadoras e Industria", "10 empresas", "Rionegro / Medellín", "Hortícola, cosmética y mascotas", "Medio-Alto (Plantas industriales)"],
            ["Comercializadores", "53 establecimientos", "Oriente Antioqueño", "Retail, galerías, plazas", "Medio"],
            ["Intermediarios", "12 mayoristas", "Medellín (Centrales)", "Comisionistas", "Medio"]
          ]
        },
        photos: ["img_0330.jpg"]
      },
      {
        title: "Hoja 2: Pérdidas Poscosecha y Mermas",
        paragraphs: [
          "El levantamiento evidenció que el volumen promedio de pérdidas poscosecha de zanahoria en las fincas del Oriente Antioqueño oscila entre el 25% y el 30% de la producción total por ciclo de cultivo.",
          "Estas mermas físicas obedecen principalmente al descarte comercial de raíces por criterios estrictos de apariencia y tamaño impuestos por el canal mayorista (calibres delgados, bifurcaciones radiculares inducidas por nematodos, o rajaduras mecánicas).",
          "Esta biomasa nutritiva, al no poseer valor comercial directo, se utiliza de forma ineficiente para alimentación de cerdos a bajo costo o simplemente se entierra en el lote, generando problemas ambientales de pudrición ácida y focos de patógenos."
        ],
        stats: [
          { label: "Porcentaje mermas", value: "25.0% - 30.0%", detail: "Pérdidas totales en finca" },
          { label: "Causa principal", value: "Criterios calibre", detail: "Descarte por apariencia y tamaño" },
          { label: "Destino ineficiente", value: "Alimento cerdos", detail: "Bajo retorno de valor" },
          { label: "Impacto ambiental", value: "Focos patógenos", detail: "Pudrición ácida de raíces descartadas" }
        ],
        table: {
          title: "Análisis de Causas y Porcentajes de Descarte de Zanahoria",
          headers: ["Criterio de Descarte", "Frecuencia Observada", "Porcentaje de Pérdida", "Causa Fisiológica/Agronómica", "Impacto Económico"],
          rows: [
            ["Calibre delgado", "Alta (72.5%)", "12.0%", "Densidad de siembra excesiva", "Alto (Merma en origen)"],
            ["Bifurcación / Agallas", "Media (54.0%)", "8.0%", "Nematodo agallador Meloidogyne", "Alto (Descarte comercial total)"],
            ["Rajaduras longitudinales", "Media (40.0%)", "5.0%", "Fluctuación hídrica y suelos secos", "Medio-Alto"],
            ["Deformaciones mecánicas", "Baja (22.0%)", "3.0%", "Compactación y pedregosidad de suelo", "Bajo"]
          ]
        },
        photos: ["img_0331.jpg"]
      },
      {
        title: "Hoja 3: Cuellos de Botella y Logística Inversa",
        paragraphs: [
          "El principal cuello de botella logístico para el aprovechamiento industrial de estos excedentes radica en el costo del transporte capilar desde las fincas dispersas de vereda hasta una planta central de transformación.",
          "Debido a la ausencia de esquemas de logística inversa y centros regionales de acopio, el costo de flete del descarte agrícola representa hasta un 45% del valor potencial del bioingrediente crudo, encareciendo la materia prima para la industria de cosméticos o de alimentación de mascotas.",
          "Se propuso un modelo asociativo de acopio coordinado en los centros veredales existentes de las asociaciones Hortisanos y Cooasab para centralizar y prelavar la materia prima, reduciendo costos de transporte un 60%."
        ],
        stats: [
          { label: "Costo flete capilar", value: "45.0%", detail: "Costo relativo sobre bioingrediente" },
          { label: "Ahorro logístico", value: "60.0%", detail: "Con modelo asociativo propuesto" },
          { label: "Asociaciones aliadas", value: "Hortisanos/Cooasab", detail: "Centros de acopio veredal" },
          { label: "Prelavado en origen", value: "Reduce peso 15%", detail: "Elimina tierra de la raíz" }
        ],
        table: {
          title: "Comparación de Costos Logísticos: Modelo Actual vs Modelo Asociativo",
          headers: ["Fase de Costo Logístico", "Costo Modelo Actual (COP/kg)", "Costo Modelo Asociativo (COP/kg)", "Ahorro Neto (COP/kg)", "Beneficio Logístico"],
          rows: [
            ["Flete capilar de finca", "$350 COP", "$120 COP", "$230 COP", "Ruta de recolección consolidada"],
            ["Prelavado y Selección", "$150 COP", "$80 COP", "$70 COP", "Mano de obra local coordinada"],
            ["Transporte a planta", "$250 COP", "$110 COP", "$140 COP", "Flete consolidado en camión de 5 ton"],
            ["Pérdida por pudrición", "$80 COP", "$10 COP", "$70 COP", "Acopio rápido en frío veredal"]
          ]
        },
        photos: ["img_0333.jpg"]
      },
      {
        title: "Hoja 4: Soportes y Descargas de la Cadena de Valor",
        paragraphs: [
          "El estudio detallado del mapeo de actores, logística y análisis de precios se publicó en el libro oficial del proyecto: 'Esta Zanahoria Pa' Qué: Rutas de Innovación para la Zanahoria en Antioquia'.",
          "Este libro cuenta con el sello editorial de la Universidad Católica de Oriente y sirve como insumo de política pública agropecuaria para la subregión de Oriente.",
          "A continuación, se listan los accesos para la descarga directa del libro de la cadena de valor y el estudio de mercados formal."
        ],
        stats: [
          { label: "Libro publicado", value: "Esta Zanahoria Pa' Qué", detail: "Sello editorial UCO" },
          { label: "Páginas del libro", value: "184 páginas", detail: "Estudio exhaustivo de valor" },
          { label: "Soportes adjuntos", value: "2 Archivos PDF", detail: "Libro + Informe de mercados" },
          { label: "Código de proyecto", value: "ACT-11", detail: "Fase IV del cronograma SGR" }
        ],
        table: {
          title: "Entregables de la Cadena de Valor y Mercados",
          headers: ["Código Entregable", "Nombre del Documento Soporte", "Formato de Archivo", "Acceso"],
          rows: [
            ["Entregable 4.4.1.11.1", "Esta_zanahoria_pa_que_UCO.pdf", "PDF (Descarga directa)", "Público"],
            ["Entregable 4.4.1.11.2", "ACT 11 INFORME_Cadena de valor y mercados.docx", "Word / PDF", "Público"]
          ]
        },
        photos: ["img_0336.jpg"]
      }
    ]
  },
  "ACT-12": {
    id: "ACT-12",
    responsibleEntity: "Universidad Católica de Oriente (UCO)",
    researchTeam: [
      "Juan Camilo Henao Rojas",
      "Carolina Zuluaga",
      "Juan Camilo Henao Rojas"
    ],
    pages: [
      {
        title: "Hoja 1: Simulación Financiera de Prototipos",
        paragraphs: [
          "Para evaluar la viabilidad de comercializar las gomas, snacks para mascotas, compotas y la crema facial Aurum Carota, se construyó un modelo de sensibilidad financiera a 5 años.",
          "Se determinó que el precio de descarte en finca de la zanahoria (fijado en $400 COP por kg) representa una ventaja de costo del 70% frente a la compra de zanahoria comercial lavada en centrales de abastos ($1.300 COP por kg).",
          "La proyección de costos contempló las variables de mano de obra regional, amortización de maquinaria piloto, licencias sanitarias Invima y los costos de empaque y distribución logística."
        ],
        stats: [
          { label: "Horizonte evaluación", value: "5 Años", detail: "Simulación financiera" },
          { label: "Costo descarte", value: "$400 COP/kg", detail: "Materia prima agrícola" },
          { label: "Ahorro costo MP", value: "70.0%", detail: "Frente a compra comercial" },
          { label: "Prototipos costeados", value: "4 Productos", detail: "ZanaPure, ZanaPet, Gomas y Aurum" }
        ],
        table: {
          title: "Estructura de Costos Unitarios de Producción a Escala Piloto",
          headers: ["Concepto de Costo", "ZanaPure (Compota 100g)", "ZanaPet (Snack 250g)", "Gomas (30 ud)", "Aurum Carota (Crema 30ml)"],
          rows: [
            ["Materia Prima Agrícola", "$120 COP", "$240 COP", "$80 COP", "$350 COP (Extracto NLC)"],
            ["Empaque y Etiquetado", "$650 COP", "$850 COP", "$420 COP", "$4.200 COP (Envase vidrio acrílico)"],
            ["Mano de obra / Energía", "$1.200 COP", "$1.500 COP", "$980 COP", "$5.500 COP (Reactor homogeneizador)"],
            ["Costo Unitario Total", "$1.970 COP", "$2.590 COP", "$1.480 COP", "$10.050 COP"]
          ]
        },
        photos: ["img_0337.jpg"]
      },
      {
        title: "Hoja 2: Modelos Canvas y Margen Comercial",
        paragraphs: [
          "Se estructuraron los lienzos Canvas de modelo de negocios para cada prototipo, definiendo la propuesta de valor, los segmentos de clientes objetivos (padres de bebés de 6 a 24 meses para ZanaPure; pet-owners de ingresos medios-altos para ZanaPet).",
          "El margen comercial neto bruto proyectado se ubicó entre el 45% para las gomas y el 72% para la crema facial antienvejecimiento Aurum Carota, por su alto valor agregado de marca dermatológica premium.",
          "Se diseñaron canales de distribución diferenciados, priorizando el canal farmacéutico/estético para Aurum Carota, el retail y tiendas veterinarias especializadas para ZanaPet, y el canal de e-commerce e hipersupermercados para ZanaPure."
        ],
        stats: [
          { label: "Margen ZanaPure", value: "55.0% Neto", detail: "Compota infantil" },
          { label: "Margen ZanaPet", value: "62.0% Neto", detail: "Suplemento veterinario" },
          { label: "Margen Gomas", value: "45.0% Neto", detail: "Alimento funcional" },
          { label: "Margen Aurum Carota", value: "72.0% Neto", detail: "Cosmética premium facial" }
        ],
        table: {
          title: "Modelos Canvas y Canales de Distribución Proyectados",
          headers: ["Prototipo Comercial", "Segmento de Cliente", "Propuesta de Valor", "Canal de Distribución", "Margen Proyectado"],
          rows: [
            ["ZanaPure", "Padres de bebés de 6-24 meses", "Compota 100% natural, sin azúcar", "Supermercados y tiendas orgánicas", "55%"],
            ["ZanaPet", "Dueños de mascotas conscientes", "Snack de alta fibra para digestión", "Veterinarias y Pet Shops", "62%"],
            ["Gomas Funcionales", "Jóvenes y adultos activos", "Inmunidad rápida con carotenos", "Farmacias y tiendas saludables", "45%"],
            ["Aurum Carota", "Mujeres 25-50 años premium", "Crema antienvejecimiento de alta gama", "Canal estético y e-commerce", "72%"]
          ]
        },
        photos: ["img_0339.jpg"]
      },
      {
        title: "Hoja 3: Viabilidad Financiera y Retorno (TIR)",
        paragraphs: [
          "La viabilidad financiera global demostró que el proyecto agroindustrial de upcycling de zanahoria es altamente rentable. La Tasa Interna de Retorno (TIR) proyectada a 5 años es del 42% para el portafolio completo, con un periodo de recuperación de la inversión (PRI) de 2.1 años.",
          "El punto de equilibrio se estimó en ventas mensuales combinadas de 2.400 unidades de ZanaPure, 1.800 unidades de ZanaPet y 5.000 unidades de Gomas, volúmenes totalmente compatibles con la capacidad instalada de las plantas piloto ensayadas.",
          "Los análisis de sensibilidad indicaron que incluso ante un incremento del 50% en el precio de la zanahoria de descarte o una caída del 20% en los precios de venta al público, el proyecto conserva una TIR saludable por encima del 28%."
        ],
        stats: [
          { label: "Tasa de Retorno (TIR)", value: "42.0% Anual", detail: "Excelente viabilidad financiera" },
          { label: "Período recuperación", value: "2.1 Años", detail: "Retorno rápido de inversión" },
          { label: "TIR en escenario adverso", value: "28.0% Mínima", detail: "Bajo riesgo de quiebra" },
          { label: "Tasa de descuento WACC", value: "12.5%", detail: "Costo de capital estandarizado" }
        ],
        table: {
          title: "Precios y Puntos de Equilibrio Mensuales de Venta",
          headers: ["Prototipo Comercial", "Precio Venta (COP)", "Punto Equilibrio (Mes)", "Facturación Eq. (Mes)", "TIR a 5 Años"],
          rows: [
            ["ZanaPure (Compota 100g)", "$8.500 COP", "2.400 unidades", "$20.400.000 COP", "35.2%"],
            ["ZanaPet (Snacks 250g)", "$12.000 COP", "1.800 unidades", "$21.600.000 COP", "38.5%"],
            ["Gomas (30 ud)", "$6.500 COP", "5.000 unidades", "$32.500.000 COP", "31.2%"],
            ["Aurum Carota (Crema 30ml)", "$85.000 COP", "450 unidades", "$38.250.000 COP", "42.0%"]
          ]
        },
        photos: ["img_0396.jpg"]
      },
      {
        title: "Hoja 4: Soportes y Descarga de Planes de Negocio",
        paragraphs: [
          "Toda la formulación financiera, Canvas, análisis de sensibilidad y los planes de negocio independientes para cada línea de producto se consolidaron en los entregables del Objetivo 4.",
          "El libro didáctico 'Una Zanahoria Para Emprender' resume estas metodologías financieras en un formato amigable para incentivar el emprendimiento rural en Antioquia.",
          "A continuación, se listan los accesos de descarga directa de los planes de negocio, flujos de caja y libros de emprendimiento del proyecto."
        ],
        stats: [
          { label: "Planes consolidados", value: "5 Documentos", detail: "Canvas + flujos financieros" },
          { label: "Libro de emprendimiento", value: "Una Zanahoria Para Emprender", detail: "Soporte pedagógico" },
          { label: "Análisis sensibilidad", value: "Completo", detail: "Evaluación ante TRM e insumos" },
          { label: "Código de proyecto", value: "ACT-12", detail: "Fase IV del cronograma SGR" }
        ],
        table: {
          title: "Entregables de Viabilidad Financiera y Emprendimiento",
          headers: ["Ficha Técnica / Documento ID", "Nombre del Documento Soporte", "Formato de Archivo", "Acceso"],
          rows: [
            ["Entregable 4.4.1.12", "ACT 12 INFORME_Plan de negocios.docx", "Word / PDF (Descarga directa)", "Público"],
            ["Anexo 12.5", "Plan de Negocio para Emulsión Facial Aurum Carota.docx", "Word / PDF", "Público"],
            ["Anexo 12.8", "Libro Una Zanahoria para emprender.pdf", "PDF (Descarga directa)", "Público"]
          ]
        },
        photos: ["img_0333.jpg"]
      }
    ]
  },
  "ACT-13": {
    id: "ACT-13",
    responsibleEntity: "Universidad Católica de Oriente (UCO)",
    researchTeam: [
      "Juan Camilo Henao Rojas",
      "Carolina Zuluaga",
      "Mateo Londoño"
    ],
    pages: [
      {
        title: "Hoja 1: Talleres de Transferencia y Días de Campo",
        paragraphs: [
          "Para transferir el conocimiento agronómico y los resultados del upcycling a la comunidad de productores del Oriente Antioqueño, se estructuró un plan de Apropiación Social del Conocimiento (ASC).",
          "Se realizaron tres grandes días de campo interactivos en parcelas de El Santuario y Marinilla. En total participaron 190 productores agrícolas locales, quienes interactuaron directamente con los cultivares experimentales Bangor y Deep Purple F1.",
          "Los asistentes recibieron capacitación práctica en el reconocimiento en campo de síntomas tempranos de Alternaria y manejo integrado de nematodos, así como en prácticas seguras de recolección de excedentes."
        ],
        stats: [
          { label: "Productores capacitados", value: "190 Agricultores", detail: "Talleres y días de campo" },
          { label: "Días de campo run", value: "3 Eventos", detail: "El Santuario y Marinilla" },
          { label: "Cultivares mostrados", value: "Bangor y Deep Purple", detail: "Parcelas experimentales" },
          { label: "Prácticas de recolección", value: "Lavado y separación", detail: "Upcycling en origen" }
        ],
        table: {
          title: "Cronograma e Impacto de Eventos ASC de Campo",
          headers: ["Evento de Transferencia", "Fecha de Ejecución", "Municipio / Vereda", "Número de Asistentes", "Porcentaje de Satisfacción"],
          rows: [
            ["Día de Campo 1 (Sanidad)", "Julio 2024", "El Santuario (Vda. Bodegas)", "87 participantes", "92% de aceptación"],
            ["Día de Campo 2 (Upcycling)", "Agosto 2024", "Marinilla (Vda. Cascajo)", "53 participantes", "88% de aceptación"],
            ["Día de Campo 3 (Cosecha)", "Octubre 2024", "Marinilla (Vda. Salto)", "50 participantes", "90% de aceptación"],
            ["Demostración Culinaria", "Noviembre 2024", "El Santuario (Casco urbano)", "42 participantes", "95% de aceptación"]
          ]
        },
        photos: ["img_0388.jpg"]
      },
      {
        title: "Hoja 2: Curso Carota 360° para Técnicos",
        paragraphs: [
          "En adición a la formación comunitaria en campo, se diseñó e impartió el curso de capacitación especializada denominado 'Carota 360°', enfocado en capacitar a técnicos agrícolas de las alcaldías y líderes de las asociaciones.",
          "El curso contó con la participación de 42 profesionales locales de las Unidades Municipales de Asistencia Técnica Agropecuaria (UMATA) y las secretarías de agricultura de Marinilla y El Santuario.",
          "El plan de estudios abarcó 4 módulos teóricos y prácticos: epidemiología fitopatológica, métodos de espectroscopia no destructiva NIRS, formulación de subproductos y planes de negocio agroindustriales."
        ],
        stats: [
          { label: "Profesionales formados", value: "42 Técnicos", detail: "UMATA y Secretarías de Agricultura" },
          { label: "Horas académicas", value: "40 Horas", detail: "Curso Carota 360°" },
          { label: "Módulos impartidos", value: "4 Módulos", detail: "Fitosanidad a agroindustria" },
          { label: "Aprobación del curso", value: "95.0%", detail: "Evaluación académica final" }
        ],
        table: {
          title: "Estructura Académica del Curso Especializado Carota 360°",
          headers: ["Módulo Académico", "Temática Principal", "Horas Prácticas", "Entidad Evaluadora", "Porcentaje Aprobación"],
          rows: [
            ["Módulo 1: Fitopatología", "Identificación y control de Alternaria y Nematodos", "12 horas", "AGROSAVIA Centro La Selva", "98%"],
            ["Módulo 2: Quimiometría NIRS", "Uso de espectroscopia para azúcares y carotenos", "8 horas", "Universidad de Antioquia", "92%"],
            ["Módulo 3: Agroindustria", "Procesamiento de gomas y suplementos piloto", "12 horas", "Instituto INTAL", "95%"],
            ["Módulo 4: Bioeconomía", "Estructuración de Canvas y planes de negocio", "8 horas", "Universidad Católica de Oriente", "94%"]
          ]
        },
        photos: ["img_0396.jpg"]
      },
      {
        title: "Hoja 3: Paneles Comunitarios y Satisfacción",
        paragraphs: [
          "Para evaluar la apropiación social del conocimiento y el cambio de percepción comunitaria frente al descarte de zanahoria, se transcribieron y codificaron 70 entrevistas en grupos focales.",
          "El 92% de los productores encuestados durante el día de campo manifestó una intención de adopción alta del modelo de recolección asociativa, reconociendo el valor de desviar los excedentes hacia la cadena de cosméticos y alimentos.",
          "Los grupos de discusión destacaron la importancia de recibir asistencia técnica continua para el control integrado de nematodos sin recurrir al abuso de agroquímicos sintéticos de alta toxicidad."
        ],
        stats: [
          { label: "Entrevistas codificadas", value: "70 Diálogos", detail: "Análisis cualitativo y focus groups" },
          { label: "Intención de adopción", value: "92.0%", detail: "Modelo de economía circular propuesto" },
          { label: "Reducción agroquímicos", value: "85.0% Prioridad", detail: "Preocupación comunitaria de salud" },
          { label: "Asistencia técnica", value: "Exigida 100%", detail: "Solicitud a las alcaldías locales" }
        ],
        table: {
          title: "Resultados cualitativos de Encuestas de Percepción y Satisfacción",
          headers: ["Variable de Percepción", "Antes del Taller (%)", "Después del Taller (%)", "Cambio de Percepción (%)", "Significancia Estadística"],
          rows: [
            ["Conocimiento de Alternaria", "32.0%", "95.0%", "+63.0%", "Altamente significativa (p < 0.01)"],
            ["Identificación de Nematodos", "12.0%", "88.0%", "+76.0%", "Altamente significativa (p < 0.01)"],
            ["Valor del descarte de raíz", "5.0%", "92.0%", "+87.0%", "Altamente significativa (p < 0.01)"],
            ["Interés en asociarse", "45.0%", "88.0%", "+43.0%", "Significativa (p = 0.014)"]
          ]
        },
        photos: ["img_0333.jpg"]
      },
      {
        title: "Hoja 4: Soportes y Descargas de Apropiación Social",
        paragraphs: [
          "Los informes consolidados de apropiación social, memorias del curso Carota 360° y las metodologías didácticas se integraron en los entregables del Objetivo 4 del proyecto.",
          "Se publicó además el manual didáctico 'Una Zanahoria Para Exportar', diseñado para incentivar buenas prácticas de exportación hortícola en el Oriente Antioqueño.",
          "A continuación, se disponen los enlaces de descarga directa de los informes de apropiación social, manuales didácticos y cartillas de transferencia comunitaria."
        ],
        stats: [
          { label: "Documentos cargados", value: "2 Archivos", detail: "Informe ASC + Manual exportación" },
          { label: "Comunidades cubiertas", value: "4 Veredas", detail: "Bodegas, Cascajo, Salto y La Convención" },
          { label: "Productores beneficiados", value: "190 Familias", detail: "Impacto social del proyecto" },
          { label: "Código de proyecto", value: "ACT-13", detail: "Fase IV del cronograma SGR" }
        ],
        table: {
          title: "Entregables de Apropiación Social y Manuales Didácticos",
          headers: ["Entregable / Documento ID", "Nombre Oficial del Documento Soporte", "Formato de Archivo", "Acceso"],
          rows: [
            ["Entregable 4.4.1.13", "ACT 13 INFORME_Desarrollo conceptual.docx", "Word / PDF (Descarga directa)", "Público"],
            ["Anexo 13.1", "Manual Una Zanahoria para exportar.pdf", "PDF (Descarga directa)", "Público"]
          ]
        },
        photos: ["img_0337.jpg"]
      }
    ]
  },
  "ACT-14": {
    id: "ACT-14",
    responsibleEntity: "AGROSAVIA, UdeA, UCO e INTAL",
    researchTeam: [
      "Juan Camilo Henao Rojas",
      "Jorge Eliecer Jaramillo",
      "Carolina Zuluaga",
      "German Franco",
      "Claudia Lukau"
    ],
    pages: [
      {
        title: "Hoja 1: Mesas Técnicas de Articulación",
        paragraphs: [
          "Como parte de la fase final de consolidación y cierre del proyecto Antioquia Zana, se implementó un esquema de gobernanza para articular a los actores científicos, gremiales y estatales del departamento.",
          "Se realizaron 12 mesas técnicas mensuales de regalías bajo supervisión del Sistema General de Regalías (SGR), con participación de delegados de la Gobernación de Antioquia, Minciencias y los rectores de las universidades aliadas (UdeA, UCO, UNal).",
          "Estas mesas técnicas garantizaron la ejecución física y financiera del convenio, resolviendo desajustes presupuestales causados por fluctuaciones de TRM en la compra de reactivos y garantizando el cumplimiento de los 15 informes trimestrales."
        ],
        stats: [
          { label: "Mesas de gobernanza", value: "12 Reuniones", detail: "Comité Técnico de Regalías" },
          { label: "Informes trimestrales", value: "15 Entregados", detail: "100% de cumplimiento físico" },
          { label: "Entidades aliadas", value: "4 Entidades", detail: "AGROSAVIA, UdeA, UCO e INTAL" },
          { label: "Cumplimiento financiero", value: "100.0%", detail: "Ejecución presupuestal sin glosas" }
        ],
        table: {
          title: "Resumen de Comités Técnicos de Regalías SGR Realizados",
          headers: ["Mesa Técnica", "Fecha de Sesión", "Temática Principal de Coordinación", "Participantes Clave", "Estado de Acta"],
          rows: [
            ["Mesa Técnica 1", "Enero 2024", "Aprobación de cronograma e inicio de campo", "AGROSAVIA / UdeA / UCO", "Firmada y radicada"],
            ["Mesa Técnica 4", "Mayo 2024", "Ajuste presupuestal de reactivos importados", "Supervisor SGR / Rectores", "Firmada y radicada"],
            ["Mesa Técnica 8", "Noviembre 2024", "Revisión de microbiología de prototipos alimentarios", "INTAL / UdeA / Supervisor", "Firmada y radicada"],
            ["Mesa Técnica 12", "Diciembre 2025", "Cierre técnico y entrega de cartilla didáctica", "Gobernación / Investigadores", "Firmada y radicada"]
          ]
        },
        photos: ["img_0396.jpg"]
      },
      {
        title: "Hoja 2: Cartilla Didáctica 'Esta Zanahoria Pa' Quién'",
        paragraphs: [
          "Para transferir el conocimiento del proyecto de forma lúdica y accesible a la población infantil y juvenil del Oriente Antioqueño, se diseñó e ilustró la cartilla didáctica 'Esta Zanahoria Pa' Quién'.",
          "La cartilla cuenta con personajes animados e historias interactivas que explican el ciclo biológico del nematodo agallador y del hongo Alternaria, promoviendo el cuidado ambiental y el valor de la agricultura sostenible en las veredas.",
          "Se imprimieron y distribuyeron 500 ejemplares físicos en escuelas rurales de los municipios de Marinilla y El Santuario, complementando la dotación pedagógica de las bibliotecas comunitarias locales."
        ],
        stats: [
          { label: "Ejemplares impresos", value: "500 Cartillas", detail: "Distribución en escuelas rurales" },
          { label: "Escuelas beneficiadas", value: "12 Colegios", detail: "El Santuario y Marinilla" },
          { label: "Personajes diseñados", value: "4 Animados", detail: "Carotina, Nematodín, etc." },
          { label: "Talleres escolares", value: "6 Talleres", detail: "Lectura guiada con docentes" }
        ],
        table: {
          title: "Distribución de Cartillas Didácticas en Escuelas Rurales",
          headers: ["Municipio Beneficiado", "Institución Educativa Rural", "Sede Veredal", "Cartillas Entregadas", "Talleres Realizados"],
          rows: [
            ["El Santuario", "I.E.R. Bodegas", "Sede Principal", "120 ejemplares", "2 talleres lúdicos"],
            ["El Santuario", "I.E.R. Las Playas", "Sede Las Playas", "80 ejemplares", "1 taller lúdico"],
            ["Marinilla", "I.E.R. Cascajo Abajo", "Sede Cascajo", "150 ejemplares", "2 talleres lúdicos"],
            ["Marinilla", "I.E.R. El Salto", "Sede El Salto", "150 ejemplares", "1 taller lúdico"]
          ]
        },
        photos: ["img_0333.jpg"]
      },
      {
        title: "Hoja 3: Cierre Técnico y Entrega de Resultados",
        paragraphs: [
          "El cierre formal del proyecto se celebró mediante un foro público regional en el auditorio de la Universidad Católica de Oriente, con asistencia de alcaldes locales, delegados de regalías SGR y asociaciones hortícolas.",
          "Se hizo entrega formal de los manuales de cultivo, protocolos piloto e ingredientes a los representantes gremiales, asegurando que las metodologías agroindustriales queden a libre disposición del campesinado regional.",
          "El convenio técnico cerró con el 100% de cumplimiento físico y financiero, obteniendo el dictamen aprobatorio del supervisor del SGR sin observaciones ni glosas económicas, constituyendo un caso de éxito regional."
        ],
        stats: [
          { label: "Convenios validados", value: "4 Convenios", detail: "UdeA, AGROSAVIA, UCO e INTAL" },
          { label: "Dictamen final", value: "APROBADO", detail: "Dictamen SGR sin glosas" },
          { label: "Asistentes foro", value: "120 Líderes", detail: "Alcaldes, gremios e investigadores" },
          { label: "Metodologías transferidas", value: "15 Manuales", detail: "Libre acceso comunitario" }
        ],
        table: {
          title: "Auditoría de Cumplimiento de Metas y Productos del Proyecto",
          headers: ["Indicador de Meta", "Meta Exigida SGR", "Logro Alcanzado", "Porcentaje Cumplimiento", "Validación Supervisor"],
          rows: [
            ["Cultivares Evaluados", "10 cultivares", "14 cultivares", "140.0%", "Verificado en Campo"],
            ["Prototipos Alimentarios", "2 prototipos", "3 prototipos (Compota/Snack/Gomas)", "150.0%", "Verificado en Planta"],
            ["Ingrediente Cosmético", "1 bioingrediente", "2 prototipos (NLC e ingrediente rico)", "200.0%", "Verificado en Laboratorio"],
            ["Planes de Negocios", "2 planes", "5 planes (Canvas / Proyecciones)", "250.0%", "Verificado en Comité"]
          ]
        },
        photos: ["img_0336.jpg"]
      },
      {
        title: "Hoja 4: Soportes y Descarga de Cierre Final",
        paragraphs: [
          "El Informe Técnico Final Consolidado, la cartilla didáctica digital y el acta de liquidación de regalías SGR están disponibles en formato PDF.",
          "Estos documentos recogen las firmas de todos los directores científicos y representantes legales del convenio de investigación.",
          "A continuación, se listan los accesos de descarga directa de la documentación de cierre final, cartillas didácticas e informe definitivo."
        ],
        stats: [
          { label: "Informe definitivo", value: "ACT 14 FINAL", detail: "Consolidado de metas y anexos" },
          { label: "Firmas de liquidación", value: "6 Firmas", detail: "Gobernación, Rectores e Investigadores" },
          { label: "Cartillas digitales", value: "Esta Zanahoria pa quien", detail: "Formato interactivo PDF" },
          { label: "Código de entregable", value: "Entregable 4.4.1.14", detail: "Último reporte de cronograma" }
        ],
        table: {
          title: "Entregables de Cierre Técnico y Liquidación SGR",
          headers: ["Código Entregable", "Nombre del Documento Soporte", "Formato de Archivo", "Acceso"],
          rows: [
            ["Entregable 4.4.1.14", "ACT 14. INFORME TÉCNICO_FINAL.docx", "Word / PDF (Descarga directa)", "Público"],
            ["Anexo 14.1", "Cartilla didáctica Esta Zanahoria Pa Quien.pdf", "PDF (Descarga directa)", "Público"]
          ]
        },
        photos: ["img_0337.jpg"]
      }
    ]
  }
};
