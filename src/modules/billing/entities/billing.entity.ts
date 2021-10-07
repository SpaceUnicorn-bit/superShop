import { Product } from "src/modules/product/entities/product.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Billing {
    @PrimaryGeneratedColumn()
    id : number;

    @Column({type: "bigint"})
    price: number;

    @Column({type: "varchar"})
    client: string;

    @Column({type: "varchar"})
    email: string;

    @Column({type: "varchar"})
    phone: string;

    @Column({type: "varchar"})
    address: string;

    @Column({type: "varchar"})
    addressDetail: string;

    @Column({type: "varchar"})
    status: string;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    created_at: Date;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    updated_at: Date;

    @ManyToMany(() => Product, product => product.billings, { eager: true })
    @JoinTable({
        name: 'product_billing',
        joinColumn: { name: 'billing_id', referencedColumnName: 'id'},
        inverseJoinColumn: { name: 'product_id', referencedColumnName: 'id'},
    })
    products: Product[];

}