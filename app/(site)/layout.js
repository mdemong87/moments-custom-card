import Footer from "../componnent/Footer";

const siteLayout = ({ children }) => {
    return (
        <div>
            {children}
            <Footer />
        </div>
    )
}

export default siteLayout;