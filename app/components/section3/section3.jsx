import { CustomButton } from "../commoncomponents/custombutton"
import Image from "next/image"

export const Section_3 = () => {

    const CustomImage = ({ src }) => {
        return (
            <Image src={src} width={265} height={168} className="rounded-[14px] ph:rounded-md" alt="Work Sample"/>
        )
    }

    return (
        <div className="flex flex-col gap-8 py-12 ">
            <div className="w-full flex justify-end ph:justify-around gap-2">
                <CustomButton
                text="EXTERIORS"
                styling="bg-custom-darkblue text-white hover:bg-[rgb(1,70,160)] active:bg-[rgba(1,70,160,.8)]"
                />
                <CustomButton
                text="INTERIORS"
                styling="border-2
                border-custom-darkblue text-custom-darkblue hover:bg-[rgb(1,70,160)] hover:border-transparent active:bg-[rgba(1,70,160,.8)]"
                />
            </div>
            <div className="flex flex-col gap-4 ph:gap-1">
                <div className="relative">
                    <button
                    className="absolute top-1/2 -translate-y-1/2 left-4 flex justify-center items-center w-8 h-8 rounded-full bg-white
                    hover:bg-gray-50 active:bg-gray-100 transition-colors duration-150"
                    >
                        <Image src="/assets/section3/arrow-left.svg" width={6} height={10} alt="Arrow left Icon"/>
                    </button>
                        <Image
                        src="/assets/section3/image1.webp"
                        width={1122}
                        height={494}
                        className="rounded-[14px] ph:w-full ph:h-[222px] ph:rounded-md"
                        alt="Work Sample"
                        />
                    <button
                    className="absolute top-1/2 -translate-y-1/2 right-4 flex justify-center items-center w-8 h-8 bg-white rounded-full
                    hover:bg-gray-50 active:bg-gray-100 transition-colors duration-150"
                    >
                        <Image src="/assets/section3/arrow-right.svg" width={6} height={10} alt="Arrow right Icon"/>
                    </button>
                </div>
                <div className="grid grid-flow-col justify-between gap-1">
                    <CustomImage src="/assets/section3/image2.webp"/>
                    <CustomImage src="/assets/section3/image3.webp"/>
                    <CustomImage src="/assets/section3/image4.webp"/>
                    <CustomImage src="/assets/section3/image5.webp"/>
                </div>
            </div>
        </div>
    )
}