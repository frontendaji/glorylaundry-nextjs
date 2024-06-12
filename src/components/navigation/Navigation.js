import Styles from "../navigation/Navigation.module.css";
import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {

    const [isNavMobileActive, setNavMobileActive] = useState(false);

    const toggleNavMobile = () => {
    setNavMobileActive(!isNavMobileActive);
    };

    const handleNavItemClick = () => {
        setNavMobileActive(false); 
    }

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
                    <Link href="/tentang">Tentang Kami</Link>
                </li>
                <li>
                    <Link href="/layanan">Layanan</Link>
                </li>
                <li>
                    <Link href="/testimoni">Testimoni</Link>
                </li>
                <li>
                    <Link href="/kontak">Kontak</Link>
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
                        <Link href="/" onClick={handleNavItemClick}>Beranda</Link>
                    </li>
                    <li>
                        <Link href="/" onClick={handleNavItemClick}>Tentang Kami</Link>
                    </li>
                    <li>
                        <Link href="/" onClick={handleNavItemClick}>Layanan</Link>
                    </li>
                    <li>
                        <Link href="/" onClick={handleNavItemClick}>Testimoni</Link>
                    </li>
                    <li>
                        <Link href="/" onClick={handleNavItemClick}>Kontak</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}