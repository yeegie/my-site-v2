'use client'
import { ThemeButton } from '@/components/Buttons/ThemeButton';

import styles from './HeaderSplash.module.scss';

type Props = {
    splash_text: string
}

function HeaderSplash(props: Props) {
    return (
        <header className='h-[100px] w-full' id={styles.header}>
            <a className={styles.me} href='/'>_BERDOVSKIY</a>
            { process.env.config.splash ? <p>{props.splash_text}</p> : null }
            <ThemeButton></ThemeButton>
        </header>
    );
};

export { HeaderSplash };