import connectMongoDB from "@/libs/mongodb";
import Story from "@/models/story";
import { NextResponse } from "next/server";

export async function POST(request){
    const {title, description, tag} = await request.json();
    await connectMongoDB()
    await Story.create({title, description, tag})
    
    return NextResponse.json({ message: 'story created' }, { status: 201 })
}

export async function GET(){
    await connectMongoDB()
    const story = await Story.find().sort({ createdAt: -1 })
    // find().sort({ createdAt: -1 }).toArray();
    return NextResponse.json({story})
}