// pages/main/index.js
import styles from './MainPage.module.css';
import Link from 'next/link';

export default function MainPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>My Website</h1>
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
      <main className={styles.hero}>
        <h1>Welcome to My Website</h1>
      </main>
    </div>
  );
}
