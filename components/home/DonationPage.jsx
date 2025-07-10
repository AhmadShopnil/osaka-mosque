// app/donation/page.tsx or app/page.tsx or any component
"use client";

import PayPalWrapper from "../shared/PayPalWrapper";
import DonationSection from "./DonationSection";



export default function DonationPage({make_your_donation}) {
  return (
    <PayPalWrapper>
     <DonationSection make_your_donation={make_your_donation}/>
    </PayPalWrapper>
  );
}
