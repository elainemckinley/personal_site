import { useParams } from "react-router-dom";
import Markdown from "react-markdown";
import { useEffect, useState } from "react";

function BlogShow() {
  const { postName } = useParams();
  const [markdownContent, setMarkdownContent] = useState("Loading...");

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/blog_posts/${postName}.md`);
        setMarkdownContent(await response.text());
      } catch (e) {
        console.log(e);
        setMarkdownContent("Could not load post.");
      }
    };

    fetchPost();
  });

  return <Markdown>{markdownContent}</Markdown>;
}

export default BlogShow;
