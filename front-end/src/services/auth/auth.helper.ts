import Cookies from 'js-cookie';
import { ITokens } from '@/types'

export const saveTokenStorage = (data: ITokens) => {
    Cookies.set('accessToken', data.accessToken)
    Cookies.set('refreshToken', data.refreshToken)
}

export const removeTokenStorage = () => {
    Cookies.remove('accessToken');
    Cookies.remove('refreshToken');
}

// export const SaveToStorage = (data: IAuthResponse) => {
//     saveTokenStorage(data);
//     localStorage.setItem('user', JSON.stringify(data.user))
// }