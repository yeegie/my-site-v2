import 'axios';
import { instance } from '@/api/api.interceptor';
import { IImage } from '@/types';

export const ImageService = {
    async uplaod(file: FileList) {
        let body = new FormData();
        body.append('file', file[0]);

        const response = await instance({
            url: '/image/upload',
            method: 'POST',
            data: body,
            headers: { "Content-Type": "multipart/form-data" },
        });

        return response;
    },

    async getAll() {
        const response = await instance<IImage[]>({
            url: '/image',
            method: 'GET',
        });

        return response.data;
    },

    async delete(id: number) {
        const response = await instance({
            url: `/image/delete/${id}`,
            method: 'DELETE',
        })

        return response;
    },
}