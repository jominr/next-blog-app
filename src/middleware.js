import NextAuth from "next-auth";
import { authConfig } from "./lib/auth.config.js";

export default NextAuth(authConfig).auth;

// it is not going to interrupt our API calls or static files.
export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next).*)"],
};
/*
  matcher allows you to filter Middleware to run(or not run like in the example)
  on specific paths. If you don't add any matcher, Middleware will be invoked for
  evey route in your project.
*/

/* middleware is independent from any not JS dependent library,
  我们用到了bcrypt, mongoose, 因此我们把authorized没有写在auth.js中，写在了一个新的文件auth.config.js里。
 */

// FOR MORE INFORMATION CHECK: https://nextjs.org/docs/app/building-your-application/routing/middleware