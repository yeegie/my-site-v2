import styles from './HomeButton.module.scss';

import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import Link from 'next/link';

const CustomButton = styled(Button)<ButtonProps>(({ theme }) => ({
    borderRadius: '50px',
    borderWidth: '3px',
    borderColor: '#000000',

    color: '#000000',
    textTransform: 'capitalize',
    fontSize: '20pt',
    fontWeight: '500',

    '&:hover': {
        borderWidth: '3px',
        borderColor: '#000000',
        backgroundColor: '#000000',
        color: '#FFFFFF',
    }
}));

type PropsType = {
    last_section: string,
}

function HomeButton(props: PropsType) {
    return <CustomButton href={`/#${props.last_section}`} className={styles.button} startIcon={<NavigateBeforeIcon />} size='small' variant='text'><p>На главную</p></CustomButton>
};

export { HomeButton };
