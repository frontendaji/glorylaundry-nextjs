import Footer from "../footer/Footer";
import Navigation from "../navigation/Navigation";
import Styles from "../layout/Layout.module.css";

export default function Layout({ children }) {
    return(
        <div className={Styles.container}>
            <header>
                <Navigation/>
            </header>
            <main>
                {children}
            </main>
            <Footer/>
        </div>
    );
}