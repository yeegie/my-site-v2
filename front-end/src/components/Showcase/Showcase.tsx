import React from 'react';

import styles from './Showcase.module.scss';
import { ICard } from '@/types';

type Props = {
    children: React.ReactNode,
    data: ICard,
}


function Showcase({ children }: Props) {
    return (
        <div className={styles.showcase} id='reviews'>
            <div className={styles['showcase-holder']}>
                { children ? children : <p className='text-center'>Не удалось загрузить контент. 😭</p> }
            </div>
        </div>
    )
}

export { Showcase };
