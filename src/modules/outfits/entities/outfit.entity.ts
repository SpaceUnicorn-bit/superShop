import { Product } from 'src/modules/product/entities/product.entity';
import {Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Outfits {
    @PrimaryGeneratedColumn()
    id : number;

    @Column({type:"varchar"})
    name: string;

    @Column({type:"varchar"})
    photo: string;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    created_at: Date;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    updated_at: Date;

    @ManyToMany(() => Product, product => product.outfits, { eager: true})
    @JoinTable({
        name: 'product_outfit',
        joinColumn: { name: 'outfit_id', referencedColumnName: 'id'},
        inverseJoinColumn: { name: 'product_id', referencedColumnName: 'id'},
    })
    products: Product[];
}