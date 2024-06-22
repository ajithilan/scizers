import Image from "next/image"
import { AmenitiesCard } from "./subcomponents/amenitiescard"

export const Section_2 = () => {

    return (
        <section className="flex flex-col gap-10 items-center pt-14 ph:px-4 ">
            <Image src="/assets/section2/vector.svg" width={180} height={78} alt="Vector svg"/>
            <div className="w-[780px] ph:w-fit flex flex-col gap-4 text-center">
                <h2 className="font-oswald text-4xl ph:text-3xl text-custom-darkblue font-medium">FEATURES & AMENITIES</h2>
                <p>
                    Harbour Lights beautifully honours maritime voyages while embracing an opulent seafront lifestyle. Its maritime-inspired amenities provide an unmatched seaside experience, offering a life of tranquility and bliss.
                </p>
            </div>
            <div className="w-full grid grid-flow-col justify-between ph:grid-cols-2 ph:grid-rows-2 ph:gap-y-8">
                <AmenitiesCard image="/assets/section2/amenities1.webp" text="Floating Pools" tw="w-[70px]"/>
                <AmenitiesCard image="/assets/section2/amenities2.webp" text="Spacious Cabins Like Rooms" tw="w-[140px]"/>
                <AmenitiesCard image="/assets/section2/amenities3.webp" text="Sea Facing Swimming Pools" tw="w-[140px]"/>
                <AmenitiesCard image="/assets/section2/amenities4.webp" text="Gymnasium & Fitness" tw="w-[100px]"/>
            </div>
            <span className="place-self-end ph:place-self-center ph:w-60 ph:text-center text-[10px] text-[#686868] font-light pr-4">
                *T&Cs apply | ** Based on similar branded projects in the last 2 years.
                <a href="" className="underline">Source 1</a> | <a href="" className="underline">Source 2</a>
            </span>
        </section>
    )
}