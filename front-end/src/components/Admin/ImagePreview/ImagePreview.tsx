'use client'
import styles from './ImagePreview.module.scss';

import Image from 'next/image';

import DeleteIcon from '@mui/icons-material/Delete';

import { ImageService } from '@/services/image.service';

import { useRouter } from 'next/navigation';

type Props = {
    id: number,
    src: string,
    filename: string,
}

async function ImagePreview(props: Props) {
    const router = useRouter();

    const deleteImage = () => {
        if(confirm(`Удалить этот файл?\n[${props.id}] ${props.filename}`)) {
            ImageService.delete(props.id)
                .then(() => { router.refresh(); })
        }
    };

    return (
        <div className={styles.image}>
            <button className={styles.icon} onClick={deleteImage}><DeleteIcon /></button>
            <Image src={props.src} height={500} width={500} alt='image preview' />
            <div className={styles.filename}>
                {props.filename}
            </div>
        </div>
    );
};

export { ImagePreview };
