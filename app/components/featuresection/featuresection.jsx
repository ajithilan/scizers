import { FeatureCard } from "./subcomponents/feature"

export const FeatureSection = () => {

    return (
        <div className="w-full flex justify-center bg-[#F4F9FF] py-6 ">
            <div className="w-[1120px] ph:w-full flex justify-between ph:justify-around">
                <FeatureCard icon="/scizers/assets/section1/feature1.svg" text1="BOOK WITH" text2="ONLY 20%" styling="ph:hidden"/>
                <FeatureCard icon="/scizers/assets/section1/feature2.svg" text1="PAYMENT PLAN" text2="EASY 70/30"/>
                <FeatureCard icon="/scizers/assets/section1/feature3.svg" text1="HANDOVER ON" text2="Q2 2027"/>
                <FeatureCard icon="/scizers/assets/section1/feature4.svg" text1="AREA STARTS FROM" text2="700 SQMT" styling="ph:hidden"/>
            </div>
        </div>
    )
}