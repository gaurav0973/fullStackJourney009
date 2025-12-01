import Link from "next/link";

function Home() {
  
  return (
    <div className="flex items-center justify-center h-screen text-3xl font-bold">
      
      <Link
        href="/products"
        className="m-4 p-4 bg-blue-500 text-white rounded inline-block"
      >
        Products : Dynamic Routing
      </Link>

      <Link
        href="/docs/intro"
        className="m-4 p-4 bg-blue-500 text-white rounded inline-block"
      >
        Docs : Catch All Routing
      </Link>

    </div>
  );
}

export default Home;
