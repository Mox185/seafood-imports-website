import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export default function Contact() {
  const location = useLocation();
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    countryCity: '',
    products: [] as string[],
    quantity: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Pre-select product if coming from a product page
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const productParam = params.get('product');
    if (productParam) {
      const productMap: Record<string, string> = {
        'hoso': 'HOSO (Head-On, Shell-On)',
        'hlso': 'HLSO (Headless, Shell-On)',
        'titi': 'Wild Titi Shrimp',
        'value-added': 'Value-Added (Raw, Cooked, etc.)'
      };
      if (productMap[productParam]) {
        setFormData(prev => ({ ...prev, products: [productMap[productParam]] }));
      }
    }
  }, [location]);

  const handleProductChange = (product: string) => {
    setFormData(prev => {
      const currentProducts = [...prev.products];
      if (currentProducts.includes(product)) {
        return { ...prev, products: currentProducts.filter(p => p !== product) };
      } else {
        return { ...prev, products: [...currentProducts, product] };
      }
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call to backend or Formspree
    // In a real application, you would send this data to your server or a service like Formspree
    // Example: await fetch('https://formspree.io/f/your_form_id', { method: 'POST', body: JSON.stringify(formData) })
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        fullName: '',
        companyName: '',
        email: '',
        phone: '',
        countryCity: '',
        products: [],
        quantity: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-slate-900 py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1516961642265-531546e84af2?q=80&w=2000&auto=format&fit=crop"
            alt="Business handshake"
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Request a Quotation</h1>
          <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
            Partner with Alheba Seafood Imports. Fill out the form below to receive a competitive quote.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          
          {/* Contact Info (Left Column) */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-700 mr-4 flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Phone</h3>
                    <p className="text-slate-900 font-medium">+20 110 217 0000</p>
                    <p className="text-slate-900 font-medium">+20 122 357 4027</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-700 mr-4 flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Email</h3>
                    <p className="text-slate-900 font-medium">ecc.eg@proton.me</p>
                    <p className="text-slate-900 font-medium">nouman.mayaleh@outlook.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-700 mr-4 flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Business Hours</h3>
                    <p className="text-slate-900 font-medium">Sunday - Thursday</p>
                    <p className="text-slate-600 text-sm">9:00 AM - 5:00 PM (GMT+2)</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-700 mr-4 flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Global Reach</h3>
                    <p className="text-slate-900 font-medium">Sourcing from FAO Zone 87</p>
                    <p className="text-slate-600 text-sm">Delivering Worldwide</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-cyan-900 p-8 rounded-3xl text-white shadow-lg">
              <h3 className="text-xl font-bold mb-4">Why Request a Quote?</h3>
              <ul className="space-y-3 text-cyan-100 text-sm">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-cyan-400" /> Competitive wholesale pricing</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-cyan-400" /> Guaranteed quality standards</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-cyan-400" /> Reliable supply chain</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-cyan-400" /> Dedicated account management</li>
              </ul>
            </div>
          </div>

          {/* Quotation Form (Right Column) */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100">
              {isSuccess ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">Request Sent Successfully!</h2>
                  <p className="text-lg text-slate-600 mb-8 max-w-md mx-auto">
                    Thank you for your inquiry. A member of our team will get back to you within 24 hours with a detailed quotation.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-cyan-700 bg-cyan-50 hover:bg-cyan-100 transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-semibold text-slate-700 mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors outline-none"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Company Name */}
                    <div>
                      <label htmlFor="companyName" className="block text-sm font-semibold text-slate-700 mb-2">
                        Company Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        required
                        value={formData.companyName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors outline-none"
                        placeholder="Oceanic Foods Ltd."
                      />
                    </div>

                    {/* Email Address */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors outline-none"
                        placeholder="john@example.com"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors outline-none"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>

                    {/* Country / City */}
                    <div className="md:col-span-2">
                      <label htmlFor="countryCity" className="block text-sm font-semibold text-slate-700 mb-2">
                        Country / City <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="countryCity"
                        name="countryCity"
                        required
                        value={formData.countryCity}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors outline-none"
                        placeholder="e.g., London, United Kingdom"
                      />
                    </div>
                  </div>

                  {/* Products of Interest */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-3">
                      Product(s) of Interest <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        'HOSO (Head-On, Shell-On)',
                        'HLSO (Headless, Shell-On)',
                        'Wild Titi Shrimp',
                        'Value-Added (Raw, Cooked, etc.)'
                      ].map((product) => (
                        <label key={product} className="flex items-center p-3 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50 transition-colors">
                          <input
                            type="checkbox"
                            className="w-5 h-5 text-cyan-600 border-slate-300 rounded focus:ring-cyan-500"
                            checked={formData.products.includes(product)}
                            onChange={() => handleProductChange(product)}
                          />
                          <span className="ml-3 text-slate-700 text-sm">{product}</span>
                        </label>
                      ))}
                    </div>
                    {formData.products.length === 0 && (
                      <p className="text-xs text-slate-500 mt-2">Please select at least one product.</p>
                    )}
                  </div>

                  {/* Estimated Quantity */}
                  <div>
                    <label htmlFor="quantity" className="block text-sm font-semibold text-slate-700 mb-2">
                      Estimated Quantity (kg/lbs)
                    </label>
                    <select
                      id="quantity"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors outline-none bg-white"
                    >
                      <option value="">Select estimated quantity...</option>
                      <option value="Less than 1,000 kg">Less than 1,000 kg</option>
                      <option value="1,000 - 5,000 kg">1,000 - 5,000 kg</option>
                      <option value="5,000 - 10,000 kg">5,000 - 10,000 kg</option>
                      <option value="10,000+ kg (Full Container Load)">10,000+ kg (Full Container Load)</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                      Message / Specific Requirements
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors outline-none resize-y"
                      placeholder="Please provide any specific sizing, packaging, or delivery requirements..."
                    ></textarea>
                  </div>

                  {/* File Upload */}
                  <div>
                    <label htmlFor="fileUpload" className="block text-sm font-semibold text-slate-700 mb-2">
                      Upload Specification Sheet or Company Profile (Optional)
                    </label>
                    <input
                      type="file"
                      id="fileUpload"
                      name="fileUpload"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors outline-none bg-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-cyan-50 file:text-cyan-700 hover:file:bg-cyan-100"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting || formData.products.length === 0}
                    className="w-full flex justify-center items-center px-8 py-4 border border-transparent text-lg font-bold rounded-md text-white bg-cyan-700 hover:bg-cyan-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-colors shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending Request...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        Send Quotation Request
                        <Send className="ml-2 w-5 h-5" />
                      </span>
                    )}
                  </button>
                  <p className="text-xs text-center text-slate-500 mt-4">
                    Your information is secure. We will never share your details with third parties.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
