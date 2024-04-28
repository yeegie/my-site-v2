import styles from './FooterMenu.module.scss';

import { FooterButton } from './FooterButton';

import { ISubmenu } from '@/types/index'

import React from 'react';

type Props = {
    data: ISubmenu[]
}

function FooterList(props: Props) {
    const renderMenu = (submenu: ISubmenu[]) => {
        return submenu.map((submenu) =>
            <>
                <h2>{submenu.title}</h2>
                <ul>{submenu.childs.map((button) => <FooterButton
                    title={button.title}
                    href={button.href}
                    active={button.active} />
                )}</ul>
            </>
        )
    };

    return (
        <div>
            {renderMenu(props.data)}
        </div>
    );
};

export { FooterList };
