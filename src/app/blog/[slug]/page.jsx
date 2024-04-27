import Image from "next/image";
import styles from "./singlePost.module.css"

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="" alt="" fill className={styles.img}></Image>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>1111</h1>

        <div className={styles.detail}>
          <Image src="" alt="" fill className={styles.avatar}></Image>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Terry</span>
          </div>

          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01012024</span>
          </div>
        </div>

        <div className={styles.content}>desc</div>
      </div>
    </div>
  );
};

export default SinglePostPage;