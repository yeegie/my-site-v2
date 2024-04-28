'use client'
import styles from './page.module.scss';

import { ImagePreview } from '@/components/Admin/ImagePreview/ImagePreview';

import { ImageService } from '@/services/image.service';
import { IImage } from '@/types';

import { UploadButton } from '@/components/Buttons/UploadButton';
import { RefreshButton } from '@/components/Buttons/RefreshButton';

import { useRouter } from 'next/navigation';

export default async function Resources() {
    const router = useRouter();
    const data = await ImageService.getAll();

    const renderImages = (data: IImage[]) => {
        return data.map((image) =>
            <ImagePreview
                key={image.id}
                id={image.id}
                src={process.env.API_URL + image.full_path}
                filename={`${image.file_name}.${image.file_extension}`}
            />)
    }

    const handleFile = (file: FileList) => {
        return ImageService.uplaod(file)
            .then(() => { router.refresh(); })
    }

    return (
        <>
            <h1>Ресурсы</h1>

            <UploadButton onChange={(file) => {handleFile(file)}} />
            <RefreshButton />

            <div className={styles.image_holder}>
                {renderImages(data)}
            </div>
        </>
    );
};
