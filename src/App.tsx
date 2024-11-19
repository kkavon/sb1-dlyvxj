import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Story from './components/Story';

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Story />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}