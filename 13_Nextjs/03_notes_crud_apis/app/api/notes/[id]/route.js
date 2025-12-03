import { connectToDB } from "@/lib/db";
import Note from "@/models/notes.model";
import { NextResponse } from "next/server";

export async function DELETE(request, { params }) {
  const { id } = await params;
  try {
    await connectToDB();

    const noteExists = await Note.findById(id);
    if (!noteExists) {
        return NextResponse.json({
            success: false,
            error: "Note not found",
        }, { status: 404
        })
    }

    const deletedNote = await Note.findByIdAndDelete(id)
    return NextResponse.json(
      {
        success: true,
        data: "Note deleted successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}
