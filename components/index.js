import Header from "./comon/Header";
import Footer from "./comon/Footer";

const Layout = ({children}) => {
    return(
        <>
       <Header/>
            {children}
       <Footer/>
        </>
       
    )
}

export default Layout;