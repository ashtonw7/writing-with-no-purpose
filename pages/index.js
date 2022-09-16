import PostsPage from "@components/PostsPages";

export async function getStaticProps() {
  let postInfo = await fetch('http://localhost:8888/api/getPosts?page=1',{
    method: 'GET',
  }).then(res => res.json())

  return {
    props: {
      posts: postInfo.posts,
      currPage: postInfo.currentPage,
      perPage: postInfo.perPage,
      totalCount: postInfo.totalCount,
      pageCount: postInfo.pageCount,
      start: postInfo.start,
      end: postInfo.end,
    },
  };
}

export default function Home({ posts, pageCount }) {
  return (
    <>
      <PostsPage page={"1"} pageCount={pageCount} posts={posts} />
    </>
  );
}