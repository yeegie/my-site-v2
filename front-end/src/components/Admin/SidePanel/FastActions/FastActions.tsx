import styles from './FastActions.module.scss';

import { ThemeButton } from '@/components/Buttons/ThemeButton';
import { SettingsButton } from '../Buttons/SettingsButton/SettingsButton';
import { LogoutButton } from '../Buttons/LogoutButton/LogoutButton';

function FastActions() {
    return (
        <div className={styles.actions_body}>
            <div className={styles.actions_holder}>
                <ThemeButton hover={false} />
                <SettingsButton />
                <LogoutButton />
            </div>
        </div>
    )
}

export { FastActions };
