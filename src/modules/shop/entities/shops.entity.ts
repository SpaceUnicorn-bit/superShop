import { Clients } from "src/modules/client/entities/client.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Shops {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name: string;

    @OneToMany(() => Clients, (client) => client.shop)
    clients: Clients[];
}