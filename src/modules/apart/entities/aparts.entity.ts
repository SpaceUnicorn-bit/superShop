import { Admin } from 'src/modules/admin/entities/admin.entity';
import { Clients } from 'src/modules/client/entities/client.entity';
import { Product } from 'src/modules/product/entities/product.entity';
import {Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Aparts {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    price: string;

    @Column()
    typeSell: string;

    @Column()
    status: string;

    @ManyToOne(() => Clients, (client) => client.aparts, {
        eager: true
    })
    @JoinColumn({ name :'clients_id' })
    client: Clients;

    @ManyToOne(() => Admin, (admin) => admin.aparts, {
        eager: true
    })
    @JoinColumn({ name :'admin_id' })
    admin: Admin;


    @ManyToMany(() => Product, { cascade: true })
    @JoinTable({
        name: 'apart_product',
        joinColumn: { name: 'apart_id', referencedColumnName: 'id'},
        inverseJoinColumn: { name: 'product_id', referencedColumnName: 'id'},
    })
    products: Product[];
}