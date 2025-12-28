import { SuccessStepper } from "@/app/components/booking/success/SuccessStepper";
import { SuccessHero } from "@/app/components/booking/success/SuccessHero";
import { BookingCodeCard } from "@/app/components/booking/success/BookingCodeCard";
import { BookingDetailsCard } from "@/app/components/booking/success/BookingDetailsCard";
import { PaymentInfoBox } from "@/app/components/booking/success/PaymentInfoBox";
import { SuccessActions } from "@/app/components/booking/success/SuccessActions";

export default function BookingSuccessPage() {
    return (
        <div className="px-4 md:px-40 flex flex-1 justify-center py-8 font-display bg-background-light">
            <div className="flex flex-col w-full max-w-[800px] flex-1">

                <SuccessStepper />

                <SuccessHero />

                <BookingCodeCard />

                <BookingDetailsCard />

                <PaymentInfoBox />

                <SuccessActions />

            </div>
        </div>
    );
}
