import styles from './AdminBanner.module.scss';

function AdminBanner() {
    return (
        <div className={styles.banner}>
            <img src="/fire.gif" />
            <div className={styles['text-container']}>
                <p>AdminPanel</p>
            </div>
        </div>
    );
};

export { AdminBanner };
