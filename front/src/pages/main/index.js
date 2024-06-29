// pages/main/index.js
import styles from './MainPage.module.css';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

export default function MainPage() {
  return (
    <div>
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
        </nav>
      </header>
      <div className={styles.container}>
        <main className={styles.hero}>
          <div className={styles['hero-overlay']}>
            <h1>Experience your new Travel planning.</h1>
            <div className={styles['button-container']}>
              <a href="#" className={styles.button}>
                계획하기
                <FaArrowRight className={styles['button-icon']} />
              </a>
            </div>
          </div>
        </main>
        <footer className={styles.footer}>
          <p>&copy; 2024 My Website. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
