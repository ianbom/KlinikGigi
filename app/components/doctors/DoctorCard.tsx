import Link from "next/link";

interface Doctor {
    id: number;
    name: string;
    specialty: string;
    image: string;
    rating: number;
    reviews: number;
    location: string;
    days: string;
    price: string;
    badge: {
        text: string;
        colorClass: string; // e.g., "bg-blue-50 text-blue-700"
        dotClass?: string; // e.g. "bg-green-500"
    };
}

export function DoctorCard({ doctor }: { doctor: Doctor }) {
    return (
        <div className="group bg-white rounded-2xl border border-subtle-light p-5 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30 transition-all duration-300 flex flex-col">
            <div className="flex items-start gap-4 mb-4">
                <div className="relative">
                    <img
                        alt={doctor.name}
                        className="w-20 h-20 rounded-xl object-cover border border-subtle-light"
                        src={doctor.image}
                    />
                    {doctor.badge.dotClass && (
                        <div className={`absolute -bottom-1 -right-1 border-2 border-white w-4 h-4 rounded-full ${doctor.badge.dotClass}`}></div>
                    )}
                </div>
                <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mb-1 ${doctor.badge.colorClass}`}>
                            {doctor.badge.text}
                        </span>
                        <button className="text-gray-400 hover:text-red-500 transition-colors cursor-pointer">
                            <span className="material-symbols-outlined text-[20px]">favorite</span>
                        </button>
                    </div>
                    <h3 className="font-bold text-lg text-text-light truncate">{doctor.name}</h3>
                    <p className="text-sm text-gray-500 truncate">{doctor.specialty}</p>
                </div>
            </div>

            <div className="space-y-3 mb-5">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="material-symbols-outlined text-yellow-400 text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="font-bold text-text-light">{doctor.rating}</span>
                    <span className="text-gray-400">({doctor.reviews} Ulasan)</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="material-symbols-outlined text-gray-400 text-[18px]">location_on</span>
                    <span>{doctor.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="material-symbols-outlined text-gray-400 text-[18px]">calendar_month</span>
                    <span>{doctor.days}</span>
                </div>
            </div>

            <div className="mt-auto pt-4 border-t border-subtle-light flex items-center justify-between">
                <div>
                    <p className="text-xs text-gray-500">Mulai dari</p>
                    <p className="font-bold text-primary text-lg">{doctor.price}</p>
                </div>
                <Link
                    href={`/doctors/${doctor.id}`}
                    className="bg-primary hover:bg-primary-dark text-white text-sm font-bold px-4 py-2 rounded-lg transition-colors cursor-pointer inline-block text-center"
                >
                    Lihat Jadwal
                </Link>
            </div>
        </div>
    );
}
