import React from "react";

const Articles = () => {
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
    <>
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
    </>
  );
};

export default Articles;
