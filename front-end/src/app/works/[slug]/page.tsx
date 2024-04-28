'use client'
import { useState } from 'react';

import { HomeButton } from '@/components/Buttons/HomeButton';
import { Work } from '@/components/Work';
import { PreviewWork } from '@/components/PreviewWork';
import { PreviewTextWork } from '@/components/PreviewTextWork'

import { WorkService } from '@/services/work.service'

import { ICard } from '@/types/index';

import styles from './work_preview.module.scss';

export default async function Page({ params }: { params: { slug: string } }) {
    const data = await WorkService.getAllAvailable();
    let current_work!: ICard;

    for (let i = 0; i < data.length; i++) {
        if (data[i].id == params.slug) {
            current_work = data[i];
            data.splice(i, 1);
        }
    }

    const hasPicture = current_work.image.length > 0 ? true : false;

    return (<main>
        {hasPicture?
            <div className={styles.content_holder}>
                <div className='py-[25px]'>
                    <HomeButton last_section='works'/>
                </div>
                <div>
                    <PreviewWork current_work={current_work}></PreviewWork>
                </div>
                <div>
                    <h1 className='text-center font-bold text-[22pt] mt-[30px] mb-[30px]'>Другие работы</h1>
                </div>
                <div>
                    <Work data={data}></Work>
                </div>
            </div>
            :
            <div className={styles.content_holder}>
                <div>
                    <PreviewTextWork current_work={current_work}></PreviewTextWork> 
                </div>
                <div>
                    <h1 className='text-center font-bold text-[22pt] mt-[30px] mb-[30px]'>Другие работы</h1>
                </div>
                <div>
                    <Work data={data}></Work>
                </div>
            </div>
        }
    </main>);
};
