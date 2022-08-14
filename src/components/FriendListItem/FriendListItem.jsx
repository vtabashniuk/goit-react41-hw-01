import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  const onlineClasses = [styles.status];

  isOnline ? onlineClasses.push(styles.online) : onlineClasses.push(styles.offline);

  return (
    <>
      <li key={id} className={styles.item}>
        <span className={onlineClasses.join(' ')}></span>
        <img src={avatar} alt="user avatar" className={styles.avatar} />
        <p className={styles.userName}>{name}</p>
      </li>
    </>
  );
};

FriendListItem.defaultProps = {
  isOnline: false,
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
  id: PropTypes.number.isRequired,
};
