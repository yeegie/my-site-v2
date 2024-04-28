'use client'
import styles from './homepage.module.scss';

import React from 'react';

import { Header } from '@/components/Header';
import { Welcome } from '@/components/Welcome/Welcome';
import { Work } from '@/components/Work';
import { Showcase } from '@/components/Showcase';
import { Footer } from '@/components/Footer';

import { WorkService } from '@/services/work.service';


export default async function Home() {
    const data = await WorkService.getAllAvailable();

    return (
        <>
            <Header />
            <Welcome />
            <main>
                <div className={styles.content_holder}>
                    {
                        process.env.config.reviews ?
                        <>
                            <div className={styles.text_block}>
                                <h1 className='text-center font-bold text-[22pt] mt-[30px] mb-[30px]'>Отзывы</h1>
                            </div>
                            <div>
                                <Showcase></Showcase>
                            </div>
                        </>
                        :
                        null
                    }
                    <div className={styles.text_block}>
                        <h1 className='text-center font-bold text-[22pt] mt-[30px] mb-[30px]' id='work'>Мои работы</h1>
                    </div>
                    <div>
                        <Work data={data}></Work>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
