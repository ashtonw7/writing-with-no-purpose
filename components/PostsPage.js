import PageTitle from "./PageTitle";
import PageNumbers from "./PageNumbers";
import PostList from "./PostList";

export default function PostsPages({ postsInfo }) {
  let posts = postsInfo.posts;
  let pageCount = postsInfo.pageCount;
  let currPage = postsInfo.currentPage;
  
  return (
    <div className={`w-screen h-full flex flex-col verticalindex:min-h-[95vh]`}>
      <PageTitle title="Posts" />
      { posts ? <PostList posts={posts} /> : null }
      
      <div className="flex grow items-end justify-center">
          <PageNumbers pageCount={pageCount} currPage={currPage} />
      </div>
    </div>
  );
}