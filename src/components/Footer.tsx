import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-emerald-400 transition duration-300">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-emerald-400 transition duration-300">About</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-emerald-400 transition duration-300">Products</a></li>
              <li><a href="#story" className="text-gray-400 hover:text-emerald-400 transition duration-300">The Story</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-emerald-400 transition duration-300">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition duration-300">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition duration-300">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition duration-300">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition duration-300">Shipping Info</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Dublin, Ireland</li>
              <li className="text-gray-400">info@afters.ie</li>
              <li className="text-gray-400">+353 (0) 1 234 5678</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-400 transition duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-400 transition duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-400 transition duration-300"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {currentYear} Afters. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Please drink responsibly. Must be 18 or older to purchase.
          </p>
        </div>
      </div>
    </footer>
  );
}