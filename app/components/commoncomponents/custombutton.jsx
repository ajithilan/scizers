
export const CustomButton = ({ text, styling }) => {

    return (
        <button
        className={`rounded-[5px] h-12 px-11 py-3 text-[13px] font-bold ${ styling }`}
        >
            { text }
        </button>
    )
}