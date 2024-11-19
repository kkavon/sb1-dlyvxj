import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <div id="home" className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1545823812-9ad31c7f163e?q=80&w=2574&auto=format&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>
      
      <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Carry On the{' '}
          <span className="text-emerald-400">Craic</span>
        </h1>
        
        <p className="max-w-2xl text-lg md:text-xl text-gray-300 mb-8">
          The best part of the night isn't always planned—it's discovered in the afters.
          This is where the laughter is louder, the stories are bolder, and the memories last longer.
          Afters is for those who embrace every moment.
        </p>
        
        <a
          href="#products"
          className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold transition duration-300 transform hover:scale-105"
        >
          Discover Our Spirit
        </a>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-8 w-8 text-white opacity-75" />
      </div>
    </div>
  );
}