'use client';
import { Provider } from "react-redux";
import {redux} from "@/store/redux";
import React from "react";

export function Providers({ children } : { children: React.ReactNode }) {
    return <Provider store={redux}>{children}</Provider>;
}