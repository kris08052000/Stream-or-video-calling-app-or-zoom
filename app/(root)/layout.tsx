import { StreamVideoProvider } from "@/providers/StreamClientProvider";
import type { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
    title: "Stream",
    description: "Video call app",
  };

const RootLayout = ({children}:{children : ReactNode}) => {
    return (
        <main>
            <StreamVideoProvider>
            {children}
            </StreamVideoProvider>
        </main>
    )
}

export default RootLayout