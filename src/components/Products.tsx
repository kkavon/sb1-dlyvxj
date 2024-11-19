import { ShoppingCart } from 'lucide-react';

export default function Products() {
  return (
    <section id="products" className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Afters Premium Irish Spirit</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Crafted for those magical moments when the night transforms into morning,
            our premium spirit captures the essence of Irish hospitality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
            <img
              src="https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=1587&auto=format&fit=crop"
              alt="Afters Premium Irish Spirit Bottle"
              className="relative rounded-lg w-full transform transition duration-500 hover:scale-105"
            />
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">The Perfect Pour</h3>
              <p className="text-gray-400">
                700ml of pure Irish craftsmanship in our signature Titano bottle.
                Each sip tells a story of tradition meeting modern sophistication.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center">
                  <span className="font-bold">43%</span>
                </div>
                <span className="text-gray-300">ABV</span>
              </div>

              <ul className="space-y-2 text-gray-300">
                <li>• Triple distilled for exceptional smoothness</li>
                <li>• Aged in Irish whiskey casks</li>
                <li>• Notes of vanilla, oak, and subtle spices</li>
              </ul>
            </div>

            <button className="flex items-center space-x-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold transition duration-300 transform hover:scale-105">
              <ShoppingCart className="h-5 w-5" />
              <span>Order Now - €45.00</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}