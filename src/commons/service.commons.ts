import { FindManyOptions, Repository } from "typeorm";

export abstract class BaseService <T> {
    abstract getRepository(): Repository<T>;

    findAll(): Promise<T[]> {
        return this.getRepository().find();
    }

    findOne(id: string): Promise<T> {
        return this.getRepository().findOne(id);
    }

    findAllWithRelation(params) {
        return this.getRepository().createQueryBuilder(`${params.builder}`)
        .leftJoinAndSelect(`${params.selector}`, `${params.selectorSecondary}`)
        .getMany();
    }

    getAllManyToMany(paramsRelation) {
        return this.getRepository().find({relations: [`${paramsRelation}`]});
    }

    save(entity: T): Promise<T>{
        return this.getRepository().save(entity);
    }

    saveMany(entities: T[]): Promise<T[]>{
        return this.getRepository().save(entities);
    }

    async delete(id: any) {
        await this.getRepository().delete(id);
    }

    count(options?: FindManyOptions<T>): Promise<number> {
        return this.getRepository().count(options);
    }
}