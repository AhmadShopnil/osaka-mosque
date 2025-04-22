"use client";

import ContactDetail from "@/components/contact/ContactDetail";
import ContactForm from "@/components/contact/ContactForm";
import HeroSection from "@/components/event/HeroSection";
import Map from "@/components/shared/Map";

export default function Contact() {
  return (
    <div>
      <HeroSection />
      <div className="">
        <div className="pb-64 px-4 md:px-16 mx-auto">
          <ContactForm />
          <Map/>
          <ContactDetail />
        </div>
      </div>
    </div>
  );
}
