import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Button } from "../common/Button";

export default function BlogPostsSection() {
  const [blogPosts] = useState([
    {
      id: 1,
      title: "Top tips for effective home tutoring",
      description: "Share practical advice on how students can make the most out of tutoring sessions.",
      image: "/assets/blog-1.png",
    },
    {
      id: 2,
      title: "Building a productive study environment",
      description: "Share practical advice on how students can make the most out of tutoring sessions.",
      image: "/assets/blog-2.png",
    },
    {
      id: 3,
      title: "5 Skills every great tutor should have",
      description: "Outline essential skills for tutors, such as patience, adaptability, subject knowledge.",
      image: "/assets/blog-3.png",
    },
    {
      id: 4,
      title: "Getting the best individual tuition",
      description: "Share practical advice on how students can make the most out of tutoring sessions.",
      image: "/assets/blog-4.png",
    },
  ]);

  return (
    <div className="py-14 px-4 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-normal md:text-3xl md:font-normal text-[#655945]">
          Our Latest <span className="text-[#655945]  font-bold font-bricolage ">Blog Posts</span>
        </h2>
       <Button/>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {blogPosts.map((post) => (
          <div key={post.id} className="flex flex-col">
            <div className="rounded-lg overflow-hidden mb-3">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
            </div>
            <h3 className="font-medium text-gray-800 mb-2">{post.title}</h3>
            <p className="text-[#655945] text-sm">{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}