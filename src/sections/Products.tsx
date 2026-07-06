import { useState } from 'react';
import { Apple, Beaker, Sparkles, ChevronRight } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import GlassCard from '../components/GlassCard';
import Badge from '../components/Badge';
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

  const getProductIcon = (accent: string) => {
    switch (accent) {
      case 'orange':
        return <Apple className="h-6 w-6 text-carrot-orange" />;
      case 'purple':
        return <Beaker className="h-6 w-6 text-purple-400" />;
      case 'green':
        return <Sparkles className="h-6 w-6 text-emerald-400" />;
      default:
        return <Apple className="h-6 w-6 text-white" />;
    }
  };

  const getGradientClass = (accent: string) => {
    switch (accent) {
      case 'orange':
        return 'bg-gradient-to-r from-carrot-orange to-amber-gold';
      case 'purple':
        return 'bg-gradient-to-r from-purple-600 to-indigo-500';
      case 'green':
        return 'bg-gradient-to-r from-emerald-600 to-teal-500';
      default:
        return 'bg-slate-700';
    }
  };

  const foodProducts = products.filter((p) => p.type === 'Alimentaria');
  const pharmaProducts = products.filter((p) => p.type === 'Farmacéutica/Cosmética');

  return (
    <section id="prototipos" className="px-6 py-20 md:py-28 max-w-6xl mx-auto flex flex-col gap-12 border-t border-white/5">
      {/* Section Header */}
      <SectionHeader
        badgeText="Prototipos"
        badgeColor="orange"
        title="5 Productos Desarrollados"
        subtitle="3 para industria alimentaria | 2 para industria farmacéutica/cosmética"
      />

      <div className="flex flex-col gap-10">
        {/* Food Products Subtitle Banner */}
        <div>
          <h3 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-6">
            Industria Alimentaria (Upcycling Nutricional)
          </h3>
          {/* 3 Food Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {foodProducts.map((product) => (
              <GlassCard
                key={product.id}
                onClick={() => openProductDetails(product)}
                className="flex flex-col justify-between items-stretch p-0 border-white/5 bg-obsidian-900/40 relative cursor-pointer group hover:-translate-y-1.5 transition-all duration-300"
              >
                {/* Accent Gradient Top Bar */}
                <div className={`h-1.5 w-full ${getGradientClass(product.accent)}`} />
                
                {/* Content Container */}
                <div className="p-6 flex flex-col flex-grow gap-4 justify-between">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <div className="p-2 rounded-lg bg-white/5 border border-white/10 w-fit">
                        {getProductIcon(product.accent)}
                      </div>
                      <Badge text={product.tag} color={product.accent === 'green' ? 'green' : 'orange'} />
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-white group-hover:text-carrot-orange transition-colors">
                        {product.name}
                      </h4>
                      <p className="text-xs text-slate-500 font-mono mt-0.5 uppercase">
                        {product.id}
                      </p>
                    </div>

                    <p className="text-sm text-slate-300 line-clamp-3 font-light leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  <div className="border-t border-white/5 pt-4 mt-2 flex justify-between items-center text-xs font-mono text-carrot-orange group-hover:text-carrot-orange-hover">
                    <span>Especificaciones Técnicas</span>
                    <ChevronRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Pharma / Cosmetic Products Subtitle Banner */}
        <div className="mt-6">
          <h3 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-6">
            Industria Cosmética y Farmacéutica (Química Verde)
          </h3>
          {/* 2 Pharma Cards centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {pharmaProducts.map((product) => (
              <GlassCard
                key={product.id}
                onClick={() => openProductDetails(product)}
                className="flex flex-col justify-between items-stretch p-0 border-white/5 bg-obsidian-900/40 relative cursor-pointer group hover:-translate-y-1.5 transition-all duration-300"
              >
                {/* Accent Gradient Top Bar */}
                <div className={`h-1.5 w-full ${getGradientClass(product.accent)}`} />
                
                {/* Content Container */}
                <div className="p-6 flex flex-col flex-grow gap-4 justify-between">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <div className="p-2 rounded-lg bg-white/5 border border-white/10 w-fit">
                        {getProductIcon(product.accent)}
                      </div>
                      <Badge text={product.tag} color="purple" />
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-white group-hover:text-glow-purple transition-colors">
                        {product.name}
                      </h4>
                      <p className="text-xs text-slate-500 font-mono mt-0.5 uppercase">
                        {product.id}
                      </p>
                    </div>

                    <p className="text-sm text-slate-300 line-clamp-3 font-light leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  <div className="border-t border-white/5 pt-4 mt-2 flex justify-between items-center text-xs font-mono text-glow-purple group-hover:text-purple-400">
                    <span>Especificaciones Técnicas</span>
                    <ChevronRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
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
