'use client'

import { useState, useEffect } from 'react';
import styles from './ThemeButton.module.scss';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

import { useTheme } from 'next-themes';

import { Themes } from '@/types';

type StateType = {
    theme: string,
}

type Props = {
    hover: boolean,
}

function ThemeButton(props: Props) {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    // Theme detector
    useEffect(() => {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme(Themes.LIGHT);
        } else {
            setTheme(Themes.DARK);
        }
    }, []);

    useEffect(() => {
        setMounted(true);
    }, [])

    if (!mounted) {
        return null
    }

    const theme_icon = {
        light: <LightModeIcon />,
        dark: <DarkModeIcon />,
    };

    const changeTheme = () => {
        const newTheme = theme == 'dark' ? 'light' : 'dark';
        setTheme(newTheme)
    };

    return (
        <>
            <button className={props.hover ? styles.hover : styles.classic} onClick={changeTheme}>
                {theme_icon[theme]}
            </button>
        </>
    );
};

export { ThemeButton };
