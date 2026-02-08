import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { BiSolidLogInCircle } from "react-icons/bi";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Events', path: '/events' },
    { label: 'News Portal', path: '/news' },
    { label: 'Gallery', path: '/gallery' },
  ];

  const handleAdminClick = () => {
    navigate('/login');
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-primary shadow-lg">
      <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 cursor-pointer hover:opacity-90 transition"
        >
          <img
            src="./assets/logo.png"
            alt="UMU Logo"
            className="w-10 h-10 rounded-full border-2 border-gold object-cover"
            onError={(e) =>
              (e.target.src = 'https://placehold.co/40x40?text=UMU')
            }
          />
          <div className="flex flex-col leading-none">
            <span className="font-black text-white text-lg tracking-wide">
              United Muslim Ummah
            </span>
            <span className="text-[10px] font-bold text-gold uppercase tracking-wider">
              Global Islamic Community
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-white text-sm font-semibold hover:text-gold transition-colors ${
                location.pathname === link.path ? 'text-gold border-b-2 border-gold' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Admin & Join Buttons */}
        <div className="hidden md:flex items-center gap-3">
          
          <button className="bg-gold text-primary-dark rounded-full font-bold text-sm transition-all shadow-md transform hover:-translate-y-0.5">
              <Link
              to="/login"
              className="flex items-center gap-3 text-white text-sm font-semibold hover:bg-white hover:text-[#B28926] transition-colors border border-gold px-4 py-2 rounded-full"
            >
              <BiSolidLogInCircle /> Login
            </Link>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          id="hamburger"
          className="md:hidden text-white text-2xl focus:outline-none p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="flex-col flex absolute top-20 left-0 w-full bg-primary border-t border-primary-dark shadow-xl md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`p-4 text-white font-semibold border-b border-primary-dark hover:bg-primary-dark ${
                location.pathname === link.path ? 'bg-primary-dark text-gold' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={handleAdminClick}
            className="p-4 text-white font-semibold border-b border-primary-dark hover:bg-primary-dark text-left"
          >
            Admin Portal
          </button>
          <div className="p-4">
            <button className="w-full bg-gold text-primary-dark px-6 py-3 rounded font-bold hover:bg-white transition-all">
              Join Community
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
