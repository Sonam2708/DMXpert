import React from 'react';
import styles from './aboutus.module.scss';

const AboutUs = () => (
  <section className={styles.aboutSection} id="about-us">
    <div className={styles.contentWrapper}>
      <div className={styles.textBlock}>
        <h2 className={styles.headline}>Who We Are</h2>
        <p className={styles.intro}>
          We are a passionate team of digital marketing experts dedicated to helping businesses grow and thrive in the digital world. Our mission is to deliver innovative, data-driven solutions that drive real results for our clients.
        </p>
      </div>
      <div className={styles.imageBlock}>
        <img src="/teamImg.jpg" alt="Our Team" className={styles.teamImage} />
      </div>
    </div>
  </section>
);

export default AboutUs;




