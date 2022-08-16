import PropTypes from 'prop-types';
import { TransactionData } from '../TransactionData/TransactionData';
import styles from './TransactionHistory.module.css';

export const TransactionHistory = ({ transactions }) => {
  return (
    <div className={styles.wrapper}>
      <table className={styles.transactionHistory}>
        <thead className={styles.tableHeader}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody className={styles.tableBody}>
          {transactions.map(item => (
            <tr key={item.id}>
              <TransactionData {...item} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ).isRequired,
};
