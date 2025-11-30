function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">

      {/* Header Section */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-gray-600 text-lg">
          Learn more about our story and what we do.
        </p>
      </div>

      {/* Story Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">Our Story</h2>
        <p className="text-gray-700 leading-relaxed">
          Founded in 2026, MyWebSite started with a simple mission: to build
          beautiful, fast, and functional web applications using Next.js and 
          Tailwind CSS. What began as a small learning project has grown into a 
          polished and professional web experience focused on simplicity and performance.
        </p>
      </div>

      {/* Mission & Vision Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Mission */}
        <div className="p-6 border rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-blue-500">
          <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
          <p className="text-gray-700 leading-relaxed">
            To make learning modern web development simple, enjoyable, and accessible.
            We aim to provide clean examples, reusable components, and clear structure
            that help developers grow faster.
          </p>
        </div>

        {/* Vision */}
        <div className="p-6 border rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-blue-500">
          <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
          <p className="text-gray-700 leading-relaxed">
            To inspire a new generation of web creators by offering open, elegant,
            and easy-to-understand projects — helping people turn ideas into real
            digital experiences.
          </p>
        </div>

      </div>

    </div>
  );
}

export default About;
