import connectMongoDB from "@/libs/mongodb";
import Story from "@/models/story";
import { NextResponse } from "next/server";

// export async function GET(request, { params }) {
//     const { id } = params;
//     await connectMongoDB();
//     const topic = await Topic.findOne({ _id: id });
//     return NextResponse.json({ topic }, { status: 200 });
//   }

  export async function GET(request, {params}){
    const {id} = params;
    await connectMongoDB();
    const story = await Story.findOne({_id: id});
    return NextResponse.json({story},{status:200})
  }