import styles from './RefreshButton.module.scss';

import { useRouter } from 'next/navigation';

import IconButton from '@mui/material/IconButton';
import RefreshIcon from '@mui/icons-material/Refresh';

function RefreshButton() {
    const router = useRouter();

    return <IconButton onClick={() => router.refresh()}><RefreshIcon /></IconButton>
};

export { RefreshButton };
