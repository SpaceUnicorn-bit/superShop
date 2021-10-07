import { Product } from 'src/modules/product/entities/product.entity';
import {Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import { Purchases } from './purchase.entity';

@Entity()
export class product_purchase {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    amount: number;

    @Column()
    size: number;

    @Column()
    product_id: number;

    @Column()
    purchase_id: number;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    created_at: Date;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    updated_at: Date;

    @ManyToMany(() => Product, product => product.purchases, { eager: true })
    @JoinTable({
        name: 'product_purchase',
        joinColumn: { name: 'product_id', referencedColumnName: 'id'},
        inverseJoinColumn: { name: 'purchase_id', referencedColumnName: 'id'},
    })
    products: Product[];

    @ManyToMany(() => Purchases, purchases => purchases.products)
    @JoinTable({
        name: 'product_purchase',
        joinColumn: { name: 'product_id', referencedColumnName: 'id'},
        inverseJoinColumn: { name: 'purchase_id', referencedColumnName: 'id'},
    })
    purchases: Purchases[];

}