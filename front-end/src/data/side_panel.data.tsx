import HomeIcon from '@mui/icons-material/Home';
import FolderIcon from '@mui/icons-material/Folder';
import StorageIcon from '@mui/icons-material/Storage';

const base = '/admin';

export const side_panel = [
    { title: 'Главная', to: base, icon: <HomeIcon /> },
    { title: 'Ресурсы', to: `${base}/resources`, icon: <FolderIcon /> },
    { title: 'База данных', to: `${base}/tables`, icon: <StorageIcon /> },
];
