import { Product } from "src/modules/product/entities/product.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Department } from '../../department/entities/department.entity';

@Entity()
export class Gender {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    gender: string;

    @Column()
    img: string;

    @OneToMany(() => Department, (department) => department.gender)
    departments: Department[];

    @OneToMany(() => Product, (product) => product.gender)
    products: Product[];
}