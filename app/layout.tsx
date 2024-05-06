import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Toaster } from "@/components/ui/toaster"
import "@stream-io/video-react-sdk/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stream",
  description: "Video call app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider 
    appearance={{
      layout: {
        socialButtonsVariant: "iconButton",
        logoImageUrl: "/icons/logo.svg",
      },
      variables: {
        colorText: "#fff",
        colorPrimary: "#0E78F9",
        colorBackground: "#1C1F2E",
        colorInputBackground: "#252A41",
        colorInputText: "#fff",
      },
    }}
    >
    <html lang="en">
      <body className={`${inter.className} bg-dark-2`}>
        <Toaster/>
        {children}
        </body>
    </html>
    </ClerkProvider>
  );
}
