import type {Metadata} from "next";
import {Montserrat} from "next/font/google";
import "./scss/globals/globals.scss";
import React from "react";
import {Providers} from "@/app/Provider";

const inter = Montserrat({subsets: ["latin"]});

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
