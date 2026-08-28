import { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import ProductModal from '../components/ProductModal';
import TrlExplanation from '../components/TrlExplanation';
import { products as productsEs } from '../data/projectData';
import type { ProductEntry } from '../data/projectData';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import ArtFrame from '../components/ArtFrame';

const productsEn: ProductEntry[] = [
  {
    id: "prod-zanapure",
    name: "ZanaPure",
    type: "Alimentaria",
    tag: "TRL 6-7 Prototype · Food",
    formulation: "Carrot (27.4%), Banana (38%), Yacon (4%), Collagen (4%), Passion fruit and Emulfiber",
    process: "Hydrothermodynamic Cavitation (CHTD)",
    status: "Validated at pilot scale (TRL 6-7)",
    features: [
      "No added sugars or artificial sweeteners",
      "Clean label (no warning stamps)",
      "High soluble and insoluble dietary fiber",
      "Optimal energy: 69 kcal/100g"
    ],
    description: "Baby and family puree made through hydrothermodynamic cavitation (CHTD), a clean technology that prevents thermal degradation of vitamins and carotenes.",
    accent: "orange"
  },
  {
    id: "prod-zanapet",
    name: "ZanaPet",
    type: "Alimentaria",
    tag: "TRL 6-7 Prototype · Food",
    formulation: "Dehydrated carrot (45%), Carrot flour, Chicken fat and Vegetable oil",
    process: "Convective dehydration and lipid homogenization",
    status: "Validated at pilot scale (TRL 6-7)",
    features: [
      "Beta-carotene rich supplement for healthy skin and coat",
      "High natural fiber for animal digestive health",
      "High palatability validated by canine panels",
      "100% natural, free of synthetic preservatives"
    ],
    description: "Complementary food / dehydrated snack for pets based on discarded carrot, rich in soluble fiber and natural carotenoids.",
    accent: "green"
  },
  {
    id: "prod-gomas",
    name: "Biofunctional Gummies",
    type: "Alimentaria",
    tag: "TRL 6-7 Prototype · Food",
    formulation: "Carrot concentrate (18%), Sorbitol (sugar free), Vitamins B, D, Zinc and Iron",
    process: "Vacuum concentration and drop dosing",
    status: "Validated at pilot scale (TRL 6-7)",
    features: [
      "Sweetened with polyols (suitable for sugar control regimes)",
      "Provides 30% of daily zinc and iron requirement",
      "Natural color and flavor from carrot concentrate",
      "Chewable texture optimized with natural hydrocolloids"
    ],
    description: "Functional gelatin gummies enriched with essential micronutrients and soluble fiber from concentrated carrot pulp.",
    accent: "orange"
  },
  {
    id: "prod-apocarotenoides",
    name: "NLC Bio-ingredient",
    type: "Farmacéutica/Cosmética",
    tag: "TRL 6-7 Prototype · Cosmetic",
    formulation: "Concentrated apocarotenoids (11+ ppm retinoids), Cocoa butter, Lipid carriers",
    process: "Photo-oxidation (UV + Fenton) and NLC Lipid Nanocarriers (<400nm)",
    status: "Validated at pilot scale (TRL 6-7)",
    features: [
      "Natural retinoid concentration exceeding 11 ppm",
      "Colloidal encapsulation in NLC lipid nanocarriers (<400nm)",
      "Validated HPLC-DAD analytical method (r=0.9997)",
      "Protected under Trade Secret protocol"
    ],
    description: "Dermocosmetic active bio-ingredient precursor of vitamin A, obtained by catalytic cleavage of beta-carotene and encapsulated in lipid nanocarriers.",
    accent: "purple"
  },
  {
    id: "prod-aurum",
    name: "Cosmetic Emulsion",
    type: "Farmacéutica/Cosmética",
    tag: "TRL 6-7 Prototype · Cosmetic",
    formulation: "NLC bio-ingredient rich in apocarotenoids, Cocoa butter, Myritol 318, Emulsifying phase",
    process: "High-pressure shear homogenization and colloidal dispersion",
    status: "Validated at pilot scale (TRL 6-7)",
    features: [
      "Proven anti-aging and revitalization effect",
      "High skin penetrability without greasy feel",
      "Standardized with retinol equivalents",
      "Validated with 4 OECD skin safety protocols"
    ],
    description: "Anti-aging facial cosmetic emulsion formulated with carrot apocarotenoid bio-ingredient for skin regeneration and photoprotection.",
    accent: "orange"
  }
];

export default function Products() {
  const { language } = useLanguage();
  const t = translations[language];
  const products = language === 'en' ? productsEn : productsEs;
  const [selectedProduct, setSelectedProduct] = useState<ProductEntry | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProductDetails = (product: ProductEntry) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const productImages: Record<string, string> = {
    "prod-zanapure": "/products/prot-01-yellow-jar.png",
    "prod-zanapet": "/photos-proyecto/act-05-prototipado-alimentario-001.jpg",
    "prod-gomas": "/products/gomas-biofuncionales.png",
    "prod-apocarotenoides": "/products/bioingrediente-nlc.png",
    "prod-aurum": "/products/emulsion-cosmetica-aurum.png",
    "PROT-01": "/products/prot-01-yellow-jar.png",
    "PROT-02": "/photos-proyecto/act-05-prototipado-alimentario-001.jpg",
    "PROT-03": "/products/gomas-biofuncionales.png",
    "PROT-04": "/products/bioingrediente-nlc.png",
    "PROT-05": "/products/emulsion-cosmetica-aurum.png"
  };

  const productBullets: Record<string, string[]> = {
    "PROT-01": language === 'en' ? ["• 27% Discard carrot", "• No added sugars", "• CHTD thermal treatment"] : ["• 27% Zanahoria de descarte", "• Sin azúcares añadidos", "• Tratamiento térmico CHTD"],
    "PROT-02": language === 'en' ? ["• 15% Zana flour inclusion", "• Crunchy expanded texture", "• Natural dietary fiber"] : ["• 15% Inclusión de harina Zana", "• Textura crujiente expandida", "• Fibra dietaria natural"],
    "PROT-03": language === 'en' ? ["• Nutraceutical formula", "• Natural beta-carotene", "• High animal palatability"] : ["• Formulación nutracéutica", "• Betacaroteno natural", "• Alta palatabilidad animal"],
    "PROT-04": language === 'en' ? ["• NLC encapsulation", "• Light stability", "• Regenerative topical use"] : ["• Encapsulación NLC", "• Estabilidad lumínica", "• Uso tópico regenerativo"],
    "PROT-05": language === 'en' ? ["• Freeze-drying process", "• Antioxidant concentrate", "• Instant solubility"] : ["• Secado por liofilización", "• Concentrado antioxidante", "• Solubilidad instantánea"]
  };

  return (
    <section id="prototipos" className="px-6 py-20 md:py-28 max-w-6xl mx-auto flex flex-col gap-12 border-t border-white/5 relative z-10">
      {/* Section Header */}
      <SectionHeader
        badgeText={t.hdr_prod_badge}
        title={t.hdr_prod_title}
        subtitle={t.hdr_prod_subtitle}
      />

      {/* Banner de Nivel de Madurez Tecnológica TRL 6-7 */}
      <div className="p-5 sm:p-6 rounded-3xl bg-[#0F1A15] border border-[#5E824A]/40 flex flex-col sm:flex-row items-center gap-4 shadow-xl">
        <div className="px-4 py-2 rounded-2xl bg-[#DE5A30]/20 border border-[#DE5A30]/40 text-[#DE5A30] font-sora font-extrabold text-sm shrink-0">
          {t.prod_trl_banner_title}
        </div>
        <p className="text-xs sm:text-sm text-[#F0EDE1]/80 font-light leading-relaxed">
          {t.prod_trl_banner_desc}
        </p>
      </div>

      {/* Componente Explicativo Interactivo e Infografía de la Escala TRL (1 a 9) */}
      <TrlExplanation />

      {/* 5-Column Grid Layout (ArtFrame style) */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((product) => {
          const imgUrl = productImages[product.id] || productImages[product.id.toUpperCase()] || "/products/prot-01-yellow-jar.png";
          const isListo = product.tag === "LISTO" || product.tag === "Listo" || product.tag === "Completado";

          return (
            <div
              key={product.id}
              onClick={() => openProductDetails(product)}
              className="cursor-pointer group"
            >
              <ArtFrame className="h-full flex flex-col p-0 overflow-hidden hover:border-primary-container/85">
                {/* Product Cover Image */}
                <div className="relative h-44 overflow-hidden border-b border-white/5">
                  <img 
                    src={imgUrl} 
                    alt={product.name} 
                    className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-105 transition-all duration-500"
                  />
                  <span className={`absolute top-3 right-3 text-[9px] px-2 py-0.5 rounded font-mono ${
                    isListo ? 'bg-secondary/20 text-secondary' : 'bg-primary/20 text-primary'
                  }`}>
                    {product.tag.toUpperCase()}
                  </span>
                </div>

                {/* Product Info content */}
                <div className="p-4 flex flex-col justify-between space-y-3">
                  <div className="space-y-1">
                    <span className="font-mono text-primary text-[10px] uppercase tracking-wider block">
                      {product.id}
                    </span>
                    <h3 className="font-headline-md text-white text-base font-bold leading-tight group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="font-body-md text-slate-400 text-xs leading-relaxed font-light line-clamp-2">
                      {product.description}
                    </p>
                    {productBullets[product.id] && (
                      <ul className="space-y-0.5 pt-1 text-[10px] font-mono text-slate-500">
                        {productBullets[product.id].map((bullet, bIdx) => (
                          <li key={bIdx}>{bullet}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </ArtFrame>
            </div>
          );
        })}
      </div>

      {/* Detail Modal overlay */}
      <ProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={selectedProduct}
      />
    </section>
  );
}
