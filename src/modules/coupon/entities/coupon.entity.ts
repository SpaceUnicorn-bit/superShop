import { Purchases } from 'src/modules/purchase/entities/purchase.entity';
import {Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn} from 'typeorm';

@Entity({name: "coupons"})
export class Coupon {
    @PrimaryGeneratedColumn()
    id : number;

    @Column({type:"varchar"})
    name: string;

    @Column({type:"bigint"})
    discount: number;

    @Column({type: "date"})
    expiration: Date;

    @Column({type: "tinyint"})
    status: number;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    created_at: Date;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    updated_at: Date;

    @OneToMany(() => Purchases, (purchase) => purchase.coupon)
    purchase: Purchases[];
}