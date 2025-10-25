import React from "react";
import { BarChart3, Lightbulb, TrendingUp, Radio, PieChart, Users } from "lucide-react"

const ServiceCard = () => {
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
      description:
        "Precision ad delivery, optimization and performance scaling",
    },
    {
      icon: PieChart,
      title: "Research & Analytics",
      description: "Actionable insights powering smarter marketing decisions",
    },
    {
      icon: Users,
      title: "Influencers, Event Management & PR",
      description:
        "Authentic partnerships, events and reputation-building campaigns",
    },
  ];
  return (
    <>
      {serviceCards.map((service, index) => {
        const Icon = service.icon;
        return (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-200 group"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-lg border-2 border-red-200 group-hover:border-red-300 flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors duration-200">
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
        );
      })}
    </>
  );
};
export default ServiceCard;
