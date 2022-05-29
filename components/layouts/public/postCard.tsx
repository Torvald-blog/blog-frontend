import { Post } from "../../../entities/Post";

type Props = {
  post: Post;
};

export const PostCard = ({ post }: Props) => {
  return (
    <div className="post-card">
      <h1>{post.getTitle()}</h1>
      <p>{post.getBody()}</p>
    </div>
  );
};
