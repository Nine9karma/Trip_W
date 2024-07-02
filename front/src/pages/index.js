// pages/index.js
import styles from '../styles/MainPage.module.css';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

export default function MainPage() {
  return (
    <div className={styles.container}>
      <main className={styles.hero}>
        <div className={styles['hero-overlay']}>
          <h1>Experience your new Travel planning.</h1>
          <div className={styles['button-container']}>
            <Link href="/makeplan" className={styles.button}>
              계획하기
              <FaArrowRight className={styles['button-icon']} />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
