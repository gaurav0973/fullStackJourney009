import { connectToDB } from "@/lib/db";
import Note from "@/models/notes.model";
import { NextResponse } from "next/server";

export async function GET(request){
    try {
        await connectToDB()
        const notes = await Note.find({}).sort({ createdAt : -1})
        return NextResponse.json({
            success : true,
            data : notes
        }, { status : 200})
        
    } catch (error) {
        return NextResponse.json({
            success : false,
            error : error.message
        }, { status : 400})
    }
}

export async function POST(request){
    try {
        const body = await request.json()
        await connectToDB()
        const note = await Note.create(body)
        return NextResponse.json({
            success : true,
            data : note
        }, { status : 201})
        
    } catch (error) {
        return NextResponse.json({
            success : false,
            error : error.message
        }, { status : 400})
    }
}