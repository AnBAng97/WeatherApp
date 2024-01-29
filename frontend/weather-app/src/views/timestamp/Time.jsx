import { useEffect, useState } from 'react';
import styles from './Time.module.css'
import { useMediaQuery } from 'react-responsive'

function Time() {

    const [currentTime, setCurrentTime] = useState(null);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(() => new Date().toTimeString().substring(0, 8));
        }, 1000);
        return () => clearInterval(interval);
    })

    return (
        <div className={styles.timestamp}>
            <span className={styles.currentTime}>Your current time: {currentTime}</span>
        </div>
    );
}

export default Time