import { CheckCircle2, Shield, Leaf, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-slate-900 py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=2000&auto=format&fit=crop"
            alt="Ocean waves"
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h1>
          <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
            Your trusted partner in securing exceptional raw seafood.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Alheba Seafood Imports is more than just an import company; we are your trusted partner in securing exceptional raw seafood. Our global network grants us access to the world's finest fisheries, allowing us to specialize in importing premium shrimp that arrives in perfect condition.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-lg text-slate-600 leading-relaxed border-l-4 border-cyan-600 pl-6 italic">
                "To provide an exceptional product that meets the highest international quality standards, ensuring our clients receive nothing but the best."
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px]">
            <img 
              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1000&auto=format&fit=crop" 
              alt="Professional seafood processing" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-8">
              <p className="text-white font-medium text-lg">Committed to excellence in every shipment.</p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16">Why Choose Alheba?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-700">
                  <Shield className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Direct Sourcing</h3>
                <p className="text-slate-600 leading-relaxed">
                  We source directly from trusted fisheries, cutting out unnecessary middlemen to ensure competitive pricing and transparent supply chains.
                </p>
              </div>
            </div>

            <div className="flex items-start p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-700">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Rigorous Quality Control</h3>
                <p className="text-slate-600 leading-relaxed">
                  Our comprehensive quality control processes guarantee that every shipment meets stringent international standards before it reaches your door.
                </p>
              </div>
            </div>

            <div className="flex items-start p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-700">
                  <Leaf className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Commitment to Sustainability</h3>
                <p className="text-slate-600 leading-relaxed">
                  We prioritize responsible fishing practices, including sourcing sustainably wild-caught products from regions like FAO zone 87.
                </p>
              </div>
            </div>

            <div className="flex items-start p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-700">
                  <Users className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">A Dedicated Partner</h3>
                <p className="text-slate-600 leading-relaxed">
                  We are not just a supplier; we are a dedicated partner invested in the success of your business, providing reliable and consistent service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-slate-50 py-16 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Ready to experience the Alheba difference?</h2>
          <Link
            to="/contact"
            className="inline-flex justify-center items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyan-700 hover:bg-cyan-800 transition-colors shadow-md"
          >
            Contact Us Today
          </Link>
        </div>
      </div>
    </div>
  );
}
