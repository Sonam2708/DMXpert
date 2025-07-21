import React from 'react';
import styles from './our-services.module.scss';
import { FaSearch, FaBullhorn, FaChartLine, FaPenNib, FaEnvelopeOpenText, FaLaptopCode } from 'react-icons/fa';

const services = [
  {
    icon: <FaSearch className={styles.icon} />, 
    title: 'SEO Optimization',
    desc: 'Boost your visibility and rank higher on search engines with our expert SEO strategies.'
  },
  {
    icon: <FaBullhorn className={styles.icon} />,
    title: 'Social Media Marketing',
    desc: 'Engage your audience and grow your brand with creative social media campaigns.'
  },
  {
    icon: <FaChartLine className={styles.icon} />,
    title: 'Paid Advertising',
    desc: 'Maximize ROI with targeted ads on Google, Facebook, Instagram, and more.'
  },
  {
    icon: <FaPenNib className={styles.icon} />,
    title: 'Content Marketing',
    desc: 'Attract and retain customers with high-quality, relevant content.'
  },
  {
    icon: <FaEnvelopeOpenText className={styles.icon} />,
    title: 'Email Campaigns',
    desc: 'Reach your audience directly with personalized and effective email marketing.'
  },
  {
    icon: <FaLaptopCode className={styles.icon} />,
    title: 'Web Development',
    desc: 'Get stunning, high-converting websites tailored to your business goals.'
  }
];

const OurServices = () => (
  <section className={styles.servicesSection} id="services">
    <div className={styles.header}>
      <span className={styles.overline}>OUR SERVICES</span>
      <h2 className={styles.title}>What We Offer</h2>
      <p className={styles.subtitle}>
        Accelerate your business growth with our full suite of digital marketing services.
      </p>
    </div>
    <div className={styles.cardsWrapper}>
      {services.map((service, idx) => (
        <div className={styles.card} key={idx}>
          {service.icon}
          <h3 className={styles.cardTitle}>{service.title}</h3>
          <p className={styles.cardDesc}>{service.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default OurServices;

