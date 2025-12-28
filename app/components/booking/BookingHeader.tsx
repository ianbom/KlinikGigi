interface BookingHeaderProps {
    currentStep?: number;
}

export function BookingHeader({ currentStep = 1 }: BookingHeaderProps) {
    const stepLabels = ["Pilih Jadwal", "Data Diri", "Konfirmasi"];

    return (
        <div className="w-full max-w-3xl mx-auto">
            <div className="flex flex-col gap-3">
                <div className="flex justify-between items-end">
                    <div className="flex flex-col">
                        <h1 className="text-2xl font-bold text-text-light tracking-tight">
                            {currentStep === 1 ? "Pilih Jadwal Konsultasi" : currentStep === 2 ? "Isi Data Diri" : "Review Booking"}
                        </h1>
                        <p className="text-gray-500 text-sm mt-1">Langkah {currentStep} dari 3</p>
                    </div>
                    <div className="hidden sm:flex gap-4 text-sm font-medium text-gray-400">
                        {stepLabels.map((label, index) => {
                            const stepNum = index + 1;
                            const isActive = stepNum === currentStep;
                            const isCompleted = stepNum < currentStep;

                            return (
                                <span key={stepNum} className={isActive ? "text-primary font-bold" : isCompleted ? "text-primary" : ""}>
                                    {stepNum}. {label}
                                </span>
                            );
                        })}
                    </div>
                </div>
                <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden mt-2">
                    <div
                        className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${(currentStep / 3) * 100}%` }}
                    ></div>
                </div>
            </div>
        </div>
    );
}
