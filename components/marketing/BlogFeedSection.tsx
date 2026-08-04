"use client";

import { useDeferredValue, useEffect, useId, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { blogPageContent } from "../../src/content/blog";
import type { BlogPost } from "../../lib/blog/types";
import { accessibleExternalLinkLabel } from "../../lib/accessibility/accessible-external-label";

type BlogFeedSectionProps = {
  posts: BlogPost[];
  feedError?: string | null;
};

const PAGE_SIZE = blogPageContent.pageSize;

function matchesQuery(post: BlogPost, query: string): boolean {
  if (!query) {
    return true;
  }

  const haystack = [post.title, post.description, post.author ?? ""].join(" ").toLowerCase();
  return haystack.includes(query);
}

export function BlogFeedSection({ posts, feedError = null }: BlogFeedSectionProps) {
  const searchId = useId();
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const deferredQuery = useDeferredValue(query.trim().toLowerCase());

  const filteredPosts = useMemo(
    () => posts.filter((post) => matchesQuery(post, deferredQuery)),
    [posts, deferredQuery]
  );

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / PAGE_SIZE));

  useEffect(() => {
    setPage(1);
  }, [deferredQuery]);

  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages);
    }
  }, [page, totalPages]);

  const pagePosts = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filteredPosts.slice(start, start + PAGE_SIZE);
  }, [filteredPosts, page]);

  const rangeStart = filteredPosts.length === 0 ? 0 : (page - 1) * PAGE_SIZE + 1;
  const rangeEnd = Math.min(page * PAGE_SIZE, filteredPosts.length);

  function goToPage(nextPage: number) {
    setPage(Math.min(totalPages, Math.max(1, nextPage)));
    document.getElementById("blog-feed")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <section id="blog-feed" className="blog-feed" aria-label="Blog posts">
      <div className="blog-feed__inner">
        <h1 className="blog-feed__sr-only">Blog</h1>

        <div className="blog-feed__search">
          <label htmlFor={searchId} className="blog-feed__search-label">
            Search blog posts
          </label>
          <div className="blog-feed__search-field">
            <Search className="blog-feed__search-icon" size={18} strokeWidth={1.75} aria-hidden="true" />
            <input
              id={searchId}
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={blogPageContent.searchPlaceholder}
              className="blog-feed__search-input"
              autoComplete="off"
              spellCheck={false}
            />
          </div>
        </div>

        {feedError ? (
          <p className="blog-feed__status blog-feed__status--error" role="alert">
            {blogPageContent.feedErrorMessage}
          </p>
        ) : null}

        {!feedError && filteredPosts.length === 0 ? (
          <p className="blog-feed__status">{blogPageContent.emptyMessage}</p>
        ) : null}

        {!feedError && pagePosts.length > 0 ? (
          <>
            <ul className="blog-feed__list">
              {pagePosts.map((post) => (
                <li key={post.id} className="blog-feed__item">
                  <a
                    href={post.link}
                    className="blog-feed__post"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={accessibleExternalLinkLabel(post.title)}
                  >
                    <span className="blog-feed__media">
                      {post.imageUrl ? (
                        // External CMS thumbnails use varying rackcdn hosts
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={post.imageUrl} alt="" className="blog-feed__image" loading="lazy" />
                      ) : (
                        <span className="blog-feed__image-fallback" aria-hidden="true" />
                      )}
                    </span>
                    <span className="blog-feed__body">
                      {post.publishedLabel ? (
                        <time className="blog-feed__date" dateTime={post.publishedAt ?? undefined}>
                          {post.publishedLabel}
                        </time>
                      ) : null}
                      <span className="blog-feed__post-title">{post.title}</span>
                      {post.description ? <span className="blog-feed__excerpt">{post.description}</span> : null}
                      <span className="blog-feed__read-more">Read post</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="blog-feed__footer">
              {totalPages > 1 ? (
                <nav className="blog-feed__pagination" aria-label="Blog pagination">
                  <button
                    type="button"
                    className="blog-feed__page-btn"
                    onClick={() => goToPage(page - 1)}
                    disabled={page <= 1}
                  >
                    <ChevronLeft size={18} strokeWidth={2} aria-hidden="true" />
                    Previous
                  </button>

                  <ul className="blog-feed__page-list">
                    {Array.from({ length: totalPages }, (_, index) => {
                      const pageNumber = index + 1;
                      const isActive = pageNumber === page;

                      return (
                        <li key={pageNumber}>
                          <button
                            type="button"
                            className={`blog-feed__page-number${isActive ? " is-active" : ""}`}
                            onClick={() => goToPage(pageNumber)}
                            aria-label={`Page ${pageNumber}`}
                            aria-current={isActive ? "page" : undefined}
                          >
                            {pageNumber}
                          </button>
                        </li>
                      );
                    })}
                  </ul>

                  <button
                    type="button"
                    className="blog-feed__page-btn"
                    onClick={() => goToPage(page + 1)}
                    disabled={page >= totalPages}
                  >
                    Next
                    <ChevronRight size={18} strokeWidth={2} aria-hidden="true" />
                  </button>
                </nav>
              ) : (
                <span className="blog-feed__pagination blog-feed__pagination--spacer" aria-hidden="true" />
              )}

              <p className="blog-feed__count" aria-live="polite">
                Showing {rangeStart}–{rangeEnd} of {filteredPosts.length}
                {deferredQuery ? " results" : " posts"}
              </p>
            </div>
          </>
        ) : null}
      </div>
    </section>
  );
}
