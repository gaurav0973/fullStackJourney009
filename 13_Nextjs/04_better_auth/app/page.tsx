import client from "@/lib/db"

async function page() {
  const post = await client.post.findMany()
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {post.map((p) => (
          <li key={p.id}>
            <h2>{p.title}</h2>
            <p>{p.content}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default page