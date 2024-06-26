"use server"

import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDB } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";

// 操作数据

export const addPost = async (prevState, formData)=> {

  // console.log("formData", formData);
  // const title = formData.get("title");
  // const desc = formData.get("desc");
  // const slug = formData.get("slug");
  // const userId = formData.get("userId");

  const { title, desc, slug, userId } = Object.fromEntries(formData);

  try {
    connectToDB();
    const newPost = new Post({
      title, desc, slug, userId,
    });
    await newPost.save();
    revalidatePath("/blog");
    revalidatePath("/admin");
    console.log("save to db")
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong"}
  }
}

export const deletePost = async (formData)=> {

  const { id } = Object.fromEntries(formData);
  
  try {
    connectToDB();
    await Post.findByIdAndDelete(id);
    console.log("delete from db")
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" }
  }
}

export const addUser = async (prevState, formData)=> {

  const { username, email, password, img } = Object.fromEntries(formData);

  try {
    connectToDB();
    const newUser = new User({
      username, email, password, img,
    });
    await newUser.save();
    revalidatePath("/admin");
    console.log("save to db")
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong"}
  }
}

export const deleteUser = async (formData)=> {

  const { id } = Object.fromEntries(formData);
  
  try {
    connectToDB();

    await Post.deleteMany({userId: id});

    await User.findByIdAndDelete(id);

    console.log("delete from db")
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" }
  }
}

// 使用nextAuth提供的方法实现登录，登出。
export const handleGithubLogin = async ()=>{
  await signIn("github"); // there are many providers, we are going to use github
}

export const handleLogout = async () => {
  await signOut();
}

export const register = async (previousState, formData) => {
  const { username, email, password, img, passwordRepeat } = Object.fromEntries(formData);
  if (password !== passwordRepeat) {
    return {error: "Passwords do not match" };
  }
  
  try {
    connectToDB();
    const user = await User.findOne({username})
    if (user) {
      return { error: "Username already exists" };
    }
    // generate salt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username, email, password: hashedPassword, img,
    })
    await newUser.save();
    console.log("saved to db");
    return {success: true};
  } catch (error) {
    return { error: "Something went wrong" };
  }
}


export const login = async (previousState, formData) => {
  const { username, password } = Object.fromEntries(formData);
  
  try {
    // 使用的是用户名、密码的登录方式，也就是“credentials” 证书
    await signIn("credentials", {username, password});
  } catch (error) {
    if (error.message.includes("credentialssignin")) {
      // 这是为了useFormState能捕捉到error
      return {error: "Invalid username or password"};
    }
    throw error;
  }
}