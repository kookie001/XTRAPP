import React from "react";

const Sections = () => {
  return (
    <div className="bg-[#e6ccd0] min-h-[80vh] flex items-center justify-center">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-9 p-8 max-w-5xl">
        {/* Card 1 */}
        <div className="bg-white rounded-3xl shadow-lg p-6 h-[30vh]">
          <h3 className="text-2xl font-semibold text-pink-800">Credibility</h3>
          <p className="text-gray-600 mt-2 text-lg">Raise the bar with testimonials</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-3xl shadow-lg p-6 w-[25vw]">
          <h3 className="text-2xl font-semibold text-pink-800">Customisation</h3>
          <p className="text-gray-600 mt-2 text-lg">
            Curate your best collaboration reels in your portfolio
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-3xl shadow-lg p-6 w-[15vw] ml-[5rem]">
          <h3 className="text-2xl font-semibold text-pink-800">Credibility</h3>
          <p className="text-gray-600 mt-2 text-lg">Raise the bar with testimonials</p>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-3xl shadow-lg p-6 h-[50vh]">
          <h3 className="text-2xl font-semibold text-pink-800">Privacy</h3>
          <p className="text-gray-600 mt-2 text-lg">
            Protected Insights that only brands can see
          </p>
        </div>

        {/* Showcase Logos */}
        <div className="bg-white rounded-3xl shadow-lg p-6 col-span-2 overflow-hidden">
      <h3 className="text-2xl font-semibold text-pink-800">Showcase Logos</h3>
      <p className="text-gray-600 mt-2 text-lg">
        Flex your brands that you have <br /> collaborated before
      </p>
      <div className="h-[20vh]">
     <img src="/public/assets/demo.png" alt="" className="h-[52vh] ml-44 mt-[-7rem]"/>
     </div>
    </div>
      </div>
    </div>
  );
};

export default Sections;
