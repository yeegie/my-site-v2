import { Controller, Get, Post, Patch, Delete, UsePipes, ValidationPipe, Body, Param } from '@nestjs/common';
import { WorkService } from './work.service';
import { WorkDto } from './work.dto';

@Controller('work')
export class WorkController {
    constructor(private readonly workService: WorkService) { }

    @Get()
    async getAll() {
        return this.workService.getAll();
    }

    @Get('available')
    async getAllAvaiable() {
        return this.workService.getAllAvailable();
    }

    @Get(':id')
    async get(@Param('id') id: string) {
        return this.workService.getById(Number(id));
    }

    @Post()
    @UsePipes(new ValidationPipe())
    async create(@Body() dto: WorkDto) {
        return this.workService.create(dto);
    }

    @Patch('toggle/:id')
    async toggleVisible(@Param('id') id: string) {
        return this.workService.toggleVisible(Number(id));
    }

    @Delete('delete/:id')
    async delete(@Param('id') id: string) {
        this.workService.delete(Number(id));
    }
}
