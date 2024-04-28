import { Controller, Get, Post, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ImageService } from './image.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname, parse } from 'path';
import { v4 as uuidv4 } from 'uuid';

@Controller('image')
export class ImageController {
    constructor(private readonly imageService: ImageService) { }

    @Post('upload')
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: './uploads',
            filename: (req, file, cb) => {
                const filename: string = `${file.originalname.split('.')[0]}-${(uuidv4()).split('-')[0]}`;

                cb(null, `${filename}${extname(file.originalname)}`)
            }
        })
    }))
    uploadImage(@UploadedFile() file: Express.Multer.File) {
        return this.imageService.create(file);
    }

    @Get()
    async getAll() {
        return this.imageService.get_all();
    }

    @Delete('delete/:id')
    async delete(@Param('id') id: string) {
        return this.imageService.delete(Number(id));
    }
}
