import { Mail, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setEmail('');
    setMessage('');
    setName('');
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <section id="contact" className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-400 mb-8">
              Have questions about Afters? Want to stock our spirit in your establishment?
              We'd love to hear from you.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  required
                />
              </div>

              <button
                type="submit"
                className="flex items-center space-x-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
              >
                <Mail className="h-5 w-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-4">Newsletter</h2>
            <p className="text-gray-400 mb-8">
              Subscribe to our newsletter for exclusive updates, special offers,
              and stories from the world of Afters.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-6">
              <div>
                <label htmlFor="subscribe-email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <div className="flex space-x-4">
                  <input
                    type="email"
                    id="subscribe-email"
                    className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Enter your email"
                    required
                  />
                  <button
                    type="submit"
                    className="flex items-center space-x-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
                  >
                    <Send className="h-5 w-5" />
                    <span>Subscribe</span>
                  </button>
                </div>
              </div>
              {subscribed && (
                <p className="text-emerald-400 text-sm">
                  Thanks for subscribing! We'll be in touch soon.
                </p>
              )}
            </form>

            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-4">Find Us</h3>
              <div className="space-y-4 text-gray-400">
                <p>Dublin, Ireland</p>
                <p>info@afters.ie</p>
                <p>+353 (0) 1 234 5678</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}