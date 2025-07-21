import React from 'react';
import styles from './hero-section.module.scss';
import { FaPlay } from 'react-icons/fa';

const HeroSection = () => (
  <section className={styles.hero}>
    <div className={styles.content}>
      <span className={styles.overline}>DIGITAL MARKETING EXPERTS</span>
      <h1 className={styles.headline}>Accelerate Your Growth with Smart Digital Marketing</h1>
      <p className={styles.subtext}>We help brands thrive through SEO, Ads, Social Media & More.</p>
      <div className={styles.ctas}>
        <button className={styles.primaryCta}>Get Started</button>
        <button className={styles.secondaryCta}>
          <FaPlay className={styles.playIcon} />
          Watch How It Works
        </button>
      </div>
    </div>
    {/* Optional: Add an illustration or image here */}
  </section>
);

export default HeroSection;
