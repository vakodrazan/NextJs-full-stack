// import Head from 'next/head';
// import Image from 'next/image';
// import styles from '../styles/Home.module.css';
// import '../styles.css';

type NetworkPost = {
  userId: number,
  id: number,
  title: string,
  body: string,
};

type Post = {
  id: number,
  title: string,
  body: string,
};

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const networkPosts = (await res.json()) as NetworkPost[];
  const posts: Post[] = networkPosts.map(({ id, title, body }) => ({
    id,
    title,
    body
  }));
  return {
    props: { msg: 'Hello world!', posts },
  };
}

export default function Home(props) {
  console.log('props.posts::::::', props?.posts);
  return <h1 className='m-4 text-center text-4xl text-red-500'>{props.msg}</h1>;
}
