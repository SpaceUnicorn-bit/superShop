import { Product } from "src/modules/product/entities/product.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Gender } from '../../gender/entities/gender.entity';

@Entity()
export class Department {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    department: string;

    @Column()
    positionDpt: string;

    @Column()
    img: string;

    @ManyToOne(() => Gender, (gender) => gender.departments, {
        eager: true
    })
    @JoinColumn({ name :'gender_id' })
    gender: Gender;

    @OneToMany(() => Product, (product) => product.department)
    products: Product[];
}