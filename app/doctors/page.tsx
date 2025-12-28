import Link from "next/link";
import { DoctorCard } from "@/app/components/doctors/DoctorCard";
import { FilterSidebar } from "@/app/components/doctors/FilterSidebar";
import { Pagination } from "@/app/components/doctors/Pagination";
import { FloatingWhatsApp } from "@/app/components/layout/FloatingWhatsApp";

// Dummy Data matching the HTML content
const doctors = [
    {
        id: 1,
        name: "drg. Sarah Wijaya",
        specialty: "Spesialis Kawat Gigi",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDSqhKWAxFe25vN2yY0h5YHcFdzQX5M_Ayn7sKBRgueeTILkqH48pfDpxyMLsLDSKS1f77sl6XEPcek1b8vmKczbKmm5mILtFAClbPdDlL5rfgeA-W0wKuX70llL38cibW-2MJ1rBdQtsc3L-QNvXdlpGhbfLAmsPD3lW-x094CcMOAvIxgCidNcOvki7sMK14UOkRL2hKB-jq6ZfpjogXlnuMsq0Cpke0PgFXCR4gJWQXXs7pH6EB2zJhtrDXjrmfPBI1uIPBfgKv7",
        rating: 4.9,
        reviews: 128,
        location: "Jakarta Selatan",
        days: "Senin, Rabu, Jumat",
        price: "Rp 350.000",
        badge: {
            text: "Ortodonti",
            colorClass: "bg-blue-50 text-blue-700",
            dotClass: "bg-green-500"
        }
    },
    {
        id: 2,
        name: "drg. Budi Santoso",
        specialty: "Spesialis Bedah Mulut",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnFIPLxd4MPoX0Yv40h2fSotX4noV2mzPZf3op3byj-j4kEFUS9XGNZKgUaNQ8GrluyBsh2a8Lq-oJTUtJ0WrAwHfwTdVT5H_07E_6F03R8eSPCSpDYrOABMWuqMA0o8ZaVsW3HlqN3Mp6BH3-QdjKJ6je-4yxSD4rbF38J8wuxDR-VdDnFAk5kcE1G28q5MvCPvhWvpIxXBzdAG0haRxhyP6IGXNGbrpmwfhUiWomG-o1_9cMi-9nUt-wjIjZkJAIK-WWMVlxN1jC",
        rating: 5.0,
        reviews: 84,
        location: "Jakarta Pusat",
        days: "Selasa, Kamis",
        price: "Rp 500.000",
        badge: {
            text: "Bedah Mulut",
            colorClass: "bg-emerald-50 text-emerald-700",
            dotClass: "bg-green-500"
        }
    },
    {
        id: 3,
        name: "drg. Amanda Putri",
        specialty: "Spesialis Gigi Anak",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhcqKGp8Sbuh-4Dyp9Wn7FriIiXir-y4MefrRpAZgO-gA6zYJwzU6-HvVxW2aJvJYaUPXwSFs6mlg5OxBLL2ICiBTAeiHI7zEt_n5euRqPR4LMKphssBnBDyFLxsrc5TY9isqvepUedRoUg0eKOScUqte_AC8Qli4N2ySyfL2RbuFbe5rggOK7Z4lTfggq4Nu7sB7iSEIW6A57ZmjR4d1fD5_z0rcn_D4W8Qhcvflr56gkljqYResvvzH_iW-Zfs9RDIrQSKdqE9oP",
        rating: 4.8,
        reviews: 210,
        location: "Tangerang Selatan",
        days: "Senin - Jumat",
        price: "Rp 200.000",
        badge: {
            text: "Pedodonti",
            colorClass: "bg-pink-50 text-pink-700",
            dotClass: "bg-gray-300" // Simulated inactive/away status from HTML (gray dot)
        }
    },
    {
        id: 4,
        name: "drg. Kevin Tan",
        specialty: "Dokter Gigi Umum",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMXaU5_JeMJwDVi0K0TFCYGxu-a3FOTn3CRL7x4g8-mQCu2uIM_B7-9lUols68mM_6W5iM8gZYFlh6S4DC3fff6693Mxf5eEvlDxbw_9pElL3FgIKnfOa2N7rwKvqWR8zbYKIo1rABa7zAhYuU_-gvagJgDoudFijpUbFYuzSTtEWiu6iGwSfdR1O1_-Ph8cR7RsP8LqO-qSduWCz3GtvmDyTnhqjti1YPY4CtBhsPMTG4iACTtdn8GXJFXzp9DE567JkIsIfPuphC",
        rating: 4.7,
        reviews: 56,
        location: "Jakarta Selatan",
        days: "Sabtu - Minggu",
        price: "Rp 150.000",
        badge: {
            text: "Umum",
            colorClass: "bg-gray-100 text-gray-700",
            dotClass: "bg-green-500"
        }
    },
    {
        id: 5,
        name: "drg. Linda Kurnia",
        specialty: "Spesialis Konservasi Gigi",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAs_6drgCM2lE4JghvaELk-RYD6sz9qGOGPg7xrYSgo1-rk3F_nhivFScv1bxSptord82y3zLsYQFX1RDPqXluyTRouHdJ3FxPRjRjyxvGMSYpZhqlwIEgdO4Dr-n9TzuAPwSbByfg2DBj5ccJwvpZkTDxpj3-sP6ZGKsgPIXpqgbexegd97wbED0_XYD88lHc-qqoJI2fTsbXhai3rhGj-c3PuekX-FBp0jOATynGkcHJlj0rLmNz3yYuFp73b_VN9l_pD8uF_wsoG",
        rating: 4.9,
        reviews: 92,
        location: "Jakarta Pusat",
        days: "Senin - Kamis",
        price: "Rp 400.000",
        badge: {
            text: "Konservasi",
            colorClass: "bg-purple-50 text-purple-700",
            dotClass: "bg-green-500"
        }
    },
    {
        id: 6,
        name: "drg. Reza Pratama",
        specialty: "Spesialis Kawat Gigi",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0pruq4VvNYBhwufx6tkLTIXD2NuFmIJfwlP1SIVUF6OHNLttFzaDzO35wzff7MN64Ff2OTrgMG57Y9du9uItBarhe-MjU9W5LbPe3ewnfKHRpMFDvVnP6wiK-tQRxnJHMPJqdn1S_1U5MUC17FhxOH9ettpcK5Uy6J2Psrt5tKwOtG1VCd14VFyFVA6idedYHReWDKepMGDOJNjix-3MybsLRlEnBo6uszrayuQ_69fFLCoc4RGty47aXp_XmHVAz6lcfMNm0AeMI",
        rating: 4.8,
        reviews: 45,
        location: "Tangerang Selatan",
        days: "Jumat - Minggu",
        price: "Rp 350.000",
        badge: {
            text: "Ortodonti",
            colorClass: "bg-blue-50 text-blue-700",
            dotClass: "bg-green-500"
        }
    }
];

export default function DoctorPage() {
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
