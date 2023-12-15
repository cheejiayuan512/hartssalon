import { Metadata } from 'next'
import AboutPage from "@/app/about/page";

// either Static metadata
export const metadata: Metadata = {
    title: 'HARTS Salon - Contact Us',
}

export default function Page() { return <AboutPage/>}
