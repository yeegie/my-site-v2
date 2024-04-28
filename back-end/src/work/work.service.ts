import { Injectable, NotFoundException } from '@nestjs/common';
import { WorkDto } from './work.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class WorkService {
    constructor(private prisma: PrismaService) { }

    async getAll() {
        return this.prisma.work.findMany({
            include: {
                image: true,
                stack: {
                    select: {
                        title: true,
                        gradient: true,
                    }
                },
                category: {
                    select: {
                        name: true,
                        plural_name: true,
                        description: true,
                    }
                }
            },
            orderBy: {
                id: 'asc',
            },
        });
    }

    async getAllAvailable() {
        return this.prisma.work.findMany({
            include: {
                image: true,
                stack: {
                    select: {
                        title: true,
                        gradient: true,
                    }
                }
            },
            orderBy: {
                id: 'asc',
            },
            where: {
                is_visible: true,
            }
        })
    }

    async getById(id: number) {
        const work = this.prisma.work.findUnique({
            where: {
                id: id,
            },
            include: {
                image: true,
                stack: {
                    select: {
                        title: true,
                        gradient: true,
                    }
                }
            },
        });

        if (!work) throw new NotFoundException(`Work[${id}] not found!`);
        return work;
    }

    async create(dto: WorkDto) {
        return this.prisma.work.create({ data: dto, });
    }

    async toggleVisible(id: number) {
        const work = await this.getById(id);
        return this.prisma.work.update({
            where: {
                id: work.id,
            },
            data: {
                is_visible: !work.is_visible,
            },
        });
    }

    async delete(id: number) {
        const work = await this.getById(id);
         return this.prisma.work.delete({
            where: {
                id: work.id,
            },
        })
    }
}
