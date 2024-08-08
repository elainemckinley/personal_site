import { Link } from "react-router-dom";

function BlogIndex() {
  return (
    <div>
      <h1>Blog Posts</h1>
      <Link to="/blog/intro">Intro</Link>
    </div>
  );
}

export default BlogIndex;
