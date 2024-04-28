import styles from './not_found.module.scss';
import Link from 'next/link';
import { VT323 } from 'next/font/google'

const vt323 = VT323({
    weight: '400',
    subsets: ['latin'],
});

export default function NotFound() {
    return (
        <div className={styles.blue_screen + ' ' + vt323.className}>
            <div className={styles.content}>
                <span className={styles.error_code}>Error 404. Page not found.</span>
                <p className={styles.text_left}>A fatal exception 0E has occurred at 0028:C0034B23.  The current application will be terminated.</p>
                <ul className={styles.text_left}>
                    <li>*   Press any key to terminate the current application.</li>
                    <li>*   Press CTRL+ALT+DEL again to restart your computer. You will lose any unsaved information in all applications.</li>
                </ul>
                <Link className={styles.goto_homepage} href='/'>Click on me to go to homepage</Link>
            </div>
        </div>
    );
};
