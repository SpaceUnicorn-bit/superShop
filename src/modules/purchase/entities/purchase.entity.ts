import { Addresses } from 'src/modules/address/entities/address.entity';
import { Clients } from 'src/modules/client/entities/client.entity';
import {Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn} from 'typeorm';
import { Product } from 'src/modules/product/entities/product.entity';
import { Coupon } from 'src/modules/coupon/entities/coupon.entity';

@Entity()
export class Purchases {
    @PrimaryGeneratedColumn()
    id : number;

    @Column({type:"bigint"})
    price: number;

    @Column({ type: "bigint"})
    shipping: number;

    @Column({type:"varchar" , length:255 })
    status: string;

    @Column({type:"varchar" , length:255 })
    orderId: string;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    created_at: Date;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    updated_at: Date;

    @OneToOne(() => Addresses)
    @JoinColumn({
        name: 'addresspurchases_id',
    })
    addresses: Addresses;

    @ManyToOne(() => Clients, (client) => client.purchases, {
        eager: true
    })
    @JoinColumn({ name :'clients_id' })
    client: Clients;

    @ManyToMany(() => Product, product => product.purchases, { eager: true })
    @JoinTable({
        name: 'product_purchase',
        joinColumn: { name: 'purchase_id', referencedColumnName: 'id'},
        inverseJoinColumn: { name: 'product_id', referencedColumnName: 'id'},
    })
    products: Product[];

    @ManyToOne(() => Coupon, (coupon) => coupon.purchase, { eager: true})
    @JoinColumn({ name :'coupon_id' })
    coupon: Coupon;
}