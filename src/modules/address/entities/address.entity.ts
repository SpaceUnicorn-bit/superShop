import { Purchases } from 'src/modules/purchase/entities/purchase.entity';
import {Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Addresses {
    @PrimaryGeneratedColumn()
    id : number;

    @Column({type:"varchar"})
    address: string;

    @Column({type:"varchar"})
    addressDetail: string;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    created_at: Date;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    updated_at: Date;

    /*@OneToOne(() => Purchases)
    @JoinColumn()
    purchases: Purchases;*/
}