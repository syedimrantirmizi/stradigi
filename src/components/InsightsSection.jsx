import React from "react";
import { BarChart3, Lightbulb, TrendingUp, Radio, PieChart, Users } from "lucide-react"

const InsightsSection = () => {
  const serviceCards = [
  {
    icon: BarChart3,
    title: "Strategy & Planning",
    description: "Data-driven goals and roadmaps for measurable growth",
  },
  {
    icon: Lightbulb,
    title: "Creative Ideation & Production",
    description: "Bold concepts turned into polished, impactful content",
  },
  {
    icon: TrendingUp,
    title: "Media Planning & Buying",
    description: "Optimal channel mix to maximize campaign reach",
  },
  {
    icon: Radio,
    title: "Digital & Social Ad Ops",
    description: "Precision ad delivery, optimization and performance scaling",
  },
  {
    icon: PieChart,
    title: "Research & Analytics",
    description: "Actionable insights powering smarter marketing decisions",
  },
  {
    icon: Users,
    title: "Influencers, Event Management & PR",
    description: "Authentic partnerships, events and reputation-building campaigns",
  },
]

  const articles = [
    {
      id: 1,
      title: "Why your 2025 marketing plan is incomplete without multicultural",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
      image: "/data-driven-diversity-illustration.jpg",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Canada's hidden $37 billion growth market",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting.",
      image: "/growth-market-illustration.jpg",
      readTime: "5 min read",
    },
    {
      id: 3,
      title: "The multicultural ROI gap: stop spending, start converting",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting.",
      image: "/multicultural-marketing-illustration.jpg",
      readTime: "5 min read",
    },
    {
      id: 4,
      title: "Multicultural Branding ka ROI:",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting.",
      image: "/multicultural-branding-illustration.jpg",
      readTime: "5 min read",
    },
    {
      id: 5,
      title: "Inclusive Creative:",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting.",
      image: "/inclusive-creative-illustration.jpg",
      readTime: "5 min read",
    },
    {
      id: 6,
      title: "Data-driven Diversity:",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting.",
      image: "/data-driven-diversity-illustration.jpg",
      readTime: "5 min read",
    },
    {
      id: 7,
      title: "Avoiding Tokenism",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting.",
      image: "/avoiding-tokenism-illustration.jpg",
      readTime: "5 min read",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Service Cards Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              <span className="text-black">
                We don't just do multicultural.
              </span>
              <span className="text-red-600 block">We make you visible.</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We connect brands with diverse audiences through authentic and
              impactful creative solutions. Discover how our expertise can
              elevate your reach and resonance.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCards.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-200 group"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors duration-200">
                    <Icon className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            )})}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <button className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200">
              Work With Us
            </button>
          </div>
        </div>

        {/* Articles Section */}
        <div className="bg-white rounded-lg shadow-2xl p-8">
          <div className=" mb-8">
            <h2 className="md:text-4xl text-xl max-[400px]:flex font-bold text-gray-900 mb-4">
              <div className="inline-block bg-red-600 text-white font-semibold px-6 py-2 rounded-tr-lg rounded-bl-lg transform -skew-x-6 select-none">
                <span className="inline-block transform skew-x-6">Stereotypes</span>
              </div>
              <span className="text-black ml-2 ">Aren't Strategy</span>
            </h2>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {articles.map((article) => (
              <div
                key={article.id}
                className={`bg-white relative rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200 group ${
                  article.id === 1 ? "md:col-span-2" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`${
                    article.id === 1
                      ? "md:aspect-[10/4] aspect-video"
                      : "md:aspect-[8/6.8] aspect-video"
                  } bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 opacity-80"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img src={article.image} alt="" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-200">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {article.description}
                  </p>
                  <a
                    href="#"
                    className="text-red-600 text-sm font-medium absolute bottom-0 hover:text-red-700 transition-colors duration-200"
                  >
                    Thought leadership - {article.readTime}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
