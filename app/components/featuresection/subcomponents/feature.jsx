import Image from "next/image"
export const FeatureCard = ({ icon, text1, text2, styling }) => {

    return (
        <div className={`flex flex-col gap-2 items-center text-custom-darkblue ${ styling }`}>
            <Image src={ icon } width={50} height={50} alt="Feature Icon"/>
            <div className="flex flex-col items-center">
                <span className="ph:text-xs">{ text1 }</span>
                <span className="text-3xl ph:text-2xl font-medium font-oswald">{ text2 }</span>
            </div>
            <div className=" w-[72px] h-1.5 bg-custom-darkblue opacity-[12%] rounded-xl"></div>
        </div>
    )
}