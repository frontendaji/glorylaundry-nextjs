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
                breakpoints={{
                    320: {  // untuk layar mobile dengan lebar 320px atau lebih besar
                        slidesPerView: 1,
                        spaceBetween: 10
                    },
                    640: {  // untuk layar mobile dengan lebar 640px atau lebih besar
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                    768: {  // untuk layar tablet dengan lebar 768px atau lebih besar
                        slidesPerView: 2,
                        spaceBetween: 30
                    },
                    1024: {  // untuk layar desktop dengan lebar 1024px atau lebih besar
                        slidesPerView: 3,
                        spaceBetween: 40
                    },
                }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <div className={Styles.card}>
                        <p>&quot;Layanan laundry kiloan di Glory Laundry sangat memuaskan. Pakaian saya selalu bersih dan wangi. Pelayanan yang cepat dan ramah membuat saya menjadi pelanggan setia.&quot;</p>
                        <h3>– Siti Rahmawati</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={Styles.card}>
                        <p>&quot;Saya sering menggunakan layanan laundry kilat di Glory Laundry ketika saya butuh pakaian bersih dalam waktu singkat. Mereka selalu tepat waktu dan hasilnya sangat memuaskan.&quot;</p>
                        <h3>– Andi Wijaya</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={Styles.card}>
                        <p>&quot;Glory Laundry menawarkan layanan yang sangat berkualitas. Saya suka dengan laundry satuan mereka karena perhatian ekstra yang diberikan pada setiap pakaian. Hasilnya selalu rapi dan wangi.&quot;</p>
                        <h3>– Budi Santoso</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={Styles.card}>
                        <p>&quot;Layanan laundry kiloan di Glory Laundry sangat memuaskan. Pakaian saya selalu bersih dan wangi. Pelayanan yang cepat dan ramah membuat saya menjadi pelanggan setia.&quot;</p>
                        <h3>– Siti Rahmawati</h3>
                    </div>
                </SwiperSlide>
                {/* Add more SwiperSlide components as needed */}
            </Swiper>
        </section>
    )
}
