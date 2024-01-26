import styles from './Time.module.css'

function Time(){
    return(
        <div className={styles.timestamp}>
            <span className={styles.currentTime}>Your current time: 21:45</span>
        </div>
    );
}

export default Time