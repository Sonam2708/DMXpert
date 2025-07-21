import React from 'react';
import styles from './whychoose.module.scss';
import { FaChartPie, FaBullseye, FaClipboardCheck, FaHeadset, FaArrowUp, FaGlobe } from 'react-icons/fa';

const features = [
  {
    icon: <FaChartPie className={styles.icon} />, 
    title: 'Data-Driven Approach',
    desc: 'We leverage analytics and insights to drive every marketing decision.'
  },
  {
    icon: <FaBullseye className={styles.icon} />,
    title: 'ROI-Focused Campaigns',
    desc: 'Our strategies are designed to maximize your return on investment.'
  },
  {
    icon: <FaClipboardCheck className={styles.icon} />,
    title: 'Transparent Reporting',
    desc: 'You get clear, honest, and regular performance reports.'
  },
  {
    icon: <FaHeadset className={styles.icon} />,
    title: '24x7 Client Support',
    desc: 'Our team is always available to support and guide you.'
  },
  {
    icon: <FaGlobe className={styles.icon} />,
    title: 'Global Reach',
    desc: 'We help you expand your business across borders with ease.'
  }
];

const stats = [
  {
    icon: <FaArrowUp className={styles.statIcon} />,
    value: '+200%',
    label: 'Avg. Traffic Growth'
  },
  {
    icon: <FaGlobe className={styles.statIcon} />,
    value: '500+',
    label: 'Projects Delivered'
  }
];

const WhyChoose = () => (
  <section className={styles.whyChooseSection} id="why-choose">
    <div className={styles.header}>
      <h2 className={styles.title}>Why Businesses Choose Us</h2>
    </div>
    <div className={styles.featuresWrapper}>
      <div className={styles.featuresRow}>
        {features.slice(0, 3).map((feature, idx) => (
          <div className={styles.featureCard} key={idx}>
            {feature.icon}
            <h3 className={styles.featureTitle}>{feature.title}</h3>
            <p className={styles.featureDesc}>{feature.desc}</p>
          </div>
        ))}
      </div>
      <div className={styles.featuresRow}>
        {features.slice(3).map((feature, idx) => (
          <div className={styles.featureCard} key={idx + 3}>
            {feature.icon}
            <h3 className={styles.featureTitle}>{feature.title}</h3>
            <p className={styles.featureDesc}>{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
    <div className={styles.statsRow}>
      {stats.map((stat, idx) => (
        <div className={styles.statCard} key={idx}>
          {stat.icon}
          <span className={styles.statValue}>{stat.value}</span>
          <span className={styles.statLabel}>{stat.label}</span>
        </div>
      ))}
    </div>
  </section>
);
export default WhyChoose;




