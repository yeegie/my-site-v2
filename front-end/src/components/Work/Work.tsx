import { ReactNode } from 'react';
import Link from 'next/link';

import styles from './Work.module.scss';

import { Card } from './Card';

import { ICard } from '@/types';

interface Props {
    data: ICard[],
}


function Work({ data }: Props) {
    const renderCards = (cards: ICard[]): React.ReactNode => {
        return cards.map((item) =>
            <>
                <Link href={`/works/${item.id}`} prefetch={true}>
                    <Card
                        key={item.id}
                        title={item.title}
                        description_short={item.description_short}
                        image={item.image[0] ? process.env.API_URL + item.image[0]?.full_path : null} // !!!!!!!!!!!!!!!!!!!!!!!
                        stack={item.stack}
                    />
                </Link>
            </>
        )
    }

    return (
        <div className={styles.work_holder}>
            <div className={styles.content}>
                {data ? renderCards(data) : <p className='text-center'>Не удалось загрузить контент. 😭</p>}
            </div>
        </div>
    );
};

export { Work };