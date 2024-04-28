import { handleGithubLogin } from "@/lib/action";
// import { auth, signIn } from "@/lib/auth";

const LoginPage = async () => {

  // const session = await auth();
  // console.log(session);

  // const handleGithubLogin = async ()=>{
  //   "use server"
  //   await signIn("github"); // there are many providers, we are going to use github
  // }


  return (
    <div>
      <form action={handleGithubLogin}>
        <button>Login with Github</button>
      </form>
    </div>
  );
};

export default LoginPage;