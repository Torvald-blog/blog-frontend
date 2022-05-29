import axios from "axios";
import { useEffect, useState } from "react";
import { Post, PostInterface } from "../../../entities/Post";
import { PostCard } from "./postCard";

export default function PostsSection() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios
      .get<PostInterface[]>("https://jsonplaceholder.typicode.com/posts")
      .then((postsResponse) => {
        setPosts(
          postsResponse.data
            .slice(0, 9)
            .map((post: PostInterface) => new Post(post))
        );
      });
  }, []);

  return (
    <>
      {posts.map((post) => (
        <PostCard key={post.getId()} post={post} />
      ))}
    </>
  );
}
