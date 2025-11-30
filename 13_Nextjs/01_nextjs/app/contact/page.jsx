import { Mail, Phone, MapPin, Send } from "lucide-react";

function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-600 text-lg">
          We would love to hear from you! Whether you have questions, feedback,
          or just want to say hello, feel free to reach out.
        </p>
      </div>

      {/* 2-column layout */}
      <div className="grid md:grid-cols-2 gap-12">

        {/* Contact Form */}
        <div>
          <form className="space-y-6">

            {/* Full Name */}
            <div>
              <label className="block mb-1 text-gray-700 font-medium">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 text-gray-700 font-medium">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block mb-1 text-gray-700 font-medium">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 hover:scale-[1.02] transition-all duration-300"
            >
              <Send size={18} />
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="space-y-8">

          {/* Email */}
          <div className="p-6 border rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-3">
              <Mail size={28} className="text-blue-600" />
              <h3 className="text-xl font-semibold">Email</h3>
            </div>
            <p className="text-gray-600 mt-2">support@mywebsite.com</p>
          </div>

          {/* Phone */}
          <div className="p-6 border rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-3">
              <Phone size={28} className="text-green-600" />
              <h3 className="text-xl font-semibold">Phone</h3>
            </div>
            <p className="text-gray-600 mt-2">+91 98765 43210</p>
          </div>

          {/* Location */}
          <div className="p-6 border rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-3">
              <MapPin size={28} className="text-red-600" />
              <h3 className="text-xl font-semibold">Location</h3>
            </div>
            <p className="text-gray-600 mt-2">New Delhi, India</p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Contact;
