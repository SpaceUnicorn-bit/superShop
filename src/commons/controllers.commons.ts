import {Body, Get, HttpCode, HttpStatus, Param, Post, UploadedFile, UseGuards, UseInterceptors} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { renameImage, fileFilter } from 'src/helpers/image.helper';
import { BaseService} from './service.commons';

export abstract class BaseController<T> {

    abstract getServices(): BaseService<T>;

    @Get('all')
    async findAll() : Promise<T[]>{
        return await this.getServices().findAll();
    }

    @Get('find/:id')
    async findOne(@Param('id') id) : Promise<T>{
        return await this.getServices().findOne(id);
    }

    @Get('findAllWithRelation')
    async findAllWithRelation(@Body() params) {
        return await this.getServices().findAllWithRelation(params);
    }

    @Get('getAllManyToMany/:id')
    async getAllManyToMany(@Param('id') paramsRelation) {
        return await this.getServices().getAllManyToMany(paramsRelation);
    }

    @Post('save')
    @HttpCode(HttpStatus.CREATED)
    async save(@Body() entity: T): Promise<T>{
        await this.uploadFile;
        return await this.getServices().save(entity);
    }

    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: './upload',
            filename: renameImage
        }),
        fileFilter: fileFilter
    }))
    @Post('saveFile')
    async uploadFile(
      @Body()entity: T,
      @UploadedFile() file: Express.Multer.File,
    ) {
        return await this.getServices().save(entity);
    }

    @Post('save')
    @HttpCode(HttpStatus.CREATED)
    async saveMany(@Body() entities: T[]): Promise<T[]>{
        return await this.getServices().saveMany(entities);
    }

    @Post('delete/:id')
    @HttpCode(HttpStatus.OK)
    async delete(@Param('id') id: any) {
        return this.getServices().delete(id);
    }

    @Get('count')
    async count(): Promise<number>{
        return await this.getServices().count();
    }
}