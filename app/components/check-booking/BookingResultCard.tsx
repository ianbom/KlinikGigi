export function BookingResultCard() {
    return (
        <div className="bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-border-light overflow-hidden transition-colors duration-200 animate-fade-in">
            {/* Header Status */}
            <div className="bg-green-50 border-b border-green-100 px-6 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center gap-3">
                    <div className="size-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                        <span className="material-symbols-outlined">check_circle</span>
                    </div>
                    <div>
                        <p className="text-sm text-text-sub-light font-medium">Status Booking</p>
                        <p className="text-lg font-bold text-green-700 leading-tight">Terkonfirmasi</p>
                    </div>
                </div>
                <div className="text-right sm:text-left">
                    <p className="text-sm text-text-sub-light">Kode Booking</p>
                    <p className="text-lg font-mono font-bold text-text-main-light">#BKG-8821</p>
                </div>
            </div>

            {/* Booking Details Grid */}
            <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column: Patient Info */}
                <div className="space-y-6">
                    <h3 className="text-sm uppercase tracking-wider font-bold text-text-sub-light border-b border-border-light pb-2 mb-4">Informasi Pasien</h3>
                    <div className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-primary mt-0.5">person</span>
                        <div>
                            <p className="text-xs text-text-sub-light font-medium">Nama Pasien</p>
                            <p className="text-base font-semibold text-text-main-light">Sarah Wijaya</p>
                        </div>
                    </div>

                    {/* ADDED NIK FIELD AS REQUESTED */}
                    <div className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-primary mt-0.5">badge</span>
                        <div>
                            <p className="text-xs text-text-sub-light font-medium">NIK</p>
                            <p className="text-base font-semibold text-text-main-light">3171234567890001</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-primary mt-0.5">smartphone</span>
                        <div>
                            <p className="text-xs text-text-sub-light font-medium">Nomor WhatsApp</p>
                            <p className="text-base font-semibold text-text-main-light">0812-****-7890</p>
                        </div>
                    </div>
                </div>

                {/* Right Column: Appointment Info */}
                <div className="space-y-6">
                    <h3 className="text-sm uppercase tracking-wider font-bold text-text-sub-light border-b border-border-light pb-2 mb-4">Detail Janji Temu</h3>
                    <div className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-primary mt-0.5">medical_services</span>
                        <div>
                            <p className="text-xs text-text-sub-light font-medium">Layanan</p>
                            <p className="text-base font-semibold text-text-main-light">Scaling Gigi & Konsultasi</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-primary mt-0.5">stethoscope</span>
                        <div>
                            <p className="text-xs text-text-sub-light font-medium">Dokter</p>
                            <p className="text-base font-semibold text-text-main-light">Dr. Budi Santoso, Sp.KG</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-primary mt-0.5">calendar_clock</span>
                        <div>
                            <p className="text-xs text-text-sub-light font-medium">Jadwal</p>
                            <p className="text-base font-semibold text-text-main-light">Kamis, 24 Okt 2023</p>
                            <p className="text-sm text-text-sub-light">Pukul 10:00 WIB</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Payment Note */}
            <div className="mx-6 md:mx-8 mb-6 p-4 bg-blue-50 rounded-lg border border-blue-100 flex gap-3">
                <span className="material-symbols-outlined text-blue-600 shrink-0">info</span>
                <div>
                    <p className="text-sm font-bold text-blue-800">Informasi Pembayaran</p>
                    <p className="text-sm text-blue-700 mt-1">Pembayaran dilakukan secara manual (Tunai/QRIS/Transfer) saat Anda tiba di klinik. Mohon datang 15 menit sebelum jadwal.</p>
                </div>
            </div>

            {/* Actions Footer */}
            <div className="bg-white border-t border-border-light px-6 py-4 flex flex-col sm:flex-row justify-end items-center gap-4">
                <button className="w-full sm:w-auto px-4 py-2 rounded-lg border border-red-200 text-red-600 hover:bg-red-50 text-sm font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer">
                    <span className="material-symbols-outlined text-[18px]">cancel</span>
                    Batalkan Booking
                </button>
                <button className="w-full sm:w-auto px-4 py-2 rounded-lg bg-background-light border border-border-light hover:bg-gray-100 text-text-main-light text-sm font-semibold transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer">
                    <span className="material-symbols-outlined text-[18px]">chat</span>
                    Hubungi Admin
                </button>
                <button className="w-full sm:w-auto px-4 py-2 rounded-lg bg-primary hover:bg-primary-dark text-white text-sm font-bold shadow-sm transition-colors flex items-center justify-center gap-2 cursor-pointer">
                    <span className="material-symbols-outlined text-[18px]">print</span>
                    Cetak Bukti
                </button>
            </div>
        </div>
    );
}
