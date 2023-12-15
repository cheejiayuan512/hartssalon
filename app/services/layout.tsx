import { Metadata } from 'next'
import ServicesPage from "@/app/services/page";

// either Static metadata
export const metadata: Metadata = {
    title: 'HARTS Salon - Services',
}

export default function Page() { return <ServicesPage/>}
