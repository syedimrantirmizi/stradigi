import React, { useState, useRef, useEffect } from "react";

const WorkSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4);
  const scrollContainerRef = useRef(null);

  const caseStudies = [
    {
      id: 1,
      title: "Multicultural Ads",
      description:
        "South Asian, Chinese, Filipino, Hispanic, Persian campaigns",
      image: "/multicultural-branding-illustration.jpg",
      category: "KIA",
    },
    {
      id: 2,
      title: "Brand Awareness",
      description: "Big ideas that connect across communities",
      image: "/data-driven-diversity-illustration.jpg",
      category: "Big Ideas",
    },
    {
      id: 3,
      title: "Video Advertising",
      description: "High-impact commercials & digital video ads",
      image: "/inclusive-creative-illustration.jpg",
      category: "KIA",
    },
    {
      id: 4,
      title: "Product Launches",
      description: "Campaigns that drive first impressions & conversions",
      image: "/roi-gap-illustration.jpg",
      category: "KIA",
    },
    {
      id: 5,
      title: "Social Media Campaigns",
      description: "Engaging content that drives community interaction",
      image: "/soccer-community.jpg",
      category: "Social",
    },
    {
      id: 6,
      title: "Digital Marketing",
      description: "Data-driven strategies for online success",
      image: "/multicultural-pattern.jpg",
      category: "Digital",
    },
    {
      id: 7,
      title: "Brand Partnerships",
      description: "Strategic collaborations that amplify reach",
      image: "/ecommerce-localization.jpg",
      category: "Partnerships",
    },
    {
      id: 8,
      title: "Content Creation",
      description: "Compelling stories that resonate with audiences",
      image: "/3495739.jpg",
      category: "Content",
    },
  ];

  const maxIndex = Math.max(0, caseStudies.length - cardsPerView + 1);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(4);
      }
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const scrollToIndex = (index) => {
    if (scrollContainerRef.current) {
      const cardWidth = 320; // w-80 = 320px
      const scrollPosition = index * cardWidth;
      scrollContainerRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  };

  const handlePrevious = () => {
    const newIndex = Math.max(0, currentIndex - 1);
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = Math.min(maxIndex, currentIndex + 1);
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  return (
    <section className="py-16 bg-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 w-full flex justify-between items-center">
          <h2 className="text-sm sm:text-5xl font-bold text-gray-900  flex items-center ">
            <span className="text-black">GENERIC ADS TALK.</span>
            <span className="text-red-600 block">OURS CONNECT.</span>
          </h2>
          <button className="bg-white text-sm sm:text-base  text-black px-3 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200">
            See All Case Studies
          </button>
        </div>

        {/* Main Video Player */}
        <div className="mb-12 p-5 shadow-2xl">
          <div className="relative bg-gray-900 rounded-lg overflow-hidden shadow-2xl max-w-7xl mx-auto">
            <div className="aspect-video relative">
              <img
                className="absolute inset-0 w-full h-full object-cover z-10"
                src="/data-driven-diversity-illustration.jpg"
                alt="Data driven diversity"
              />

              {!isVideoPlaying ? (
                <button
                  onClick={() => setIsVideoPlaying(true)}
                  className="absolute inset-0 z-30 flex items-center justify-center bg-black/30 hover:bg-black/25 transition-colors duration-150 focus:outline-none"
                  aria-label="Play video"
                >
                  <div className="text-center pointer-events-none">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <p className="text-white text-lg">Click to play video</p>
                  </div>
                </button>
              ) : (
                <div className="absolute inset-0 bg-gray-800 flex items-center justify-center z-30">
                  <p className="text-white">Video Player Placeholder</p>
                </div>
              )}
            </div>
          </div>
          {/* Case Study Cards */}
          <div className="relative mt-10">
            <div
              ref={scrollContainerRef}
              className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide "
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {caseStudies.map((study, index) => (
                <div
                  key={study.id}
                  className={`flex-shrink-0 w-80 bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-200 ${
                    index >= currentIndex && index < currentIndex + cardsPerView
                      ? "opacity-100 scale-100"
                      : "opacity-60 scale-95"
                  }`}
                >
                  <div className="aspect-video bg-gray-200 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center overflow-hidden">
                        <img className="w-full h-full object-cover" src={study.image} alt={study.title} />
                      </div>
                  </div>
                  <div className="p-6">
                    <div className="  bg-white px-2 py-1 rounded text-xs font-medium">
                      {study.category}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {study.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{study.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className={`absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 ${
                currentIndex === 0
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:scale-110"
              }`}
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              className={`absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 ${
                currentIndex >= maxIndex
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:scale-110"
              }`}
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: maxIndex + 1 }, (_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  scrollToIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? "bg-red-600 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
