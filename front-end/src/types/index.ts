export interface IWork {
    id: number,
    title: string,
    description_short: string,
    description_full: string,
    url: string,
    is_visible: boolean,
    image: IImage[],
    stack: IStack[],
}

export interface IImage {
    id: number,
    file_name: string,
    full_path: string,
    file_extension: string,
    workId: string,
}

export interface ICard extends Exclude<IWork, ['id', 'is_visible']> { }

export interface IImage {
    id: number,
    file_name: string,
    full_path: string,
    file_extension: string,
    work_id: string,
}

export interface IStack {
    title: string,
    gradient: IGradient,
}

export interface IGradient {
    start: string,
    middle: string,
    end: string,
}

export interface ITokens {
    accessToken: string,
    refreshToken: string,
}

export interface ISubmenu {
    title: string,
    childs: ISubmenuButton[],
}

export interface ISubmenuButton {
    title: string,
    href: string,
    active: boolean,
}

export enum Themes {
    DARK = 'dark',
    LIGHT = 'light',
}
