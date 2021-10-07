import { Size } from 'src/modules/size/entities/size.entity';
import {Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class Product_size {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    stock: number;

    @Column()
    product_id: number;

    @Column()
    size_id: number;

    @ManyToMany(() => Size, size => size.products, { eager: true })
    @JoinTable({
        name: 'product_size',
        joinColumn: { name: 'size_id', referencedColumnName: 'id'},
        inverseJoinColumn: { name: 'product_id', referencedColumnName: 'id'},
    })
    sizes: Size[];

    @ManyToMany(() => Product, product => product.sizes, { eager: true })
    @JoinTable({
        name: 'product_size',
        joinColumn: { name: 'product_id', referencedColumnName: 'id'},
        inverseJoinColumn: { name: 'size_id', referencedColumnName: 'id'},
    })
    products: Product[];

}