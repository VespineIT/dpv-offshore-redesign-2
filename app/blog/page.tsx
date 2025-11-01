import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import BlogPostCard from "@/components/BlogPostCard";

// Placeholder data for blog posts
const blogPosts = [
  {
    slug: "navigating-the-future-of-marine-tech",
    title: "Navigating the Future of Marine Tech",
    date: "October 28, 2025",
    excerpt: "Discover how new technology is shaping the future of maritime engineering and logistics...",
    imageUrl: "/placeholder-blog-1.jpg", // Use a placeholder path
  },
  {
    slug: "diving-services-safety-protocols",
    title: "Deep Dive: Our Top Safety Protocols for Diving Services",
    date: "October 22, 2025",
    excerpt: "Safety is our number one priority. Here's a look at the rigorous protocols that protect our teams...",
    imageUrl: "/placeholder-blog-2.jpg",
  },
  {
    slug: "logistics-excellence-on-time-delivery",
    title: "Logistics Excellence: How We Maintain 99.8% On-Time Delivery",
    date: "October 15, 2025",
    excerpt: "It's not just a number, it's a promise. Learn about the systems and people behind our success...",
    imageUrl: "/placeholder-blog-3.jpg",
  },
];

export default function BlogPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />

      {/* Page Header */}
      <AnimatedSection className="w-full bg-brand-dark py-20 md:py-32 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Our Blog</h1>
        <p className="mt-4 text-lg text-gray-300">
          News, insights, and updates from the maritime industry.
        </p>
      </AnimatedSection>

      {/* Blog Grid */}
      <AnimatedSection className="w-full py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogPostCard
                key={post.slug}
                slug={post.slug}
                title={post.title}
                date={post.date}
                excerpt={post.excerpt}
                imageUrl={post.imageUrl}
              />
            ))}
          </div>
        </div>
      </AnimatedSection>
      
      <Footer />
    </main>
  );
}