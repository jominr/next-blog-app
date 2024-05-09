import { Post } from "@/lib/models";
import { connectToDB } from "@/lib/utils";
import { NextResponse } from "next/server";

// api/blog/route

export const GET = async (request) => {
  try {
    connectToDB();

    const posts = await Post.find();
    return NextResponse.json(posts);
    
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};