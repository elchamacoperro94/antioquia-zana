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
      "Luz Mary Quintero",
      "German Franco",
      "Jose Antonio Rubiano",
      "Carolina Ortiz",
      "Jaison Martínez",
      "Yeraldine Bedoya",
      "Mateo Londoño",
      "Luis Salazar",
      "Edison Osorio",
      "Catalina Agudelo",
      "Karent Bravo",
      "Daniel Carvajal",
      "Liliana Ceballos",
      "Claudia Lukau",
      "Jenny Milena Moreno",
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
        photos: ["img-20240530-wa0018.jpg", "img-20240530-wa0024.jpg"]
      },
      {
        title: "Hoja 2: Incidencia Fitosanitaria de Patógenos en Fincas",
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
        title: "Hoja 3: Tamizaje de Cultivares y Entregables Oficiales",
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
        photos: ["img_0333.jpg", "img_0339.jpg"]
      }
    ]
  }
};
