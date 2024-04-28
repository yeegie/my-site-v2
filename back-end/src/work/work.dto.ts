import { IsString, IsOptional, IsJSON } from 'class-validator';

export class WorkDto {
    @IsString()
    title: string
    @IsOptional()
    @IsString()
    description_short: string
    @IsOptional()
    @IsString()
    description_full: string
}