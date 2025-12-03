import DisplayNotes from "@/components/DisplayNotes";
import NotesClient from "@/components/NotesClient";
import { connectToDB } from "@/lib/db";

const fetchNotesData = async () => {
  await connectToDB();
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/notes`);
  const data = await res.json();
  // console.log("Fetched notes data:", data);
  return data?.data || [];
};

async function Home() {
  const notesData = await fetchNotesData();

  return (
    <div className="py-2">
      <h1 className="text-4xl font-bold text-center">Welcome to the Notes App</h1>
      <NotesClient />
      <DisplayNotes initialNotes={notesData} />
    </div>
  );
}
export default Home;
