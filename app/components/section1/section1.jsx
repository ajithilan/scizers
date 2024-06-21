import { CustomButton } from "../commoncomponents/custombutton"

export const Section_1 = () => {

    const CustomTag = ({text1, text2}) => {
        return (
            <span
            className="flex items-center gap-1 w-full h-[40px] font-normal text-sm bg-[rgba(0,0,0,.3)] border-l-4 border-custom-lightblue px-2"
            >
                <span>{ text1 }</span>
                <span className="text-base font-semibold">{ text2 }</span>
            </span>
        )
    }

    return (
        <section
        className="relative w-full h-[650px] ph:h-fit flex justify-center text-white bg-header-img bg-cover bg-[0%_47%] ph:bg-[70%_40%]
        "
        >
            <div className="absolute top-0 w-full h-full bg-header-linear ph:bg-header-linear-2"></div>
            <div className="w-[1120px] ph:w-11/12 flex flex-col">
                <header className="w-full flex justify-between py-11 z-10">
                    <img src="assets/section1/logo.svg" alt="Brand Logo"/>
                    <CustomButton
                    text="ENQUIRE NOW"
                    styling="ph:hidden border-2 border-custom-lightblue text-custom-lightblue hover:bg-[rgba(23,170,255,.7)] hover:border-transparent
                    active:bg-[rgba(23,170,255,.5)]"
                    />
                    <button className="hidden ph:block"><img src="assets/section1/hamburger-icon.svg" alt="Hamburget Icon"/></button>
                </header>
                <div className="w-full flex justify-between ph:flex-col ph:items-center ph:gap-8 pt-20 pb-28 ph:pt-4 ph:pb-8 z-10">
                    <div className="w-[500px] ph:w-full grid">
                        <h1 className="font-oswald text-5xl ph:text-4xl">HARBOUR LIGHTS DE <span className="text-custom-lightblue">GRESOGONO</span></h1>
                        <span className="text-[25px] ph:text-sm font-bold leading-8 py-4">1, 2 & 3 bedrooms seaside apartments in dubai maritime city</span>
                        <div className="flex flex-col gap-4 min-w-[250px] w-full max-w-[305px] pt-10 ph:pt-0">
                            <CustomTag text1="Rental Returns of" text2="UPTO 11%**"/>
                            <CustomTag text1="Capital Appreciation of" text2="UPTO 32%**"/>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between w-[305px] h-fit bg-[rgba(6,35,73,0.24)] text-[#FCFCFC] rounded-[14px] backdrop-blur-md py-2">
                        <div className="h-full flex flex-col justify-between gap-6 px-8 py-6">
                            <div className="flex flex-col gap-4">
                                <span className="text-[13px]">PRICING STARTS FROM</span>
                                <span className="text-5xl font-oswald font-medium">$ 425,000</span>
                                <span className=" text-2xl font-oswald ">AED 1.3 Million</span>
                            </div>
                            <CustomButton
                            text="GET A PRESENTATION"
                            styling="bg-custom-lightblue text-white hover:bg-[rgb(19,143,214)] active:bg-[rgb(16,127,190)]"
                            />
                        </div>
                        <div className=" border-t-2 border-black border-opacity-30 px-8 py-2 text-[#98C5E8] text-[13px]">
                            <span>Get an Expert's Presentation of Real Estate in Dubai for Life and investment</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}