"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"

function NotesClient() {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const saveNotes = async (e) => {
        e.preventDefault()
        if(!title.trim() || !content.trim()){
                toast.error("Please enter valid title and content")
                setLoading(false)
                return
        }
        setLoading(true)
        try {
            
            const res = await fetch("/api/notes", {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify({ title, content })
            })
            const data = await res.json()
            // 
            if(!data.success){
                toast.error("Failed to save note. Please try again.")
                setLoading(false)
                return
            }
            toast.success("Note saved successfully!")
            router.refresh()
            setTitle("")
            setContent("")
            setLoading(false)
            
        } catch (error) {
            toast.error("An error occurred while saving the note. Please try again.")
            // console.error("Error saving note:", error)
            setLoading(false)
        }
    }

  return (
    <div className="flex flex-col items-center justify-center py-2">
        <h2 className="text-2xl font-semibold mb-4">Create New Notes</h2>
        <form onSubmit={saveNotes} className="flex flex-col items-center w-full">
            <input 
                type="text" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Note Title" 
                className="border border-gray-300 rounded-md p-2 mb-4 w-full max-w-md" />
            <textarea 
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Note Content"
                rows="5"
                className="border border-gray-300 rounded-md p-2 mb-4 w-full max-w-md">
            </textarea>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 disabled:opacity-50 " disabled={loading}>
                {loading ? "Saving..." : "Save Note"}
            </button>
        </form>
    </div>
  )
}
export default NotesClient