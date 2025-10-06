import { MdOutlineDownloadDone } from "react-icons/md";
import SpinLoader from "./SpingLoader";

const AddNewCardBtn = ({ addCard, Done, doneloading }) => {
    return (
        <button onClick={Done} className="bg-sky-500 text-white rounded-md text-center py-1 lg:py-3 px-1 lg:px-5 w-fit h-[36px] lg:w-full lg:h-fit font-semibold cursor-pointer flex gap-1 lg:gap-2 items-center justify-center shadow-xl focus:none">
            {doneloading ? <SpinLoader /> : <MdOutlineDownloadDone className="text-md lg:text-3xl lg:hidden xl:block" />}
            <span className="lg:flex text-nowrap items-center gap-2 justify-center text-md lg:text-xl">
                Done
            </span>
        </button>
    )
}

export default AddNewCardBtn;