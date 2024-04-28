import styles from './GitHubButton.module.scss';

import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';

type PropsType = {
    url: string
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

function GitHubButton(props: PropsType) {
    // return <a href={props.url}>
    //     <button className={style.button + ' ' + (props.glowing ? style.glow_on_hover : '')}>
    //         <GitHubIcon className={style.icon} />
    //         GitHub
    //     </button>
    // </a>

    return <CustomButton className={styles.button} href={props.url} size='small' variant='outlined' startIcon={<GitHubIcon />}><p>GitHub</p></CustomButton>;
};

export { GitHubButton };
