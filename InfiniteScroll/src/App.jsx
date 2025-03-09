import { useState, useEffect } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [initialLoad, setInitialLoad] = useState(true);

  async function fetchPosts(pageNum) {
    setLoading(true);

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${pageNum}&_limit=10`
      );

      const newData = await response.json();

      if (newData.length === 0) {
        setHasMore(false);
      } else {
        setPosts((current) => [...current, ...newData]);
        setPage(pageNum + 1);
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
      setHasMore(false);
    } finally {
      setLoading(false);
      setInitialLoad(false);
    }
  }

  useEffect(() => {
    if (initialLoad) {
      fetchPosts(page);
    }
  }, [initialLoad, page]);

  useEffect(() => {
    function handleScroll() {
      if (loading || !hasMore) return;

      const scrollBottom =
        window.innerHeight + document.documentElement.scrollTop;
      const totalHeight = document.documentElement.scrollHeight;

      if (scrollBottom >= totalHeight - 100) {
        fetchPosts(page);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading, hasMore, page]);

  return (
    <div className="p-5 max-w-3xl mx-auto">
      <h1 className="text-center text-2xl font-bold mb-6">Infinite Scroll</h1>

      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="border  p-4 mb-4 ">
            <h2 className="text-lg text-center">{post.title}</h2>
          </div>
        ))}
      </div>

      <div className="text-center p-4">
        {loading && <p className="text-blue-500">Loading more posts...</p>}
        {!hasMore && posts.length > 0 && (
          <p className="text-gray-500">
            You've reached the end! No more posts to load.
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
