import React from "react";
import 'tailwindcss/tailwind.css'; // Make sure to import your tailwind styles

const tags = [
 
  { label: "Lifestyle", icon: "🧘‍♂️", bgColor: "bg-rose-100", textColor: "text-rose-500" },
  { label: "Food & Beverages", icon: "🍆", bgColor: "bg-purple-100", textColor: "text-purple-500" },
  { label: "Travel", icon: "✈️", bgColor: "bg-green-100", textColor: "text-green-600" },
  { label: "Fitness", icon: "🏋️‍♀️", bgColor: "bg-orange-100", textColor: "text-orange-500" },
  { label: "Art & Design", icon: "🎨", bgColor: "bg-yellow-100", textColor: "text-yellow-500" },
  { label: "Fashion", icon: "👗", bgColor: "bg-pink-100", textColor: "text-pink-500" },
  { label: "Gaming", icon: "🎮", bgColor: "bg-gray-100", textColor: "text-gray-500" },
  { label: "Cooking", icon: "🍳", bgColor: "bg-orange-200", textColor: "text-orange-700" },
  { label: "Tech & Gadgets", icon: "🖥️", bgColor: "bg-gray-200", textColor: "text-gray-700" },
  { label: "Photography & Videography", icon: "📸", bgColor: "bg-yellow-200", textColor: "text-yellow-600" },
  { label: "Entertainment", icon: "🎭", bgColor: "bg-blue-200", textColor: "text-blue-700" },
  { label: "Business", icon: "💼", bgColor: "bg-purple-200", textColor: "text-purple-700" },
  { label: "Music", icon: "🎵", bgColor: "bg-green-200", textColor: "text-green-700" },
  { label: "Health", icon: "🍎", bgColor: "bg-red-200", textColor: "text-red-700" },
  { label: "Beauty & Skincare", icon: "💎", bgColor: "bg-blue-100", textColor: "text-blue-600" },
];

const Tag = () => {
  return (
    <div className="p-6 bg-white mt-[-15rem] ml-8 overflow-hidden">
      <div className="flex gap-4 animate-slideLeftToRight w-full">
        {tags.map((tag) => (
          <a href="#" key={tag.label}>
            <div
              className={`flex items-center px-4 py-2 rounded-full ${tag.bgColor} ${tag.textColor} text-sm font-medium shadow-sm w-[11rem] text-center`}
            >
              <span className="mr-2">{tag.icon}</span>
              <span>{tag.label}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Tag;
