import React from "react";

const CategoryTags = () => (
  <div className="flex space-x-4 mb-12">
    <button className="px-4 py-2 bg-blue-900 text-white rounded-full hover:bg-blue-800">
      All Tags
    </button>
    <button className="px-4 py-2 text-gray-300 hover:bg-gray-800 rounded-full flex items-center">
      <span className="mr-2">📱</span> Product Updates
    </button>
    <button className="px-4 py-2 text-gray-300 hover:bg-gray-800 rounded-full flex items-center">
      <span className="mr-2">💭</span> Reflect Workflows
    </button>
    <button className="px-4 py-2 text-gray-300 hover:bg-gray-800 rounded-full flex items-center">
      <span className="mr-2">🛠</span> Toolshed Interviews
    </button>
    <button className="px-4 py-2 text-gray-300 hover:bg-gray-800 rounded-full flex items-center">
      <span className="mr-2">💡</span> Articles
    </button>
  </div>
);


const BlogList = () => {
  const blogs = [
    {
      title: "How to Organize Your Thoughts",
      description: "Learn how to declutter your mind and stay productive.",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "10 Tips for Better Note-Taking",
      description: "Improve your note-taking skills with these tips.",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "The Power of Journaling",
      description: "Discover how journaling can transform your mindset.",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "How to Organize Your Thoughts",
      description: "Learn how to declutter your mind and stay productive.",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "10 Tips for Better Note-Taking",
      description: "Improve your note-taking skills with these tips.",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "The Power of Journaling",
      description: "Discover how journaling can transform your mindset.",
      image: "https://via.placeholder.com/150",
    }
  ];

  return (
    <section className="bg-[#0a061c] py-10">
      <div className="container mx-auto">
      
      <h1 className="text-5xl font-bold text-white mb-4 text-gray-400">Reflect Blog</h1>
      <p className="text-gray-400 text-xl mb-12 max-w-3xl">
        Learn how to think better by taking notes. Improve your note-taking with AI, learn 
        new workflows, and see how notable founders and builders setup their work 
        environments.
      </p>
      <CategoryTags />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img src={blog.image} alt={blog.title} className="w-full" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                <p className="text-gray-600 mb-4">{blog.description}</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
