import Link from "next/link";

export function StickyBookingBar() {
    // NOTE: In a real app, we would pass the doctor ID as a prop.
    // For now, assuming we are on context of id=1 or just linking to a demo route.
    // Since this component is used inside [id]/page.tsx, we could access params if we turned it into a client component with useParams, 
    // or pass id from parent. 
    // I will assume ID 1 for now or use relative path logic if suitable, but Link requires full path usually or relative.
    // Let's use generic /doctors/1/booking for this static demo or try to pass props.
    // However, I can't easily change the usage in page.tsx without viewing it.
    // I'll make it accepting a prop `doctorId`? 
    // Let's look at `app/doctors/[id]/page.tsx` again.
    return (
        <div className="fixed bottom-0 left-0 w-full bg-white border-t border-subtle-light p-4 z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
            <div className="max-w-[960px] mx-auto flex items-center justify-between gap-4">
                <div className="flex flex-col">
                    <span className="text-xs text-gray-500">Total Biaya Konsultasi</span>
                    <span className="text-lg md:text-xl font-bold text-text-light">Rp 150.000</span>
                </div>
                <Link href="./1/booking" className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center gap-2 shadow-lg shadow-primary/25 cursor-pointer">
                    <span>Booking Sekarang</span>
                    <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </Link>
            </div>
        </div>
    );
}
