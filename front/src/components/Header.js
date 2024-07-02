// components/Header.js
import Link from 'next/link';
import styles from '../styles/MainPage.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Travel Wise</h1>
      <nav>
        <Link href="/" className={styles.link}>
          Home
        </Link>
        <Link href="/about" className={styles.link}>
          About
        </Link>
        <Link href="/contact" className={styles.link}>
          Contact
        </Link>
        <Link href="/makeplan" className={styles.link}>
          Make Plan
        </Link>
      </nav>
    </header>
  );
};

export default Header;
