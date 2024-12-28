import { Heading } from "lucide-react";
import React from "react";

const SubscriptionBanner = () => (
  <div className=" max-w-2xl mx-auto text-center mb-12 ">
    <h1 className="text-5xl font-bold text-white mb-4">Changelog</h1>
    <p className="text-gray-300 text-lg mb-8">New updates and improvements to Reflect.</p>
    <div className="flex gap-4 justify-center">
      <input
        type="email"
        placeholder="you@email.com"
        className="bg-gray-800 text-white px-4 py-2 rounded-lg w-64 border border-gray-700"
      />
      <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700">
        Subscribe
      </button>
    </div>
  </div>
);

const UpdateCard = ({ date, title, description, image, isLocked }) => (
  <div className="mb-16">
    <div className="text-gray-400 mb-4">{date}</div>
    <div className="flex items-center gap-2 mb-4">
      {isLocked && <Lock className="text-yellow-500 w-5 h-5" />}
      <h2 className="text-white text-2xl font-semibold">{title}</h2>
    </div>
    <p className="text-gray-300 mb-6">{description}</p>
    {image && (
      <div className="rounded-2xl overflow-hidden bg-gray-800 p-6">
        <img src={image} alt="Update preview" className="w-full rounded-lg" />
      </div>
    )}
  </div>
);

const Changelog = () => {
  const updates = [
    {
      version: "v2.3.1",
      date: "December 10, 2024",
      description: "Added new analytics dashboard and improved performance.",
      image: "/api/placeholder/800/400"
    },
    {
      version: "v2.2.5",
      date: "November 20, 2024",
      description: "Fixed bugs in the note-syncing feature.",
      image: "/api/placeholder/800/400"
    },
    {
      version: "v2.2.0",
      date: "October 15, 2024",
      Heading: "image and pdf ocr text",
      description: "Reflect now has OCR that extracts text from images and PDFs. We’ve also improved how image resizing and uploading works OCR (“Optical Character Recognition”) extracts text from images. In Reflect, this means that the text contained in images and PDFs now shows up in the search results.For example, you can take a photo of a receipt and save it to your daily note. If you search for that charge later, it will show up in the search results. This makes it easier to find information in your notes, even if it’s in an image or PDF",
      Heading: "image and pdf ocr text",
      image: "/api/placeholder/800/400"
    },
    {
      version: "v2.3.1",
      date: "December 10, 2024",
      description: "Added new analytics dashboard and improved performance.",
      image: "/api/placeholder/800/400"
    },
    {
      version: "v2.2.5",
      date: "November 20, 2024",
      description: "Fixed bugs in the note-syncing feature.",
      image: "/api/placeholder/800/400"
    },
    {
      version: "v2.2.0",
      date: "October 15, 2024",
      description: "Introduced dark mode and enhanced UI responsiveness.",
      image: "/api/placeholder/800/400"
    }
  ];

  return (
    
    <section className="bg-[#0a061c] py-10">
      <div className="flex flex-1 flex-col items-center justify-center pb-20 sm:items-start sm:justify-end">
      
      <SubscriptionBanner />
      <div className="space-y-12">
          {updates.map((update, index) => (
            <UpdateCard key={index} {...update} />
          ))}
          </div>
        
        <div className="space-y-6">
          {updates.map((update, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 border-l-4 border-blue-500"
            >
              <h1 className="text-2xl font-bold text-blue-500">{update.Heading}</h1>
              <h3 className="text-xl font-bold">{update.version}</h3>
              <p className="text-gray-600">{update.date}</p>
              <p className="mt-2 text-gray-700">{update.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
   
  );
};

export default Changelog;
