import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-white pt-16 pb-8 border-t border-subtle-light">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2 text-primary">
                            <span className="material-symbols-outlined text-3xl">dentistry</span>
                            <span className="text-xl font-bold text-text-light">DentalCare</span>
                        </div>
                        <p className="text-gray-500 text-sm">Klinik gigi terpercaya dengan standar pelayanan internasional dan teknologi modern.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-text-light mb-4">Navigasi</h4>
                        <ul className="flex flex-col gap-2 text-sm text-gray-500">
                            <li><Link href="#" className="hover:text-primary transition-colors">Beranda</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Dokter Kami</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Layanan</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Tentang Kami</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Cek Booking</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-text-light mb-4">Layanan</h4>
                        <ul className="flex flex-col gap-2 text-sm text-gray-500">
                            <li><Link href="#" className="hover:text-primary transition-colors">Cabut Gigi</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Tambal Gigi</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Scaling</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Kawat Gigi</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Pemutihan Gigi</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-text-light mb-4">Kontak</h4>
                        <ul className="flex flex-col gap-3 text-sm text-gray-500">
                            <li className="flex items-start gap-2">
                                <span className="material-symbols-outlined text-primary text-lg">location_on</span>
                                <span>Jl. Kesehatan No. 123,<br />Jakarta Selatan, Indonesia</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary text-lg">call</span>
                                <span>+62 812 3456 7890</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary text-lg">schedule</span>
                                <span>Senin - Sabtu: 09:00 - 20:00</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-subtle-light pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-400">© 2023 DentalCare Clinic. All rights reserved.</p>
                    <div className="flex gap-4">
                        <Link href="#" className="text-gray-400 hover:text-primary transition-colors"><span className="sr-only">Facebook</span>FB</Link>
                        <Link href="#" className="text-gray-400 hover:text-primary transition-colors"><span className="sr-only">Instagram</span>IG</Link>
                        <Link href="#" className="text-gray-400 hover:text-primary transition-colors"><span className="sr-only">Twitter</span>TW</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
