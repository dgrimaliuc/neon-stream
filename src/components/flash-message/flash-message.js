import { useEffect, useState } from 'react';
import styles from './flash-message.module.css';
import { useClasses } from '../../hooks';
import { useTimer } from '../../hooks';

export default function FlashMessage({
  timeout = 4000,
  message = 'Flash message',
}) {
  const [isVisible, setIsVisible] = useState(true);
  const [classes, addClass] = useClasses(styles.flash_message_wrapper);
  const [clearTimer, callback] = useTimer(() => {
    setIsVisible(false);
  }, timeout);

  useEffect(() => {
    const classToAdd = isVisible ? styles.visible : styles.hidden;
    addClass(classToAdd, false);
  }, [addClass, isVisible]);

  useEffect(() => {
    return () => clearTimer();
  }, [clearTimer]);

  return (
    <div className={classes}>
      <p className={styles.flash_message}>{message}</p>
      <div className={styles.close_container} onClick={callback}>
        <i className='fa-close' />
      </div>
    </div>
  );
}
