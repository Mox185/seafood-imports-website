import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Products() {
  const products = [
    {
      id: 'hoso',
      title: 'Head-On, Shell-On (HOSO)',
      description: 'The purest form of shrimp. Exported as it arrives to our processing plant, handled with extreme care and processed immediately after harvesting to lock in maximum freshness and flavor. Ideal for high-end culinary presentations.',
      image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?q=80&w=1200&auto=format&fit=crop',
      features: ['Purest form', 'Maximum freshness', 'Ideal for high-end presentation'],
    },
    {
      id: 'hlso',
      title: 'Headless, Shell-On (HLSO)',
      description: 'One of the most common and versatile forms of raw shrimp. The head is removed for convenience, while the shell remains to protect the meat and preserve its natural taste and texture during cooking.',
      image: 'https://images.unsplash.com/photo-1625943555419-56a2cb596640?q=80&w=1200&auto=format&fit=crop',
      features: ['Versatile', 'Convenient', 'Preserves natural taste'],
    },
    {
      id: 'titi',
      title: 'Wild-Caught Titi Shrimp',
      description: 'Sustainably wild-caught in the pristine waters of FAO Zone #87, the Pacific Ocean. Our Titi shrimp is prized for its distinct, robust flavor and firm texture, a testament to its wild origin.',
      image: 'https://images.unsplash.com/photo-1559841644-08984562005a?q=80&w=1200&auto=format&fit=crop',
      features: ['Sustainably wild-caught', 'FAO Zone #87', 'Robust flavor & firm texture'],
    },
    {
      id: 'value-added',
      title: 'Value-Added Products',
      description: 'Convenience without compromise. Our value-added line includes options for businesses looking to save on labor costs. Choose from raw or cooked, exfoliated (easy peel), head and vein removed, ready for your kitchen.',
      image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=1200&auto=format&fit=crop',
      features: ['Raw or Cooked', 'Easy Peel (Exfoliated)', 'Head & Vein Removed'],
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-slate-900 py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?q=80&w=2000&auto=format&fit=crop"
            alt="Fresh seafood"
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Products</h1>
          <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
            A visual catalog of our premium seafood selection, tailored for your business needs.
          </p>
        </div>
      </div>

      {/* Product List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-24">
        {products.map((product, index) => (
          <div 
            key={product.id} 
            className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-300`}
          >
            {/* Image */}
            <div className="w-full lg:w-1/2 h-80 lg:h-[500px] relative overflow-hidden">
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">{product.title}</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                {product.description}
              </p>
              
              <ul className="space-y-3 mb-10">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-slate-700 font-medium">
                    <div className="w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="w-4 h-4 text-cyan-700" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <div>
                <Link
                  to={`/contact?product=${product.id}`}
                  className="inline-flex items-center text-cyan-700 font-bold hover:text-cyan-800 transition-colors text-lg group"
                >
                  Request Quote for this Product
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-cyan-900 py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">Need a custom order?</h2>
          <p className="text-lg text-cyan-100 mb-8">
            We can accommodate specific processing and packaging requirements. Contact our team to discuss your needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-bold rounded-md text-cyan-900 bg-white hover:bg-slate-100 transition-colors shadow-lg"
          >
            Contact Sales Team
          </Link>
        </div>
      </div>
    </div>
  );
}
