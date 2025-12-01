async function Docs({ params }) {
  const { slug } = await params;
  console.log(slug);
  console.log(typeof slug.join("/"));
  return (
    <div>Docs : {slug.join("/")}</div>
  )
}
export default Docs