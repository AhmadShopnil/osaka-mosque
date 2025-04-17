import { MapPin, Mail, Facebook, Twitter, Linkedin, Globe, Calendar } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <div className="bg-green-900 pt-16 relative">
      {/* Main footer content with white background - positioned higher with negative margin */}
      <div className="max-w-7xl mx-auto px-6 py-12 bg-white -mt-64 mb-0 z-10 rounded-2xl shadow-lg">
        {/* Main footer content with 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">About Us</h2>
            <p className="text-gray-700 mb-6">
              Lorem ipsum dolor sit amet, conec tetur adipisicing elit, sed do eiusd tempor incididunt ut labore dolore
              magna aliqua tempor.
            </p>

            {/* Google Map */}
            <div className="mb-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.908319249823!2d72.5539!3d23.0334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAyJzAwLjIiTiA3MsKwMzMnMTQuMCJF!5e0!3m2!1sen!2sin!4v1650956095161!5m2!1sen!2sin"
                width="100%"
                height="150"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded"
              ></iframe>
            </div>

            <div className="flex items-center mt-2">
              <MapPin className="h-5 w-5 mr-2" />
              <p>Find us on Map</p>
            </div>
          </div>

          {/* Latest Blogs Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Latest Blogs</h2>
            <div className="flex gap-3">
              <img
                src="/placeholder.svg?height=60&width=60"
                alt="Blog thumbnail"
                className="w-[60px] h-[60px] object-cover rounded"
              />
              <div>
                <h3 className="font-medium">Help the poor people</h3>
                <p className="text-sm text-gray-600 flex items-center gap-1 mt-1">
                  <Calendar className="h-4 w-4" />
                  <span>March 25, 2025</span>
                </p>
              </div>
            </div>
          </div>

          {/* Contact Info Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Contact Info</h2>
            <ul className="space-y-6">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-gray-600" />
                <span>info@example.com</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-gray-600" />
                <span>info@example.com</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-gray-600" />
                <span>info@example.com</span>
              </li>
            </ul>

            {/* Social Media Icons */}
            <div className="flex gap-4 mt-6">
              <Link href="#" className="hover:text-gray-600">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-gray-600">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-gray-600">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-gray-600">
                <Globe className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div>
            <h2 className="text-xl font-bold mb-4">Quick Contact</h2>
            <form>
              <input type="text" placeholder="Your Name" className="w-full border border-gray-300 rounded p-2 mb-3" />
              <input type="email" placeholder="Your Email" className="w-full border border-gray-300 rounded p-2 mb-3" />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full border border-gray-300 rounded p-2 mb-3"
              ></textarea>
              <button
                type="submit"
                className="bg-green-900 text-white py-2 px-4 rounded w-full hover:bg-green-800 transition-colors"
              >
                SUBMIT NOW
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8">
          <p>BISMILLAH© 2024 | ALL RIGHTS RESERVED</p>
        </div>
      </div>

      {/* Newsletter Section with dark green background */}
      <div className="bg-green-900 text-white py-6 mt-0">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center">
          <h2 className="text-xl font-bold mb-4 md:mb-0">Subscribe, For Weekly Updates</h2>
          <div className="flex w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="py-3 pl-6 rounded-l-full w-full md:w-80 text-black bg-white"
            />
            <button
              type="submit"
              className="bg-orange-700 hover:bg-orange-800 text-white px-6 py-3 rounded-r-full transition-colors"
            >
              SIGN UP
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
