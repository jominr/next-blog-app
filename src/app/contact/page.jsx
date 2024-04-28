// "use client"

import styles from "./contact.module.css";
import Image from "next/image";

// 如果服务器渲染和浏览器渲染冲突，我们使用下面动态引入或者suppressHydrationWarning的方法可以解决。
// import dynamic from "next/dynamic";
// import HydrationTest from "@/components/hydrationTest";

// const HydrationTestNoSSR = dynamic(()=>import("@/components/hydrationTest"), {ssr: false})

export const metadata = {
  title: "Contact Page",
  description: "Contact description",
};

const ContactPage = () => {
  // const a = Math.random();
  return (
    <div className={styles.container}>
      {/* <HydrationTestNoSSR/> */}
      {/* <div suppressHydrationWarning>{a}</div> */}
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="" fill className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number" />
          <textarea name="" id="" cols="30" rows="10" placeholder="Message"/>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;