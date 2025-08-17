import React from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import data from "../../data";

const BlogArticle = () => {
  const { slug } = useParams();
  const article = data.blog?.[slug];

  if (!article) return <Navigate to="/blog" />;

  const relatedArticles = Object.values(data.blog || {})
    .filter((a) => a.slug !== slug)
    .slice(0, 6);

  return (
    <>
      <main className="bg-accent bg-texture text-secondary pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-serif uppercase tracking-wide mb-10 text-secondary">
            {article.title}
          </h1>

          {/* Featured Image */}
          <div className="w-full aspect-[809/432] mb-10 rounded shadow overflow-hidden">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover grayscale"
            />
          </div>

          {/* Body Content */}
          <div
            className="prose prose-invert max-w-none text-textPrimary prose-h2:text-secondary prose-h2:text-lg md:prose-h2:text-xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-2 prose-p:text-base prose-p:leading-relaxed"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="mt-24">
            <h2 className="text-2xl md:text-3xl font-serif uppercase text-center mb-8 text-secondary">
              More Articles
            </h2>

            <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto px-4">
              {relatedArticles.map((item, idx) => (
                <Link
                  to={`/blog/${item.slug}`}
                  key={idx}
                  className="w-[320px] bg-secondary text-white border border-white/20 rounded shadow hover:shadow-lg transition flex flex-col overflow-hidden"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover grayscale"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-serif text-base md:text-lg uppercase tracking-wide">
                      {item.title}
                    </h3>
                    {item.excerpt && (
                      <p className="text-sm text-white/70 mt-2">
                        {item.excerpt}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Bottom Divider */}
      <div className="h-[2px] w-full bg-secondary" />
    </>
  );
};

export default BlogArticle;
