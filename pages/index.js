import Meta from "../components/Meta";
import MeetMe from "../components/MeetMe";
import Link from "next/link";
import PostItem from "../components/PostItem";
import styles from '../styles/Home.module.css'
import { getPosts } from "../scripts/utils";
import { useState } from "react";

const Home = ({ posts }) => {
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [currentPageIndex, setCurrentPageIndex] = useState(1);

  const loadMorePosts = async () => {
    const res = await fetch(`/api/posts?page=${currentPageIndex + 1}`); // absolute url is supported here
    const posts = await res.json();

    setFilteredPosts((_posts) => [..._posts, ...posts]);
    setCurrentPageIndex((_pageIndex) => _pageIndex + 1);
  };

  return (
    <>
      <Meta title='PressBlog - Your one stop blog for anything React Native' />
      <MeetMe />
      <Link href='/about'>More about me</Link>

      <div className={styles.articleList}>
        <p className={styles.desc}>Newly Published</p>
        {filteredPosts.map((post, index) => (
          <PostItem key={index} post={post} />
        ))}
        <button onClick={loadMorePosts} className={styles.button}>
          Load more
        </button>
      </div>
    </>
  );
};

export default Home;


export const getStaticProps = () => {
  const posts = getPosts(1); // the argument has no effect yet

  return {
    props: {
      posts,
    },
  };
};
