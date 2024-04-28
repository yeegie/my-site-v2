import styles from './IconButton.module.scss';

import Link from 'next/link';

type Props = {
    title: string,
    icon: any,
    to: string,
}

function IconButton(props: Props) {
    return <Link href={props.to} className={styles.link}>
        <div>
            {props.icon}
            {props.title}
        </div>
    </Link>;
}

export { IconButton };
