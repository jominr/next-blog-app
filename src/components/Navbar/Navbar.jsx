import Link from "next/link";
import Links from "./Links/Links";
import styles from "./navbar.module.css"
import { auth } from "@/lib/auth";

const Navbar = async () => {
  // 或者session
  const session = await auth();
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>logo</Link>
      <div>
        <Links session={session}/>
      </div>
    </div>
  );
};

export default Navbar;