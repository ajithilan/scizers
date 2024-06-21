import { CustomButton } from "../commoncomponents/custombutton"

export const Section_3 = () => {

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
                        <img src="assets/section3/arrow-left.svg"/>
                    </button>
                    <img
                    src="/assets/section3/image1.png"
                    alt="Work Sample"
                    className="rounded-[14px] ph:w-full ph:h-[222px] ph:rounded-md"
                    />
                    <button
                    className="absolute top-1/2 -translate-y-1/2 right-4 flex justify-center items-center w-8 h-8 bg-white rounded-full
                    hover:bg-gray-50 active:bg-gray-100 transition-colors duration-150"
                    >
                        <img src="assets/section3/arrow-right.svg"/>
                    </button>
                </div>
                <div className="grid grid-flow-col justify-between gap-1">
                    <img src="/assets/section3/image2.png" alt="Work Sample" className="rounded-[14px] ph:rounded-md"/>
                    <img src="/assets/section3/image3.png" alt="Work Sample" className="rounded-[14px] ph:rounded-md"/>
                    <img src="/assets/section3/image4.png" alt="Work Sample" className="rounded-[14px] ph:rounded-md"/>
                    <img src="/assets/section3/image5.png" alt="Work Sample" className="rounded-[14px] ph:rounded-md"/>
                </div>
            </div>
        </div>
    )
}