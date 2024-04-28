import styles from './SidePanel.module.scss';

import { AdminBanner } from './AmazingBanner';
import { FastActions } from './FastActions';

import { IconButton } from './Buttons/IconButton/IconButton';

import { side_panel } from '@/data/side_panel.data';

function SidePanel() {
    return (
        <div className={styles.side_panel}>
            <AdminBanner />
            <FastActions />
            <div className={styles.menu}>
                {side_panel.map((button, index) => <div key={index} className={styles.button}><IconButton title={button.title} to={button.to} icon={button.icon} /></div>)}
            </div>
        </div>
    );
};

export { SidePanel };
