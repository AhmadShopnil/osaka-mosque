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
import Link from "next/link";
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
      <div className="container mx-auto px-2 lg:px-8  py-12 bg-white -mt-64 mb-0 
      z-10 rounded-2xl shadow-lg">
        {/* Main footer content with 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">私たちについて</h2>
            <p className="text-gray-700 mb-6">{footer_content}</p>
          </div>

          {/* Latest Blogs Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">最新のブログ</h2>
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
            <h2 className="text-xl font-bold mb-4">連絡先情報</h2>
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
          
       
        </div>
      </div>

  
      <div className="bg-green-900 text-white py-6 mt-0">
        <div className="max-w-7xl mx-auto px-8  items-center">
        
           <div
            className="text-white text-center"
            dangerouslySetInnerHTML={{
              __html: copyright_content,
            }}
          />
        
          
        </div>
      </div>
    </div>
  );
}
