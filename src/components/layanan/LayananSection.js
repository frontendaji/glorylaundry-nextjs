import Styles from "../layanan/Layanan.module.css";

export default function LayananSection() {
    return(
        <section className={Styles.layananSection}>
            <div className={Styles.layananText}>
                <h1>Layanan yang kami berikan.</h1>
                <p>Jelajahi semua layanan yang kami berikan demi pengalaman laundry yang luar biasa, hasil yang memuaskan, dan kepercayaan yang tak tergoyahkan pada Glory Laundry.</p>
            </div>
            <div className={Styles.cardLayanan}>
                <div className={Styles.card}>
                    <h3>Laundry Kiloan</h3>
                    <p>Kami menyediakan jasa laundry kiloan yang ideal untuk kebutuhan harian Anda. Layanan ini menawarkan pencucian dengan harga yang lebih ekonomis.</p>
                    <button>
                        Pesan
                    </button>
                </div>
                <div className={Styles.card}>
                    <h3>Laundry Satuan</h3>
                    <p>Kami menyediakan jasa laundry satuan yang sangat cocok untuk pakaian spesial Anda seperti kemeja, jas, dan sejenisnya.</p>
                    <button>
                        Pesan
                    </button>
                </div>
                <div className={Styles.card}>
                    <h3>Laundry Kilat</h3>
                    <p>Kami menyediakan jasa laundry kilat yang sangat cocok bagi Anda yang membutuhkan cucian bersih dan cepat selesai.</p>
                    <button>
                        Pesan
                    </button>
                </div>
            </div>
        </section>
    )
}