import { getBlogs, getSettings } from "@/helper/actions";
import { getMetaValueByMetaName } from "@/helper/metaHelpers";
import {
  MapPin,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Globe,
  Calendar,
  Phone,
  Instagram,
  Youtube,
} from "lucide-react";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaGooglePlusG,
  FaEnvelope,
  FaPhoneAlt,
  FaListUl,
  FaTimes,
  FaSearch,
  FaInstagram,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import BlogSmallCard from "@/components/blog/BlogSmallCard";
import QuickContact from "./QuickContact";

export default async function Footer() {
  const settings = await getSettings();
  const blogs = await getBlogs();

  const phone = getMetaValueByMetaName(settings, "company_phone") || "";
  const company_email = getMetaValueByMetaName(settings, "company_email") || "";
  const facebookLink = getMetaValueByMetaName(settings, "facebook_url") || "#";
  const linkedinLink = getMetaValueByMetaName(settings, "linkedin_url") || "#";
  const instagramLink =
    getMetaValueByMetaName(settings, "instagram_url") || "#";
  const youtubeLink = getMetaValueByMetaName(settings, "youtube_url") || "#";
  const footer_content =
    getMetaValueByMetaName(settings, "site_description") || "";
  const copyright_content =
    getMetaValueByMetaName(settings, "bottom_footer_content") ||
    "OSAKA MASJID© 2025 | ALL RIGHTS RESERVED";

  return (
    <div className="bg-green-900 pt-16 relative z-50">
      {/* Main footer content with white background - positioned higher with negative margin */}
      <div className="max-w-7xl mx-auto px-6 py-12 bg-white -mt-64 mb-0 z-10 rounded-2xl shadow-lg">
        {/* Main footer content with 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">About Us</h2>
            <p className="text-gray-700 mb-6">{footer_content}</p>

            {/* Google Map */}
            <div className="mb-2">
              <iframe
                src="https://www.google.com/maps?q=4-12-16+Owada,+Nishiyodogawa+Ward,+Osaka,+555-0032&output=embed"
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
            <div className="flex flex-col gap-3">
              {blogs?.slice(0, 2).map((blog, i) => (
                <Link key={i} href={`/blogs/${blog?.slug}`}>
                  <BlogSmallCard blog={blog} />
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Contact Info</h2>
            <ul className="space-y-6">
              <li className="flex items-center">
                {/* <FaPhoneAlt size={13} /> */}
                <Mail className="h-5 w-5 mr-2 text-gray-600" />
                <span>{company_email}</span>
              </li>
              <li className="flex items-center">
                {/* <FaEnvelope size={13} /> */}
                <Phone className="h-5 w-5 mr-2 text-gray-600" />
                <span>{phone}</span>
              </li>
            </ul>

            {/* Social Media Icons */}
            <div className="flex gap-4 mt-6">
              <Link href={facebookLink} className="hover:text-gray-600">
                <Facebook className="h-5 w-5" />
                
              </Link>
              <Link href={linkedinLink} className="hover:text-gray-600">
                <Instagram className="h-5 w-5" />
               
              </Link>
              <Link href={linkedinLink} className="hover:text-gray-600">
                <Linkedin className="h-5 w-5" />
                
              </Link>
              <Link href={youtubeLink} className="hover:text-gray-600">
                <Youtube className="h-5 w-5" />
             
              </Link>
            </div>
          </div>

          {/* Quick Contact Form */}
          <QuickContact/>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8">
          {/* <p>OSAKA MASJID© 2024 | ALL RIGHTS RESERVED</p> */}
          <div
            className=""
            dangerouslySetInnerHTML={{
              __html: copyright_content,
            }}
          />
          {/* <p>{copyright_content}</p> */}
        </div>
      </div>

      {/* Newsletter Section with dark green background */}
      <div className="bg-green-900 text-white py-6 mt-0">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center">
          <h2 className="text-xl font-bold mb-4 md:mb-0">
            Subscribe, For Weekly Updates
          </h2>
          <div className="flex w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="py-3 pl-6 rounded-l-full w-full md:w-80 text-black bg-white"
            />
            <button
              type="submit"
              className="bg-orange-700 hover:bg-orange-800 text-white px-6 py-3
               rounded-r-full transition-colors text-xs"
            >
              SIGN UP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
