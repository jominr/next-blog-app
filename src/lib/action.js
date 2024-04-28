"use server"

import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { connectToDB } from "./utils";
import { signIn, signOut } from "./auth";


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