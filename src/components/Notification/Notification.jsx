
import css from './Notification.module.css';

const Notification = ({ message }) => {
  return <span className={css.notification}>{message}</span>;
};

export { Notification };