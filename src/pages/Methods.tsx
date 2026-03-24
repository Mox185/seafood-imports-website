import { Snowflake, Layers, Box, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Methods() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-slate-900 py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2000&auto=format&fit=crop"
            alt="Ice and freezing"
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Processing & Freezing Methods</h1>
          <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
            Preserving Freshness from Ocean to Door.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">State-of-the-Art Preservation</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            At Alheba Seafood Imports, we utilize advanced freezing technologies to ensure that our premium shrimp retains its natural flavor, texture, and nutritional value from the moment it is harvested until it reaches your kitchen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Method 1 */}
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-700 mb-8">
              <Snowflake className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Individually Quick Frozen (IQF)</h3>
            <p className="text-slate-600 leading-relaxed">
              Each shrimp is frozen separately, allowing you to easily take out only the quantity you need. This method prevents clumping and preserves the integrity of each individual piece, ensuring perfect portion control and minimal waste.
            </p>
          </div>

          {/* Method 2 */}
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-700 mb-8">
              <Layers className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Brine Individually Quick Frozen</h3>
            <p className="text-slate-600 leading-relaxed">
              A specialized IQF method using brine to create a protective glaze around the shrimp. This glaze offers enhanced protection against freezer burn and dehydration, resulting in an even longer shelf life while maintaining premium quality.
            </p>
          </div>

          {/* Method 3 */}
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-700 mb-8">
              <Box className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Block Frozen</h3>
            <p className="text-slate-600 leading-relaxed">
              Shrimp are frozen together in a solid block of ice. This traditional method is highly effective for bulk storage and long-distance transport, ensuring the product remains perfectly preserved and protected from oxidation until use.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-slate-50 py-16 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Have questions about our processing?</h2>
          <Link
            to="/contact"
            className="inline-flex justify-center items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyan-700 hover:bg-cyan-800 transition-colors shadow-md"
          >
            Contact Our Experts
            <ArrowRight className="ml-2 -mr-1 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
