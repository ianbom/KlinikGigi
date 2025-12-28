export function BookingCalendarWidget() {
    return (
        <div className="mb-10">
            <div className="flex items-center justify-between mb-6 px-2">
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-600">
                    <span className="material-symbols-outlined text-[20px]">arrow_back_ios</span>
                </button>
                <span className="text-base font-bold text-text-light">Oktober 2023</span>
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-600">
                    <span className="material-symbols-outlined text-[20px]">arrow_forward_ios</span>
                </button>
            </div>

            {/* Days of Week */}
            <div className="grid grid-cols-7 mb-2">
                {['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'].map((day, i) => (
                    <div key={i} className="text-center text-xs font-bold text-gray-400 uppercase tracking-wide py-2">{day}</div>
                ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-y-2 gap-x-1">
                {/* Empty start days */}
                <div className="h-10 w-full"></div>
                <div className="h-10 w-full"></div>
                <div className="h-10 w-full"></div>
                <div className="h-10 w-full"></div>

                {/* Past/Disabled Days */}
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(d => (
                    <button key={d} className="h-10 w-10 mx-auto flex items-center justify-center rounded-full text-gray-300 text-sm font-medium" disabled>{d}</button>
                ))}

                {/* Selected Day */}
                <button className="h-10 w-10 mx-auto flex items-center justify-center rounded-full bg-primary text-white text-sm font-bold shadow-md shadow-primary/30 transform scale-110">12</button>

                {/* Available Days */}
                {Array.from({ length: 19 }, (_, i) => i + 13).map(d => (
                    <button key={d} className="h-10 w-10 mx-auto flex items-center justify-center rounded-full text-text-light hover:bg-gray-100 text-sm font-medium transition-colors">
                        {d}
                    </button>
                ))}
            </div>
        </div>
    );
}
