import React from "react";

const features = [
  {
    icon: "📊",
    title: "Live Analytics",
    description: "No more manually updating media kits every time... arrgh!",
  },
  {
    icon: "🔔",
    title: "Boycott Clutter",
    description: "Get notified on your WhatsApp when a brand sends a request!",
  },
  {
    icon: "🔗",
    title: "Link in Bio",
    description: "Impress brand visitors with your elegant portfolio website!",
  },
];

const Features = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-6 p-8 bg-gray-50 mt-8 cursor-pointer">
      {features.map((feature, index) => (
        <div
          key={index}
          className="relative flex flex-col items-start p-6 rounded-lg shadow-md w-[30vw] h-[30vh] md:w-1/3 text-white transition-transform duration-300 ease-out hover:scale-105"
        >
          {/* Animated Border */}
          <div className="absolute inset-0 rounded-lg border-4 border-transparent p-[2px] animate-running-border">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 rounded-lg"></div>
          </div>
          {/* Card Content */}
          <div className="relative z-10 bg-gradient-to-r from-pink-300 to-blue-300 rounded-lg p-6 w-full h-full flex flex-col justify-start items-start">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white bg-opacity-20 text-2xl mb-4">
             <a href=""> {feature.icon} </a>
            </div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;
