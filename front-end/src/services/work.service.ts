import axios from 'axios';

import { instance } from '@/api/api.interceptor';

import { IWork } from '@/types';

export const WorkService = {
    async getAll() {
        const response = await instance<IWork>({
            url: '/work',
            method: 'GET',
        })

        return response.data;
    },

    async getAllAvailable() {
        const response = await instance<IWork>({
            url: '/work/available',
            method: 'GET',
        })

        return response.data;
    },
}