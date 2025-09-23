import { FaPlus } from "react-icons/fa6";

const AddNewCardBtn = ({ addCard }) => {
    return (
        <button onClick={addCard} className="bg-sky-500 text-white rounded-md text-center py-1 lg:py-3 px-1 lg:px-14 w-[30px] h-[30px] w-full h-fit font-semibold cursor-pointer flex gap-2 items-center justify-center shadow-xl focus:none">
            <FaPlus className="text-2xl lg:hidden" />
            <span className="hidden lg:block text-nowrap">
                Add New
            </span>
        </button>
    )
}

export default AddNewCardBtn;