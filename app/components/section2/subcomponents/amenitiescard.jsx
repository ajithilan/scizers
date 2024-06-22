import Image from "next/image"

export const AmenitiesCard = ({ image, text, tw }) => {

    return (
        <div className="relative w-[228px] ph:w-[145px] h-[272px] ph:h-[172px] flex flex-col justify-end items-center ph:place-self-center">
            <div className="absolute -top-2 ph:-top-[6px] w-[202px] h-[204px] ph:w-[124px] ph:h-[124px] border rounded-full bg-[#D9D9D98A] -z-10"></div>
            <Image src={ image } width={193} height={193} className="absolute -top-[2px] z-10 ph:w-[117px]" loading="lazy" alt="Amenities Image"/>
            <div className="w-full h-[160px] ph:h-[102px] flex justify-center items-end text-center rounded-b-[20px] bg-white shadow-amenity-shadow py-6 ph:py-3">
                <span className={`text-custom-darkblue text-sm font-semibold ph:text-[12px] ${tw}`}>{ text }</span>
            </div>
        </div>
    )
}