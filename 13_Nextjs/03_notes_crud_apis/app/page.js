import { connectToDB } from "./lib/db";

async function Home() {
  await connectToDB();
  return (
    <div>Home</div>
  )
}
export default Home