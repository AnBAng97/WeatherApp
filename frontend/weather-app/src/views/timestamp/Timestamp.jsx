import styles from './Timestamp.module.css'

function Timestamp(){
    return(
        <div className={styles.timestamp}>
            <span className={styles.currentTime}>Current time: 21:45</span>
        </div>
    );
}

export default Timestamp