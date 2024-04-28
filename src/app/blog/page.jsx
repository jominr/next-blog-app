import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css"
import { revalidatePath } from "next/cache";
import { getPosts } from "@/lib/data";

// const getData = async () => {
//   const res = await fetch(
//     "https://jsonplaceholder.typicode.com/posts",
//     {cache: "force-cache"}, // {cache: "no-store"},
//     {next: {revalidate: 3600 }} // refresh data in every one hour
//   )
//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }
//   return res.json();
// }

const BlogPage = async () => {
  // fetch data with an API
  // const posts = await getData();

  // fetch data without an api
  const posts = await getPosts();
  return (
    <div className={styles.container}>
      {posts.map((post)=>(
        <div className={styles.post} key={post.slug}>
          <PostCard post={post}/>
        </div>
      ))}
      
    </div>
  );
};

export default BlogPage;