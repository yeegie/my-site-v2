import { ISubmenu } from '@/types/index';

// Data for FooterList component
export const footer_data:ISubmenu[] = [
    {title: 'Биржи', childs: [
        {title: 'Kwork', href: 'https://kwork.ru/user/egor-berdovskiy', active: true},
        {title: 'Fiver', href: 'https://www.fiverr.com/egorberdovskiy', active: false},
    ]},

    {title: 'Прочее', childs: [
        {title: 'Road-map', href: '/road-map', active: true},
        {title: 'О сайте', href: '/about', active: true},
    ]}
]