export interface ObjectiveChart {
  type: 'bar' | 'line' | 'donut';
  title: string;
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    color: string;
  }[];
}

export interface ObjectiveResultEntry {
  id: string; // OBJ-01, OBJ-02, OBJ-03, OBJ-04
  title: string;
  summary: string;
  globalImpact: string;
  paragraphs: string[];
  stats: { label: string; value: string; detail?: string }[];
  table?: {
    title: string;
    headers: string[];
    rows: string[][];
  };
  chart?: ObjectiveChart;
  photos: string[];
}

export const objectiveResults: Record<string, ObjectiveResultEntry> = {
  "OBJ-01": {
    id: "OBJ-01",
    title: "Caracterización y Determinación Nutricional",
    summary: "Evaluación integral de la composición fisicoquímica, perfiles nutricionales y respuestas espectrales no destructivas de cultivares y excedentes regionales.",
    globalImpact: "La consolidación de perfiles espectrales NIRS para 240 muestras de raíces permitió desarrollar los primeros modelos quimiométricos predictivos de la región con un R² de 0.9997, sentando las bases científicas para la diferenciación del cultivo en Antioquia.",
    paragraphs: [
      "El primer pilar de Antioquia Zana se centró en caracterizar las propiedades físicas, bioquímicas y funcionales del cultivo Bangor y otros cultivares. Se realizaron muestreos rigurosos en Marinilla, El Santuario y Carmen de Viboral para establecer una línea base de calidad diferencial para la bioeconomía subregional.",
      "Los análisis espectroscópicos mediante reflectancia difusa NIRS en el rango de 350 a 1900 nm proporcionaron una base de datos robusta. Con este insumo, se programaron modelos quimiométricos en Python utilizando regresión por mínimos cuadrados parciales (PLSR). El sistema permite estimar la concentración de β-caroteno de manera inmediata sin destruir la raíz del producto.",
      "Adicionalmente, se determinó el potencial nutricional de materiales morados (Daucus carota L. híbrido Deep Purple F1). Estos cultivares reportaron concentraciones excepcionales de antocianinas monoméricas totales (hasta 124.5 mg/100g de materia seca) y una capacidad antioxidante superior en un 267% a las variedades naranjas comerciales, constituyendo un activo bioeconómico de gran interés."
    ],
    stats: [
      { label: "Muestras Caracterizadas", value: "240 Raíces", detail: "Varios cultivares y excedentes" },
      { label: "Precisión Quimiométrica", value: "R² 0.9997", detail: "Modelo PLSR en Python" },
      { label: "Antocianinas Moradas", value: "124.5 mg", detail: "Por cada 100g en base seca" },
      { label: "Carotenoides Bangor", value: "94.2 mg", detail: "Por 100g (Provitamina A)" }
    ],
    table: {
      title: "Resumen de Compuestos Bioactivos y Capacidad Antioxidante",
      headers: ["Variedad / Cultivar", "Carotenoides (mg/100g)", "Antocianinas (mg/100g)", "Fenoles Totales (mg EAG/100g)", "ORAC-L (µmol ET/g)"],
      rows: [
        ["Bangor F1 (Naranja)", "94.20", "No detectado", "57.10", "60.28"],
        ["Deep Purple (Morado)", "2.80", "124.50", "148.60", "165.40"],
        ["Variedad Amarilla (C9)", "18.40", "No detectado", "41.20", "22.50"],
        ["Variedad Blanca (Control)", "0.35", "No detectado", "12.80", "5.10"]
      ]
    },
    chart: {
      type: "bar",
      title: "Capacidad Antioxidante Promedio ORAC-L (µmol ET/g)",
      labels: ["Bangor F1 (Naranja)", "Deep Purple (Morado)", "Amarilla (C9)", "Blanca (Control)"],
      datasets: [
        { label: "Capacidad Antioxidante ORAC-L", data: [60.28, 165.40, 22.50, 5.10], color: "#e67e22" }
      ]
    },
    photos: ["img-20240530-wa0018.jpg", "img-20240530-wa0024.jpg", "img_0333.jpg"]
  },
  "OBJ-02": {
    id: "OBJ-02",
    title: "Prototipos Alimentarios de Upcycling",
    summary: "Desarrollo de prototipos de productos alimenticios sólidos, semisólidos y líquidos dirigidos a diferentes nichos comerciales, utilizando tecnologías limpias de procesamiento.",
    globalImpact: "Se consolidó la formulación y escalamiento piloto de 3 productos alimentarios que incorporan hasta un 45% de pulpa de zanahoria descartada, garantizando inocuidad microbiológica absoluta y estabilidad sensorial durante 12 meses.",
    paragraphs: [
      "Para valorizar los excedentes agrícolas (zanahorias que no cumplen con los estándares estéticos del mercado fresco), se formularon tres prototipos funcionales: ZanaPure (compota infantil), ZanaPet (snacks deshidratados caninos) y Gomitas Funcionales.",
      "El procesamiento incorporó la tecnología de Cavitación Hidrotermodinámica (CHTD). Este método físico induce la formación e implosión de microburbujas de vapor en un ingrediente fluido, logrando la ruptura celular de la zanahoria y liberando los carotenoides atrapados sin recurrir a disolventes químicos, además de pasteurizar el producto térmicamente de forma simultánea.",
      "Los estudios de estabilidad acelerada a 40°C y 75% HR confirmaron que los empaques flexibles doypack bilaminados y la formulación balanceada retienen el 78% del β-caroteno tras un período simulado de 12 meses a temperatura ambiente, controlando la rancidez oxidativa por debajo de los límites exigidos por la normatividad Invima."
    ],
    stats: [
      { label: "Prototipos Validados", value: "3 Alimentos", detail: "ZanaPure, ZanaPet y Gomas" },
      { label: "Retención β-caroteno", value: "78% Anual", detail: "En estabilidad acelerada a 40°C" },
      { label: "Porcentaje de Reúso", value: "Hasta 45%", detail: "Zanahoria descarte incorporada" },
      { label: "Mesófilos Aerobios", value: "< 10 UFC/g", detail: "Inocuidad microbiológica total" }
    ],
    table: {
      title: "Métricas de Control de Calidad y Rendimiento de Fórmulas",
      headers: ["Prototipo Comercial", "Viscosidad / Humedad", "Sabor dominante", "Porcentaje de Pulpa", "Índice TBARS (meq O₂/kg)"],
      rows: [
        ["ZanaPure (Compota)", "3.200 cP", "Dulce natural manzana", "27.40%", "< 0.10"],
        ["ZanaPet (Snacks)", "7.80% humedad", "Caldo pollo orgánico", "45.00%", "1.24"],
        ["Gomas Funcionales", "Textura masticable", "Fresa e Higo", "18.00%", "< 0.05"]
      ]
    },
    chart: {
      type: "donut",
      title: "Composición de Fórmulas Alimentarias (% Pulpa de Zanahoria de Descartes)",
      labels: ["ZanaPet (Snacks Caninos)", "ZanaPure (Compota Infantil)", "Gomas Masticables", "Agentes Gelificantes y Bases"],
      datasets: [
        { label: "Proporción de Fórmula", data: [45.0, 27.4, 18.0, 9.6], color: "#16a085" }
      ]
    },
    photos: ["img-20260414-wa0002.jpg", "img-20260414-wa0042.jpg", "img_0238.jpg", "img_0243.jpg"]
  },
  "OBJ-03": {
    id: "OBJ-03",
    title: "Prototipos Farmacéuticos/Cosméticos",
    summary: "Diseño y formulación de ingredientes activos cosméticos y farmacéuticos mediante nanoencapsulación de derivados del β-caroteno.",
    globalImpact: "Se formuló con éxito la crema hidratante premium Aurum Carota, incorporando nanopartículas lipídicas sólidas (NLC < 150nm) cargadas con apocarotenoides fotoquímicos que aumentan un 84% la síntesis de colágeno in-vitro.",
    paragraphs: [
      "Para ingresar al mercado cosmecéutico de alto valor, se desarrolló un proceso de fotooxidación controlada catalizado por Fenton + Ultrasonido. Este procedimiento fracciona el β-caroteno en apocarotenoides y retinoles activos con alta capacidad de regeneración celular.",
      "Debido a la alta inestabilidad de estas moléculas, se encapsularon en Portadores Lipídicos Nanoestructurados (NLC). Utilizando manteca de cacao regional y aceite de aguacate homogeneizados a 1.200 bar, se crearon coloides con un tamaño de partícula promedio de 138 nm y un potencial zeta de -32.4 mV, lo que garantiza estabilidad física frente a la precipitación.",
      "La seguridad dermatológica se evaluó y certificó mediante 4 protocolos in-vitro bajo lineamientos estrictos de la OCDE (TG 431, 432, 439 y 489) utilizando cultivos de epidermis humana reconstituida (SkinEthic). El bioingrediente demostró una viabilidad celular superior al 90%, dictaminándose como no irritante, no fototóxico y no corrosivo."
    ],
    stats: [
      { label: "Tamaño Nanocápsulas", value: "138 nm", detail: "Diámetro promedio coloidal" },
      { label: "Estabilidad Zeta", value: "-32.4 mV", detail: "Excelente repulsión electrostática" },
      { label: "Protocolos OCDE", value: "4 Ensayos", detail: "TG 431, 432, 439, 489 in-vitro" },
      { label: "Retención Colágeno", value: "+84.0%", detail: "Fibroblastos tratados vs control UVB" }
    ],
    table: {
      title: "Resultados de Ensayos Clínicos de Toxicología y Eficacia in-vitro",
      headers: ["Modelo Celular / Tejido", "Ensayo Estandarizado", "Parámetro Evaluado", "Resultado de Viabilidad", "Dictamen Final"],
      rows: [
        ["Epidermis RhE (SkinEthic)", "OCDE TG 439", "Irritación dérmica primaria", "95.40%", "NO IRRITANTE"],
        ["Epidermis RhE (SkinEthic)", "OCDE TG 431", "Corrosión dérmica aguda", "98.20%", "NO CORROSIVO"],
        ["Queratinocitos (HaCaT)", "OCDE TG 489", "Fototoxicidad celular", "92.10%", "NO FOTOTÓXICO"],
        ["Fibroblastos (HDF)", "OCDE TG 432", "Fotoirritación post-radiación", "95.40%", "NO FOTOIRRITANTE"]
      ]
    },
    chart: {
      type: "line",
      title: "Viabilidad Tisular Epidermis Reconstituida (%) en Función del Tiempo de Contacto",
      labels: ["T-0 (Inicio)", "T-1h (Exposición)", "T-2h (Exposición)", "T-4h (Cierre)"],
      datasets: [
        { label: "Epidermis SkinEthic + Bioingrediente", data: [100.0, 98.5, 97.1, 95.4], color: "#9b59b6" },
        { label: "Epidermis + Control Corrosivo (Tritón)", data: [100.0, 42.0, 18.5, 2.1], color: "#e74c3c" }
      ]
    },
    photos: ["img_0277.jpg", "img_0282.jpg", "img_0288.jpg", "img_0290.jpg"]
  },
  "OBJ-04": {
    id: "OBJ-04",
    title: "Oportunidades de Mercado y Transferencia",
    summary: "Estructuración de planes de negocio, encadenamientos de economía circular y estrategias de apropiación social del conocimiento.",
    globalImpact: "El modelo financiero integral determinó una TIR del 42% y un período de recuperación de la inversión de 2.1 años para el portafolio de upcycling, apalancado en un modelo asociativo que reduce 60% el flete rural.",
    paragraphs: [
      "El último pilar del proyecto Antioquia Zana diseñó las bases de transferencia comercial y comunitaria en la subregión de Oriente. Se mapearon relacionalmente 53 actores de la cadena hortícola en Marinilla, El Santuario y El Carmen de Viboral.",
      "Para solventar el cuello de botella del transporte disperso, se diseñó un modelo de logística inversa. Este centraliza el acopio de excedentes en los centros de clasificación de las asociaciones aliadas (Hortisanos y Cooasab), logrando reducir el costo del flete de $350 a $120 por Kg de zanahoria.",
      "La transferencia social se consolidó a través del curso especializado 'Carota 360°', donde se certificaron 42 técnicos locales en quimiometría y operaciones agroindustriales. Asimismo, se distribuyeron 500 ejemplares de la cartilla pedagógica ilustrada 'Esta Zanahoria Pa' Quién' en escuelas rurales para sensibilizar a la infancia sobre el upcycling agrícola."
    ],
    stats: [
      { label: "Actores Mapeados", value: "53 Empresas", detail: "Eslabones productores e industriales" },
      { label: "Ahorro en Flete Rural", value: "60% COP/kg", detail: "Por consolidación asociativa de acopio" },
      { label: "Tasa de Retorno TIR", value: "42.0%", detail: "TIR global a 5 años del portafolio" },
      { label: "Población Capacitada", value: "190 Agricultores", detail: "En talleres y días de campo" }
    ],
    table: {
      title: "Análisis Financiero de Prototipos de Upcycling a 5 Años",
      headers: ["Línea de Prototipo", "Costo Unitario", "Precio de Venta", "Margen Neto Proyectado", "TIR Proyectada (%)"],
      rows: [
        ["ZanaPure (Compota)", "$1.970 COP", "$8.500 COP", "55.00%", "35.20%"],
        ["ZanaPet (Snacks)", "$2.590 COP", "$12.000 COP", "62.00%", "38.50%"],
        ["Gomas Funcionales", "$1.480 COP", "$6.500 COP", "45.00%", "31.20%"],
        ["Aurum Carota (Crema)", "$10.050 COP", "$85.000 COP", "72.00%", "42.00%"]
      ]
    },
    chart: {
      type: "bar",
      title: "Margen de Ganancia Neto (%) por Producto en Modelo de Negocios",
      labels: ["ZanaPure Compotas", "ZanaPet Snacks", "Gomas Funcionales", "Aurum Carota Crema"],
      datasets: [
        { label: "Margen Neto (%)", data: [55.0, 62.0, 45.0, 72.0], color: "#2ecc71" }
      ]
    },
    photos: ["img_0330.jpg", "img_0331.jpg", "img_0396.jpg", "img_0336.jpg"]
  }
};
