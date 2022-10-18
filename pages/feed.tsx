import type { NextPage } from "next";
import Head from "next/head";
import { PostInterface } from "../interfaces/post.interface";
import Post from '../components/post';

interface Props {
  posts: Array<PostInterface>
}

const Feed: NextPage<Props> = ({ posts }) => (
  <div>
    <Head>
      <title>Fan Vue - Posts</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <h1>Posts</h1>
    {posts.map((post: any) => <Post key={post.id} post={post} />)}
  </div>
)

export default Feed;

export async function getStaticProps() {
  const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
  const postsResponseJson = await postsResponse.json();
  return {
    props: {
      posts: postsResponseJson,
    }
  }
}