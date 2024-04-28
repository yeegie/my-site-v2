import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import fs from 'fs';

@Injectable()
export class ImageService {
    constructor(private prisma: PrismaService) { }

    async create(file: Express.Multer.File) {
        const processed_path: string = `/${file.path.replace('\\', '/')}`;

        return this.prisma.image.create({
            data: {
                file_name: (file.filename.split('.'))[0],
                full_path: processed_path,
                file_extension: (file.filename.split('.'))[1]
            }
        });
    };

    async get_all() {
        return this.prisma.image.findMany();
    };

    async delete(id: number) {
        var fs = require('fs');
        const image = await this.prisma.image.findUnique({ where: { id: id } });
        fs.unlinkSync(`.${image.full_path}`);
        return this.prisma.image.delete({
            where: {
                id: image.id,
            },
        });
    };
}
