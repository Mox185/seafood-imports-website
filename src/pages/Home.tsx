import { Link } from 'react-router-dom';
import { Globe, ShieldCheck, Ship, Anchor, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?q=80&w=2000&auto=format&fit=crop"
            alt="Fishing boats at sunrise"
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 rounded-full bg-cyan-900/50 border border-cyan-700 text-cyan-300 text-sm font-semibold tracking-wider uppercase mb-6">
              Global Seafood Importer
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Premium Seafood, Sourced Globally, Delivered with Integrity.
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
              Alheba Seafood Imports is your trusted partner for the finest raw and value-added seafood, specializing in premium shrimp that meets the highest international standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Request a Quotation
                <ArrowRight className="ml-2 -mr-1 w-5 h-5" />
              </Link>
              <Link
                to="/products"
                className="inline-flex justify-center items-center px-8 py-4 border border-slate-600 text-base font-medium rounded-md text-white hover:bg-slate-800 transition-colors"
              >
                View Our Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-start p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow">
              <div className="p-3 bg-cyan-100 text-cyan-700 rounded-lg mb-4">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Global Network</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Securing the best sources worldwide to bring you unparalleled quality and variety.</p>
            </div>
            
            <div className="flex flex-col items-start p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow">
              <div className="p-3 bg-cyan-100 text-cyan-700 rounded-lg mb-4">
                <Anchor className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Specialized Expertise</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Deep industry knowledge with a primary focus on premium shrimp imports.</p>
            </div>

            <div className="flex flex-col items-start p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow">
              <div className="p-3 bg-cyan-100 text-cyan-700 rounded-lg mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Quality Assured</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Strict adherence to the highest international quality and safety standards.</p>
            </div>

            <div className="flex flex-col items-start p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow">
              <div className="p-3 bg-cyan-100 text-cyan-700 rounded-lg mb-4">
                <Ship className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Reliable Supply</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Consistent, dependable delivery to keep your business running smoothly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Premium Selection</h2>
            <p className="text-lg text-slate-600">Discover our range of high-quality seafood products, carefully selected and processed to meet your exact specifications.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Product 1 */}
            <Link to="/products" className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="relative h-48 overflow-hidden bg-slate-200">
                <img 
                  src="https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?q=80&w=800&auto=format&fit=crop" 
                  alt="HOSO Shrimp" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-2">HOSO Shrimp</h3>
                <p className="text-slate-600 text-sm mb-4 flex-grow">Head-On, Shell-On. The purest form of shrimp, processed immediately to lock in freshness.</p>
                <span className="text-cyan-600 font-medium text-sm flex items-center group-hover:text-cyan-700">
                  Learn more <ArrowRight className="ml-1 w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Product 2 */}
            <Link to="/products" className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="relative h-48 overflow-hidden bg-slate-200">
                <img 
                  src="https://images.unsplash.com/photo-1625943555419-56a2cb596640?q=80&w=800&auto=format&fit=crop" 
                  alt="HLSO Shrimp" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-2">HLSO Shrimp</h3>
                <p className="text-slate-600 text-sm mb-4 flex-grow">Headless, Shell-On. Versatile and convenient, preserving natural taste and texture.</p>
                <span className="text-cyan-600 font-medium text-sm flex items-center group-hover:text-cyan-700">
                  Learn more <ArrowRight className="ml-1 w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Product 3 */}
            <Link to="/products" className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="relative h-48 overflow-hidden bg-slate-200">
                <img 
                  src="https://images.unsplash.com/photo-1559841644-08984562005a?q=80&w=800&auto=format&fit=crop" 
                  alt="Wild-Caught Titi Shrimp" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Wild Titi Shrimp</h3>
                <p className="text-slate-600 text-sm mb-4 flex-grow">Sustainably wild-caught in FAO Zone #87. Prized for robust flavor and firm texture.</p>
                <span className="text-cyan-600 font-medium text-sm flex items-center group-hover:text-cyan-700">
                  Learn more <ArrowRight className="ml-1 w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Product 4 */}
            <Link to="/products" className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="relative h-48 overflow-hidden bg-slate-200">
                <img 
                  src="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=800&auto=format&fit=crop" 
                  alt="Value-Added Products" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Value-Added</h3>
                <p className="text-slate-600 text-sm mb-4 flex-grow">Convenience without compromise. Raw, cooked, easy peel, and ready for your kitchen.</p>
                <span className="text-cyan-600 font-medium text-sm flex items-center group-hover:text-cyan-700">
                  Learn more <ArrowRight className="ml-1 w-4 h-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-cyan-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Partner with Alheba?</h2>
          <p className="text-lg text-cyan-100 mb-10 max-w-2xl mx-auto">
            Contact us today to discuss your requirements and receive a competitive quotation tailored to your business needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-lg font-bold rounded-md text-cyan-900 bg-white hover:bg-slate-100 transition-colors shadow-xl"
          >
            Get a Quote Now
          </Link>
        </div>
      </section>
    </div>
  );
}
