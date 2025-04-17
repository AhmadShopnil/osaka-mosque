"use client";

import ContactDetail from "@/components/contact/ContactDetail";
import ContactForm from "@/components/contact/ContactForm";
import HeroSection from "@/components/event/HeroSection";

export default function Contact() {
  return (
    <div>
      <HeroSection />
      <div className="container">
        <div className="pb-64 px-16 mx-auto">
          <ContactForm />
          <ContactDetail />
        </div>
      </div>
    </div>
  );
}
