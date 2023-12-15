import { Metadata } from 'next'
import ContactPage from "@/app/contact-us/page";

// either Static metadata
export const metadata: Metadata = {
    title: 'HARTS Salon - Contact Us',
}

export default function Page() { return <ContactPage/>}
