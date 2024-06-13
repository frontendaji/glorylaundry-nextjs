import Styles from "../tentang/Tentang.module.css";

export default function TentangSection() {
    return(
        <section className={Styles.tentangSection}>
            <div className={Styles.tentangText}>
                <h1>Tentang Kami.</h1>
                <p>Glory Laundry adalah salah satu usaha di bidang jasa laundry yang didirikan pada Maret 2007 di Plaosan RT 04 RW 14 Purworejo Jawa Tengah. Kami menyediakan layanan cuci pakaian, handuk, seprai, karpet, dan lainnya. Dilengkapi dengan mesin cuci dan pengering modern, kami menawarkan layanan setrika pakaian dengan harga terjangkau.</p>
            </div>
            <div className={Styles.cardSection}>
                <div className={Styles.card}>
                    <h3>5</h3>
                    <p>Karywanan berpengalaman</p>
                </div>
                <div className={Styles.card}>
                    <h3>17</h3>
                    <p>Tahun Lamanya Beroprerasi</p>
                </div>
                <div className={Styles.card}>
                    <h3>100.000 +</h3>
                    <p>Kg Laundry Terselesaikan</p>
                </div>
                <div className={Styles.card}>
                    <h3>100%</h3>
                    <p>Kepuasan Pelanggan</p>
                </div>
            </div>
        </section>
    )
}