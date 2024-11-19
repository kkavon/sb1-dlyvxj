export default function Story() {
  const timelineEvents = [
    {
      year: "Traditional",
      title: "The Spirit of Afters",
      description: "In Irish culture, 'afters' has always been about those precious moments after the main event—when guards drop, stories flow, and bonds strengthen."
    },
    {
      year: "Heritage",
      title: "From Pub to Dawn",
      description: "We've captured the essence of those late-night conversations and early morning revelations in every bottle."
    },
    {
      year: "Craft",
      title: "Modern Interpretation",
      description: "Using traditional Irish distilling methods with a modern twist, we've created a spirit that honors the past while embracing the future."
    },
    {
      year: "Legacy",
      title: "Carrying on the Craic",
      description: "More than just a drink, Afters is about creating moments that turn into memories, and strangers that become friends."
    }
  ];

  return (
    <section id="story" className="bg-gradient-to-b from-black to-gray-900 text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">The Story</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Every bottle of Afters carries with it the spirit of Irish hospitality
            and the promise of memories waiting to be made.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-emerald-500/20" />

          <div className="space-y-16">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}
                >
                  <div className="p-6 bg-gray-800/50 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition duration-300">
                    <span className="text-emerald-400 font-semibold">
                      {event.year}
                    </span>
                    <h3 className="text-xl font-bold mt-2 mb-3">{event.title}</h3>
                    <p className="text-gray-400">{event.description}</p>
                  </div>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/50" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}