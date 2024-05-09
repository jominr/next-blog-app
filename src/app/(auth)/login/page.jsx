import { handleGithubLogin } from "@/lib/action";
// import { auth, signIn } from "@/lib/auth";
import styles from "./login.module.css";
import LoginForm from "@/components/loginForm/loginForm";

const LoginPage = () => {
  // 在获取session之前，需要创建authetication endpoint, 
  // AUTH_URL=http://localhost:3000/api/auth
  // nextAuth is going to handle every single endpoint like login, logout,error, 
  // api/auth目录下有一个[...nextauth]，我们不需要一个个创建endpoint, 
  // 所以这里的意思是，如果我们调用await auth(）,会调用Get /api/auth/session这个api, 然后拿到session. 

  // const session = await auth();
  // console.log(session);


  // 会调用 POST /api/auth/signin/:provider，实现登录。

  // 使用nextAuth提供的signIn登录。
  // const handleGithubLogin = async ()=>{
  //   "use server"
  //   await signIn("github"); // there are many providers, we are going to use github
  // }

  // 如果你是用自定义的用户登录的话，也就是signin with user credentials, 也可以不创建/api/auth/[] 这个api route, 
  // 但是我们要使用social media account，就需要创建这个api route, 否则我们无法handle session. 

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