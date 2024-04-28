import style from './PreviewStackTags.module.scss';

import { StackTag } from '@/components/Work/StackTag';
import { ICard, IStack } from '@/types';

interface Props {
    data: ICard,
}

function PreviewStackTags({ data }: Props) {
    const renderStack = (stacks: []): React.ReactNode => {
        return stacks.map((item: IStack) =>
            <>
                <StackTag
                    title={item.title}
                    gradient={item.gradient}
                />
            </>
        )
    }

    return (
        <div>
            {
                data.stack ?
                <div className={`${style['stack-group']} flex flex-wrap`}>{renderStack(data.stack)}</div> : ''
            }
        </div>
    );
};

export { PreviewStackTags };
