import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-primary text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <div className="flex justify-center md:justify-start gap-2 mb-4">
              <img
                src="/assets/logo.png"
                className="w-10 h-10 rounded-full"
                alt="Logo"
              />
              <span className="font-bold text-xl">
                United Muslim Ummah
              </span>
            </div>
            <p className="text-sm opacity-80">
              Promoting unity and welfare among the Muslim community.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gold transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-gold transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-gold transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-gold transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li><strong>Head Office:</strong> 24 Arambag, Gazi Pitha Goli, Motijheel, Dhaka - 1000</li>
              <li><strong>Email:</strong> unityofummah90@gmail.com</li>
              <li><strong>Phone:</strong> +88 01635 438380</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/unityofummahbd" className="hover:text-gold transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="hover:text-gold transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="hover:text-gold transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="hover:text-gold transition-colors">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-sm opacity-50">
            © 2026 United Muslim Ummah. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
