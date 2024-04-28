export const authConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {
    authorized({ auth, request }) {
      return false; // url改任何页面都会被拒绝，因此我们根据auth(session)来判断。
    }
  }
}



