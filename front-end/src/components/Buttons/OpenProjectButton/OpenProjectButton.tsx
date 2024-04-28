import styles from './OpenProjectButton.module.scss';

import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';

type Props = {
    url: string,
}

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

function OpenProjectButton(props: Props) {
    return (
        <>
            <CustomButton className={styles.button} variant='outlined' size='small' href={props.url}><p>Перейти</p></CustomButton>
        </>
    )
};

export { OpenProjectButton };
