import HeadTag from "./HeadTag";
import PageTitle from "./PageTitle";
import PostList from "./PostList";

export default function PostsPages({ page, postsInfo }) {
  let posts = postsInfo.posts
  
  return (
    <div className={`w-screen ${posts ? "content" : "hidden"}`}>
      <HeadTag title="Writing with No Purpose" />
      <PageTitle title="Posts" />
      { posts ? <PostList posts={posts} /> : null }
    </div>
  );
}