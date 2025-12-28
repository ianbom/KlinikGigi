"use client";

import Link from "next/link";
import { useState } from "react";

export function BookingCalendar() {
    const [selectedTime, setSelectedTime] = useState("10:00");

    return (
        <>
            {/* Tabs Navigation */}
            <div className="bg-white rounded-xl shadow-sm border border-subtle-light mb-6 sticky top-[65px] z-40">
                <div className="flex overflow-x-auto hide-scrollbar border-b border-subtle-light px-2">
                    <Link href="#" className="flex-1 min-w-[100px] text-center py-4 text-sm font-medium text-gray-500 hover:text-primary transition-colors border-b-2 border-transparent">
                        Profil
                    </Link>
                    <Link href="#" className="flex-1 min-w-[100px] text-center py-4 text-sm font-medium text-gray-500 hover:text-primary transition-colors border-b-2 border-transparent">
                        Layanan
                    </Link>
                    <Link href="#" className="flex-1 min-w-[100px] text-center py-4 text-sm font-medium text-gray-500 hover:text-primary transition-colors border-b-2 border-transparent">
                        Review
                    </Link>
                    <Link href="#" className="flex-1 min-w-[100px] text-center py-4 text-sm font-bold text-primary border-b-2 border-primary">
                        Kalender
                    </Link>
                </div>
            </div>

            {/* Calendar Section */}
            <section className="flex flex-col md:flex-row gap-6">
                {/* Left: Calendar Picker */}
                <div className="flex-1 bg-white rounded-xl shadow-sm border border-subtle-light p-6 h-fit">
                    <div className="flex items-center justify-between mb-6">
                        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-600 cursor-pointer">
                            <span className="material-symbols-outlined">chevron_left</span>
                        </button>
                        <h3 className="text-lg font-bold text-text-light">Oktober 2023</h3>
                        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-600 cursor-pointer">
                            <span className="material-symbols-outlined">chevron_right</span>
                        </button>
                    </div>

                    {/* Calendar Grid */}
                    <div className="grid grid-cols-7 gap-y-2 mb-4">
                        {/* Weekday Headers */}
                        {['M', 'S', 'S', 'R', 'K', 'J', 'S'].map((day, i) => (
                            <div key={i} className="text-center text-xs font-bold text-gray-400 py-2">{day}</div>
                        ))}

                        {/* Days */}
                        {/* Empty slots */}
                        <div></div><div></div><div></div>

                        {/* Past Dates */}
                        {[1, 2, 3, 4].map(d => (
                            <button key={d} className="size-10 mx-auto flex items-center justify-center rounded-full text-gray-300 text-sm" disabled>{d}</button>
                        ))}

                        {/* Selected Date */}
                        <button className="size-10 mx-auto flex items-center justify-center rounded-full bg-primary text-white text-sm font-bold shadow-md shadow-primary/30 ring-2 ring-offset-2 ring-primary ring-offset-white cursor-pointer">5</button>

                        {/* Available Dates (Green) */}
                        {[6, 7, 8].map(d => (
                            <button key={d} className="size-10 mx-auto flex flex-col items-center justify-center rounded-full text-gray-700 hover:bg-emerald-50 text-sm font-medium transition-colors group cursor-pointer">
                                {d}
                                <span className="block size-1 bg-emerald-500 rounded-full mt-[2px] group-hover:scale-125 transition-transform"></span>
                            </button>
                        ))}

                        {/* Unavailable */}
                        <button className="size-10 mx-auto flex items-center justify-center rounded-full text-gray-300 text-sm" disabled>9</button>

                        {/* Limited (Orange) */}
                        <button className="size-10 mx-auto flex flex-col items-center justify-center rounded-full text-gray-700 hover:bg-orange-50 text-sm font-medium transition-colors group cursor-pointer">
                            10
                            <span className="block size-1 bg-orange-400 rounded-full mt-[2px] group-hover:scale-125 transition-transform"></span>
                        </button>

                        {/* More Dates mockup */}
                        {[11, 12, 14, 16, 17, 20].map(d => (
                            <button key={d} className="size-10 mx-auto flex flex-col items-center justify-center rounded-full text-gray-700 hover:bg-emerald-50 text-sm font-medium group cursor-pointer">
                                {d}
                                <span className="block size-1 bg-emerald-500 rounded-full mt-[2px]"></span>
                            </button>
                        ))}
                        <button className="size-10 mx-auto flex items-center justify-center rounded-full text-gray-300 text-sm" disabled>13</button>
                        <button className="size-10 mx-auto flex flex-col items-center justify-center rounded-full text-gray-700 hover:bg-orange-50 text-sm font-medium group cursor-pointer">
                            15
                            <span className="block size-1 bg-orange-400 rounded-full mt-[2px]"></span>
                        </button>
                        {/* ... simplified filler dates */}
                        <button className="size-10 mx-auto flex items-center justify-center rounded-full text-gray-300 text-sm" disabled>18</button>
                        <button className="size-10 mx-auto flex items-center justify-center rounded-full text-gray-300 text-sm" disabled>19</button>
                    </div>

                    {/* Legend */}
                    <div className="flex items-center justify-center gap-4 border-t border-subtle-light pt-4">
                        <div className="flex items-center gap-1.5">
                            <span className="size-2 rounded-full bg-emerald-500"></span>
                            <span className="text-xs text-gray-500">Tersedia</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <span className="size-2 rounded-full bg-orange-400"></span>
                            <span className="text-xs text-gray-500">Terbatas</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <span className="size-2 rounded-full bg-slate-300"></span>
                            <span className="text-xs text-gray-500">Penuh</span>
                        </div>
                    </div>
                </div>

                {/* Right: Time Slots */}
                <div className="w-full md:w-80 flex flex-col gap-4">
                    <div className="bg-white rounded-xl shadow-sm border border-subtle-light p-6 flex-1">
                        <h3 className="font-bold text-text-light mb-2">Jadwal Kamis, 5 Okt</h3>
                        <p className="text-sm text-gray-500 mb-6">Pilih jam konsultasi yang tersedia.</p>

                        <div className="space-y-4">
                            <div>
                                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Pagi</p>
                                <div className="grid grid-cols-2 gap-2">
                                    <button className="px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-700 hover:border-primary hover:text-primary bg-white transition-all cursor-pointer">
                                        09:00
                                    </button>
                                    <button className="px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-400 bg-gray-50 cursor-not-allowed line-through">
                                        09:30
                                    </button>
                                    <button className="px-4 py-2 rounded-lg bg-primary/10 border border-primary text-sm font-medium text-primary transition-all flex items-center justify-center gap-1 cursor-pointer">
                                        <span className="material-symbols-outlined text-[16px]">check</span>
                                        10:00
                                    </button>
                                    <button className="px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-700 hover:border-primary hover:text-primary bg-white transition-all cursor-pointer">
                                        10:30
                                    </button>
                                </div>
                            </div>

                            <div>
                                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Siang</p>
                                <div className="grid grid-cols-2 gap-2">
                                    <button className="px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-700 hover:border-primary hover:text-primary bg-white transition-all cursor-pointer">
                                        13:00
                                    </button>
                                    <button className="px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-700 hover:border-primary hover:text-primary bg-white transition-all cursor-pointer">
                                        13:30
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 p-4 bg-blue-50 rounded-lg flex items-start gap-3 border border-blue-100">
                            <span className="material-symbols-outlined text-primary text-lg mt-0.5">info</span>
                            <p className="text-xs text-gray-600 leading-relaxed">
                                Pemesanan Anda akan diverifikasi melalui WhatsApp setelah pembayaran. Harap datang 15 menit sebelum jadwal.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
