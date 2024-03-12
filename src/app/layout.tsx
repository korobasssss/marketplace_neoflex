import type {Metadata} from "next";
import {Inter} from "next/font/google";
import ".//globals.scss";
import React from "react";
import {Providers} from "@/app/Provider";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Marketplace",
    description: "",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Providers>
            <html lang="en">
            <body className={inter.className}>{children}</body>
            </html>
        </Providers>
    );
}
