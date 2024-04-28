import React from "react";
import Image from 'next/image';

import styles from './Welcome.module.scss';


function Welcome() {
    return (
        <div className={styles.welcome}>
            <div className={styles.container}>
                <div id={styles['orbit-container']}>
                    <div className={styles['moon-orbit']}>
                        <Image className={styles.moon + ' ' + styles.unselectable}
                            src='/moon.png'
                            width={100}
                            height={100}
                            alt="Moon"
                            priority
                        />
                    </div>

                    <Image className={styles.earth + ' ' + styles.unselectable}
                        src='/earth.gif'
                        width={250}
                        height={250}
                        alt="Earth"
                        priority
                    />
                </div>
            </div>
        </div>
    );
};

export { Welcome };
