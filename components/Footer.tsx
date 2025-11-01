import Link from 'next/link';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; // New X icon

const Footer = () => {
  return (
    <footer className="w-full bg-brand-dark text-gray-300 pt-16 pb-8" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Brand */}
          <div>
            <Link href="/" className="text-2xl font-bold text-white">
              DPV Offshore
            </Link>
            <p className="mt-2 text-gray-400">
              Your partner at sea for integrated marine solutions.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="#about" className="hover:text-brand-orange">About Us</Link></li>
              <li><Link href="/" className="hover:text-brand-orange">Home</Link></li>
              <li><Link href="#blog" className="hover:text-brand-orange">Blogs</Link></li>
              <li><Link href="#contact" className="hover:text-brand-orange">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="text-lg font-semibold text-white">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="#" className="hover:text-brand-orange">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-brand-orange">Terms & Conditions</Link></li>
              <li><Link href="#" className="hover:text-brand-orange">Careers</Link></li>
              <li><Link href="#" className="hover:text-brand-orange">FAQs</Link></li>
            </ul>
          </div>

          {/* Column 4: Follow Us */}
          <div>
            <h3 className="text-lg font-semibold text-white">Follow Us</h3>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="hover:text-brand-orange"><FaInstagram size={24} /></a>
              <a href="#" className="hover:text-brand-orange"><FaFacebookF size={24} /></a>
              <a href="#" className="hover:text-brand-orange"><FaXTwitter size={24} /></a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} DPV Offshore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;