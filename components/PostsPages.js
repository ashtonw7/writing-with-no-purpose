import HeadTag from "./HeadTag";
import PageTitle from "./PageTitle";
import PostList from "./PostList";

export default function PostsPages({ page, pageCount, posts }) {
  return (
    <div className='w-screen'>
      <HeadTag title="Writing with No Purpose" />
      <PageTitle title="Posts" />
      <PostList posts={posts} />
    </div>
  );
}