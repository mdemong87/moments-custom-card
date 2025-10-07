import { FaArrowRight } from "react-icons/fa";
import SpinLoader from "./SpingLoader";

const ViewCard = ({ isLoading, goToFinalView }) => {
    return (
        <div className="w-[50px] h-[50px] lg:w-full lg:h-fit bg-sky-500 rounded-md text-center py-2 lg:py-3 px-3 lg:px-14 cursor-pointer mt-1 border broder-red-900 mt-6 lg:mt-2 absolute bottom-[17%] md:bottom-[10%] right-[5%] lg:static shadow-xl">
            <button onClick={() => { goToFinalView() }} className="w-full flex items-center justify-center gap-2 cursor-pointer h-full focus:none">
                {
                    isLoading && <SpinLoader />
                }
                <span className="hidden lg:block font-semibold">View All Card</span>
                {!isLoading && <FaArrowRight className="text-2xl lg:text-xl" />}
            </button>
        </div>
    )
}

export default ViewCard;