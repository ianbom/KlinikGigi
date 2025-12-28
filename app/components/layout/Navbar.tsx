"use client";

import Link from "next/link";
import { useState } from "react";

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-subtle-light bg-background-light/95 backdrop-blur-sm">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center size-8 rounded-lg bg-primary/10 text-primary">
                            <span className="material-symbols-outlined text-2xl">dentistry</span>
                        </div>
                        <h2 className="text-lg font-bold tracking-tight text-text-light">
                            DentalCare
                        </h2>
                    </div>

                    <nav className="hidden md:flex items-center gap-8">
                        <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">Beranda</Link>
                        <Link href="/doctors" className="text-sm font-medium hover:text-primary transition-colors">Dokter</Link>
                        <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">Layanan</Link>
                        <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">Tentang</Link>
                        <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">Cek Booking</Link>
                    </nav>

                    <div className="flex items-center gap-4">
                        <button className="hidden md:flex items-center justify-center h-10 px-6 rounded-lg bg-primary hover:bg-primary-dark text-white text-sm font-bold transition-colors shadow-sm cursor-pointer">
                            Booking Sekarang
                        </button>
                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 text-text-light cursor-pointer"
                        >
                            <span className="material-symbols-outlined">menu</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden border-t border-subtle-light bg-background-light px-4 py-4 shadow-lg">
                    <nav className="flex flex-col gap-4">
                        <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">Beranda</Link>
                        <Link href="/doctors" className="text-sm font-medium hover:text-primary transition-colors">Dokter</Link>
                        <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">Layanan</Link>
                        <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">Tentang</Link>
                        <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">Cek Booking</Link>
                        <button className="flex items-center justify-center h-10 px-6 rounded-lg bg-primary hover:bg-primary-dark text-white text-sm font-bold transition-colors shadow-sm w-full cursor-pointer">
                            Booking Sekarang
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
}
