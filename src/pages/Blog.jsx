import React from "react";
import { FaArrowRight, FaCalendar, FaUser } from "react-icons/fa";
import Button from "../components/shared/Button";

const blogPosts = [
  {
    id: 1,
    title: "Why Startups Need Professional Website Development",
    excerpt:
      "Learn why a professionally developed website is crucial for startup success and how it differs from DIY solutions.",
    author: "Launch Digital Team",
    date: "December 15, 2024",
    readTime: "5 min read",
    category: "Website Development",
    image: "/src/assets/blog/website-development.jpg",
  },
  {
    id: 2,
    title: "The Hidden Costs of DIY Website Builders",
    excerpt:
      "Discover why 'free' website builders often cost more in the long run and limit your business growth potential.",
    author: "Launch Digital Team",
    date: "December 10, 2024",
    readTime: "4 min read",
    category: "Business Strategy",
    image: "/src/assets/blog/diy-costs.jpg",
  },
  {
    id: 3,
    title: "Branding vs. Logo Design: What Startups Really Need",
    excerpt:
      "Understanding the difference between a logo and a complete brand strategy, and why both matter for startup success.",
    author: "Launch Digital Team",
    date: "December 5, 2024",
    readTime: "6 min read",
    category: "Branding",
    image: "/src/assets/blog/branding.jpg",
  },
  {
    id: 4,
    title: "MVP Development: Building the Right Product for Your Market",
    excerpt:
      "How to develop a Minimum Viable Product that actually validates your business idea and attracts investors.",
    author: "Launch Digital Team",
    date: "November 30, 2024",
    readTime: "7 min read",
    category: "MVP Development",
    image: "/src/assets/blog/mvp-development.jpg",
  },
  {
    id: 5,
    title: "Digital Marketing for Startups: Where to Start",
    excerpt:
      "A beginner's guide to digital marketing strategies that work for startups with limited budgets and resources.",
    author: "Launch Digital Team",
    date: "November 25, 2024",
    readTime: "8 min read",
    category: "Digital Marketing",
    image: "/src/assets/blog/digital-marketing.jpg",
  },
  {
    id: 6,
    title: "The ROI of Professional Web Development",
    excerpt:
      "Real numbers and case studies showing how professional web development pays for itself through increased conversions.",
    author: "Launch Digital Team",
    date: "November 20, 2024",
    readTime: "5 min read",
    category: "Business Strategy",
    image: "/src/assets/blog/roi.jpg",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#214045] to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative">
        {/* Accent dots */}
        <span className="absolute top-20 left-8 w-10 h-10 bg-teal-400 rounded-full opacity-20 z-0"></span>
        <span className="absolute top-40 right-12 w-6 h-6 bg-teal-300 rounded-full opacity-25 z-0"></span>
        <span className="absolute bottom-20 left-1/3 w-8 h-8 bg-teal-200 rounded-full opacity-30 z-0"></span>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Startup Insights & Education
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Learn from our experience helping startups succeed with professional
            digital solutions. Discover why the right approach to web
            development, branding, and marketing matters.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white/90 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                <div className="text-white text-4xl font-bold opacity-20">
                  {post.category.charAt(0)}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="bg-teal-100 text-teal-700 px-2 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaCalendar className="text-xs" />
                    {post.date}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <FaUser className="text-xs" />
                    {post.author}
                  </div>
                  <Button
                    to={`/blog/${post.id}`}
                    variant="ghost"
                    size="sm"
                    className="flex items-center gap-2"
                  >
                    Read More
                    <FaArrowRight className="text-xs" />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 bg-[#1a2a2e] rounded-2xl py-12 px-4 shadow-lg relative">
          {/* Accent dots */}
          <span className="absolute top-8 left-8 w-6 h-6 bg-teal-400 rounded-full opacity-25 z-0"></span>
          <span className="absolute bottom-8 right-8 w-4 h-4 bg-teal-300 rounded-full opacity-30 z-0"></span>
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Apply These Insights?
          </h2>
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
            Let's discuss how professional web development, branding, and
            marketing can transform your startup's digital presence.
          </p>
          <Button to="/contact" size="lg">
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Blog;
