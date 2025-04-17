import React from 'react';

import { Mail, Phone, MapPin, Printer } from "lucide-react"


const ContactDetail = () => {
    return (
        <div className="py-16 relative overflow-hidden">
      {/* Decorative background pattern */}
      <div
        className="absolute left-0 top-0 w-1/3 h-full opacity-10 bg-no-repeat bg-left"
        style={{ backgroundImage: "url('/placeholder.svg?height=600&width=400')" }}
      ></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
        <div className="px-4">
          <h2 className="text-orange-500 font-medium mb-2">Get Information</h2>
          <h1 className="text-4xl font-bold text-gray-800 mb-10">Contact Details</h1>

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
                <p className="text-gray-600 mb-1">bismillah@gmail.com</p>
                <p className="text-gray-600">www.bismillah.com</p>
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
                <p className="text-gray-600 mb-1">001 2565 2565 25</p>
                <p className="text-gray-600">8585 650 689 25</p>
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
                <p className="text-gray-600">19-J David Road H Block, America</p>
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
                <p className="text-gray-600 mb-1">0044 55 25 26 23</p>
                <p className="text-gray-600">0044 853 654 852</p>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Support Image */}
        <div className="hidden lg:block">
          <img
            src="/images/abt-img2.jpg"
            alt="Customer Support Representative"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
    );
}

export default ContactDetail;
