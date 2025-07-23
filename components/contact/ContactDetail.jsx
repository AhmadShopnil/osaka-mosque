import React from "react";
import { Mail, Phone, MapPin, Printer } from "lucide-react";
import { getSettings } from "@/helper/actions";
import { getMediaLinkByMetaName, getMetaValueByMetaName } from "@/helper/metaHelpers";

const ContactDetail = async () => {
  const settings = await getSettings();

  const phone = getMetaValueByMetaName(settings, "company_phone") || "";
  const company_email = getMetaValueByMetaName(settings, "company_email") || "";
  const office_location =
    getMetaValueByMetaName(settings, "office_location") || "";
  const fax = getMetaValueByMetaName(settings, "fax") || "";
  const Image = getMediaLinkByMetaName(settings, "masjid_image");
  const img = `https://admin.osakamasjid.org${Image}`;

  return (
    <div className="py-16 relative overflow-hidden">
      {/* Decorative background pattern */}

      <div
        className="absolute left-0 top-0 w-1/3 h-full opacity-10 bg-no-repeat bg-left"
        // style={{ backgroundImage: `url('${img}')` }}
      ></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
        <div className="px-4">
          <h2 className="text-orange-500 font-medium mb-2">情報を取得する</h2>
          <h1 className="text-4xl font-bold text-gray-800 mb-10">
            連絡先の詳細
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-10">
            {/* Email Section */}
            <div className="flex">
              <div className="mr-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-orange-500" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-600 mb-1">{company_email}</p>
                {/* <p className="text-gray-600">www.bismillah.com</p> */}
              </div>
            </div>

            {/* Phone Section */}
            <div className="flex">
              <div className="mr-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-orange-500" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p className="text-gray-600 mb-1">{phone}</p>
                {/* <p className="text-gray-600">8585 650 689 25</p> */}
              </div>
            </div>

            {/* Address Section */}
            <div className="flex">
              <div className="mr-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-orange-500" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Address</h3>
                <p className="text-gray-600">{office_location}</p>
              </div>
            </div>

            {/* Fax Section */}
            <div className="flex">
              <div className="mr-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <Printer className="h-6 w-6 text-orange-500" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Fax</h3>
                <p className="text-gray-600 mb-1">{fax}</p>
                {/* <p className="text-gray-600">0044 853 654 852</p> */}
              </div>
            </div>
          </div>
        </div>

        {/* Customer Support Image */}
        <div className="hidden lg:block">
          <img
            src={img}
            alt="Customer Support Representative"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
