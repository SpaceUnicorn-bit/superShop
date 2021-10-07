import { Product } from 'src/modules/product/entities/product.entity';
import {Column, CreateDateColumn, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Brands {
    @PrimaryGeneratedColumn()
    id : number;

    @Column({type:"varchar"})
    name: string;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    created_at: Date;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    updated_at: Date;

    
    @OneToMany(() => Product, (product) => product.gender)
    products: Product[];
}
