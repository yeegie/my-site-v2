'use client'
import styles from './ScrollUpButton.module.scss';

import IconButton from '@mui/material/IconButton';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

type PropsType = {
    
}

function ScrollUpButton(props: PropsType) {
    const ScrollUp = () => {
        alert('UP');
    }

    return <IconButton onClick={ScrollUp}>
        <ArrowUpwardIcon />
    </IconButton>
}