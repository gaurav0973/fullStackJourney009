"use client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

function DisplayNotes({ initialNotes }) {
  const router = useRouter();

  const deleteNote = async (id) => {
    try {
      const res = await fetch(`/api/notes/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();
      if (data.success) {
        toast.success("Note deleted successfully");
        router.refresh();
      } else {
        toast.error("Failed to delete note");
      }
    } catch (error) {
      toast.error("An error occurred while deleting the note");
    }
  };

  return (
    <div className="mt-8 max-w-3xl mx-auto">
      <h2 className="text-xl font-semibold mb-3">Your created Notes</h2>

      {initialNotes.length === 0 ? (
        <p>No notes available. Create some notes!</p>
      ) : (
        initialNotes.map((note) => (
          <div key={note._id} className="border p-3 mb-3 rounded-md shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-bold">{note.title}</h3>
              <div>
                <button
                  className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 w-fit mr-2"
                  onClick={() => console.log("Edit", note._id)}
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteNote(note._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 w-fit"
                >
                  Delete
                </button>
              </div>
            </div>

            <p className="text-gray-700">{note.content}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default DisplayNotes;
