import Styles from "../kontak/Kontak.module.css";
import Image from "next/image";

export default function KontakSection() {
    return(
        <section className={Styles.kontakSection}>
            <div className={Styles.left}>
                <div className={Styles.text}>
                    <h1>Kontak Kami</h1>
                    <p>Cara menghubungi kami untuk pertanyaan atau pemesanan layanan, biasanya kami akan membalas di hari yang sama.</p>  
                </div>
                <div className={Styles.menu}>
                    <div>
                        <Image
                            src="/assets/images/telepon.png"
                            alt="Telepon glory Laundry"
                            width={24}
                            height={24}
                        />
                        <p>+6287891955577</p>
                    </div>
                    <div>
                        <Image
                            src="/assets/images/email.png"
                            alt="email glory Laundry"
                            width={24}
                            height={24}
                        />
                        <p>admin@glorylaundry.com</p>
                    </div>
                    <div>
                        <Image
                            src="/assets/images/address.png"
                            alt="address glory Laundry"
                            width={24}
                            height={24}
                        />
                        <p>Plaosan, RT 04/ RW 14, Purworejo</p>
                    </div>
                </div>      
            </div>
            <div className={Styles.right}>
                <div>
                    <p>Nama :</p>
                    <input></input>
                </div>
                <div>
                    <p>Email :</p>
                    <input></input>
                </div>
                <div>
                    <p>No Hanpdhone :</p>
                    <input></input>
                </div>
                <div>
                    <p>Pesan :</p>
                    <input></input>
                </div>
                <button>
                    <p>Kirim Pesan</p>
                    <Image
                        src="/assets/images/send.png"
                        alt="send glory Laundry"
                        width={25}
                        height={25}
                    />
                </button>
            </div>
        </section>
    )
}