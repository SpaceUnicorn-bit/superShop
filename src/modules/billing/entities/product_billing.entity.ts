import { Product } from 'src/modules/product/entities/product.entity';
import {Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import { Billing } from './billing.entity';

@Entity()
export class product_billing {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    amount: number;

    @Column()
    size: number;

    @ManyToMany(() => Product, product => product.billings)
    @JoinTable({
        name: 'product_billing',
        joinColumn: { name: 'billing_id', referencedColumnName: 'id'},
        inverseJoinColumn: { name: 'product_id', referencedColumnName: 'id'},
    })
    products: Product[];

    @ManyToMany(() => Billing, billings => billings.products)
    @JoinTable({
        name: 'product_billing',
        joinColumn: { name: 'product_id', referencedColumnName: 'id'},
        inverseJoinColumn: { name: 'billing_id', referencedColumnName: 'id'},
    })
    billings: Billing[];
}