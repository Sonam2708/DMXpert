import React from 'react';
import styles from './caseStudies.module.scss';

const caseStudies = [
  {
    client: 'Acme Corp',
    before: 'Organic traffic: 1,200/mo',
    after: 'Organic traffic: 4,500/mo',
    quote: '“Our growth skyrocketed after partnering with this team!”',
    // You can replace the below with an actual graph image or SVG later
    graph: '/9564754.svg',
  },
  {
    client: 'Beta Solutions',
    before: 'Leads: 30/mo',
    after: 'Leads: 120/mo',
    quote: '“We saw real, measurable results in just months.”',
    graph: '/case-graph2.svg',
  },
  {
    client: 'Gamma Retail',
    before: 'Conversion rate: 1.2%',
    after: 'Conversion rate: 3.8%',
    quote: '“The best marketing decision we ever made.”',
    graph: '/case-graph3.svg',
  },
  {
    client: 'Delta Health',
    before: 'App downloads: 2,000',
    after: 'App downloads: 8,500',
    quote: '“Their strategies delivered beyond our expectations.”',
    graph: '/case-graph4.svg',
  },
];

const CaseStudies = () => (
  <section className={styles.caseStudiesSection} id="case-studies">
    <h2 className={styles.headline}>Success That Speaks for Itself</h2>
    <div className={styles.studiesWrapper}>
      {caseStudies.map((study, idx) => (
        <div className={styles.studyCard} key={idx}>
          <div className={styles.graphBlock}>
            {/* Replace with actual graph or SVG */}
            <img src={study.graph} alt="Before/After Graph" className={styles.graphImg} />
          </div>
          <div className={styles.infoBlock}>
            <h3 className={styles.clientName}>{study.client}</h3>
            <div className={styles.statsRow}>
              <span className={styles.before}>{study.before}</span>
              <span className={styles.arrow}>&rarr;</span>
              <span className={styles.after}>{study.after}</span>
            </div>
            <blockquote className={styles.quote}>{study.quote}</blockquote>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default CaseStudies;
