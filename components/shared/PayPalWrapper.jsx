// components/PayPalWrapper.tsx
"use client";

import { PayPalScriptProvider } from "@paypal/react-paypal-js";

export default function PayPalWrapper({ children }) {
  return (
    <PayPalScriptProvider options={{ "client-id": "YOUR_SANDBOX_CLIENT_ID" }}>
      {children}
    </PayPalScriptProvider>
  );
}
