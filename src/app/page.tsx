'use client'

import { useRouter } from 'next/navigation'
import {Path} from "@/app/path";

export default function Home() {

    const router = useRouter();
    router.push(Path.PRODUCTS)
}
