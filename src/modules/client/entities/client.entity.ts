import { Aparts } from "src/modules/apart/entities/aparts.entity";
import { Purchases } from "src/modules/purchase/entities/purchase.entity";
import { Shops } from "src/modules/shop/entities/shops.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Clients {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name: string;

    @Column()
    password: string;

    @Column()
    phone: string;

    @Column()
    email: string;

    @Column()
    address: string;

    @Column()
    addressDetail: string;

    @Column()
    photo: string;

    @Column()
    dni: string;

    @ManyToOne(() => Shops, (shops) => shops.clients, {
        eager: true
    })
    @JoinColumn({ name :'shops_id' })
    shop: Shops;

    @OneToMany(() => Aparts, (apart) => apart.client)
    aparts: Aparts[];

    @OneToMany(() => Purchases, (purchase) => purchase.client)
    purchases: Purchases[];
}