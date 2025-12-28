import Link from "next/link";
import { DoctorCard } from "@/app/components/doctors/DoctorCard";
import { FilterSidebar } from "@/app/components/doctors/FilterSidebar";
import { Pagination } from "@/app/components/doctors/Pagination";
import { FloatingWhatsApp } from "@/app/components/layout/FloatingWhatsApp";
import { getDoctors } from "@/lib/doctors";

export default function DoctorPage() {
    const doctors = getDoctors();

    return (
        <div className="flex-grow bg-background-light min-h-screen font-display">
            <div className="mx-auto max-w-[1280px] px-4 lg:px-8 py-6">
                {/* Breadcrumbs */}
                <div className="flex items-center gap-2 text-sm mb-6">
                    <Link href="/" className="text-gray-500 hover:text-primary transition-colors">Beranda</Link>
                    <span className="text-gray-300">/</span>
                    <span className="font-medium text-text-light">Cari Dokter</span>
                </div>

                {/* Page Heading & Search */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                    <div className="max-w-xl">
                        <h1 className="text-3xl md:text-4xl font-bold text-text-light mb-2">Temukan Dokter Gigi Terbaik</h1>
                        <p className="text-gray-500">Pilih dokter spesialis berpengalaman untuk senyum sehat Anda.</p>
                    </div>
                    <div className="w-full md:w-auto md:min-w-[400px]">
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <span className="material-symbols-outlined text-gray-400">search</span>
                            </div>
                            <input
                                type="text"
                                className="block w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-primary/50 focus:border-primary placeholder:text-gray-400 transition-shadow shadow-sm"
                                placeholder="Cari nama dokter, spesialisasi, atau keluhan..."
                            />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 items-start">
                    {/* SideNavBar / Filters */}
                    <FilterSidebar />

                    {/* Doctor Grid */}
                    <div className="flex-1 w-full">
                        {/* Sorting & Count */}
                        <div className="flex items-center justify-between mb-6 bg-white p-4 rounded-xl border border-subtle-light">
                            <p className="text-sm text-gray-500"><span className="font-bold text-text-light">{doctors.length} Dokter</span> ditemukan</p>
                            <div className="flex items-center gap-2">
                                <label className="text-sm text-gray-500 hidden sm:block">Urutkan:</label>
                                <select className="text-sm border-none bg-transparent font-medium text-text-light focus:ring-0 cursor-pointer p-0 pr-8">
                                    <option>Rekomendasi</option>
                                    <option>Harga Terendah</option>
                                    <option>Rating Tertinggi</option>
                                </select>
                            </div>
                        </div>

                        {/* Grid Content */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                            {doctors.map(doctor => (
                                <DoctorCard key={doctor.id} doctor={doctor} />
                            ))}
                        </div>

                        {/* Pagination */}
                        <Pagination />
                    </div>
                </div>
            </div>
            <FloatingWhatsApp />
        </div>
    );
}
