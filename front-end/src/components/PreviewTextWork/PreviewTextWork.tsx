import style from './PreviewTextWork.module.scss';

import { GitHubButton } from '@/components/Buttons/GitHubButton';
import { OpenProjectButton } from '@/components/Buttons/OpenProjectButton';
import { PreviewStackTags } from '@/components/PreviewStackTags'

import { HomeButton } from '@/components/Buttons/HomeButton';

import { ICard } from '@/types';

import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

interface Props {
    current_work: ICard,
}

function PreviewTextWork(props: Props) {
    let slides: [] = [];

    for (let i = 0; i < props.current_work.image.length; i++) {
        slides.unshift(process.env.API_URL + props.current_work.image[i].full_path);
    }

    return (
        <div className='flex justify-center'>
            <div className={style.preview_body}>
                <div>
                    <div className={style.homepage}>
                        <HomeButton last_section='works' />
                    </div>
                    <div className={style.text_content}>
                        
                        <h1 className='font-bold text-[22pt]'>{props.current_work.title}</h1>
                        <p className='text-[15pt] text-[#a4a4a4] mt-[20px] mb-[10px]'>Технологии</p>
                        <PreviewStackTags data={props.current_work} />
                        <Markdown className='text-[15pt] mt-[20px]' remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{props.current_work.description_full}</Markdown>
                    </div>
                    <div className={style.link_button}>
                        {props.current_work.github ? <GitHubButton url={props.current_work.github}></GitHubButton> : null}
                        {props.current_work.url ? <OpenProjectButton url={props.current_work.url}></OpenProjectButton> : null}
                    </div>
                </div>
            </div>
        </div>
    );
};

export { PreviewTextWork };
