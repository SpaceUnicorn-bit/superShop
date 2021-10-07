import { Aparts } from "src/modules/apart/entities/aparts.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Timestamp } from "typeorm";

@Entity()
export class Admin {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    user: string;

    @Column()
    password: string;

    @Column()
    priority: boolean;

    @Column({
        nullable: false,
        default: () => 'CURRENT_TIMESTAMP',
        type: 'timestamp',
      })
    created_at: Timestamp;

    @Column({
        nullable: false,
        default: () => 'CURRENT_TIMESTAMP',
        type: 'timestamp',
    })
    updated_at: Timestamp;

    @OneToMany(() => Aparts, (apart) => apart.admin)
    aparts: Aparts[];
}