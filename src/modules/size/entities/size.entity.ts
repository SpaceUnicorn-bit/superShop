import { Product } from 'src/modules/product/entities/product.entity';
import {Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Size {

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    size: string;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public created_at: Date;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public updated_at: Date;

    @ManyToMany(() => Product, product => product.sizes)
    @JoinTable({
        name: 'product_size',
        joinColumn: { name: 'size_id', referencedColumnName: 'id'},
        inverseJoinColumn: { name: 'product_id', referencedColumnName: 'id'},
    })
    products: Product[];

}