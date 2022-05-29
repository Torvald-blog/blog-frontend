import { ReactElement } from "react";
import PostsSection from "../components/layouts/public/PostsSection";
import PublicLayout from "../components/layouts/public/publicLayout";
import { Post } from "../entities/Post";

type Props = {
  posts: Post[];
};

export default function Home() {
  return (
    <>
      <PostsSection />
    </>
  );
}

Home.getLayout = (page: ReactElement) => {
  return <PublicLayout>{page}</PublicLayout>;
};
