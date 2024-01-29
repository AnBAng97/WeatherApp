import styles from './Time.module.css'

function Time() {

    const currentDate = new Date();

    // Get the current time
    const currentHours = currentDate.getHours();
    const currentMinutes = currentDate.getMinutes();

    // Format the time as a string
    const currentTime = `${currentHours}:${currentMinutes}`;


    return (
        <div className={styles.timestamp}>
            <span className={styles.currentTime}>Your current time: {currentTime}</span>
        </div>
    );
}

export default Time