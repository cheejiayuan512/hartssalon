import {Services} from "@/components/Services/Services";
import {Metadata} from "next";
export const metadata: Metadata = {
    title: 'HARTS Salon - Services',
}

export default function ServicesPage() {
  return (
    <>
      <Services />
    </>
  );
}
