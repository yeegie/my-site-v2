import styles from './StackTag.module.scss';

import { IStack } from '@/types';

import { makeGradient } from '@/utils/gradient';


function StackTag(props: IStack) {
    return (
        <div className={styles.tag} style={makeGradient(props.gradient)}>
            <p>
                {props.title ? props.title : 'null'}
            </p>
        </div>
    );
};

export { StackTag };
