import blog1 from "@/assets/blog-1.png";
import blog2 from "@/assets/blog-2.png";
import blog3 from "@/assets/blog-3.png";

const blogPosts = [
  {
    id: 1,
    image: blog1,
    date: "Mar 09 2024",
    title: "The North Earings Bronze",
    description:
      "Oneself endless holiest society philosophy dept valuation Contradicts gains nobless end lose preju dice battle hope the battle philosophy ...",
  },
  {
    id: 2,
    image: blog2,
    date: "Mar 09 2024",
    title: "The North Earings Bronze",
    description:
      "Oneself endless holiest society philosophy dept valuation Contradicts gains nobless end lose preju dice battle hope the battle philosophy ...",
  },
  {
    id: 3,
    image: blog3,
    date: "Mar 09 2024",
    title: "The North Earings Bronze",
    description:
      "Oneself endless holiest society philosophy dept valuation Contradicts gains nobless end lose preju dice battle hope the battle philosophy ...",
  },
];

const BlogSection = () => {
  return (
    <section className="w-full px-4 md:px-8 lg:px-16 py-16 bg-elvera-cream">
      <div className=" ">
        {/* Section Title */}
        <h2 className="font-playfair text-3xl md:text-4xl text-elvera-brown text-center mb-12">Blogs and Articles</h2>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="group">
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden mb-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Date */}
              <p className="text-sm text-elvera-brown/70 mb-2">{post.date}</p>

              {/* Title */}
              <h3 className="font-playfair text-xl md:text-2xl text-elvera-brown mb-3">{post.title}</h3>

              {/* Description */}
              <p className="text-sm text-elvera-brown/70 mb-4 leading-relaxed">{post.description}</p>

              {/* Continue Reading Link */}
              <a
                href="#"
                className="text-elvera-brown text-sm underline underline-offset-4 hover:text-elvera-brown/80 transition-colors"
              >
                Continue Reading
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
