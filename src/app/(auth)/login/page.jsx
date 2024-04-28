import { handleGithubLogin } from "@/lib/action";
// import { auth, signIn } from "@/lib/auth";
import styles from "./login.module.css";
import LoginForm from "@/components/loginForm/loginForm";

const LoginPage = () => {

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
    
        <LoginForm />

      </div>
    </div>
  );
};

export default LoginPage;