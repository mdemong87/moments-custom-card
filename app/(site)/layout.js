import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import Footer from "../componnent/Footer";

const siteLayout = ({ children }) => {
    return (
        <div>
            <Link className="bg-sky-400 text-white fixed top-[200px] p-3 rounded-l-md shadow-lg right-0 z-90 hover:bg-sky-500 transition-all duration-300" href={'/my-cart'}>
                <FiShoppingCart className="text-xl" />
            </Link>
            {children}
            <Footer />
        </div>
    )
}

export default siteLayout;