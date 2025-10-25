import React from "react";

const MarketsSection = () => {
  const firstRow = [
    {
      id: 1,
      title: "Kia - Festive Celebrations",
      category: "FESTIVE RETAIL",
      description: "Tradition meets innovation.",
      image: "/data-driven-diversity-illustration.jpg",
    },
    {
      id: 2,
      title: "Northstar Bets - Cricket-led campaign",
      category: "SPORTS & GAMING",
      description: "When cricket speaks, bettors listen.",
      image: "/growth-market-illustration.jpg",
    },
    {
      id: 3,
      title: "H&R Block - Taxes for newcomers",
      category: "FINANCIAL SERVICES",
      description: "Confidence at tax time.",
      image: "/multicultural-marketing-illustration.jpg",
    },
    {
      id: 4,
      title: "BCAA - Insurance simplification",
      category: "INSURANCE",
      description: "Protection that understands you.",
      image: "/roi-gap-illustration.jpg",
    },
    {
      id: 5,
      title: "Diwali FMCG Campaign",
      category: "SOUTH ASIAN",
      description:
        "Bright festive lights, family celebrations, sweets, joyful shopping vibes.",
      image: "/fiesta-retail.jpg",
    },
    {
      id: 6,
      title: "Cricket-led Engagement",
      category: "SOUTH ASIAN",
      description:
        "Friends cheering cricket, branded snacks, stadium atmosphere, energetic ad.",
      image: "/ecommerce-localization.jpg",
    },
    {
      id: 7,
      title: "Newcomer Services Ad",
      category: "SOUTH ASIAN",
      description:
        "Warm welcome, diverse families, settlement support, modern professional branding.",
      image: "/celebration-community.jpg",
    },
    {
      id: 8,
      title: "Lunar New Year Promo",
      category: "CHINESE",
      description:
        "Red lanterns, family reunion dinner, lucky symbols, festive shopping.",
      image: "/3495739.jpg",
    },
    {
      id: 9,
      title: "E-commerce Localization Ad",
      category: "CHINESE",
      description:
        "Young shoppers online, Chinese social platforms, trusted branded experience.",
      image: "/soccer-community.jpg",
    },
    {
      id: 10,
      title: "Family & OFW Outreach",
      category: "FILIPINO",
      description:
        "Heartfelt reunion moments, remittances, strong family ties, joy.",
      image: "/nowruz-family.jpg",
    },
    {
      id: 11,
      title: "Celebration & Community Gathering",
      category: "FILIPINO",
      description:
        "Vibrant street parade, music, food stalls, branded local presence.",
      image: "/family-ofw-outreach.jpg",
    },
    {
      id: 12,
      title: "Fiesta Retail Activation",
      category: "HISPANIC",
      description:
        "Colorful decorations, family shopping, fiesta foods, lively retail space.",
      image: "/inclusive-creative-illustration.jpg",
    },
  ];
  const secondRow = [
    {
      id: 13,
      category: "HISPANIC",
      title: "Soccer-led Community Campaign",
      description:
        "Fans cheering soccer, snacks, outdoor screen, energetic community gathering.",
      image: "/data-driven-diversity-illustration.jpg",
    },
    {
      id: 14,
      category: "PERSIAN",
      title: "Nowruz Family Gathering",
      description:
        "Traditional Haft-Seen table, Persian family, festive seasonal celebration.",
      image: "/multicultural-branding-illustration.jpg",
    },
    {
      id: 15,
      category: "PERSIAN",
      title: "Modern Persian Youth Celebration",
      description:
        "Young professionals, stylish apartment, Nowruz décor, joyful friendship vibes.",
      image: "/multicultural-pattern.jpg",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Promotional Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {firstRow.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-lg  overflow-hidden hover:shadow-xl transition-shadow duration-200 group"
            >
              <div className="aspect-[5/7] bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-white"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <img src={card.image} alt={card.title} className="rounded" />
                </div>
              </div>

              <div className="p-4">
                <div className="bg-white/90 rounded text-xs font-medium">
                  {card.category}
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-gray-900 text-red-600 transition-colors duration-200">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Second Grid (3 columns only) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 justify-items-center">
          {secondRow.map((card) => (
            <div
              key={card.id}
              className="bg-white xl:max-w-[288px] rounded-lg overflow-hidden  hover:shadow-xl transition-shadow duration-200 group"
            >
              {/* Image */}
              <div className="aspect-[5/7] bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-white"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <img src={card.image} alt={card.title} className="rounded" />
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="bg-white/90 rounded text-xs font-medium">
                  {card.category}
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-gray-900 text-red-600 transition-colors duration-200">
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

export default MarketsSection;
