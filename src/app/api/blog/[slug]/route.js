import { Post } from "@/lib/models";
import { connectToDB } from "@/lib/utils";
import { NextResponse } from "next/server";

// endpoint: api/blog/23895789
// it is a API route.
export const GET = async (request, {params}) => {
  const { slug } = params;
  try {
    connectToDB();

    const post = await Post.findOne({slug});
    return NextResponse.json(post);
    
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch post!");
  }
};

export const DELETE = async (request, {params}) => {
  const { slug } = params;
  try {
    connectToDB();

    await Post.deleteOne({slug});
    return NextResponse.json("post deleted");
    
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete post!");
  }
};