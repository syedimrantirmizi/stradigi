import React from 'react';

const MediaInnovationSection = () => {
  const communityCards = [
    {
      id: 1,
      title: "Soccer-led Community Campaign",
      category: "HISPANIC",
      description: "Fans cheering soccer, snacks, outdoor screen, energetic community gathering",
      image: "/placeholder.jpg",
      event: "MATCHDAY",
      teams: "Team R vs Team W",
      date: "OCTOBER 21ST GILLETTE STADIUM 7:30 PM",
      sponsor: "Clement Residential"
    },
    {
      id: 2,
      title: "Nowruz Family Gathering",
      category: "PERSIAN",
      description: "Traditional Haft-Seen table, Persian family, festive seasonal celebration",
      image: "/placeholder.jpg",
      event: "NOWRUZ Mubarak",
      subtitle: "A new year, a fresh start, and a celebration of life. But what makes Nowruz so special? Swipe to find out!"
    },
    {
      id: 3,
      title: "Modern Persian Youth Celebration",
      category: "PERSIAN",
      description: "Young professionals, stylish apartment, Nowruz décor, joyful friendship vibes.",
      image: "/placeholder.jpg",
      event: "پویانمایی خرداد",
      subtitle: "Animation Khordad - Modern Persian Cultural Event"
    }
  ];

  return (
    <section className="py-16 bg-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-black">We don't just do multicultural.</span>
            <span className="text-red-600 block">We make you visible.</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We connect brands with diverse audiences through authentic and impactful creative solutions. 
            Discover how our expertise can elevate your reach and resonance.
          </p>
        </div>

        {/* Community Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {communityCards.map((card) => (
            <div key={card.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200 group">
              {/* Image */}
              <div className="aspect-video relative overflow-hidden">
                {card.id === 1 ? (
                  // Soccer card design
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 flex flex-col justify-between p-4">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-white mb-2">{card.event}</h3>
                      <div className="flex items-center justify-center space-x-4 mb-2">
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                          <span className="text-blue-600 font-bold text-sm">R</span>
                        </div>
                        <span className="text-white font-bold">Vs</span>
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                          <span className="text-blue-600 font-bold text-sm">W</span>
                        </div>
                      </div>
                      <p className="text-white text-sm">{card.date}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-white text-xs">
                        <div>Watch on tv</div>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="text-xs">tv</span>
                          <span className="text-xs">MLS Season Pass</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : card.id === 2 ? (
                  // Nowruz card design
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-600 to-amber-800 flex flex-col justify-center items-center p-4">
                    <div className="text-center text-white">
                      <h3 className="text-2xl font-bold mb-2">{card.event}</h3>
                      <p className="text-sm opacity-90">{card.subtitle}</p>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                ) : (
                  // Persian youth celebration card design
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-800 flex flex-col justify-center items-center p-4">
                    <div className="text-center text-white">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{card.event}</h3>
                      <p className="text-sm opacity-90">{card.subtitle}</p>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="text-xs text-gray-500 uppercase tracking-wide mb-2">{card.category}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-200">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaInnovationSection;
