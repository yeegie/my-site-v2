'use client'
import styles from './UploadButton.module.scss';

import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { ChangeEventHandler } from 'react';

type Props = {
    onChange: ChangeEventHandler,
}

function UploadButton(props: Props) {
    return (
        <>
            <input
                accept="image/*"
                style={{ display: 'none' }}
                id="raised-button-file"
                multiple
                type="file"
                onChange={(event) => props.onChange(event.target.files)}
            />
            <label htmlFor="raised-button-file">
                <Button variant="outlined" component="span" color='success' startIcon={<CloudUploadIcon />}>
                    Загрузить
                </Button>
            </label>
        </>
    );
};

export { UploadButton };
