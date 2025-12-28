import Link from "next/link";

export function BookingSummarySidebar() {
    return (
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden flex flex-col">
            <div className="p-5 border-b border-gray-100 bg-gray-50/50">
                <h3 className="text-lg font-bold text-text-light">Ringkasan Booking</h3>
            </div>
            <div className="p-5 flex flex-col gap-6">
                {/* Doctor Info */}
                <div className="flex items-start gap-4">
                    <div className="relative size-14 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                        <div
                            className="w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuApW_3NI5Wm2Okew-9ypQ8oARfEXE2lNzSda2zzBO042Wy_MhqUetM8Hb21a35DexANsCUXVChWqwaUtLrFtdLCd7Oi3-oPFWYYK4JaFz4wfUJGsjPSPdAdd5kxhTAtIc8KICICWGJtkT0-W_aY3Z_SMe-uUGgks-EiNgy0zCTTDjrgksbEVpDPLAA_FHF_ImvuHifXKtN0Co3QWmjsKQOfK9ntxLlBrraakX4IeHOdv1CIHaU9q70_NPWQxGBls717OC3Pm_1QFwCb")' }}
                        ></div>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-0.5">Dokter Gigi</span>
                        <p className="font-bold text-text-light">Drg. Siti Aminah</p>
                        <p className="text-sm text-gray-500">Spesialis Ortodonti</p>
                    </div>
                </div>
                <hr className="border-gray-100" />

                {/* Booking Details */}
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <span className="text-xs text-gray-500 font-medium">Layanan</span>
                        <div className="flex justify-between items-center">
                            <p className="font-medium text-text-light">Scaling Gigi (Pembersihan Karang)</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-xs text-gray-500 font-medium">Waktu Konsultasi</span>
                        <div className="flex items-center gap-2 text-text-light">
                            <span className="material-symbols-outlined text-[18px] text-primary">calendar_today</span>
                            <p className="font-medium">Kamis, 12 Okt 2023</p>
                        </div>
                        <div className="flex items-center gap-2 text-text-light mt-1">
                            <span className="material-symbols-outlined text-[18px] text-primary">schedule</span>
                            <p className="font-medium">10:00 - 11:00 WIB</p>
                        </div>
                    </div>
                </div>

                {/* PRICE SECTION REMOVED AS REQUESTED */}

            </div>
            <div className="p-5 pt-2">
                <Link href="./booking/customer-data" className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3.5 px-4 rounded-lg transition-colors shadow-md shadow-primary/20 flex items-center justify-center gap-2 group cursor-pointer">
                    <span>Lanjut ke Data Customer</span>
                    <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
            </div>
        </div>
    );
}
