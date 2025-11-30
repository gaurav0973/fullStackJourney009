import { Rocket, Smartphone, Heart } from "lucide-react";

function Page() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">

      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Welcome to MyWebSite</h1>

        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          This is a simple Next.js application demonstrating routing, layout structure, 
          and Tailwind CSS styling — perfect for learning routing, file colocation, Links,
          and shared layouts in Next.js.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            Get Started
          </button>

          <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-20">

        {/* Fast */}
        <div className="text-center p-6 border rounded-xl shadow-sm hover:shadow-md transition">
          <Rocket size={40} className="mx-auto mb-4 text-blue-600" />
          <h3 className="text-xl font-semibold mb-2">Fast</h3>
          <p className="text-gray-600">
            Enjoy blazing-fast performance powered by Next.js and modern tooling.
          </p>
        </div>

        {/* Responsive */}
        <div className="text-center p-6 border rounded-xl shadow-sm hover:shadow-md transition">
          <Smartphone size={40} className="mx-auto mb-4 text-green-600" />
          <h3 className="text-xl font-semibold mb-2">Responsive</h3>
          <p className="text-gray-600">
            Designed to look great on every screen size — mobile, tablet, or desktop.
          </p>
        </div>

        {/* Simple */}
        <div className="text-center p-6 border rounded-xl shadow-sm hover:shadow-md transition">
          <Heart size={40} className="mx-auto mb-4 text-red-500" />
          <h3 className="text-xl font-semibold mb-2">Simple</h3>
          <p className="text-gray-600">
            Clean and minimal UI so you can focus on learning without distractions.
          </p>
        </div>
      </div>

    </main>
  );
}

export default Page;
