import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Anchor, Phone, Mail, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';

import Home from '../pages/Home';
import About from '../pages/About';
import Products from '../pages/Products';
import Methods from '../pages/Methods';
import Contact from '../pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Products', path: '/products' },
    { name: 'Processing Methods', path: '/methods' },
    { name: 'Contact & Quotation', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 bg-slate-50">
      <ScrollToTop />
      {/* Top Bar */}
      <div className="bg-slate-900 text-slate-300 py-2 px-4 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="flex items-center"><Phone className="w-4 h-4 mr-2" /> +20 110 217 0000</span>
            <span className="flex items-center"><Mail className="w-4 h-4 mr-2" /> ecc.eg@proton.me</span>
          </div>
          <div>
            <span>Premium Seafood, Sourced Globally, Delivered with Integrity.</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <div className="bg-cyan-700 p-2 rounded-lg">
                  <Anchor className="h-8 w-8 text-white" />
                </div>
                <div>
                  <span className="block text-xl font-bold text-slate-900 leading-tight">ALHEBA</span>
                  <span className="block text-xs font-semibold text-cyan-700 tracking-wider">SEAFOOD IMPORTS</span>
                </div>
              </Link>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`${
                    isActive(link.path)
                      ? 'text-cyan-700 font-semibold'
                      : 'text-slate-600 hover:text-cyan-700'
                  } transition-colors duration-200 text-sm uppercase tracking-wide`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-cyan-700 hover:bg-cyan-800 text-white px-6 py-2.5 rounded-md font-medium transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                Get a Quote
              </Link>
            </nav>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600 hover:text-cyan-700 focus:outline-none"
              >
                {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`${
                    isActive(link.path)
                      ? 'bg-cyan-50 text-cyan-700 border-l-4 border-cyan-700'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-cyan-700 border-l-4 border-transparent'
                  } block px-3 py-3 text-base font-medium transition-colors duration-200`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/methods" element={<Methods />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-1">
              <Link to="/" className="flex items-center space-x-2 mb-4">
                <div className="bg-cyan-700 p-1.5 rounded-lg">
                  <Anchor className="h-6 w-6 text-white" />
                </div>
                <div>
                  <span className="block text-lg font-bold text-white leading-tight">ALHEBA</span>
                  <span className="block text-[10px] font-semibold text-cyan-500 tracking-wider">SEAFOOD IMPORTS</span>
                </div>
              </Link>
              <p className="text-sm text-slate-400 mb-4">
                Your trusted partner for the finest raw and value-added seafood, specializing in premium shrimp that meets the highest international standards.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold uppercase tracking-wider text-sm mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-cyan-400 transition-colors">About Us</Link></li>
                <li><Link to="/products" className="hover:text-cyan-400 transition-colors">Our Products</Link></li>
                <li><Link to="/methods" className="hover:text-cyan-400 transition-colors">Processing Methods</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold uppercase tracking-wider text-sm mb-4">Products</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/products" className="hover:text-cyan-400 transition-colors">HOSO Shrimp</Link></li>
                <li><Link to="/products" className="hover:text-cyan-400 transition-colors">HLSO Shrimp</Link></li>
                <li><Link to="/products" className="hover:text-cyan-400 transition-colors">Wild-Caught Titi Shrimp</Link></li>
                <li><Link to="/products" className="hover:text-cyan-400 transition-colors">Value-Added Products</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold uppercase tracking-wider text-sm mb-4">Contact Us</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <Phone className="w-5 h-5 mr-3 text-cyan-500 shrink-0" />
                  <div>
                    <p>+20 110 217 0000</p>
                    <p>+20 122 357 4027</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Mail className="w-5 h-5 mr-3 text-cyan-500 shrink-0" />
                  <div>
                    <p>ecc.eg@proton.me</p>
                    <p>nouman.mayaleh@outlook.com</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 text-cyan-500 shrink-0" />
                  <p>Global Sourcing, Worldwide Delivery</p>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} Alheba Seafood Imports. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <span className="flex items-center"><span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span> HACCP Certified</span>
              <span className="flex items-center"><span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span> ISO Standards</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
