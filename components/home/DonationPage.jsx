// app/donation/page.tsx or app/page.tsx or any component
"use client";

import PayPalWrapper from "../shared/PayPalWrapper";
import DonationSection from "./DonationSection";



export default function DonationPage() {
  return (
    <PayPalWrapper>
     <DonationSection/>
    </PayPalWrapper>
  );
}
