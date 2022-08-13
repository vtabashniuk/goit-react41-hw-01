import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  const backgroundColors = {
    '.docx': '#005DA6',
    '.xlsx': '#1D6F42',
    '.mp3': '#5CCAE4',
    '.psd': '#3C327B',
    '.pdf': '#F40F02',
  };

  return (
    <>
      <section className={styles.statistics}>
        {title.length > 0 && <h4 className={styles.title}>{title}</h4>}
        <ul className={styles.statList}>
          {stats.map(({ id, label, percentage }) => (
            <li
              className={styles.item}
              key={id}
              style={{ backgroundColor: backgroundColors[label] }}
            >
              <span className={styles.label}>{label}</span>
              <span className={styles.percentage}>{`${percentage} %`}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ).isRequired,
};
