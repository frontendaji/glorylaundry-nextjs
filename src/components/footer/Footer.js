import Styles from "../footer/Footer.module.css";
import Image from "next/image";

export default function Footer() {
    return(
        <footer className={Styles.footer}>
            <div className={Styles.icon}>
                <Image
                    src="/assets/images/icon.png"
                    alt="Icon glory Laundry"
                    width={24}
                    height={24}
                />
            </div>
            <div className={Styles.text}>
                <p>2024 Glory Laundry. All Rights Reserved.</p>
            </div>
            <div className={Styles.mediaSosial}>
                <div>
                    <Image
                        src="/assets/images/instagram.png"
                        alt="Instagram Glory Laundry"
                        width={12}
                        height={12}
                    />
                </div>
                <div>
                    <Image
                        src="/assets/images/twitter.png"
                        alt="Twitter Glory Laundry"
                        width={12}
                        height={12}
                    />
                </div>
                <div>
                    <Image
                        src="/assets/images/facebook.png"
                        alt="Facebook Glory Laundry"
                        width={24}
                        height={24}
                    />
                </div>
            </div>
        </footer>
    );
}