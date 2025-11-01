import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

// This is a dynamic page. In a real app, you'd fetch this data based on the `slug`
async function getPostData(slug: string) {
  // Placeholder data
  return {
    title: "Navigating the Future of Marine Tech",
    date: "October 28, 2025",
    author: "Jane Doe",
    imageUrl: "/placeholder-blog-1.jpg",
    content: `
      <p>This is a placeholder for your blog post content. In a real Next.js app, you would fetch this content from a CMS or a local markdown file based on the <strong>${slug}</strong> parameter.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.</p>
      <h2 class="text-2xl font-bold mt-8 mb-4">A Deeper Look</h2>
      <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa.</p>
      <ul class="list-disc list-inside my-6 space-y-2">
        <li>Advanced navigation systems.</li>
        <li>AI-powered predictive maintenance.</li>
        <li>Sustainable fuel alternatives.</li>
        <li>Automated robotics in ship repair.</li>
      </ul>
      <p>Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.</p>
    `,
  };
}


export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostData(params.slug);

  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />

      <AnimatedSection className="w-full bg-brand-dark py-20 md:py-32 text-white text-center">
        <h1 className="text-3xl md:text-4xl font-bold max-w-3xl mx-auto">{post.title}</h1>
        <p className="mt-4 text-lg text-gray-300">
          Posted on {post.date} by {post.author}
        </p>
      </AnimatedSection>

      <article className="w-full py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Post Image Placeholder */}
            <div className="w-full h-64 md:h-96 bg-gray-300 rounded-lg mb-12 flex items-center justify-center">
              <span className="text-gray-500">Blog Post Image (900x500)</span>
            </div>

            {/* Post Content */}
            <div
              className="prose lg:prose-lg max-w-none text-brand-dark"
              // We use dangerouslySetInnerHTML to render the sample HTML content
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}