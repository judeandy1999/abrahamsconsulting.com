import { blogPageContent } from "../../src/content/blog";

type ContentMxBlogEmbedProps = {
  className?: string;
};

export function ContentMxBlogEmbed({ className }: ContentMxBlogEmbedProps) {
  const { embed } = blogPageContent;

  return (
    <section className={`blog-embed${className ? ` ${className}` : ""}`} aria-label="Blog">
      <iframe
        className="blog-embed__frame"
        src={embed.src}
        title={embed.title}
        width="100%"
        scrolling="yes"
        loading="lazy"
      />
    </section>
  );
}
