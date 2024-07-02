// components/Footer.js
import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import styles from '../styles/MainPage.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerSection}>
        <h2>About Us</h2>
        <p>We are dedicated to providing the best travel experiences. Contact us for more information.</p>
      </div>
      <div className={styles.footerSection}>
        <h2>Contact Information</h2>
        <p>Email: contact@mywebsite.com</p>
        <p>Phone: +1 234 567 890</p>
      </div>
      <div className={styles.footerSection}>
        <h2>Follow Us</h2>
        <div className={styles.socialLinks}>
          <a href="#" className={styles.socialLink}><FaFacebook /></a>
          <a href="#" className={styles.socialLink}><FaTwitter /></a>
          <a href="#" className={styles.socialLink}><FaInstagram /></a>
        </div>
      </div>
      <div className={styles.footerSection}>
        <h2>Newsletter</h2>
        <form className={styles.newsletterForm}>
          <input type="email" placeholder="Your email" className={styles.newsletterInput} />
          <button type="submit" className={styles.newsletterButton}>Subscribe</button>
        </form>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2024 My Website. All rights reserved.</p>
        <nav>
          <Link href="/privacy" className={styles.footerLink}>Privacy Policy</Link>
          <Link href="/terms" className={styles.footerLink}>Terms of Service</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
