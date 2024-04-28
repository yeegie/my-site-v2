import styles from './FooterButton.module.scss';

import { ISubmenuButton } from '@/types/index';

function FooterButton(props: ISubmenuButton) {
    return (
        props.active ?
        <li><a href={props.href}>{props.title}</a></li>
        :
        <li className={styles.unactive}><a href={props.href}>{`${props.title}`}</a>   🛠</li>
    );
};

export { FooterButton };
