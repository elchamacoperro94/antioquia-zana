import { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import ProductModal from '../components/ProductModal';
import { products } from '../data/projectData';
import type { ProductEntry } from '../data/projectData';

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<ProductEntry | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProductDetails = (product: ProductEntry) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const productImages: Record<string, string> = {
    "PROT-01": "https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&fit=crop&w=600&q=80",
    "PROT-02": "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=600&q=80",
    "PROT-03": "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=600&q=80",
    "PROT-04": "https://images.unsplash.com/photo-1608248597481-496100c80836?auto=format&fit=crop&w=600&q=80",
    "PROT-05": "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=600&q=80"
  };

  const productBullets: Record<string, string[]> = {
    "PROT-01": ["• 27% Zanahoria de descarte", "• Sin azúcares añadidos", "• Tratamiento térmico CHTD"],
    "PROT-02": ["• 15% Inclusión de harina Zana", "• Textura crujiente expandida", "• Fibra dietaria natural"],
    "PROT-03": ["• Formulación nutracéutica", "• Betacaroteno natural", "• Alta palatabilidad animal"],
    "PROT-04": ["• Encapsulación NLC", "• Estabilidad lumínica", "• Uso tópico regenerativo"],
    "PROT-05": ["• Secado por liofilización", "• Concentrado antioxidante", "• Solubilidad instantánea"]
  };

  return (
    <section id="prototipos" className="px-6 py-20 md:py-28 max-w-6xl mx-auto flex flex-col gap-12 border-t border-white/5">
      {/* Section Header */}
      <SectionHeader
        badgeText="Prototipos"
        title="5 Productos Desarrollados"
        subtitle="3 para la industria de alimentos y 2 ingredientes activos para cosmética/farmacia desarrollados con química verde."
      />

      {/* 5-Column Grid Layout (Google Stitch style) */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((product) => {
          const imgUrl = productImages[product.id] || "https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&fit=crop&w=600&q=80";
          const bullets = productBullets[product.id] || ["• Ingrediente funcional", "• Bioeconomía circular", "• Agregación de valor"];
          const isListo = product.tag === "LISTO" || product.tag === "Listo" || product.tag === "Completado";

          return (
            <div
              key={product.id}
              onClick={() => openProductDetails(product)}
              className="glass-card rounded-2xl overflow-hidden border border-white/5 group hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer bg-obsidian-900/40"
            >
              {/* Product Cover Image (mix-blend-luminosity) */}
              <div className="relative h-48 overflow-hidden border-b border-white/5">
                <img 
                  src={imgUrl} 
                  alt={product.name} 
                  className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-105 transition-all duration-500"
                />
                <span className={`absolute top-4 right-4 text-[10px] px-2 py-0.5 rounded font-mono ${
                  isListo ? 'bg-secondary/20 text-secondary' : 'bg-primary/20 text-primary'
                }`}>
                  {product.tag.toUpperCase()}
                </span>
              </div>

              {/* Product Info content */}
              <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                <div className="space-y-2">
                  <span className="font-mono text-primary text-xs uppercase tracking-wider block">
                    {product.id}
                  </span>
                  <h3 className="font-headline-md text-white text-lg font-bold leading-tight group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="font-body-md text-slate-400 text-xs leading-relaxed font-light line-clamp-3">
                    {product.description}
                  </p>
                </div>

                {/* Bullets specs list */}
                <ul className="text-[11px] text-slate-500 space-y-2 border-t border-white/5 pt-4 font-mono">
                  {bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="truncate">{bullet}</li>
                  ))}
                </ul>
              </div>
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
