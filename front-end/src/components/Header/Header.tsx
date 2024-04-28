'use client'

import { useEffect } from 'react';
import styles from './Header.module.scss';

import { Navbar } from './Navbar';
import { ThemeButton } from '../Buttons/ThemeButton';


function Header() {
    return (
        <header className='h-[100px] w-full' id={styles.header}>
            <h1 className={styles.me}>_BERDOVSKIY</h1>
            <Navbar />
            <ThemeButton hover={true} />
        </header>
    );
};

export { Header };
