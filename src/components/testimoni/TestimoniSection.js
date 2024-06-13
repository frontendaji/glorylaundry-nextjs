import Styles from "../testimoni/Testimoni.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default function TestimoniSection() {
    return(
        <section className={Styles.testimoniSection}>
            <div className={Styles.testimoniText}>
                <h1>Apa kata orang terhadap kami?</h1>
                <p>Kami bangga dengan pelayanan dan kualitas yang kami berikan kepada pelanggan kami. Berikut adalah beberapa testimoni dari pelanggan setia kami di Purworejo, Jawa Tengah, yang telah merasakan langsung keunggulan layanan laundry kiloan, laundry kilat, dan laundry satuan dari Glory Laundry.</p>
            </div>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                <SwiperSlide>
                    <div className={Styles.card}>
                        <p>"Layanan laundry kiloan di Glory Laundry sangat memuaskan. Pakaian saya selalu bersih dan wangi. Pelayanan yang cepat dan ramah membuat saya menjadi pelanggan setia."</p>
                        <h3>– Siti Rahmawati</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={Styles.card}>
                        <p>"Saya sering menggunakan layanan laundry kilat di Glory Laundry ketika saya butuh pakaian bersih dalam waktu singkat. Mereka selalu tepat waktu dan hasilnya sangat memuaskan."</p>
                        <h3>– Andi Wijaya</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={Styles.card}>
                        <p>""Glory Laundry menawarkan layanan yang sangat berkualitas. Saya suka dengan laundry satuan mereka karena perhatian ekstra yang diberikan pada setiap pakaian. Hasilnya selalu rapi dan wangi."</p>
                        <h3>– Budi Santoso</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={Styles.card}>
                        <p>"Layanan laundry kiloan di Glory Laundry sangat memuaskan. Pakaian saya selalu bersih dan wangi. Pelayanan yang cepat dan ramah membuat saya menjadi pelanggan setia."</p>
                        <h3>– Siti Rahmawati</h3>
                    </div>
                </SwiperSlide>
                ...
            </Swiper>
        </section>
    )
}