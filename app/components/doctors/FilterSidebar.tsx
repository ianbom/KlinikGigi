export function FilterSidebar() {
    return (
        <aside className="w-full lg:w-72 flex-shrink-0 space-y-6">
            <div className="bg-white border border-subtle-light rounded-xl p-5 shadow-sm sticky top-24">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="font-bold text-lg text-text-light">Filter Pencarian</h3>
                    <button className="text-xs font-medium text-primary hover:text-primary-dark cursor-pointer">Reset</button>
                </div>

                {/* Filter: Specialization */}
                <div className="mb-6">
                    <label className="flex items-center gap-2 mb-3 text-sm font-semibold text-text-light">
                        <span className="material-symbols-outlined text-primary text-[20px]">medical_services</span>
                        Spesialisasi
                    </label>
                    <div className="space-y-2.5">
                        {[
                            "Dokter Gigi Umum",
                            "Ortodonti (Kawat Gigi)",
                            "Konservasi Gigi",
                            "Bedah Mulut",
                            "Pedodonti (Anak)"
                        ].map((spec, idx) => (
                            <label key={idx} className="flex items-center gap-3 cursor-pointer group">
                                <input
                                    type="checkbox"
                                    className="rounded border-gray-300 text-primary focus:ring-primary/25"
                                    defaultChecked={spec.includes("Ortodonti")}
                                />
                                <span className="text-sm text-gray-600 group-hover:text-primary transition-colors">{spec}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <hr className="border-subtle-light mb-6" />

                {/* Filter: Location */}
                <div className="mb-6">
                    <label className="flex items-center gap-2 mb-3 text-sm font-semibold text-text-light">
                        <span className="material-symbols-outlined text-primary text-[20px]">location_on</span>
                        Lokasi Klinik
                    </label>
                    <select className="w-full rounded-lg border-gray-200 bg-gray-50 text-sm focus:border-primary focus:ring-primary/25 p-2.5">
                        <option>Semua Cabang</option>
                        <option>Jakarta Selatan</option>
                        <option>Jakarta Pusat</option>
                        <option>Tangerang Selatan</option>
                    </select>
                </div>

                <hr className="border-subtle-light mb-6" />

                {/* Filter: Price */}
                <div className="mb-6">
                    <label className="flex items-center gap-2 mb-3 text-sm font-semibold text-text-light">
                        <span className="material-symbols-outlined text-primary text-[20px]">payments</span>
                        Range Harga
                    </label>
                    <div className="px-1">
                        <input
                            type="range"
                            min="100"
                            max="2000"
                            defaultValue="500"
                            className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                        />
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-gray-400">
                        <span>Rp 100rb</span>
                        <span>Rp 2jt+</span>
                    </div>
                </div>

                <hr className="border-subtle-light mb-6" />

                {/* Filter: Rating */}
                <div className="mb-2">
                    <label className="flex items-center gap-2 mb-3 text-sm font-semibold text-text-light">
                        <span className="material-symbols-outlined text-primary text-[20px]">star</span>
                        Rating
                    </label>
                    <div className="space-y-2">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="radio"
                                name="rating"
                                className="text-primary focus:ring-primary/25 border-gray-300"
                            />
                            <div className="flex text-yellow-400 text-sm">
                                {[1, 2, 3, 4].map(i => (
                                    <span key={i} className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                ))}
                                <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                            </div>
                            <span className="text-xs text-gray-500">& Up</span>
                        </label>
                    </div>
                </div>
            </div>
        </aside>
    );
}
