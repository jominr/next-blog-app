"use server"

import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDB } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";


export const addPost = async (formData)=> {

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
    console.log("save to db")
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong")
  }
  console.log("formData", title, desc, slug, userId);
}

export const deletePost = async (formData)=> {

  const { id } = Object.fromEntries(formData);
  
  try {
    connectToDB();
    await Post.findByIdAndDelete(id);
    console.log("delete from db")
    revalidatePath("/blog");
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong")
  }
}

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
    await signIn("credentials", {username, password});
  } catch (error) {
    if (error.message.includes("credentialssignin")) {
      return {error: "Invalid username or password"};
    }
    throw error;
  }
}