import Styles from "../hero/Hero.module.css";
import Image from "next/image";

export default function Hero() {
    return(
        <section>
            <div className={Styles.hero}>
                <div className={Styles.heroText}>
                    <h1>Menyatu dalam <span>Kelembutan</span> & Kilaukan <span>Keindahan</span></h1>
                    <p>Kami percaya bahwa pakaian yang bersih adalah cerminan dari diri Anda yang terbaik. Dengan sepenuh hati, kami berkomitmen untuk memberikan layanan laundry terbaik bagi Anda dan pakaian kesayangan Anda.</p>
                    <div className={Styles.heroButton}>
                        <button>Tentang Kami</button>
                        <button>Layanan</button>
                    </div>
                </div>
                <div className={Styles.heroImages}>
                    <Image
                        src="/assets/images/hero.png"
                        alt="Logo Glory Laundry"
                        width={473}
                        height={366}
                    />
                </div>
            </div>
        </section>
    );
}