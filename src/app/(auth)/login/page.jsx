import { handleGithubLogin, login } from "@/lib/action";
// import { auth, signIn } from "@/lib/auth";
import styles from "./login.module.css";

const LoginPage = async () => {

  // const session = await auth();
  // console.log(session);

  // const handleGithubLogin = async ()=>{
  //   "use server"
  //   await signIn("github"); // there are many providers, we are going to use github
  // }


  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleGithubLogin}>
          <button className={styles.github}>Login with Github</button>
        </form>

        <form action={login} className={styles.form}>
          <input type="text" placeholder="username" name="username" />
          <input type="password" placeholder="password" name="password" />
          <button>Login</button>
        </form>

      </div>
    </div>
  );
};

export default LoginPage;