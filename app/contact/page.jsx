

import ContactDetail from "@/components/contact/ContactDetail";
import ContactForm from "@/components/contact/ContactForm";
import HeroSection from "@/components/shared/HeroSection";
import Map from "@/components/shared/Map";

export default function Contact() {

const heroData={
  title:"お問い合わせ"
}

  return (
    <div>
      <HeroSection heroData={heroData} />
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
