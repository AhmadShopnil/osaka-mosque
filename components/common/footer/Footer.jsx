import Image from "next/image"
import Link from "next/link"
import { MapPin, Calendar, Facebook, Twitter, Linkedin, Globe } from "lucide-react"
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaGooglePlusG,
  FaEnvelope,
  FaPhoneAlt,
  FaSearch,
} from 'react-icons/fa';
export default function Footer() {
  return (
    <div className="bg-green-900 mt-30">
      <div className="relative bg-white mx-auto max-w-6xl">
        {/* Background vector image on the left */}
        <div className="absolute left-0 top-0 h-full w-1/4 opacity-10 pointer-events-none">
          <Image src="/images/bg-vector.png" alt="Background pattern" fill className="object-cover object-left" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 p-8">
          {/* About Us Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-700 mb-6">
              Lorem ipsum dolor sit amet, conec tetur adipisicing elit, sed do eiusd tempor incididunt ut labore dolore
              magna aliqua tempor.
            </p>

            <div className="mt-4">
              <div className="w-full h-48 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178530058236!2d55.2721877!3d25.197201699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sBurj%20Khalifa!5e0!3m2!1sen!2sus!4v1681299296003!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded"
                ></iframe>
              </div>
              <div className="flex items-center mt-2">
                <MapPin className="h-5 w-5 mr-2" />
                <span className="text-sm">Find us on Map</span>
              </div>
            </div>
          </div>

          {/* Latest Blogs Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Latest Blogs</h3>
            <div className="flex gap-3">
              <div className="w-20 h-16 relative flex-shrink-0">
                <Image
                  src="/placeholder.svg?height=64&width=80"
                  alt="Blog thumbnail"
                  width={80}
                  height={64}
                  className="rounded object-cover"
                />
              </div>
              <div>
                <h4 className="font-medium">Help the poor people</h4>
                <div className="flex items-center text-sm text-gray-600 mt-1">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>March 25, 2025</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center border-b border-dashed pb-4">
                <FaEnvelope className="text-gray-300 mr-[10px]  " />
                <span>info@example.com</span>
              </li>
              <li className="flex items-center border-b border-dashed pb-4">
              <FaEnvelope className="text-gray-300 mr-[10px]  " />
                <span>info@example.com</span>
              </li>
              <li className="flex items-center border-b border-dashed pb-4">
              <FaEnvelope className="text-gray-300 mr-[10px]  " />
                <span>info@example.com</span>
              </li>
            </ul>

            <div className="flex gap-4 mt-6">
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <Globe className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Contact Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Contact</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-green-800 text-white py-3 rounded hover:bg-green-900 transition-colors"
              >
                SUBMIT NOW
              </button>
            </form>
          </div>
        </div>

        <div className="text-center py-4 border-t">
          <p className="text-sm">BISMILLAH© 2024 | ALL RIGHTS RESERVED</p>
        </div>
      </div>

      {/* Subscribe section with dark green background */}
      <div className="py-6 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <h3 className="text-white text-xl font-medium">Subscribe, For Weekly Updates</h3>
          <div className="flex w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="px-4 py-2 rounded-l-full w-full md:w-80 focus:outline-none"
            />
            <button className="bg-orange-600 text-white px-6 py-2 rounded-r-full hover:bg-orange-700 transition-colors">
              SIGN UP
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
