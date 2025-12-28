export function ReviewBookingCard() {
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            {/* Card Header */}
            <div className="px-6 py-4 border-b border-gray-100 bg-gray-50/50 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-xl">receipt_long</span>
                <h3 className="font-semibold text-text-light">Ringkasan Booking</h3>
            </div>

            {/* Card Body */}
            <div className="p-6">
                {/* Doctor & Service Highlight */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8 pb-8 border-b border-dashed border-gray-200">
                    <div className="size-16 rounded-full bg-gray-100 overflow-hidden flex-shrink-0 relative">
                        <div
                            className="w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBVIYNFURx5wk70fucsDVezNaTHRE0tQyR9IUPnDlkUsD_zmNwkbtXqfvvaCcDf4Ue0z0Ja5U4i74ne0AQpm2i6FV6413VWAIvEhVy21_Fpr6B5Zf5UzdOf6kHMaBTDy4yipQNdvjZimgD7dgYo-Rk_i9MT-PujOf8fXW90rdejkHiggbN4qruwYTc7-1COc1riXfdscdfHykCwybH00Eb58lNXzK79rKZ5o-5nVffASRcfBe2P3IyI4xUSyCY9eMIPqz8-TquYIcGE")' }}
                        ></div>
                    </div>
                    <div className="flex-1">
                        <p className="text-sm text-primary font-medium mb-1">Dokter Pilihan</p>
                        <h4 className="text-lg font-bold text-text-light">Drg. Budi Santoso</h4>
                        <p className="text-sm text-gray-500">Spesialis Konservasi Gigi</p>
                    </div>
                    <div className="mt-4 sm:mt-0 px-4 py-2 bg-primary/10 rounded-lg text-primary text-sm font-semibold">
                        Scaling Gigi
                    </div>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                    {/* Date */}
                    <div className="group">
                        <div className="flex items-center gap-2 text-gray-500 text-sm mb-1">
                            <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                            <span>Tanggal</span>
                        </div>
                        <p className="font-medium text-text-light pl-7">Senin, 24 Oktober 2023</p>
                    </div>
                    {/* Time */}
                    <div className="group">
                        <div className="flex items-center gap-2 text-gray-500 text-sm mb-1">
                            <span className="material-symbols-outlined text-[18px]">schedule</span>
                            <span>Waktu</span>
                        </div>
                        <p className="font-medium text-text-light pl-7">14:00 WIB</p>
                    </div>
                    {/* Patient Name */}
                    <div className="group">
                        <div className="flex items-center gap-2 text-gray-500 text-sm mb-1">
                            <span className="material-symbols-outlined text-[18px]">person</span>
                            <span>Nama Pasien</span>
                        </div>
                        <p className="font-medium text-text-light pl-7">Budi Utomo</p>
                    </div>
                    {/* WhatsApp */}
                    <div className="group">
                        <div className="flex items-center gap-2 text-gray-500 text-sm mb-1">
                            <span className="material-symbols-outlined text-[18px]">chat</span>
                            <span>Nomor WhatsApp</span>
                        </div>
                        <div className="flex items-center gap-2 pl-7">
                            <p className="font-medium text-text-light">+62 812-3456-7890</p>
                            <span className="material-symbols-outlined text-green-500 text-[18px]" title="Verified">verified</span>
                        </div>
                    </div>
                    {/* Email */}
                    <div className="group sm:col-span-2">
                        <div className="flex items-center gap-2 text-gray-500 text-sm mb-1">
                            <span className="material-symbols-outlined text-[18px]">mail</span>
                            <span>Email</span>
                        </div>
                        <p className="font-medium text-text-light pl-7">budi@example.com</p>
                    </div>
                    {/* Complaint */}
                    <div className="group sm:col-span-2">
                        <div className="flex items-center gap-2 text-gray-500 text-sm mb-1">
                            <span className="material-symbols-outlined text-[18px]">sticky_note_2</span>
                            <span>Keluhan</span>
                        </div>
                        <div className="pl-7">
                            <p className="font-medium text-text-light">Gigi terasa ngilu saat minum dingin</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Note */}
            <div className="bg-primary/5 px-6 py-3 border-t border-primary/10 flex gap-3 items-start">
                <span className="material-symbols-outlined text-primary text-xl mt-0.5">info</span>
                <p className="text-xs text-gray-600 leading-relaxed">
                    Mohon cek kembali data Anda. Setelah konfirmasi, kami akan mengirimkan detail booking melalui WhatsApp untuk verifikasi.
                </p>
            </div>
        </div>
    );
}
