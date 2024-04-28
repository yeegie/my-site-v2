import React from 'react';

import styles from './Card.module.scss';

import { StackTag } from '../StackTag';

import { ICard, IStack } from '@/types';

import Image from 'next/image';


function Card(props: ICard) {
    const renderStack = (stacks: []): React.ReactNode => {
        return stacks.map((item: IStack, itemId) =>
            <>
                <StackTag
                    key={itemId}
                    title={item.title}
                    gradient={item.gradient}
                />
            </>
        )
    }

    return (
        <div className={styles.card}>
            {props.image ? <Image className='rounded-t-lg' width={500} height={500} src={props.image} priority={true} /> : ''}
            <div className='p-[20px]'>
                <h2 className='font-bold pb-[5px]'>{props.title ? props.title : 'null'}</h2>
                {
                    props.stack ?
                        <div className={`${styles['stack-group']} flex flex-wrap`}>{renderStack(props.stack)}</div> : ''
                }
                {props.description_short ? <p className='pt-[10px]'>{props.description_short}</p> : null}
            </div>
        </div>
    );
};

export { Card };
