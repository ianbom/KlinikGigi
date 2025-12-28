"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export function CustomerDataForm() {
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.push("review"); // Next step
    };

    return (
        <div className="flex flex-col gap-6">
            {/* Page Heading */}
            <div className="flex flex-col gap-2 border-b border-subtle-light pb-6">
                <h1 className="text-text-light text-3xl font-bold leading-tight">Isi Data Diri</h1>
                <p className="text-gray-500 text-sm">Pastikan nomor WhatsApp aktif untuk verifikasi pesanan dan notifikasi jadwal.</p>
            </div>

            {/* Form Fields */}
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                {/* Nama Lengkap */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="flex flex-col gap-2">
                        <label className="text-text-light text-sm font-medium" htmlFor="fullname">Nama Lengkap*</label>
                        <input className="flex w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-base text-text-light placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary h-12 transition-shadow" id="fullname" placeholder="Masukkan nama lengkap Anda sesuai KTP" type="text" required />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-text-light text-sm font-medium" htmlFor="nik">NIK*</label>
                        <input className="flex w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-base text-text-light placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary h-12 transition-shadow" id="fullname" placeholder="Masukkan NIK Anda sesuai KTP" type="text" required />
                    </div>
                </div>
                

                {/* Nomor WhatsApp & Email Grid */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {/* Nomor WhatsApp */}
                    <div className="flex flex-col gap-2">
                        <label className="text-text-light text-sm font-medium" htmlFor="whatsapp">Nomor WhatsApp*</label>
                        <div className="relative">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                                <span className="text-gray-500 font-medium">+62</span>
                                <div className="ml-2 h-4 w-px bg-gray-300"></div>
                            </div>
                            <input className="flex w-full rounded-lg border border-gray-200 bg-white py-3 pl-[70px] pr-4 text-base text-text-light placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary h-12 transition-shadow" id="whatsapp" placeholder="812-3456-7890" type="tel" required />
                        </div>
                        <p className="text-xs text-gray-400 mt-1">Kami akan mengirimkan kode verifikasi.</p>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                        <label className="text-text-light text-sm font-medium" htmlFor="email">Email <span className="text-gray-400 font-normal">(Opsional)</span></label>
                        <input className="flex w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-base text-text-light placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary h-12 transition-shadow" id="email" placeholder="contoh@email.com" type="email" />
                    </div>
                </div>

                {/* Keluhan / Catatan */}
                <div className="flex flex-col gap-2">
                    <label className="text-text-light text-sm font-medium" htmlFor="notes">Keluhan / Catatan <span className="text-gray-400 font-normal">(Opsional)</span></label>
                    <textarea className="flex w-full resize-none rounded-lg border border-gray-200 bg-white px-4 py-3 text-base text-text-light placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" id="notes" placeholder="Jelaskan keluhan singkat atau catatan khusus untuk dokter..." rows={4}></textarea>
                </div>

                {/* CTA Button */}
                <div className="mt-4 pt-4 border-t border-subtle-light flex justify-end">
                    <Link href={'/doctors/1/booking/customer-data/review'}>
                    
                    <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3 text-white font-bold transition-all hover:bg-primary-dark focus:ring-4 focus:ring-primary/20 md:w-auto cursor-pointer" type="submit">
                        <span>Lanjut ke Review</span>
                        <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                    </button>
                    </Link>
                </div>
            </form>
        </div>
    );
}
