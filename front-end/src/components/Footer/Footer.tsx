import Image from 'next/image';

import Link from 'next/link';

import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';

import styles from './Footer.module.scss';

import { FooterButton } from './FooterList/FooterButton/FooterButton';
import { FooterList } from './FooterList';

import { footer_data } from '@/data/footer.data';


function Footer() {
    return (
        <footer id={styles.footer}>
            <div className={styles.content_holder}>
                <div className={styles.info_block}>
                    <h1>_BERDOVSKIY</h1>
                    <p>Это мой сайт-портфолио, я благодарю вас за то, что вы посмотрели его до конца, по всем вопросам и предложениям писать в <a className={styles.telegram_link} href="https://t.me/egor_code">telegram</a>.</p>
                    <div className={styles.social_holder}>
                        <a className={styles.telegram_link} href="https://t.me/egor_code"><TelegramIcon /></a>
                        <a href="mailto:lotus9200@gmail.com"><AlternateEmailIcon /></a>
                        <a href="https://github.com/egor-berdovskiy"><GitHubIcon /></a>
                    </div>
                </div>
                <div className={styles.link_block}>
                    <h1>Ссылки</h1>
                    <FooterList data={footer_data}></FooterList>
                </div>
            </div>
            <Image
                    className={styles.footer_line}
                    src={'/footer.png'}
                    width={1440}
                    height={20}
                    priority
                />
        </footer>
    );
};

export { Footer };
