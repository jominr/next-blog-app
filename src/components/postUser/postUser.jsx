import React from 'react';
import { getUser } from "@/lib/data";
import Image from 'next/image';

// const getData = async (userId) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}`,
//     {cache: "no-store"},
//   )
//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }
//   return res.json();
// }

import styles from "./postUser.module.css"
const PostUser = async ({userId}) => {
  // fetch data with an api
  //const user = await getData(userId);
 
  // fetch data without an api
  const user = await getUser(userId)
  return (
    <div className={styles.container}>
      <Image 
        className={styles.avatar}
        src={user.img ? user.img : '/noavatar.png'} 
        width={50} 
        height={50} 
        alt="avatar">
      </Image>
      <div className={styles.texts}>
        <span className={styles.title}>Author</span>
        <span className={styles.name}>{user.username}</span>
      </div>
    </div>
  );
};

export default PostUser;