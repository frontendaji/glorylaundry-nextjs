import Styles from "../navigation/Navigation.module.css";
import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {

    const [isNavMobileActive, setNavMobileActive] = useState(false);

    const toggleNavMobile = () => {
    setNavMobileActive(!isNavMobileActive);
    };

    return(
        <nav className={Styles.nav}>
            <div className={Styles.logo}>
                <h1>Glory Laundry</h1>
            </div>
            <ul>
                <li>
                    <Link href="/">Beranda</Link>
                </li>
                <li>
                    <Link href="/">Tentang Kami</Link>
                </li>
                <li>
                    <Link href="/">Layanan</Link>
                </li>
                <li>
                    <Link href="/">Testimoni</Link>
                </li>
                <li>
                    <Link href="/">Kontak</Link>
                </li>
            </ul>
            <div className={Styles.menu} onClick={toggleNavMobile}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={`${Styles.navMobile} ${isNavMobileActive ? Styles.navMobileActive : ''}`}>
                <ul>
                    <li>
                        <Link href="/">Beranda</Link>
                    </li>
                    <li>
                        <Link href="/">Tentang Kami</Link>
                    </li>
                    <li>
                        <Link href="/">Layanan</Link>
                    </li>
                    <li>
                        <Link href="/">Testimoni</Link>
                    </li>
                    <li>
                        <Link href="/">Kontak</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}