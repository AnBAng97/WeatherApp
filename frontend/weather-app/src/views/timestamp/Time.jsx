import styles from './Time.module.css'
import { useMediaQuery } from 'react-responsive'

function Time(){
    const isDesktop = useMediaQuery({ minWidth: 992 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
    const isMobile = useMediaQuery({ maxWidth: 767 });

    return(
        <div className={styles.timestamp}>
            <span className={styles.currentTime}>Your current time: 21:45</span>
        </div>
    );
}

export default Time