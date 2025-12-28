import { DoctorProfileHeader } from "@/app/components/doctor-detail/DoctorProfileHeader";
import { BookingCalendar } from "@/app/components/doctor-detail/BookingCalendar";
import { StickyBookingBar } from "@/app/components/doctor-detail/StickyBookingBar";

export function generateStaticParams() {
    // Mock generating params for id 1-6 for now
    return [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }, { id: '5' }, { id: '6' }];
}

export default function DoctorDetailPage({ params }: { params: { id: string } }) {
    return (
        <div className="flex-grow w-full max-w-[960px] mx-auto px-4 py-8 pb-24 font-display">
            <DoctorProfileHeader />
            <BookingCalendar />
            <div className="h-20"></div>
            <StickyBookingBar />
        </div>
    );
}
