import styles from './Navbar.module.scss';


function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul>
                <li className={styles.link}><a href="#reviews">Отзывы</a></li>
                <li className={styles.link}><a href="#works">Работы</a></li>
            </ul>
        </nav>
    );
};

export { Navbar };
