export function BookingDetailsCard() {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-8">
            <div className="px-6 py-4 border-b border-gray-100 bg-gray-50/50 flex justify-between items-center">
                <h3 className="text-lg font-bold text-text-light">Detail Booking</h3>
                <div className="flex gap-2">
                    <button className="text-gray-400 hover:text-primary transition-colors cursor-pointer" title="Download PDF">
                        <span className="material-symbols-outlined">download</span>
                    </button>
                    <button className="text-gray-400 hover:text-primary transition-colors cursor-pointer" title="Print">
                        <span className="material-symbols-outlined">print</span>
                    </button>
                </div>
            </div>
            <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                    <div className="flex flex-col gap-1">
                        <span className="text-sm text-gray-500">Nama Pasien</span>
                        <span className="font-medium text-text-light">Budi Santoso</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-sm text-gray-500">Dokter</span>
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-gray-200 overflow-hidden relative">
                                <div className="absolute inset-0 bg-primary/20 flex items-center justify-center text-[10px] font-bold text-primary">DR</div>
                            </div>
                            <span className="font-medium text-text-light">Drg. Andi Saputra</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-sm text-gray-500">Jenis Perawatan</span>
                        <span className="font-medium text-text-light">Scaling Gigi & Polishing</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-sm text-gray-500">Jadwal</span>
                        <span className="font-medium text-text-light">Senin, 24 Okt 2023 - 10:00 WIB</span>
                    </div>

                    {/* PRICE SECTION REMOVED AS REQUESTED */}

                </div>
            </div>
        </div>
    );
}
