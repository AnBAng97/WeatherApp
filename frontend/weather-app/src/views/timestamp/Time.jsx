import styles from './Time.module.css'

function Time(){
    return(
        <div className={styles.timestamp}>
            <span className={styles.currentTime}>Current time: 21:45</span>
        </div>
    );
}

export default Time